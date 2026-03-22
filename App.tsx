import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { ExpenseProvider } from "./src/context/ExpenseContext";
import { ThemeProvider } from "./src/theme/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ExpenseProvider>
    </ThemeProvider>
  );
}