const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },



    rinkeby: {
      provider: () => new HDWalletProvider("my secret mneumonic phrase", 
      `https://rinkeby.infura.io/v3/41af36ea0bbf4416803f48d26e4b9f87`),
      
      network_id: 4,
    },
  },
}
