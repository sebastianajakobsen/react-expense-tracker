import React from 'react';

function TransactionForm(props) {
    return (
        <div>
            <h4 className="border-b text-xl font-bold mb-3">Add new transaction</h4>
            <form>
                <label className="block text-gray-800 mb-2" htmlFor="text">
                    Text
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text" type="text" placeholder="Enter text..."/>

                <label className="block text-gray-800 mb-2" htmlFor="amount">
                    Amount
                    (negative - expense, positive - income)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount" type="number" placeholder="Enter amount..."/>

                <button
                    className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Add transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;