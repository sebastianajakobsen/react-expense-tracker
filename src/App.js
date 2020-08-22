import React from 'react';

import './index.css';
import Header from "./Components/Header";
import TransactionBalance from "./Components/TransactionBalance";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import TransactionForm from "./Components/TransactionForm";

function App() {
    return (
        <div
            className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center">
            <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Header/>
                <TransactionBalance/>
                <IncomeExpense/>
                <TransactionList/>
                <TransactionForm/>
            </div>
        </div>
    );
}

export default App;
