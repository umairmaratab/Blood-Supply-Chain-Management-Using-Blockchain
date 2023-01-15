//require('babel-register');
//require('babel-polyfill');

module.exports = {
  networks: {
      development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)              //i have inserted this from ganache UI
      network_id: "5777",       // Any network (default: none)             // i have inserted this from ganache UI
     },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
