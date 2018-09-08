# EtherPubG
## Buy and Sell Weapon Skins with the Ethereum Blockchain

### Usage

1. Requires yarn, truffle, and angular

```bash
# Install yarn
sudo npm install yarn --global

# Install truffle 
yarn global add truffle 

# Install angular
yarn global add @angular/cli

# Optional, Install ganache-cli
yarn global add ganache-cli
```

2. Setup ganache, or interface with an Ethereum Testnet or Mainnet for deployment.

3. Configure `truffle-config.js` to work with the specified Ethereum net host.

4. Deploy smart contract.

5. Configure the Angular app in the `web` folder to support the correct host.

6. Run `ng serve` to start the angular app.

7. Buy and Sell PUBG Skins.

### Additional Notes

- Uses the Experimental ABI Encoder, for demonstration purposes... This is because V1 Encoder does not support returning arrays in public view functions.
- MIT Licensed :heart: