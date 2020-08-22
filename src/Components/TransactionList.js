import React from 'react';
import Transaction from "./Transaction";

function TransactionList(props) {
    return (
        <div>
            <h4 className="border-b text-xl font-bold">History</h4>
            <Transaction/>
        </div>
    );
}

export default TransactionList;