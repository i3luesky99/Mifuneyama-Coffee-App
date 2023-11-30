import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, GLOBAL_STYLES, SIZES, SCREEN_PADDING } from "../../../themes";
import Avatar from "../../../components/Picture/Avatar";
import ProfileImage from "../../../components/Picture/ProfileImage";
import { WINDOW_WIDTH } from "../../../themes/themes";

// import ImagePicker from "react-native-image-crop-picker";
// import ProfileImage from "../../../components/Picture/ProfileImage";

function Header(props) {
  const { userDetail, navigation } = props;

  const size = {
    width: 80,
    height: 80,
  };

  const fullName = userDetail ? userDetail?.userName : "Khách";
  const token = userDetail?.token;
  const imageAvatar = "";
  const handleOpenRegister = () => {
    navigation.navigate("Register");
  };

  const handleOpenLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <ProfileImage />
      <Text style={styles.name}>{fullName}</Text>
      {!token && (
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, { borderRightWidth: 2 }]}
            onPress={handleOpenRegister}
          >
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { borderLeftWidth: 2 }]}
            onPress={handleOpenLogin}
          >
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      )}
      <Avatar image={imageAvatar} size={size} profile={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonGroup: {
    backgroundColor: COLORS.lightRed,
    bottom: -70,
    height: 40,
    position: "absolute",
    right: 15,
    borderRadius: 20,
    width: 190,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  button: {
    flex: 1,
    height: 40,
    borderColor: COLORS.white,
    ...GLOBAL_STYLES.flexCenter,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "Acumin Variable Concept",
    fontSize: SIZES.title,
  },

  name: {
    bottom: -30,
    color: COLORS.blackest,
    fontFamily: "Acumin Variable Concept",
    fontSize: SIZES.large,
    left: 120,
    letterSpacing: 3,
    position: "absolute",
  },
});

export default Header;
