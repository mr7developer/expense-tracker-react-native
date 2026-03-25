import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseCard from "../components/ExpenseCard";
import { ThemeContext } from "../theme/ThemeContext";

export default function DashboardScreen() {
  const { expenses, deleteExpense, user } = useContext(ExpenseContext);
  const { dark } = useContext(ThemeContext);

  const income = Number(user?.salary) || 0;

  const totalExpense = expenses.reduce(
    (sum: number, e: any) => sum + e.amount,
    0
  );

  const savings = income - totalExpense;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#121212" : "#f5f5f5" },
      ]}
    >
      {/* 👋 Welcome Section */}
      <View style={styles.header}>
        <Text
          style={[
            styles.welcome,
            { color: dark ? "#bbb" : "#777" },
          ]}
        >
          Welcome 👋
        </Text>

        <Text
          style={[
            styles.name,
            { color: dark ? "#fff" : "#222" },
          ]}
        >
          {user?.name || "User"}
        </Text>
      </View>

      {/* 💰 Summary Cards */}
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.card,
            { backgroundColor: dark ? "#1e1e1e" : "#4CAF50" },
          ]}
        >
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.cardValue}>₹ {income}</Text>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: dark ? "#1e1e1e" : "#F44336" },
          ]}
        >
          <Text style={styles.cardTitle}>Expense</Text>
          <Text style={styles.cardValue}>₹ {totalExpense}</Text>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: dark ? "#1e1e1e" : "#2196F3" },
          ]}
        >
          <Text style={styles.cardTitle}>Savings</Text>
          <Text style={styles.cardValue}>₹ {savings}</Text>
        </View>
      </View>

      {/* 📋 Expense List */}
      <Text
        style={[
          styles.subtitle,
          { color: dark ? "#fff" : "#000" },
        ]}
      >
        Recent Expenses
      </Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseCard item={item} onDelete={deleteExpense} />
        )}
        ListEmptyComponent={
          <Text
            style={[
              styles.empty,
              { color: dark ? "#aaa" : "#777" },
            ]}
          >
            No expenses added yet
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  welcome: {
    fontSize: 18,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  card: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 14,
  },

  cardValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
  },
});