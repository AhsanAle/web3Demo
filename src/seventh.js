const Web3 = require("web3");
const config = require("../config.json");
const web3 = new Web3(config.rpcUrl);

web3.eth.getBlockNumber().then((block) => {
  console.log(block);
});
web3.eth.getBlock("latest").then(console.log);
