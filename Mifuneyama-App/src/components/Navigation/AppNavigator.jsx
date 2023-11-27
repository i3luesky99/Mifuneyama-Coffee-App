import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomWelcome,
  HomeTab,
  NewDetail,
  ProductDetail,
  ProductMenu,
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
        <Stack.Screen name="BottomWelcome" component={BottomWelcome} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="ProductMenu" component={ProductMenu} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="NewDetail" component={NewDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
