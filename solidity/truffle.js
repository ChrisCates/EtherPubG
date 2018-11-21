const HDWalletProvider = require("truffle-hdwallet-provider");

// export ROPSTEN_KEY=your_mnemonic
const RopstenPrivateKey = process.env.ROPSTEN_KEY;
// export ROPSTEN_RPC=your_rpc_url (ie: infura)
const RopstenProvider = new HDWalletProvider(RopstenPrivateKey, process.env.ROPSTEN_RPC);

module.exports = {
  networks: {
    ropsten: {
      network_id: 1,
      provider: RopstenProvider
    },
    development: {
      network_id: 2,
      host: "localhost",
      port: 8545
    }
  }
};
