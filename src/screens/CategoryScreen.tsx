import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../theme/ThemeContext";

export default function CategoryScreen() {
  const { categories, addCategory } = useContext(ExpenseContext);
  const { dark } = useContext(ThemeContext);

  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (!category.trim()) return;
    addCategory(category);
    setCategory("");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#121212" : "#f5f5f5" },
      ]}
    >
      {/* ➕ Add Category Card */}
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
          Add Category
        </Text>

        <TextInput
          placeholder="Enter category name"
          placeholderTextColor={dark ? "#888" : "#aaa"}
          value={category}
          onChangeText={setCategory}
          style={[
            styles.input,
            {
              color: dark ? "#fff" : "#000",
              borderColor: dark ? "#333" : "#ddd",
            },
          ]}
        />

        <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.btnText}>Add Category</Text>
        </TouchableOpacity>
      </View>

      {/* 📋 Category List */}
      <Text
        style={[
          styles.listTitle,
          { color: dark ? "#fff" : "#000" },
        ]}
      >
        Your Categories
      </Text>

      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              { backgroundColor: dark ? "#1e1e1e" : "#fff" },
            ]}
          >
            <Text
              style={{
                color: dark ? "#fff" : "#000",
                fontSize: 16,
              }}
            >
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  addBtn: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  item: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
});