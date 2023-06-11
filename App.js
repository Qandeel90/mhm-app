import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./src/Navigation/Navigation";
const App = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
