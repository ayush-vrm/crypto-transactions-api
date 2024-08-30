const Transaction = require("../models/Transaction");
const Price = require("../models/Price");
const {fetchTransactions} = require("../services/etherScan");
const expenses = require("../utils/expenses");


const getTransactions = async (req, res) => {
    try {
        const { address } = req.params;
        const transactions = await fetchTransactions(address);

        const savedTransactions = await Transaction.insertMany(transactions.map(tx => ({ ...tx, address })));

        res.status(200).json(savedTransactions,);
    } catch (err) {
        res.status(500).json({
            message: 'Server Error', 
            error: err.message 
        });
    }
};

const getTotalExpense = async (req, res) => {
    try {
        const { address } = req.params;
        const transactions = await Transaction.find({ address });

        const totalExpense = expenses(transactions);
        const latestPrice = await Price.findOne().sort({ timestamp: -1 });

        res.status(200).json({
            totalExpense,
            currentEthereumPrice: latestPrice.price
        });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = { getTransactions, getTotalExpense };