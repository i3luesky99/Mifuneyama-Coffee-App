import {
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS, SCREEN_PADDING, SIZES } from "../../themes";
import { Animated } from "react-native";
import { WINDOW_WIDTH } from "../../themes/themes";
import moment from "moment/moment";
import "moment-timezone";
import Content from "./components/Content";
import BottomDrawer from "./components/BottomDrawer";
import CartShop from "../../components/CartShop";

export default function Home({ navigation }) {
  const HEADER_HEIGHT = 420; //Header
  const HEIGHT_CONTENT = 400; //Content
  const DOWN = 245; //Bottom
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const greetingOpacity = new Animated.Value(0);

  let greetingText = "Chào buổi sáng";

  switch (true) {
    case hours >= 10 && hours < 18:
      greetingText = "Xin chào";
      break;
    case hours >= 18 && hours < 24:
      greetingText = "Buổi tối vui vẻ";
      break;
    default:
      greetingText;
  }

  const handleOpacityText = () => {
    Animated.timing(greetingOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  useEffect(() => {
    handleOpacityText();
  }, []);

  return (
    <View style={styles.container}>
      <CartShop />
      <ScrollView
        style={{ ...SCREEN_PADDING }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { height: HEADER_HEIGHT }]}>
          <Text style={styles.shopName}>MIFUNEYAMA COFFEE</Text>
          <Image
            source={require("../../../assets/images/picture/background.jpg")}
            style={{
              height: HEADER_HEIGHT,
              width: WINDOW_WIDTH,
              position: "absolute",
            }}
          />
          <Animated.View
            style={[styles.bottomShopName, { opacity: greetingOpacity }]}
          >
            <Text style={styles.greeting}>{greetingText} bạn Hieu </Text>
          </Animated.View>
        </View>
        <Content HEIGHT_CONTENT={HEIGHT_CONTENT} navigation={navigation} />
      </ScrollView>
      <BottomDrawer
        DOWN={DOWN}
        navigation={navigation}
        shopID={1}
        latitude={1}
        longitude={1}
        mainShop={1}
        shopInfo={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bottomShopName: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    bottom: 20,
    height: 40,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  greeting: {
    color: COLORS.blackest,
    fontFamily: "SourceSansPro-Regular",
    fontSize: SIZES.medium,
    marginLeft: 30,
  },
  header: {
    alignItems: "center",
  },
  shopName: {
    color: COLORS.white,
    fontFamily: "SourceSansPro-Regular",
    fontSize: SIZES.medium,
    fontWeight: "300",
    letterSpacing: 2,
    lineHeight: 30,
    marginTop: 35,
    zIndex: 10,
  },
});
