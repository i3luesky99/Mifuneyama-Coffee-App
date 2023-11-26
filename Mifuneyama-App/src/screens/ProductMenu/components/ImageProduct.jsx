import { StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { View } from "react-native";
import ImagePieces from "../../../components/ImagePieces";

function ImageProduct({ product, SIZE_IMAGE }) {
  return (
    <View>
      {product?.path ? (
        <ImagePieces path={product?.path} SIZE_IMAGE={SIZE_IMAGE} />
      ) : (
        <Image
          style={[
            styles.productImage,
            {
              height: SIZE_IMAGE,
              width: SIZE_IMAGE,
            },
          ]}
          source={require("../../../../assets/images/picture/noImage.jpg")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  productImage: {
    marginBottom: 10,
  },
});

export default ImageProduct;
