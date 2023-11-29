import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../../themes";
import Header from "../components/Header";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Keyboard } from "react-native";
import { useRoute } from "@react-navigation/native";

function ConfirmEmail({ navigation }) {
  const [codeVerify, setCodeVerify] = useState();
  const [codeVerifyRegex, setCodeVerifyRegex] = useState(false);
  const email = useRoute()?.params?.email;
  const isChangePassword = useRoute()?.params?.isChangePassword;
  const OTPCode = "123456";

  const handleRegister = async () => {
    if (codeVerify === OTPCode) {
      // navigation.navigate("UpdateNewPassword", { auth_key: data.auth_key });
      setCodeVerifyRegex(false);
      navigation.navigate("CreateAccount", { email: email });
    } else {
      setCodeVerifyRegex(true);
    }
  };

  const resendAuthCode = async () => {};
  return (
    <View onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header title="Mã OTP" back={true} navigation={navigation} />
        <View style={styles.content}>
          <Text style={styles.title}>Vui lòng nhập OTP </Text>
          <View style={[styles.inputEmail, GLOBAL_STYLES.flexCenter]}>
            <TextInput
              value={codeVerify}
              style={styles.input}
              onChangeText={setCodeVerify}
              maxLength={6}
              // keyboardType="numeric"
            />
            {!codeVerify && (
              <Text style={styles.textInputPlaceHolder}>Mã xác thực</Text>
            )}
          </View>
          {codeVerifyRegex && (
            <Text style={styles.errorText}>Mã xác thực không chính xác.</Text>
          )}
          <TouchableOpacity onPress={resendAuthCode}>
            <Text style={styles.text}>Gửi lại mã xác minh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: codeVerify
                  ? COLORS.lightRed
                  : COLORS.mediumGrey,
              },
            ]}
            onPress={handleRegister}
            disabled={codeVerify ? false : true}
          >
            <Text style={styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.white,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
    gap: 20,
    marginTop: 20,
  },
  errorText: {
    bottom: 60,
    color: COLORS.lightRed,
    position: "absolute",
  },
  input: {
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 70,
    textAlign: "center",
    width: "100%",
    zIndex: 1,
  },
  inputEmail: {
    backgroundColor: COLORS.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 45,
    textAlign: "center",
    width: "100%",
  },
  text: {
    color: COLORS.lightRed,
    fontFamily: "NotoSansCJKjp-Regular",
    fontWeight: "500",
  },
  textInputPlaceHolder: {
    color: COLORS.mediumGrey,
    fontSize: SIZES.large,
    letterSpacing: 1,
    position: "absolute",
  },
  title: {
    fontFamily: "NotoSansCJKjp-Regular",
    fontWeight: "500",
  },
});
export default ConfirmEmail;
