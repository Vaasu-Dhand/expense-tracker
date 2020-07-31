import React, { createContext, useState } from "react";

// Creating Context
export const GlobalContext = createContext();

// Context Provider
const GlobalContextProvider = (props) => {
  // Initial State Variable (For passing it down in the createContext Hook)
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]);

  // Actions
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const addTransaction = (text, amount) => {
    setTransactions([...transactions, {id: Math.random(), text: text, amount: +amount}])
  }

  return (
    <GlobalContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;