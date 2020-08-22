import React from 'react';

function Transaction({transaction, removeTransaction}) {

    function handleButtonClick() {
        removeTransaction(transaction.id);
    }

    return (

            <li className="border-r-4 shadow-sm flex justify-between p-3 my-3 relative" style={{
                borderColor:transaction.amount > 0 ? 'green': 'red'
            }}>
                {transaction.text}
                <span style={{color:transaction.amount > 0 ? 'green': 'red'}}>
                    {transaction.amount}
                </span>
                <button onClick={handleButtonClick} className="delete-btn">x</button>
            </li>

    );
}

export default Transaction;