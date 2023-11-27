import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GLOBAL_STYLES } from "../../../themes";

const Icon = (props) => {
  const { path } = props;
  const [images, setImages] = useState();
  const noImage = require("../../../../assets/images/picture/icon.png");

  const fetchImages = async () => {};

  useEffect(() => {
    path && fetchImages();
  }, [path]);

  return (
    <>
      {path ? (
        <Image style={styles.image} source={{ uri: images }} />
      ) : (
        <Image style={styles.image} source={noImage} />
      )}
    </>
  );
};

export default Icon;

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    height: "90%",
    width: "90%",
    ...GLOBAL_STYLES.flexCenter,
  },
});
