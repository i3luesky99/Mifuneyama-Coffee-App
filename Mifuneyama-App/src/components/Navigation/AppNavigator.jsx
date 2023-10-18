import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomWelcome, Home, Welcome } from "../../screens";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Welcome"}
      >
        <Stack.Screen name="Welcome" component={BottomWelcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
