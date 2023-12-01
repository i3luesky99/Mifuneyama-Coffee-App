import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../../themes";
import { formatCurrencyVND } from "../../../themes/themes";
import ImageOrders from "./ImageOrders";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteCartDetail,
  increaseQuantity,
} from "../../../store/cartSlice";

function Products({ item, navigation }) {
  const onChangeToProductDetail = (item) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const dispatch = useDispatch();

  const increaseQuantityProduct = () => {
    dispatch(increaseQuantity(item));
  };

  const decreaseQuantityProduct = () => {
    dispatch(decreaseQuantity(item));
  };

  const handelDeleteProduct = (item) => {
    dispatch(deleteCartDetail(item));
  };

  return (
    <TouchableOpacity onPress={() => onChangeToProductDetail(item)}>
      <View style={styles.product}>
        <View style={{ flexDirection: "row", paddingTop: 15 }}>
          <ImageOrders path={item.path} />
          <View style={styles.productRight}>
            <Text style={styles.productName}>{item.category_name}</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productSource}>
              {formatCurrencyVND(item.price)}
            </Text>
            <View
              style={[
                styles.productType,
                {
                  backgroundColor:
                    item.type === 1 ? COLORS.normalBrown : COLORS.whiteBrown,
                },
              ]}
            >
              {item?.type === 1 ? (
                <Text style={styles.productText}>THƯỜNG</Text>
              ) : (
                <Text style={styles.productText}>CAO CẤP</Text>
              )}
            </View>
            <View style={[styles.button, { flexDirection: "row" }]}>
              <TouchableOpacity
                style={styles.buttonMathMark}
                onPress={decreaseQuantityProduct}
              >
                <Text style={styles.mathMathText}>-</Text>
              </TouchableOpacity>
              <View style={styles.number}>
                <Text style={styles.mathMathText}>{item.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonMathMark}
                onPress={increaseQuantityProduct}
              >
                <Text style={styles.mathMathText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => handelDeleteProduct(item)}
        >
          <Text style={styles.productText}>Xoá</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonDelete: {
    height: "100%",
    width: 65,
    backgroundColor: COLORS.lightRed,
    ...GLOBAL_STYLES.flexCenter,
  },
  product: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
    height: 180,
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    shadowColor: COLORS.lightBlack,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 11,
  },
  productBottom: {
    flexDirection: "row",
  },
  productGuild: {
    color: COLORS.normalBlack,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.font,
    fontWeight: "600",
  },
  productName: {
    color: COLORS.normalBlack,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  productRight: {
    marginLeft: 20,
    gap: 10,
  },
  productSource: {
    color: COLORS.normalBlack,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  productText: {
    color: COLORS.white,
    fontFamily: "NotoSansCJKjp-Regular",
  },
  productType: {
    height: 20,
    width: 70,
    ...GLOBAL_STYLES.flexCenter,
    borderRadius: SIZES.base - 2,
  },
  productWeight: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
  buttonMathMark: {
    borderWidth: 1,
    borderColor: COLORS.black,
    width: 25,
    height: 25,
    ...GLOBAL_STYLES.flexCenter,
  },
  mathMathText: {
    fontSize: 14,
    color: COLORS.lightRed,
  },
  number: {
    width: 50,
    height: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    ...GLOBAL_STYLES.flexCenter,
  },
});
export default Products;
