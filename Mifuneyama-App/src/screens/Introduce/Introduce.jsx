import React from "react";
import { TouchableOpacity } from "react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../themes";

function Introduce({ navigation }) {
  const handleChangeToHome = () => {
    navigation.navigate("HomeTab");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/picture/welcome.png")}
      />
      <View style={styles.content}>
        <Text style={styles.text}>MIFUNEYAMA</Text>
        <Text style={styles.text}>COFFEE</Text>
        <TouchableOpacity
          style={[styles.bottomButton, { backgroundColor: COLORS.lightRed }]}
          onPress={handleChangeToHome()}
        >
          <Text style={styles.buttonText}>Trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomButton: {
    height: 40,
    ...GLOBAL_STYLES.flexCenter,
    borderRadius: 18,
    bottom: 0,
    position: "absolute",
    width: 90,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    ...GLOBAL_STYLES.flexCenter,
  },
  content: {
    ...GLOBAL_STYLES.flexCenter,
    marginTop: "-40%",
    width: "100%",
    ...SCREEN_PADDING,
    height: "100%",
  },
  image: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text: {
    color: COLORS.blackest,
    fontFamily: "ZuumeSoft-LightItalic",
    fontSize: SIZES.huge + 10,
    letterSpacing: 10,
    lineHeight: 70,
  },
});

export default Introduce;
