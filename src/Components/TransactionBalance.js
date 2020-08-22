import React from 'react';

function TransactionBalance({transactions}) {

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const sign = total > 0 ? '$': '-$';

    return (
        <div>
            <h3 className="uppercase font-medium text-lg">
                YOUR BALANCE
            </h3>
            <h1 className="text-3xl font-bold leading-none">
                {sign}{total}
            </h1>
        </div>
    );
}

export default TransactionBalance;