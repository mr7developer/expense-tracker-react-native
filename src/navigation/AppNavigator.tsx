import React, { useContext, useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import OnboardingScreen from "../screens/OnboardingScreen";
import DrawerNavigator from "./DrawerNavigator";
import { ExpenseContext } from "../context/ExpenseContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useContext(ExpenseContext);
  const [loading, setLoading] = useState(true);

  // wait for AsyncStorage to load
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // small delay to ensure context loads
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
}