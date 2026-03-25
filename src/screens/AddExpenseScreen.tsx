import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../theme/ThemeContext";

export default function AddExpenseScreen() {
  const { addExpense, categories } = useContext(ExpenseContext);
  const { dark } = useContext(ThemeContext);

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
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#121212" : "#f5f5f5" },
      ]}
    >
      {/* 🧾 Card */}
      <View
        style={[
          styles.card,
          { backgroundColor: dark ? "#1e1e1e" : "#fff" },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: dark ? "#fff" : "#000" },
          ]}
        >
          Add Expense
        </Text>

        {/* Amount */}
        <TextInput
          placeholder="Enter Amount"
          placeholderTextColor={dark ? "#888" : "#aaa"}
          style={[
            styles.input,
            {
              color: dark ? "#fff" : "#000",
              borderColor: dark ? "#333" : "#ddd",
            },
          ]}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* Description */}
        <TextInput
          placeholder="Description"
          placeholderTextColor={dark ? "#888" : "#aaa"}
          style={[
            styles.input,
            {
              color: dark ? "#fff" : "#000",
              borderColor: dark ? "#333" : "#ddd",
            },
          ]}
          value={description}
          onChangeText={setDescription}
        />

        {/* Category */}
        <Text
          style={[
            styles.label,
            { color: dark ? "#fff" : "#000" },
          ]}
        >
          Select Category
        </Text>

        <View
          style={[
            styles.pickerContainer,
            {
              borderColor: dark ? "#333" : "#ddd",
              backgroundColor: dark ? "#121212" : "#fff",
            },
          ]}
        >
          <Picker
            selectedValue={category}
            dropdownIconColor={dark ? "#fff" : "#000"}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={{ color: dark ? "#fff" : "#000" }}
          >
            {categories.map((cat: string, index: number) => (
              <Picker.Item key={index} label={cat} value={cat} />
            ))}
          </Picker>
        </View>

        {/* Notes */}
        <TextInput
          placeholder="Additional Notes (optional)"
          placeholderTextColor={dark ? "#888" : "#aaa"}
          style={[
            styles.input,
            {
              height: 80,
              color: dark ? "#fff" : "#000",
              borderColor: dark ? "#333" : "#ddd",
            },
          ]}
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        {/* Button */}
        <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.btnText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },

  addBtn: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});