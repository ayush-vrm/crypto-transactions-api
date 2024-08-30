const express = require('express');
const {getTransactions, getTotalExpense} = require("../controllers/Transaction");

const router = express.Router();

router.get('/transactions/:address', getTransactions);
router.get('/expenses/:address', getTotalExpense);

module.exports = router;