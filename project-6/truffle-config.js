const HDWalletProvider = require("@truffle/hdwallet-provider");
// const fs = require('fs');
// const mnemonic = fs.readFileSync("./secret").toString().trim();

module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*", // Match any network id
        websockets: true
      },
      rinkeby: {
        provider: () => new HDWalletProvider("", ""),
        network_id: 4,       // Rinkeby's id
        gas: 5500000,        // Rinkeby has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
    },
    compilers: {
      solc: {
        version: "^0.8.0"
      }
    }
  };