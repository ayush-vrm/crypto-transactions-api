const express = require("express");
const app = express();
const cron = require('node-cron');

const priceRoutes = require("./routes/Price");
const transactionRoutes = require('./routes/Transaction');

const database = require("./config/database");
const { storeEthereumPrice } = require("./controllers/Price")


const dotenv = require("dotenv");

dotenv.config();

//database connect
const PORT = process.env.PORT || 4000;
database.connect();
//middlewares
app.use(express.json());


app.use('/api/v1', priceRoutes);
app.use('/api/v1', transactionRoutes);

//to store etherum price in 10 mins
cron.schedule('*/10 * * * *', () => {
    storeEthereumPrice();
});


app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})