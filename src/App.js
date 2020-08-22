import React, {useState} from 'react';

import './index.css';
import Header from "./Components/Header";
import TransactionBalance from "./Components/TransactionBalance";
import TransactionIncomeExpense from "./Components/TransactionIncomeExpense";
import TransactionList from "./Components/TransactionList";
import TransactionForm from "./Components/TransactionForm";

function App() {

    const [transactions, setTransaction] = useState([
        {
            id:1,
            text:'wages',
            amount:3000
        },
        {
            id:2,
            text:'bills',
            amount:-2000
        },
        {
            id:3,
            text:'clothes',
            amount:-500
        },
    ])

    return (
        <div
            className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center">
            <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Header/>
                <TransactionBalance transactions={transactions}/>
                <TransactionIncomeExpense/>
                <TransactionList transactions={transactions}/>
                <TransactionForm/>
            </div>
        </div>
    );
}

export default App;
