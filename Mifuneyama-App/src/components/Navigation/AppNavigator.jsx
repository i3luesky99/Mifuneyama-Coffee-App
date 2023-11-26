import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomWelcome,
  Home,
  HomeTab,
  ProductMenu,
  Welcome,
} from "../../screens";
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
        initialRouteName={"HomeTab"}
      >
        <Stack.Screen name="WelcomeTab" component={BottomWelcome} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="ProductMenu" component={ProductMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
