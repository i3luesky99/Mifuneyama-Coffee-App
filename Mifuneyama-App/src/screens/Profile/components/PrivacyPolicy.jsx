import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  COLORS,
  GLOBAL_STYLES,
  ios,
  SCREEN_PADDING,
  SIZES,
} from "../../../themes";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NextIcon } from "../../../../assets/images";

function PrivacyPolicy({ navigation, setImageAvatar }) {
  const arrPrivacy = [
    { text: "Lịch sử mua hàng", icon: true },
    { text: "", icon: false },
    { text: "Điều khoản", icon: true },
    { text: "Chính sách bảo mật", icon: true },
    { text: "Mô tả giao dịch", icon: true },
  ];
  const { token } = {};
  const changeToAnotherScreen = (index) => {
    index === 0 && navigation.navigate("HomeTab", { screen: "Lịch sử" }); // History Screen
  };

  const handleLogOut = async () => {};

  const removeStoreState = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userExpired");
    await AsyncStorage.removeItem("refreshToken");
    await AsyncStorage.removeItem("userID");
    await AsyncStorage.removeItem("fcmToken");
  };
  return (
    <View style={styles.privacyPolicy}>
      {arrPrivacy.map((privacy, index) => (
        <TouchableOpacity
          key={`${index}-key`}
          style={[styles.box, index === 0 && { borderTopWidth: 1.5 }]}
          onPress={() => changeToAnotherScreen(index)}
        >
          <Text style={styles.text}>{privacy.text}</Text>
          {privacy.icon && (
            <NextIcon style={styles.iconNext} fill={COLORS.mediumGrey} />
          )}
        </TouchableOpacity>
      ))}

      <View
        style={[
          styles.bottom,
          token && {
            height: 130,
            marginTop: 40,
          },
        ]}
      >
        {token && (
          <TouchableOpacity style={styles.button} onPress={handleLogOut}>
            <Text style={styles.textButton}>ログアウト</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.textBottom}>Version {``} 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 100,
  },
  box: {
    borderBottomWidth: 1.5,
    borderColor: COLORS.normalGrey,
    height: 70,
    width: "100%",
    ...SCREEN_PADDING,
    ...GLOBAL_STYLES.flexRowCenterBetween,
  },
  button: {
    backgroundColor: COLORS.white,
    height: 40,
    ...GLOBAL_STYLES.flexCenter,
    borderColor: COLORS.lightRed,
    borderRadius: 10,
    borderWidth: 1,
    width: 250,
  },
  iconNext: {
    height: 13,
    width: 13,
  },
  privacyPolicy: {
    flex: 1,
  },
  text: {
    color: COLORS.blackest,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.font,
    letterSpacing: 2,
  },
  textBottom: {
    color: COLORS.blackest,
    fontSize: SIZES.medium,
    marginTop: 30,
  },
  textButton: {
    color: COLORS.lightRed,
    fontFamily: ios ? "NotoSansCJKjp-Regular" : "Hiragino-Gothic4",
    textAlign: "center",
  },
});

export default PrivacyPolicy;
