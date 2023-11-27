import React, { useCallback } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { useScrollToTop } from "@react-navigation/native";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING } from "../../themes";
import Content from "./components/Content";
import Products from "./components/Products";
import { useRef } from "react";
import { Text } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../themes/themes";

function History({ navigation }) {
  const title = "# Lịch sử mua hàng";
  const height = 110;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const orders = [
    {
      id: 1,
      category_id: 1,
      name: "Cafe1",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
      kind: "100",
      path: require("../../../assets/images/picture/product_1.png"),
      created_at: "11/06/2023",
    },
    {
      id: 2,
      category_id: 2,
      name: "Cafe2",
      category_name: "Tiệm 2",
      type: 2,
      price: "20000",
      kind: "100",
      path: require("../../../assets/images/picture/product_2.png"),
      created_at: "11/02/2023",
    },
    {
      id: 11,
      category_id: 1,
      name: "Cafe1",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
      kind: "100",
      path: require("../../../assets/images/picture/product_3.png"),
      created_at: "11/06/2023",
    },
    {
      id: 6,
      category_id: 1,
      name: "Cafe6",
      category_name: "Tiệm 1",
      price: "100000",
      type: 2,
      kind: "400",
      created_at: "11/06/2023",
    },
    {
      id: 7,
      category_id: 1,
      name: "Cafe7",
      category_name: "Tiệm 1",
      price: "100000",
      type: 1,
      kind: "100",
      is_sold: true,
      created_at: "11/06/2023",
    },
    {
      id: 8,
      category_id: 1,
      name: "Cafe8",
      category_name: "Tiệm 1",
      price: "100000",
      type: 2,
      kind: "100",
      created_at: "01/02/2022",
    },
  ];
  useScrollToTop(animatedValue);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Header title={title} height={height} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={animatedValue}
          scrollEventThrottle={16}
        >
          <>
            {orders.length > 0 ? (
              <View>
                {orders?.map((item, index) => (
                  <View
                    key={index}
                    style={[styles.content, index !== 0 && { marginTop: 20 }]}
                  >
                    <View style={{ ...SCREEN_PADDING }}>
                      <Content item={item} />
                      <Products item={item} navigation={navigation} />
                    </View>
                    <View style={styles.lineBottom} />
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.noContent}>
                <Text>結果が見つかりませんでした。</Text>
              </View>
            )}
          </>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottom: {
    height: 60,
    width: WINDOW_WIDTH,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  lineBottom: {
    borderColor: COLORS.normalGrey,
    borderWidth: 0.7,
    marginTop: 35,
  },
  list: {
    height: WINDOW_HEIGHT,
    paddingBottom: 80,
  },
  noContent: {
    height: WINDOW_HEIGHT - 110 - 80,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
});

export default History;
