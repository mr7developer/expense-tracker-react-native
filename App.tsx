import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./src/navigation/AppNavigator";
import OnboardingScreen from "./src/screens/OnboardingScreen";

import { ExpenseProvider, ExpenseContext } from "./src/context/ExpenseContext";
import { ThemeProvider } from "./src/theme/ThemeContext";

// 👇 This controls navigation based on user
function Root() {
  const { user } = useContext(ExpenseContext);

  return user ? <AppNavigator /> : <OnboardingScreen />;
}

export default function App() {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ExpenseProvider>
    </ThemeProvider>
  );
}