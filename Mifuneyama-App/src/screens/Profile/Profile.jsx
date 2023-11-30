import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";
import { COLORS, GLOBAL_STYLES, scrollToTopFunction } from "../../themes";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../themes/themes";
import Header from "./components/Header";
import Content from "./components/Content";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useScrollToTop } from "@react-navigation/native";
import { useSelector } from "react-redux";
import CartShop from "../../components/CartShop";

function Profile({ navigation }) {
  const [imageAvatar, setImageAvatar] = useState();
  const animatedValue = useRef(new Animated.Value(0)).current;
  useScrollToTop(animatedValue);
  const userDetail = useSelector((state) => state.user);

  const fetchUserInfo = async () => {};
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <CartShop color={COLORS.lightRed} />
      <ScrollView
        ref={animatedValue}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Header
          navigation={navigation}
          imageAvatar={imageAvatar}
          setImageAvatar={setImageAvatar}
          userDetail={userDetail}
        />
        <Content navigation={navigation} userDetail={userDetail} />
        <PrivacyPolicy
          navigation={navigation}
          setImageAvatar={setImageAvatar}
          userDetail={userDetail}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: WINDOW_HEIGHT,
  },
  content: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    ...GLOBAL_STYLES.flexCenter,
  },
});

export default Profile;
