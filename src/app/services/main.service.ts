import { Injectable, ApplicationRef } from '@angular/core';

declare const require;
declare const window: any;

const AbiDecoder = require('abi-decoder');

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public web3 = null;
  public enabled = false;

  public abi = null;
  public ropstenContract = null;
  public contractInfo = null;
  public contract = null;

  public item = 0;
  public address = '';

  public network = 0;

  public defaultAddress = '0x2e339b901aB2e66884284e187c193ECACf3E88F5';
  public sendAddress = '';

  public contracts = [
    '0x...',
    '0x...',
    '0x...'
  ];

  public txs = [];

  constructor(private ref: ApplicationRef) {
    if (window.ethereum) {
      window.web3 = new window.Web3(window.ethereum);
      window.ethereum.enable()
      .then(done => {
        this.configure();
      })
      .catch(err => {
        alert('Please allow EtherPUBG access to your Metamask wallet...');
      });
    } else if (window.web3) {
      window.web3 = new window.Web3(window.web3.currentProvider);
      this.configure();
    } else {
      this.enabled = false;
    }
  }

  public configure() {
    this.abi = require('../../../solidity/build/contracts/Pubg.json');
    this.contractInfo = require('../../tx.info.json');
    this.ropstenContract = require('../../tx.info.ropsten.json');
    this.contract = window.web3.eth.contract(this.abi['abi']).at(this.contractInfo.address);
    this.contracts[0] = this.contractInfo.address;
    this.contracts[1] = this.ropstenContract.address;
    AbiDecoder.addABI(this.abi['abi']);
    this.enabled = true;
    this.web3 = window.web3;
    this.getTransactions();
  }

  public updateContract(index) {
    this.contract = window.web3.eth.contract(this.abi['abi']).at(this.contracts[index]);
    this.network = index;
    this.txs = [];
    this.getTransactions();
  }

  public getContract() {
    return this.contracts[this.network];
  }

  public sendTransaction(item) {
    this.contract.PurchaseItem(
      this.sendAddress,
      item.name,
      {
        from: this.web3.eth.accounts[0],
        value: this.web3.toWei(item.cost)
      },
      (error, tx) => {
        if (error) {
          console.error(error);
        } else {
          this.getTransaction(tx);
        }
      }
    );
  }

  public getTransaction(hash) {
    this.web3.eth.getTransaction(hash, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        const inputs = AbiDecoder.decodeMethod(result.input);
        const cost = this.web3.fromWei(result.value.toNumber());
        this.txs.push({
          blockNumber: result.blockNumber,
          address: result.from,
          inputs,
          cost
        });
        this.ref.tick();
      }
    });
  }

  public getTransactions() {
    this.contract.ItemPurchased((error, result) => {
      if (error) {
        console.error(error);
      } else {
        this.getTransaction(result.transactionHash);
      }
    });
  }

}
