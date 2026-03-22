import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseCard from "../components/ExpenseCard";

export default function DashboardScreen() {
  const { expenses, income, deleteExpense } = useContext(ExpenseContext);

  const totalExpense = expenses.reduce(
    (sum: number, e: any) => sum + e.amount,
    0
  );

  const savings = income - totalExpense;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.summary}>
        <Text>Income: ₹ {income}</Text>
        <Text>Expense: ₹ {totalExpense}</Text>
        <Text>Savings: ₹ {savings}</Text>
      </View>

      <Text style={styles.subtitle}>Recent Expenses</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseCard item={item} onDelete={deleteExpense} />
        )}
        ListEmptyComponent={<Text>No expenses added yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { marginTop: 20, fontSize: 18 },
  summary: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
});