import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";
import { COLORS, GLOBAL_STYLES, scrollToTopFunction } from "../../themes";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../themes/themes";
import Header from "./components/Header";
import Content from "./components/Content";
// import PrivacyPolicy from "./components/PrivacyPolicy";

function Profile({ navigation }) {
  const [imageAvatar, setImageAvatar] = useState();
  const animatedValue = useRef(new Animated.Value(0)).current;

  const fetchUserInfo = async () => {};
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const saveUserInfo = (USER_DETAIL, TOKEN) => {};

  return (
    <View style={styles.container}>
      <ScrollView
        ref={animatedValue}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Header
          navigation={navigation}
          imageAvatar={imageAvatar}
          setImageAvatar={setImageAvatar}
        />
        <Content navigation={navigation} />
        {/* <PrivacyPolicy
          navigation={navigation}
          setImageAvatar={setImageAvatar}
        /> */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    ...GLOBAL_STYLES.flexCenter,
  },
});

export default Profile;
