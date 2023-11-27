import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ArrowIcon from "../../../../assets/images/svg/arrow";
import { COLORS, GLOBAL_STYLES, hitSlopIcon, SIZES } from "../../../themes";

function Header({ navigation, title }) {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.header]}>
      <Text style={[styles.title, , { marginTop: 20 }]}>{title}</Text>
      <TouchableOpacity
        onPress={handleGoBack}
        hitSlop={hitSlopIcon}
        style={[styles.iconHeader, { top: 35 }]}
      >
        <ArrowIcon style={styles.icon} fill={COLORS.primaryGray} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    height: 80,
    position: "absolute",
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  iconHeader: {
    height: 25,
    left: 10,
    position: "absolute",
    width: 40,
    zIndex: 10,
  },
  title: {
    color: COLORS.grey,
    fontSize: SIZES.extraLarge,
    fontWeight: "600",
  },
});
export default Header;
