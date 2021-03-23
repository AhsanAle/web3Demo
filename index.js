const Web3 = require("web3");

const rpcUrl = "https://ropsten.infura.io/v3/68d671068abe4705bf8af8874836729a";
const account = "0xFd1a067467579E517c1Ba3a7B1D59523e776CC21";

const web3 = new Web3(rpcUrl);

web3.eth.getBalance(account, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log("BALANCE:", balance);
});
