import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import React from "react";
import { GLOBAL_STYLES } from "../../../themes";
import { WINDOW_WIDTH } from "../../../themes/themes";

function ImageNew(props) {
  const { path, index } = props;
  return (
    <View>
      {path ? (
        <Image style={styles.image} source={path} />
      ) : (
        <>
          {index % 2 !== 0 ? (
            <Image
              style={styles.image}
              source={require("../../../../assets/images/picture/no-image-gray-color.jpg")}
            />
          ) : (
            <Image
              style={styles.image}
              source={require("../../../../assets/images/picture/no-image-dark-color.jpg")}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: WINDOW_WIDTH,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
});
export default ImageNew;
