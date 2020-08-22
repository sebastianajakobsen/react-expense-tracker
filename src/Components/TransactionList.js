import React from 'react';
import Transaction from "./Transaction";

function TransactionList({transactions}) {
    return (
        <div>
            <h4 className="border-b text-xl font-bold">History</h4>
            <ul className="mb-16">
            {
                transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))
            }
            </ul>

        </div>
    );
}

export default TransactionList;