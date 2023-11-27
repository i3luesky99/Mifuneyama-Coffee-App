import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../themes";
import { Introduce, Welcome } from "../../screens";
const Tab = createMaterialTopTabNavigator();

function BottomWelcome() {
  const screens = [
    {
      id: 1,
      title: "Welcome",
      component: Welcome,
    },
    {
      id: 2,
      title: "Introduce",
      component: Introduce,
    },
  ];

  const [activeScreen, setActiveScreen] = useState();
  const introduceScreen = "Introduce";

  const handleActive = (screen) => {
    setActiveScreen(screen);
  };

  return (
    <Tab.Navigator
      initialRoute="Welcome"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { ...styles.indicator },
        tabBarStyle: {
          ...styles.tabBar,
          display: activeScreen === introduceScreen ? "none" : "flex",
        },
        tabBarPressColor: COLORS.transparent,
        tabBarIcon: true,
        swipeEnabled: activeScreen === introduceScreen ? false : true,
      }}
    >
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.title}
          component={screen.component}
          listeners={() => handleActive(screen.title)}
          options={{
            tabBarIcon: (props) => {
              return (
                <View
                  style={[
                    styles.icon,
                    {
                      backgroundColor: props.focused
                        ? COLORS.brownLightest
                        : COLORS.grey,
                    },
                  ]}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    height: 11,
    width: 11,
  },
  indicator: {
    backgroundColor: COLORS.transparent,
  },
  tabBar: {
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 20,
    elevation: 0,
    left: "38%",
    position: "absolute",
    right: "38%",
  },
});

export default BottomWelcome;
