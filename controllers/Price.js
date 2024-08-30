const Price = require("../models/Price");
const {fetchEthereumPrice} = require("../services/coinGeko");

const storeEthereumPrice = async () => {
    try{
        const price = await fetchEthereumPrice();
        await Price.create({ price });
        console.log(`Price stored: ₹${price}`);
    }
    
    catch(error){
        console.error('Error storing Ethereum price:', error.message);
    }
};

const getEthereumPrice = async (req, res) => {
    try{
        const latestPrice = await Price.findOne().sort({ timestamp: -1 });
        res.status(200).json(latestPrice);
        console.log(latestPrice);
    }
    catch(error){
        console.error('Error is getethreum:', error.message);
    }
};

module.exports = {storeEthereumPrice, getEthereumPrice};
