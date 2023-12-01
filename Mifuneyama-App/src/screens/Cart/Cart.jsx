import React, { useCallback, useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING } from "../../themes";
import Products from "./components/Products";
import { Text } from "react-native";
import {
  formatCurrencyVND,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../themes/themes";
import { useSelector } from "react-redux";
import Header from "../Register/components/Header";

function Cart({ navigation }) {
  const cart = useSelector((state) => state.cart);
  //   const cart = [
  //     {
  //       product_id: 1,
  //       category_id: 1,
  //       name: "Cafe1",
  //       category_name: "Tiệm 1",
  //       type: 1,
  //       price: "100000",
  //       kind: "100",
  //       path: require("../../../assets/images/picture/product_1.png"),
  //       created_at: "11/06/2023",
  //       quantity: 1,
  //     },
  //     {
  //       product_id: 2,
  //       category_id: 1,
  //       name: "Cafe1",
  //       category_name: "Tiệm 1",
  //       type: 1,
  //       price: "100000",
  //       kind: "100",
  //       path: require("../../../assets/images/picture/product_1.png"),
  //       created_at: "11/06/2023",
  //       quantity: 1,
  //     },
  //     {
  //       product_id: 1,
  //       category_id: 1,
  //       name: "Cafe1",
  //       category_name: "Tiệm 1",
  //       type: 1,
  //       price: "100000",
  //       kind: "100",
  //       path: require("../../../assets/images/picture/product_1.png"),
  //       created_at: "11/06/2023",
  //       quantity: 1,
  //     },
  //     {
  //       product_id: 2,
  //       category_id: 1,
  //       name: "Cafe1",
  //       category_name: "Tiệm 1",
  //       type: 1,
  //       price: "100000",
  //       kind: "100",
  //       path: require("../../../assets/images/picture/product_1.png"),
  //       created_at: "11/06/2023",
  //       quantity: 1,
  //     },
  //     {
  //       product_id: 1,
  //       category_id: 1,
  //       name: "Cafe1",
  //       category_name: "Tiệm 1",
  //       type: 1,
  //       price: "100000",
  //       kind: "100",
  //       path: require("../../../assets/images/picture/product_1.png"),
  //       created_at: "11/06/2023",
  //       quantity: 1,
  //     },
  //     {
  //       product_id: 2,
  //       category_id: 1,
  //       name: "Cafe1",
  //       category_name: "Tiệm 1",
  //       type: 1,
  //       price: "100000",
  //       kind: "100",
  //       path: require("../../../assets/images/picture/product_1.png"),
  //       created_at: "11/06/2023",
  //       quantity: 1,
  //     },
  //   ];

  const sum = (array) => {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  const totalPrice = () => {
    const totalArray = cart.map((value) => {
      return value.price * value.quantity;
    });
    return sum(totalArray);
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Header
          title={`Giỏ hàng ${cart.length > 0 ? `(${cart.length})` : ""}`}
          back={true}
          navigation={navigation}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <>
            {cart.length > 0 ? (
              <View>
                {cart?.map((item, index) => (
                  <View
                    key={index}
                    style={{ marginBottom: index === cart.length - 1 && 110 }}
                  >
                    <Products item={item} navigation={navigation} />
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.noContent}>
                <Text>Không có gì trong giỏ hàng.</Text>
              </View>
            )}
          </>
        </ScrollView>
        {totalPrice() > 0 && (
          <View style={styles.buttonContainer}>
            <View
              style={[
                styles.button,
                {
                  backgroundColor: COLORS.yellowLightest,
                },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: COLORS.lightRed, textAlign: "center", fontSize: 10 },
                ]}
              >
                Tổng thanh toán
              </Text>
              <Text
                style={[
                  styles.buttonText,
                  { color: COLORS.lightRed, textAlign: "center", fontSize: 15 },
                ]}
              >
                {formatCurrencyVND(totalPrice())}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: COLORS.lightRed }]}
              // onPress={handleBuyNow}
            >
              <Text style={styles.buttonText}>Mua hàng</Text>
            </TouchableOpacity>
          </View>
        )}
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

  list: {
    height: WINDOW_HEIGHT,
  },
  noContent: {
    height: WINDOW_HEIGHT - 110 - 80,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    elevation: 5,
    shadowColor: COLORS.lightBlack,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    backgroundColor: COLORS.white,
  },
  button: {
    // backgroundColor: COLORS.white,
    height: 50,
    width: "50%",
    ...GLOBAL_STYLES.flexCenter,
    flexDirection: "column",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});

export default Cart;
