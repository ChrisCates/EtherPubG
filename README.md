# EtherPubG
## Buy and Sell Weapon Skins with the Ethereum Blockchain

### Usage

1. Requires yarn and truffle

```bash
# Install yarn
sudo npm install yarn --global

# Install truffle 
yarn global add truffle 

# Optional, Install ganache-cli
yarn global add ganache-cli
```

2. Setup ganache, or interface with an Ethereum Testnet or Mainnet for deployment.

3. Configure `truffle.js` to work with the specified Ethereum net host. You can use the default one in truffle.js currently.

4. Deploy the smart contract.

```bash
# Compile the smart contract
truffle compile

# Run migrations
truffle migrate --network=development
```

5. Run tests to see if it works:

```bash
# Test the smart contract
truffle test
```

### Additional Notes

- MIT Licensed :heart: