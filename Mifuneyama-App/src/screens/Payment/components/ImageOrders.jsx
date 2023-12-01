import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useEffect } from "react";
import { GLOBAL_STYLES } from "../../../themes";

function ImageOrders(props) {
  const { path, styleImg } = props;
  useEffect(() => {}, [path]);
  return (
    <View>
      {path ? (
        <Image style={[styles.img, styleImg]} source={path} />
      ) : (
        <Image
          style={[styles.img, styleImg]}
          source={require("../../../../assets/images/picture/noImage.jpg")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    objectFit: "cover",
  },
});
export default ImageOrders;
