import React, { createContext, useState } from "react";

export const ExpenseContext = createContext<any>(null);

export const ExpenseProvider = ({ children }: any) => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [income, setIncome] = useState(50000);



  const addExpense = (expense: any) => {
    setExpenses(prev => [...prev, { id: Date.now().toString(), ...expense }]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        income,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};