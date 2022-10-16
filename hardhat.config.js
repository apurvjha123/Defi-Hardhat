require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv");

/** @type import('hardhat/config').HardhatUserConfig */

const url_Alchemy = process.env.urlC;
const account1 = process.env.account1;
const account2 = process.env.account2;
const account3 = process.env.account3;
module.exports = {
  networks:{
    localhost:{
      url: "http://127.0.0.1:8545/",
      chainId:31337
    },
    goerli:{
      url:url_Alchemy,
      accounts: [account1,account2,account3],
      chainId:5,
    },
    ganache:{
      url:"HTTP://127.0.0.1:7545",
      accounts:["e79dd1ef8250e5f1e50c960c4ad90316b28ad36a4411905b0cd5ba7458ac05c1","9c4dbef1ac67312673e7fc3c4302b6d712cefdebbdd87e9884f339b463d52347","6b490b6c745f40bcb88ba355959f0cff81537bf18ef7db171f80542869b59966"],
      chainId:1337
    }
  },
  solidity: "0.8.17",
};

//0x1BB871429283dEad59608C696200850f0c2da08D