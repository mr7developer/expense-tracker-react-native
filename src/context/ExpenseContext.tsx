import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export const ExpenseContext = createContext<any>(null);

export const ExpenseProvider = ({ children }: any) => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  // ✅ Global Categories

  useEffect(() => {
    loadData();
  }, []);

const loadData = async () => {
  try {
    const storedUser = await AsyncStorage.getItem("user");
    const storedCategories = await AsyncStorage.getItem("categories");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      const storedExpenses = await AsyncStorage.getItem(
        `expenses_${parsedUser.name}`
      );

      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      } else {
        setExpenses([]); // ✅ fresh for new user
      }
    }

    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  } catch (error) {
    console.log("Error loading data", error);
  }
};

useEffect(() => {
  if (user) {
    AsyncStorage.setItem(
      `expenses_${user.name}`,
      JSON.stringify(expenses)
    );
  }
}, [expenses, user]);

  useEffect(() => {
    AsyncStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const [categories, setCategories] = useState<string[]>([
    "Food",
    "Grocery",
    "Medical",
    "Travel",
    "Shopping",
    "Bills",
    "Entertainment",
    "Other",
  ]);

const addExpense = (expense: any) => {
  setExpenses((prev: any[]) => [
    ...prev,
    { ...expense, id: Date.now().toString() }, // ✅ ADD ID
  ]);
};

  const addCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

const deleteExpense = (id: string) => {
  setExpenses((prev: any[]) => prev.filter((item) => item.id !== id));
};

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        categories,
        addCategory,
        user,
        setUser,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};