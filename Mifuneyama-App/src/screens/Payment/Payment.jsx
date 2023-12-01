import React, { useCallback, useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING } from "../../themes";
import Products from "./components/Products";
import { Text } from "react-native";
import {
  formatCurrencyVND,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../themes/themes";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Register/components/Header";
import Address from "./components/Address";
import { destroyProduct } from "../../store/productSlice";
import { destroyCart } from "../../store/cartSlice";

function Payment({ navigation }) {
  const cart = useSelector((state) => state.productBuying);
  const dispatch = useDispatch();
  // console.log(cart);
  // const cart = [
  //   {
  //     product_id: 1,
  //     category_id: 1,
  //     name: "Cafe1",
  //     category_name: "Tiệm 1",
  //     type: 1,
  //     price: "100000",
  //     kind: "100",
  //     path: require("../../../assets/images/picture/product_1.png"),
  //     created_at: "11/06/2023",
  //     quantity: 1,
  //   },
  //   {
  //     product_id: 2,
  //     category_id: 1,
  //     name: "Cafe1",
  //     category_name: "Tiệm 1",
  //     type: 1,
  //     price: "100000",
  //     kind: "100",
  //     path: require("../../../assets/images/picture/product_1.png"),
  //     created_at: "11/06/2023",
  //     quantity: 1,
  //   },
  //   {
  //     product_id: 1,
  //     category_id: 1,
  //     name: "Cafe1",
  //     category_name: "Tiệm 1",
  //     type: 1,
  //     price: "100000",
  //     kind: "100",
  //     path: require("../../../assets/images/picture/product_1.png"),
  //     created_at: "11/06/2023",
  //     quantity: 1,
  //   },
  //   {
  //     product_id: 2,
  //     category_id: 1,
  //     name: "Cafe1",
  //     category_name: "Tiệm 1",
  //     type: 1,
  //     price: "100000",
  //     kind: "100",
  //     path: require("../../../assets/images/picture/product_1.png"),
  //     created_at: "11/06/2023",
  //     quantity: 1,
  //   },
  //   {
  //     product_id: 1,
  //     category_id: 1,
  //     name: "Cafe1",
  //     category_name: "Tiệm 1",
  //     type: 1,
  //     price: "100000",
  //     kind: "100",
  //     path: require("../../../assets/images/picture/product_1.png"),
  //     created_at: "11/06/2023",
  //     quantity: 1,
  //   },
  //   {
  //     product_id: 2,
  //     category_id: 1,
  //     name: "Cafe1",
  //     category_name: "Tiệm 1",
  //     type: 1,
  //     price: "100000",
  //     kind: "100",
  //     path: require("../../../assets/images/picture/product_1.png"),
  //     created_at: "11/06/2023",
  //     quantity: 1,
  //   },
  // ];
  const shipFee = 30000;
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

  const handleNextToConfirm = () => {
    navigation.navigate("ConfirmPayment");
    dispatch(destroyCart());
    dispatch(destroyProduct());
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Header title="Thanh toán" back={true} navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <Address />
          <View
            style={{
              height: 400,
              borderBottomColor: COLORS.grey,
              borderBottomWidth: 1,
              paddingTop: 20,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 20,
            }}
          >
            <Text style={{ marginBottom: 10 }}>Các sản phẩm</Text>
            <ScrollView>
              {cart?.map((item, index) => (
                <View key={index}>
                  <Products item={item} navigation={navigation} />
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.grey,
              borderBottomWidth: 1,
              paddingTop: 20,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{`Tổng số tiền (${cart.length} sản phẩm):`}</Text>
            <Text
              style={[
                styles.buttonText,
                { color: COLORS.lightRed, textAlign: "center", fontSize: 15 },
              ]}
            >
              {formatCurrencyVND(totalPrice())}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.grey,
              borderBottomWidth: 1,
              paddingTop: 20,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Phương thức thanh toán</Text>
            <Text>Thanh toán khi nhận hàng</Text>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.grey,
              borderBottomWidth: 1,
              paddingTop: 20,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 120,
            }}
          >
            <View style={{ width: "50%", gap: 10 }}>
              <Text>Chi tiết thanh toán</Text>
              <Text>Tổng tiền hàng</Text>
              <Text>Tổng chi phí vận chuyển</Text>
              <Text style={{ fontSize: 18 }}>Tổng thanh toán</Text>
            </View>
            <View style={{ gap: 17 }}>
              <Text></Text>
              <Text style={{ textAlign: "right" }}>
                {formatCurrencyVND(totalPrice())}
              </Text>
              <Text style={{ textAlign: "right" }}>
                {formatCurrencyVND(shipFee)}
              </Text>
              <Text
                style={[
                  styles.buttonText,
                  { color: COLORS.lightRed, textAlign: "right", fontSize: 15 },
                ]}
              >
                {formatCurrencyVND(totalPrice() + shipFee)}
              </Text>
            </View>
          </View>
        </ScrollView>
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
              {formatCurrencyVND(totalPrice() + shipFee)}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.lightRed }]}
            onPress={handleNextToConfirm}
          >
            <Text style={styles.buttonText}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
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

export default Payment;
