import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import Header from "../Register/components/Header";
import { TouchableOpacity } from "react-native";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../themes";
import Avatar from "../../components/Picture/Avatar";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
// import ImagePicker from "react-native-image-crop-picker";

const PersonalSetting = ({ navigation }) => {
  const [image, setImage] = useState();
  const nickNameRef = useRef();

  const size = {
    width: 90,
    height: 90,
    borderRadius: 50,
  };

  const onPickImage = () => {
    // ImagePicker.openPicker({
    //   width: 400,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then((image) => {
    //     setImage(image);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // if (error.code === 'E_PICKER_CANCELLED') {
    //     //   return;
    //     // }
    //     Alert.alert(
    //       "Photos gallery access denied",
    //       "Please change your settings to allow cult.fit to access your photos gallery",
    //       [
    //         { text: "Cancel" },
    //         {
    //           text: "Go to Settings",
    //           // onPress: () => OpenSettings.openSettings(),
    //         },
    //       ],
    //       { cancelable: false }
    //     );
    //   });
  };

  const moveToHomeScreen = () => {
    navigation.navigate("HomeTab", { screen: "Trang chủ" });
  };
  const handleSetting = async () => {
    moveToHomeScreen();
  };
  const handleCancelChangeToHome = () => {
    moveToHomeScreen();
  };

  return (
    <View style={styles.container}>
      <Header title="Cài đặt hồ sơ" />
      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Avatar setting={true} size={size} image={image} />
          <TouchableOpacity style={styles.plus} onPress={onPickImage}>
            <Text style={styles.plusMark}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerInput}>
          <Text style={styles.textHeaderInput}>Biệt danh</Text>
          <TextInput
            ref={nickNameRef}
            style={styles.input}
            placeholderTextColor={COLORS.mediumGrey}
            onChangeText={(nickName) => (nickNameRef.current.value = nickName)}
          />
        </View>
        <Text style={[styles.text, { textAlign: "center" }]}>
          Chúng tôi đánh giá cao sự kết nối và mối quan hệ tin cậy với khách
          hàng của mình.
        </Text>
        <Text style={[styles.text, { textAlign: "center" }]}>
          Nếu bạn thích, vui lòng đặt biểu tượng và biệt danh ♪ Bạn có thể thay
          đổi nó sau.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSetting}>
          <Text style={styles.buttonTextHome}>Đồng ý</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancelChangeToHome}>
          <Text style={styles.buttonCancel}>Hủy bỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalSetting;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    backgroundColor: COLORS.lightRed,
  },
  buttonCancel: {
    color: COLORS.lightRed,
    fontWeight: "500",
  },
  buttonTextHome: {
    color: COLORS.white,
    fontWeight: "500",
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    height: 600,
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
  },
  headerContent: {
    height: 90,
    width: 90,
    ...GLOBAL_STYLES.flexCenter,
  },
  headerInput: {
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  input: {
    backgroundColor: COLORS.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 45,
    textAlign: "center",
    width: "100%",
  },
  plus: {
    backgroundColor: COLORS.lightRed,
    borderRadius: 50,
    height: 35,
    position: "absolute",
    width: 35,
    ...GLOBAL_STYLES.flexCenter,
    bottom: 0,
    right: -10,
  },
  plusMark: {
    color: COLORS.white,
    fontSize: SIZES.extraLarge,
    fontWeight: "500",
  },
  text: {
    fontSize: SIZES.medium,
    fontWeight: "600",
    lineHeight: 20,
  },
  textHeaderInput: {
    color: COLORS.mediumGrey,
    fontSize: SIZES.title,
    fontWeight: "700",
    marginBottom: 10,
  },
});
