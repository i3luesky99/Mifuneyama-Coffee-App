import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  COLORS,
  GLOBAL_STYLES,
  ios,
  SCREEN_PADDING,
  SIZES,
} from "../../themes";
import { TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native";
import { LoginIcon } from "../../../assets/images";
import { saveObjectToStorage } from "../../themes/themes";

function Login({ navigation }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleLogin = async () => {
    // setLoading(true);
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      if (email !== "admin@mail.com" || password !== "123456") {
        setWarning(true);
        return;
      }
      const user = {
        id: 1,
        token: 1,
        userName: "Hieu Nguyen",
        userPoint: 10,
      };
      saveObjectToStorage("USER_DETAIL", user);
      initState();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setWarning(true);
      console.log(error);
    }
  };

  const initState = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setWarning(false);
    navigation.navigate("HomeTab", { screen: "Trang chủ" });
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.shopName}>MIFUNEYAMA</Text>
              <Text style={styles.shopName}>COFFEE</Text>
              <Text style={styles.text}>Đăng nhập</Text>
            </View>
            <View style={styles.content}>
              <TextInput
                style={styles.input}
                placeholder="Hãy điền địa chỉ email của bạn"
                placeholderTextColor={COLORS.mediumGrey}
                ref={emailRef}
                onChangeText={(email) => (emailRef.current.value = email)}
              />
              <TextInput
                style={styles.input}
                placeholder="Vui lòng nhập mật khẩu của bạn"
                placeholderTextColor={COLORS.mediumGrey}
                ref={passwordRef}
                secureTextEntry={true}
                onChangeText={(password) =>
                  (passwordRef.current.value = password)
                }
              />
              {warning && (
                <Text style={styles.warning}>
                  ※ Địa chỉ email hoặc mật khẩu của bạn không chính xác.
                </Text>
              )}
              <TouchableOpacity
                style={styles.lostPassword}
                onPress={() => navigation.navigate("PasswordChange")}
              >
                <Text style={styles.lostTextPassword}>
                  Nếu bạn quên mật khẩu, bấm vào đây →
                </Text>
              </TouchableOpacity>
              {loading && (
                <ActivityIndicator
                  style={styles.activityIndicator}
                  size="small"
                  color={COLORS.mediumGrey}
                />
              )}
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
                <LoginIcon fill={COLORS.white} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.bottomText}>
                  Bấm vào đây để đăng ký mới
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    bottom: -30,
    position: "absolute",
  },
  bottom: {
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    height: "25%",
  },
  bottomText: {
    color: COLORS.primaryBrown,
    fontSize: SIZES.font,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: COLORS.brownLightest,
    borderRadius: SIZES.extraLarge,
    height: 45,
    width: "70%",
    ...GLOBAL_STYLES.flexCenter,
  },
  buttonText: {
    color: COLORS.white,
  },
  container: {
    ...GLOBAL_STYLES.flexCenter,
    height: 800,
    width: "100%",
  },
  content: {
    height: "23%",
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
  },
  header: {
    height: "23%",
    ...GLOBAL_STYLES.flexCenter,
  },
  icon: {
    height: 20,
    position: "absolute",
    right: 20,
    width: 20,
  },
  input: {
    borderColor: COLORS.brownLightest,
    borderRadius: SIZES.base,
    borderWidth: 1,
    color: COLORS.black,
    fontSize: ios ? SIZES.title : SIZES.font,
    height: 45,
    paddingLeft: 20,
    paddingRight: 10,
    width: "100%",
  },
  lostPassword: {
    width: "80%",
  },
  lostTextPassword: {
    color: COLORS.brownLightest,
    fontSize: SIZES.title,
    fontWeight: "400",
    position: "absolute",
    right: 0,
  },
  shopName: {
    color: COLORS.black,
    fontSize: SIZES.extraLarge + 4,
    letterSpacing: 6,
    lineHeight: 45,
  },
  text: {
    bottom: 0,
    color: COLORS.primaryBrown,
    fontWeight: ios ? "400" : "600",
    position: "absolute",
  },
  warning: {
    color: COLORS.lightRed,
  },
});
export default Login;
