const axios = require('axios');

const fetchEthereumPrice = async () => {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr';
    const response = await axios.get(url);
    return response.data.ethereum.inr;
};

module.exports = { fetchEthereumPrice };
