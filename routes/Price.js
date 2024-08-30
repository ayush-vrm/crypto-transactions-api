const express = require('express');
const {getEthereumPrice} = require("../controllers/Price");

const router = express.Router();

router.get('/price', getEthereumPrice);

module.exports = router;