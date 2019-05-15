var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
// var mnemonic =  "entry notable caution add execute coconut cradle talk erosion pupil art aware";

// "skipDryRun: true"

var mnemonic =
  "mixture fog alert teach south fiber fruit tag random flat negative expire";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // gas:400000000000,
      // gas: 1000258612000000000,
      gas: 5555555
      // from: "0xf212bb926f7a831ff745e4236fc704a9947de77c"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "rinkeby.infura.io/v3/7ab2e27314c0439aa5093d7121e15ec7"
        );
      },
      network_id: "4" // Rinkeby ID 4
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.2", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 200
      }
      //  evmVersion: "byzantium"
      // }
    }
  }
};
