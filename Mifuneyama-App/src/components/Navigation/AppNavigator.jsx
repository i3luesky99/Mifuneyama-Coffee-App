import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomWelcome,
  ConfirmEmail,
  CreateAccount,
  CreateAccountNext,
  HomeTab,
  Login,
  NewDetail,
  ProductDetail,
  ProductMenu,
  Register,
} from "../../screens";
import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

  const configAuth = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem("userToken");
      setToken(TOKEN);
    } catch (error) {
      console.error("Error fetching token:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    configAuth();
  }, []);

  if (loading) {
    return null;
  }

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
        // initialRouteName={token ? "HomeTab" : "BottomWelcome"}
        initialRouteName={"CreateAccountNext"}
      >
        <Stack.Screen name="BottomWelcome" component={BottomWelcome} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="ProductMenu" component={ProductMenu} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="NewDetail" component={NewDetail} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="CreateAccountNext" component={CreateAccountNext} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
