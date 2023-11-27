import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  HistoryIcon,
  HomeIcon,
  NotificationIcon,
  ProfileIcon,
} from "../../../assets/images";
import { COLORS, ios, SIZES } from "../../themes";
import Home from "../../screens/Home/Home";
import { History, News, Profile } from "../../screens";

const Tab = createMaterialTopTabNavigator();

export default function HomeTab() {
  const screens = [
    {
      id: 1,
      title: "Trang chủ",
      component: Home,
      icon: <HomeIcon style={styles.icon} fill={COLORS.grey} />,
      iconFill: <HomeIcon style={styles.icon} fill={COLORS.yellow} />,
    },
    {
      id: 2,
      title: "Lịch sử",
      component: History,
      icon: <HistoryIcon style={styles.icon} fill={COLORS.grey} />,
      iconFill: <HistoryIcon style={styles.icon} fill={COLORS.yellow} />,
    },
    {
      id: 3,
      title: "Thông báo",
      component: News,
      icon: <NotificationIcon style={styles.icon} fill={COLORS.grey} />,
      iconFill: <NotificationIcon style={styles.icon} fill={COLORS.yellow} />,
    },
    {
      id: 4,
      title: "Hồ sơ",
      component: Profile,
      icon: <ProfileIcon style={styles.icon} fill={COLORS.grey} />,
      iconFill: <ProfileIcon style={styles.icon} fill={COLORS.yellow} />,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="ホーム"
      tabBarPosition="bottom"
      screenOptions={{
        headerShown: false,
        tabBarIndicatorStyle: { ...styles.indicator },
        tabBarPressColor: "transparent",
        tabBarStyle: {
          ...styles.tabBar,
        },
      }}
    >
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.title}
          component={screen.component}
          options={{
            tabBarLabel: (props) => {
              return (
                <Text
                  style={{
                    color: props.focused ? COLORS.yellowLight : COLORS.grey,
                    fontFamily: "ZuumeSoft-Light",
                  }}
                >
                  {props.children}
                </Text>
              );
            },

            tabBarIcon: (props) => {
              return (
                <View>{props.focused ? screen.iconFill : screen.icon}</View>
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
    height: SIZES.iconHeight,
    marginTop: 0,
    width: SIZES.iconWidth,
  },
  indicator: {
    backgroundColor: COLORS.transparent,
  },
  labelBar: {
    fontSize: SIZES.base + 3,
    marginTop: 5,
  },
  tabBar: {
    backgroundColor: COLORS.lightBrown,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 10,
    elevation: 0,
    height: 80,
    left: 0,
    marginBottom: -15,
    position: "absolute",
    right: 0,
  },
});
