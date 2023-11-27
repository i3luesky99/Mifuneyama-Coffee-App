import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, GLOBAL_STYLES, hitSlopIcon, SIZES } from "../themes";
import LogoutIcon from "../../assets/images/svg/logout";
import ArrowIcon from "../../assets/images/svg/arrow";

function Header({
  title,
  height,
  categories,
  navigation,
  iconBack,
  iconLogOut,
}) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogOut = async () => {
    navigation.navigate("WelcomeTab");
  };

  return (
    <View style={[styles.container, height && { height: height }]}>
      {title && (
        <Text
          style={[
            styles.title,
            title === "# カテゴリが入る" && { color: COLORS.lightGray },
          ]}
        >
          {title}
        </Text>
      )}
      {iconBack && (
        <TouchableOpacity
          onPress={handleGoBack}
          hitSlop={hitSlopIcon}
          style={[styles.icon]}
        >
          <ArrowIcon fill={COLORS.primaryGray} />
        </TouchableOpacity>
      )}
      {iconLogOut && (
        <TouchableOpacity
          onPress={handleLogOut}
          hitSlop={hitSlopIcon}
          style={[styles.iconLogOut, categories && { left: 0, top: 35 }]}
        >
          <LogoutIcon fill={COLORS.primaryGray} />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.flexCenter,
    backgroundColor: COLORS.white,
  },
  icon: {
    height: 25,
    left: 10,
    position: "absolute",
    width: 40,
    zIndex: 10,
  },
  iconLogOut: {
    height: 25,
    position: "absolute",
    right: 10,
    width: 40,
    zIndex: 10,
  },
  title: {
    color: COLORS.normalBlack,
    fontSize: SIZES.large + 2,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Header;
