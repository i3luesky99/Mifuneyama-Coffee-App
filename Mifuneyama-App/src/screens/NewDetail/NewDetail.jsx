import React, { useEffect, useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { useRef } from "react";
import Content from "./component/Content";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../themes";
import Header from "../../components/Header";
import ImageAnimation from "../ProductDetail/components/ImageAnimation";

function NewDetail({ navigation }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const id = route.params.new_detail.id;
  const newDetail = route.params.new_detail;

  useEffect(() => {}, [id]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageAnimation
          animatedValue={animatedValue}
          path={newDetail.path}
          navigation={navigation}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ flex: 1 }}
        >
          <Content newDetail={newDetail} animatedValue={animatedValue} />
        </ScrollView>
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

export default NewDetail;
