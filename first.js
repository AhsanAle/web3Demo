const Web3 = require("web3");
const config = require("./config.json");
const account = "0xFd1a067467579E517c1Ba3a7B1D59523e776CC21";

const web3 = new Web3(config.rpcUrl);
console.log("FIRST PART");

//  Get Balance
web3.eth.getBalance(account, (err, wei) => {
  let balance = web3.utils.fromWei(wei, "ether");
  console.log("BALANCE:", balance);
});
