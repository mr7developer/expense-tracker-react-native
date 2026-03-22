import React, { useState, useContext } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseScreen() {
  const { addExpense, categories } = useContext(ExpenseContext);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!amount || isNaN(amount)) {
      Alert.alert("Error", "Please enter valid amount");
      return;
    }

    addExpense({
      id: Date.now().toString(),
      amount,
      description,
      category: categories[0].name,
      date: new Date(),
    });

    Alert.alert("Success", "Expense Added");
    setAmount("");
    setDescription("");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Expense" onPress={handleAdd} />
    </View>
  );
}