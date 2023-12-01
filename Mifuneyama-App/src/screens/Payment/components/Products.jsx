import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../../themes";
import { formatCurrencyVND } from "../../../themes/themes";
import ImageOrders from "./ImageOrders";

function Products({ item, navigation }) {
  return (
    <View style={styles.product}>
      <View style={{ flexDirection: "row", paddingTop: 15 }}>
        <ImageOrders path={item.path} styleImg={{ width: 100, height: 100 }} />
        <View style={styles.productRight}>
          <Text style={styles.productName}>{item.category_name}</Text>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productSource}>
            {formatCurrencyVND(item.price)} x {item.quantity}
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
        </View>
      </View>
    </View>
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
    justifyContent: "space-between",
    height: 140,
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
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
    gap: 5,
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
});
export default Products;
