const Web3 = require("web3");
const config = require("../config.json");
const Tx = require("ethereumjs-tx").Transaction;
const dotenv = require("dotenv");
const path = require("path");
const web3 = new Web3(config.rpcUrl);

const account1 = "0xFd1a067467579E517c1Ba3a7B1D59523e776CC21";
const account2 = "0xa5886E14065DC57C6784dcd58d79223f5138C5F3";

/**
 * Load environment variables from .env file, where Private keys are configured.
 */
dotenv.config({
  path: path.resolve(".env"),
});

if (process.env.PRIVATE_KEY_1) {
  const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, "hex");
  //   const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2);
  //   console.log("privateKey1:", privateKey1);

  web3.eth.getTransactionCount(account1, (err, txCount) => {
    // console.log("txCount:", txCount);
    if (err) console.log("Error:", err);

    const txObject = {
      nonce: web3.utils.toHex(txCount),
      to: account2,
      value: web3.utils.toHex(web3.utils.toWei("0.2", "ether")),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    };

    const tx = new Tx(txObject, { chain: "ropsten" });
    tx.sign(privateKey1);
    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      if (err) console.log("Error:", err);
      else console.log("TxnHash:", txHash);
    });
  });
} else {
  console.log("Please add private keys in .env file");
}
