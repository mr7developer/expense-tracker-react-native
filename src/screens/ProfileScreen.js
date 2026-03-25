import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../theme/ThemeContext";

export default function ProfileScreen({ navigation }: any) {
  const { user, setUser } = useContext(ExpenseContext);
  const { dark, setDark } = useContext(ThemeContext);

  const [salary, setSalary] = useState(
    user?.salary?.toString() || ""
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  const updateIncome = async () => {
    const updatedUser = {
      ...user,
      salary: Number(salary),
    };

    await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#121212" : "#f5f5f5" },
      ]}
    >
      {/* 👤 Profile Card */}
      <View
        style={[
          styles.card,
          { backgroundColor: dark ? "#1e1e1e" : "#fff" },
        ]}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.image}
        />

        <Text
          style={[
            styles.name,
            { color: dark ? "#fff" : "#222" },
          ]}
        >
          {user?.name || "User"}
        </Text>

        <Text style={{ color: dark ? "#aaa" : "#777" }}>
          Monthly Income: ₹ {user?.salary}
        </Text>
      </View>

      {/* 💰 Update Income */}
      <View
        style={[
          styles.section,
          { backgroundColor: dark ? "#1e1e1e" : "#fff" },
        ]}
      >
        <Text
          style={[
            styles.label,
            { color: dark ? "#fff" : "#000" },
          ]}
        >
          Update Income
        </Text>

        <TextInput
          placeholder="Enter new income"
          placeholderTextColor={dark ? "#888" : "#aaa"}
          value={salary}
          onChangeText={setSalary}
          keyboardType="numeric"
          style={[
            styles.input,
            {
              color: dark ? "#fff" : "#000",
              borderColor: dark ? "#333" : "#ddd",
            },
          ]}
        />

        <TouchableOpacity style={styles.primaryBtn} onPress={updateIncome}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* 🌙 Dark Mode */}
      <View
        style={[
          styles.sectionRow,
          { backgroundColor: dark ? "#1e1e1e" : "#fff" },
        ]}
      >
        <Text style={{ color: dark ? "#fff" : "#000", fontSize: 16 }}>
          Dark Mode
        </Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>

      {/* 🚪 Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 20,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  section: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },

  sectionRow: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  primaryBtn: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  logoutBtn: {
    backgroundColor: "#F44336",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});