const Web3 = require("web3");
const config = require("../config.json");
const web3 = new Web3(config.rpcUrl);

web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, "ether"));
});

console.log("sha3", web3.utils.sha3("PIAIC Q3"));
console.log("keccak256", web3.utils.keccak256("PIAIC Q3"));
console.log("Random Hex", web3.utils.randomHex(32));

const _ = web3.utils._;
_.each({ key1: "value1", key2: "value2" }, (value, key) => {
  console.log(value);
  console.log(key);
});
