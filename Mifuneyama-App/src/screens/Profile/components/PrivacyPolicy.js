import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  colors,
  globalStyles,
  ios,
  screenPadding,
  SIZES,
} from "../../../themes";
import { NextIcon } from "../../../assets/images/svg";
import { TouchableOpacity } from "react-native";
import { LogoutApi } from "../../../apis/auth";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PrivacyPolicy({ navigation, setImageAvatar }) {
  const arrPrivacy = [
    { text: "購入履歷", icon: true },
    { text: "", icon: false },
    { text: "利用規約", icon: true },
    { text: "プライバシーポリシー", icon: true },
    { text: "特定商取引法に基づく表記", icon: true },
  ];
  const { token } = useSelector((user) => user.user);
  const dispatch = useDispatch();
  const changeToAnotherScreen = (index) => {
    index === 0 && navigation.navigate("HomeTab", { screen: "購入履歴" }); // History Screen
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
            <NextIcon style={styles.iconNext} fill={colors.mediumGrey} />
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
    borderColor: colors.normalGrey,
    height: 70,
    width: "100%",
    ...screenPadding,
    ...globalStyles.flexRowCenterBetween,
  },
  button: {
    backgroundColor: colors.white,
    height: 40,
    ...globalStyles.flexCenter,
    borderColor: colors.lightRed,
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
    color: colors.blackest,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.font,
    letterSpacing: 2,
  },
  textBottom: {
    color: colors.blackest,
    fontSize: SIZES.medium,
    marginTop: 30,
  },
  textButton: {
    color: colors.lightRed,
    fontFamily: ios ? "NotoSansCJKjp-Regular" : "Hiragino-Gothic4",
    textAlign: "center",
  },
});

export default PrivacyPolicy;
