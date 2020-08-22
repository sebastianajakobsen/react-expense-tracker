import React from 'react';

function TransactionIncomeExpense(props) {
    return (
        <div className="flex mt-3 justify-between text-center w-full max-w-xs bg-gray-100 shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="border-r w-full">
                <h4 className="font-medium">INCOME</h4>
                <p className="font-medium  text-lg text-green-600">$0.00</p>
            </div>
            <div className="w-full">
                <h4 className="font-medium">EXPENSE</h4>
                <p className="font-medium text-lg text-red-600">$0.00</p>
            </div>
        </div>
    );
}

export default TransactionIncomeExpense;