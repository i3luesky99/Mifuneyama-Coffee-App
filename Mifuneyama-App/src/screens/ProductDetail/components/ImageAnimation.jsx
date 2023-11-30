import { Image, StyleSheet } from "react-native";
import React from "react";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native";
import { COLORS, hitSlopIcon } from "../../../themes";
import { View } from "react-native";
import { CancelIcon } from "../../../../assets/images/index";
import { WINDOW_WIDTH } from "../../../themes/themes";

function ImageAnimation(props) {
  const { navigation, path, text, paths } = props;
  const noImage = require("../../../../assets/images/picture/welcome.png");

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Image
        style={{
          marginBottom: 25,
          width: WINDOW_WIDTH,
          height: WINDOW_WIDTH,
          objectFit: "cover",
        }}
        source={path ? path : noImage}
      />
      <TouchableOpacity
        onPress={handleGoBack}
        hitSlop={hitSlopIcon}
        style={[styles.iconHeader]}
      >
        <CancelIcon style={styles.icon} fill={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
  iconHeader: {
    height: 25,
    position: "absolute",
    left: 10,
    top: 45,
    width: 40,
  },
});
export default ImageAnimation;
