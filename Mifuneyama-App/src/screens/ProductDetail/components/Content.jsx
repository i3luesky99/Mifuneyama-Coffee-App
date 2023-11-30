import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  COLORS,
  ios,
  GLOBAL_STYLES,
  SCREEN_PADDING,
  SIZES,
} from "../../../themes";
import { Animated } from "react-native";
import { formatCurrencyVND } from "../../../themes/themes";

function Content({ title, product }) {
  const comments = product?.comment ? product?.comment?.split("\n") : [];

  return (
    <View style={[styles.content]}>
      <View style={styles.contentView}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.productName}>{product?.category_name}</Text>
          <Text style={styles.productSource}>{product.name}</Text>
        </View>
        <View style={styles.weightGuild}>
          <Text style={styles.productWeight}>{product?.kind}g</Text>
          {product?.is_sold && (
            <Text style={[styles.productGuild, { color: COLORS.red }]}>
              HẾT HÀNG
            </Text>
          )}
        </View>
        <View
          style={[
            styles.productType,
            {
              backgroundColor:
                product?.type === 2 ? COLORS.normalBrown : COLORS.whiteBrown,
            },
          ]}
        >
          {product?.type === 2 ? (
            <Text style={styles.productText}>THƯỜNG</Text>
          ) : (
            <Text style={styles.productText}>CAO CẤP</Text>
          )}
        </View>
      </View>
      <>
        {comments?.map((comment, index) => (
          <View key={index}>
            <Text style={styles.productDescription}>{comment}</Text>
          </View>
        ))}
      </>
      <Text style={styles.productPrice}>
        {formatCurrencyVND(product.price)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    ...SCREEN_PADDING,
  },
  contentView: {
    height: 170,
    justifyContent: "space-evenly",
  },
  productDescription: {
    color: COLORS.grey,
    fontSize: SIZES.title,
    fontWeight: "600",
    lineHeight: 25,
  },
  productGuild: {
    color: COLORS.grey,
    fontSize: SIZES.font,
    fontWeight: "600",
  },
  productName: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: "600",
    lineHeight: 20,
  },
  productPrice: {
    color: COLORS.normalBlack,
    fontSize: SIZES.extraLarge,
    fontWeight: "600",
    marginTop: 10,
  },
  productSource: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  productText: {
    color: COLORS.white,
  },
  productType: {
    height: 20,
    width: 70,
    ...GLOBAL_STYLES.flexCenter,
    backgroundColor: COLORS.normalBrown,
    borderRadius: SIZES.base - 2,
  },
  productWeight: {
    color: COLORS.grey,
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginRight: 20,
  },

  title: {
    color: COLORS.grey,
    fontSize: SIZES.extraLarge,
    fontWeight: "600",
  },
  weightGuild: {
    flexDirection: "row",
  },
});
export default Content;
