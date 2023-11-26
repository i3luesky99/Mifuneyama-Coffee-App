import { Image, StyleSheet } from "react-native";
import React from "react";

function ImagePieces({ path, SIZE_IMAGE, imageHeight }) {
  return (
    <Image
      style={[
        styles.productImage,
        {
          height: SIZE_IMAGE || imageHeight,
          width: SIZE_IMAGE || imageHeight,
        },
      ]}
      source={path}
    />
  );
}

const styles = StyleSheet.create({
  productImage: {
    marginBottom: 11,
  },
});

export default ImagePieces;
