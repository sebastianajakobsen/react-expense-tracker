import React from 'react';

function TransactionIncomeExpense({transactions}) {

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="flex mt-3 justify-between text-center w-full max-w-xs bg-gray-100 shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="border-r w-full">
                <h4 className="font-medium">INCOME</h4>
                <p className="font-medium  text-lg text-green-600">${income}</p>
            </div>
            <div className="w-full">
                <h4 className="font-medium">EXPENSE</h4>
                <p className="font-medium text-lg text-red-600">-${Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default TransactionIncomeExpense;