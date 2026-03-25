import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { ExpenseContext } from "../context/ExpenseContext";
import AppLogo from "../components/AppLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnboardingScreen({ navigation }: any) {
  const { setUser } = useContext(ExpenseContext);

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

const handleContinue = async () => {
  if (!name || !salary) {
    Alert.alert("Error", "Please enter name and salary");
    return;
  }

  const newUser = {
    name,
    salary: Number(salary),
  };

  await AsyncStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);

};

  return (
    <View style={styles.container}>
      <AppLogo />

      <Text style={styles.title}>Let's Get Started</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Enter monthly salary"
        style={styles.input}
        keyboardType="numeric"
        value={salary}
        onChangeText={setSalary}
      />

      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },
});