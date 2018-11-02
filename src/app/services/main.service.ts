import { Injectable, ApplicationRef } from '@angular/core';

declare var require;
declare var web3;

const AbiDecoder = require('abi-decoder');

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public abi = require('../../../solidity/build/contracts/Pubg.json');
  public contractInfo = require('../../tx.info.json');
  public contract = web3.eth.contract(this.abi['abi']).at(this.contractInfo.address);

  public item = 0;
  public address = '';

  public network = 0;

  public defaultAddress = '0x2e339b901aB2e66884284e187c193ECACf3E88F5';
  public sendAddress = '';

  public contracts = [
    this.contractInfo.address,
    '0x...',
    '0x...'
  ];

  public txs = [];

  constructor(private ref: ApplicationRef) {
    AbiDecoder.addABI(this.abi['abi']);
  }

  public getContract() {
    return this.contracts[this.network];
  }

  public sendTransaction(item) {
    this.contract.PurchaseItem(
      this.sendAddress,
      item.name,
      {
        from: web3.eth.accounts[0],
        value: web3.toWei(item.cost)
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
    web3.eth.getTransaction(hash, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log('tx', result);
        const inputs = AbiDecoder.decodeMethod(result.input);
        const cost = web3.fromWei(result.value.toNumber());
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
