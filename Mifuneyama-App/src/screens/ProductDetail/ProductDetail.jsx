import React, { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { COLORS } from "../../themes";
import Content from "./components/Content";
import ImageAnimation from "./components/ImageAnimation";

function ProductDetail({ navigation }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const title = "Chi tiết sản phẩm";
  const id = route.params.product.id;

  const product = route.params.product;
  useEffect(() => {
    async function fetchDataProductDetail() {}
    fetchDataProductDetail();
  }, [id]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageAnimation
          animatedValue={animatedValue}
          path={product.path}
          navigation={navigation}
        />
        <Content
          animatedValue={animatedValue}
          title={title}
          product={product}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});

export default ProductDetail;
