# crypto-transactions-api
This Node.js server-side application is a comprehensive tool for Ethereum transaction management. It seamlessly integrates with Etherscan and CoinGecko APIs to fetch and store transaction data and real-time Ethereum prices.

Key Features:

Transaction Data Retrieval: Fetches and stores Ethereum transactions for a specified user address using the Etherscan API.

Price Tracking: Periodically updates and stores the current Ethereum price from the CoinGecko API.

Expense Calculation: Accurately calculates total expenses based on gas usage and transaction history.

API Endpoint: Provides an accessible API endpoint for users to retrieve their transaction expenses and the latest Ethereum price.

Data Persistence: Utilizes MongoDB to efficiently store and manage transaction and price data.

Tech Stack: Node.js, Express.js, MongoDB, Etherscan API, CoinGecko API

### Prerequisites
- Node.js (v20.15.1)
- MongoDB Atlas
- Render (or any preferred cloud platform)
- Git

### Testing the Deployment
- Use Postman to test the API endpoints:

  - **Get Transactions**: `https://crypto-transactions-api-1.onrender.com/api/v1/transactions/{address}`
  - **Get Total Expenses**: `https://crypto-transactions-api-1.onrender.com/api/v1/expenses/{address}`
