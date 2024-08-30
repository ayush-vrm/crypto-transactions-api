const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    blockNumber: String,
    timeStamp: String,
    blockHash: String,
    transactionIndex: String,
    from: String,
    to: String,
    value: String,
    gas: String,
    gasPrice: String,
    input: String,
    methodId: String,
    functionName: String,
    contractAddress: String,
    cumulativeGasUsed: String,
    txreceipt_status: String,
    gasUsed: String,
    confirmations: String,
    isError: String,
    address: String, // Address of the user
});

module.exports = mongoose.model('Transaction', transactionSchema);
