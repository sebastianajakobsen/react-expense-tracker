import React from 'react';

function Transaction({transaction, removeTransaction}) {

    const sign = transaction.amount > 0 ? '$': '-$';

    function handleButtonClick() {
        removeTransaction(transaction.id);
    }

    return (

            <li className="border-r-4 shadow-sm flex justify-between p-3 my-3 relative" style={{
                borderColor:transaction.amount > 0 ? 'green': 'red'
            }}>
                {transaction.text}
                <span style={{color:transaction.amount > 0 ? 'green': 'red'}}>
                    {sign}{Math.abs(transaction.amount)}
                </span>
                <button onClick={handleButtonClick} className="delete-btn">x</button>
            </li>

    );
}

export default Transaction;