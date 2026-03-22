import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ExpenseCard({ item, onDelete }: any) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.amount}>₹ {item.amount}</Text>
        <Text>{item.description}</Text>
        <Text>Category: {item.category}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: { fontSize: 18, fontWeight: "bold" },
  date: { fontSize: 12, color: "gray" },
  delete: { color: "red", fontWeight: "bold" },
});