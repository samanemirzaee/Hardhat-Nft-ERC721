require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    mumbai:{
      url:"https://rpc-mumbai.maticvigil.com",
      accounts :["2fe99a7afdc350aa35690c4acf459bc1d96df2347d5f34dbfbc5bfb51a94e8ad"]  
    }
  }
};
