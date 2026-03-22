import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ExpenseContext } from "../context/ExpenseContext";

export default function AddExpenseScreen() {
  const { addExpense } = useContext(ExpenseContext);

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [notes, setNotes] = useState("");

  const handleAdd = () => {
    if (!amount || !description) {
      Alert.alert("Error", "Please fill required fields");
      return;
    }

    addExpense({
      amount: Number(amount),
      description,
      category,
      notes,
      date: new Date().toLocaleDateString(),
    });

    setAmount("");
    setDescription("");
    setNotes("");

    Alert.alert("Success", "Expense Added!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>

      {/* Amount */}
      <TextInput
        placeholder="Enter Amount"
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Description */}
      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      {/* Category Dropdown */}
      <Text style={styles.label}>Select Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Food 🍔" value="Food" />
          <Picker.Item label="Grocery 🛒" value="Grocery" />
          <Picker.Item label="Medical 💊" value="Medical" />
          <Picker.Item label="Travel 🚗" value="Travel" />
          <Picker.Item label="Shopping 🛍️" value="Shopping" />
          <Picker.Item label="Bills 💡" value="Bills" />
          <Picker.Item label="Entertainment 🎬" value="Entertainment" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      {/* Notes */}
      <TextInput
        placeholder="Additional Notes (optional)"
        style={[styles.input, { height: 80 }]}
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Button title="Add Expense" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
  },
});