import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../../themes";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

function CreateAccountNext({ navigation }) {
  const email = useRoute()?.params?.email || "";
  const password = useRoute()?.params?.password || "";

  const gifPath = require("../../../../assets/images/gif/celebration.gif");

  const handleChangeToPersonalSetting = () => {
    navigation.navigate("PersonalSetting");
  };
  const handleChangeToHome = () => {
    navigation.navigate("HomeTab", { screen: "Trang chủ" });
  };
  let size = 13;

  const title = {
    fontWeight: "600",
    letterSpacing: 2,
    lineHeight: 20,
    fontSize: size,
    color: COLORS.blackest,
  };

  useEffect(() => {
    async function Login() {
      try {
        const { data } = await LoginApi(email, password);
      } catch (error) {
        console.log(error);
      }
    }
    Login();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Tạo tài khoản" />
      <View style={styles.content}>
        <View style={styles.gifBox}>
          <Text style={[title, { fontSize: SIZES.large }]}>
            Đăng ký đã hoàn tất
          </Text>
          <Image source={gifPath} style={styles.gifPicture} />
          <View>
            <Text style={title}>
              Tài khoản này cũng có thể được sử dụng cho dịch vụ đặt hàng trước
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleChangeToPersonalSetting}
          >
            <Text style={styles.buttonText}>Thiết lập hồ sơ cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={handleChangeToHome}
          >
            <Text style={styles.buttonTextHome}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    height: 140,
  },
  button: {
    borderRadius: 20,
    height: 45,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    backgroundColor: COLORS.lightRed,
  },
  buttonHome: {
    borderRadius: 20,
    height: 45,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    backgroundColor: COLORS.mediumGrey,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "500",
  },
  buttonTextHome: {
    fontWeight: "500",
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    height: 550,
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
  },
  gifBox: {
    ...GLOBAL_STYLES.flexCenter,
    height: "40%",
    width: "100%",
  },
  gifPicture: {
    height: 200,
    width: 200,
  },
});
export default CreateAccountNext;
