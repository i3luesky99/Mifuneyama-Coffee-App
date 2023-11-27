import React, { useEffect, useRef } from "react";
import { Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../../themes";
import Avatar from "../../../components/Picture/Avatar";
import ProfileImage from "../../../components/Picture/ProfileImage";
// import ImagePicker from "react-native-image-crop-picker";
// import ProfileImage from "../../../components/Picture/ProfileImage";

function Header({ imageAvatar, setImageAvatar }) {
  const { user, token } = {};
  const refRBSheet = useRef();
  const size = {
    width: 80,
    height: 80,
  };
  const fullName = user?.first_name
    ? user?.last_name + " " + user?.first_name
    : "Khách";

  const customerName = user?.nick_name || fullName;

  useEffect(() => {}, []);

  const handleOpenPopUpRegister = () => {};

  const onPickImage = () => {
    // ImagePicker.openPicker({
    //   width: 400,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then((image) => {
    //     setImageAvatar(image);
    //     updateAvatar(image, "avatar");
    //   })
    //   .catch((error) => {
    //     if (error.code !== "E_PICKER_CANCELLED") {
    //       refRBSheet.current.close();
    //     } else {
    //       return;
    //     }
    //   });
  };

  return (
    <View>
      <ProfileImage />
      <Text style={styles.name}>{customerName}</Text>
      {!token && (
        <TouchableOpacity
          style={styles.button}
          onPress={handleOpenPopUpRegister}
        >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      )}
      <Avatar
        image={imageAvatar}
        onPickImage={onPickImage}
        size={size}
        profile={true}
        refRBSheet={refRBSheet}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.lightRed,
    bottom: -70,
    height: 40,
    position: "absolute",
    right: 15,
    ...GLOBAL_STYLES.flexCenter,
    borderRadius: 20,
    width: 120,
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
