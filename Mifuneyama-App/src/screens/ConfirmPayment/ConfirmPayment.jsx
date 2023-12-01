import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../themes";
import Header from "../Register/components/Header";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

function CreateAccountNext({ navigation }) {
  const gifPath = require("../../../assets/images/gif/celebration.gif");

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

  return (
    <View style={styles.container}>
      <Header title="Thanh toán" />
      <View style={styles.content}>
        <View style={styles.gifBox}>
          <Text style={[title, { fontSize: SIZES.large }]}>
            Đặt hàng thành công
          </Text>
          <Image source={gifPath} style={styles.gifPicture} />
        </View>
        <View style={styles.bottom}>
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
    flex: 1,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    ...SCREEN_PADDING,
  },
  gifBox: {
    ...GLOBAL_STYLES.flexCenter,
    width: "100%",
  },
  gifPicture: {
    height: 200,
    width: 200,
  },
});
export default CreateAccountNext;
