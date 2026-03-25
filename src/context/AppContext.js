import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    { name: "Food" },
    { name: "Travel" },
    { name: "Medical" }
  ]);

  const addCategory = (newCategory) => {
    setCategories(prev => [...prev, { name: newCategory }]);
  };

  return (
    <AppContext.Provider value={{ categories, addCategory }}>
      {children}
    </AppContext.Provider>
  );
};