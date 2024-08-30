const calculateExpense = (transactions) => {
    let totalExpense = 0;
    const mod = 1e18

    transactions.forEach(transaction => {
        const gasUsed = Number(transaction.gasUsed);
        const gasPrice = Number(transaction.gasPrice);
        totalExpense += (gasUsed * gasPrice) / mod;
    });

    return totalExpense;
};

module.exports = calculateExpense;