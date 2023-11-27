import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../../themes";
import { formatCurrencyVND } from "../../../themes/themes";
import ImageOrders from "./ImageOrders";
function Products({ item, navigation }) {
  const onChangeToProductDetail = (id) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  return (
    <TouchableOpacity onPress={() => onChangeToProductDetail(item.id)}>
      <View style={styles.product}>
        <ImageOrders path={item.path} />
        <View style={styles.productRight}>
          <View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productSource}>
              {formatCurrencyVND(item.price)}
            </Text>
          </View>
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
              <Text style={styles.productText}> CAO CẤP </Text>
            )}
          </View>
          <View style={styles.productBottom}>
            <Text style={styles.productWeight}>{item.item_kind}</Text>
            <Text style={styles.productGuild}>{item.guild}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },

  product: {
    flexDirection: "row",
    marginTop: 25,
  },
  productBottom: {
    flexDirection: "row",
    marginTop: 13,
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
    marginTop: 10,
  },
  productWeight: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginRight: 20,
  },
});
export default Products;
