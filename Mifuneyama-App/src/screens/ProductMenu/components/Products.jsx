import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import ImageProduct from "./ImageProduct";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../../themes";
import {
  WINDOW_HEIGHT,
  screen_width_large,
  screen_width_medium,
  formatCurrencyVND,
} from "../../../themes/themes";

const Products = ({ navigation, arr_products_sort_by_category_id, images }) => {
  const onHandleChangToCategoryDetail = (product) => {
    navigation.navigate("ProductDetail", { product: product });
  };
  let SIZE_IMAGE = 0;
  switch (true) {
    case screen_width_medium:
      SIZE_IMAGE = 163;
      break;
    case screen_width_large:
      SIZE_IMAGE = 175;
      break;
    default:
      SIZE_IMAGE = 155;
  }
  return (
    <View style={{ flex: 1 }}>
      {arr_products_sort_by_category_id?.length > 0 ? (
        <View style={styles.products}>
          {arr_products_sort_by_category_id?.map((product, indexProducts) => (
            <View key={`${indexProducts}-products`}>
              <TouchableOpacity
                onPress={() => onHandleChangToCategoryDetail(product)}
                style={[
                  styles.product,
                  {
                    width: SIZE_IMAGE,
                    height: SIZE_IMAGE * 2.0,
                  },
                ]}
              >
                <ImageProduct
                  product={product}
                  SIZE_IMAGE={SIZE_IMAGE}
                  images={images}
                />

                <View style={{ width: "100%" }}>
                  <Text style={styles.productName}>
                    {product?.category_name}
                  </Text>
                  <Text style={styles.productSource}>{product?.name}</Text>
                  <View style={styles.weightGuild}>
                    <Text style={styles.productWeight}>{product?.kind}g</Text>
                    {product?.is_sold && (
                      <Text
                        style={[styles.productGuild, { color: COLORS.red }]}
                      >
                        HẾT HÀNG
                      </Text>
                    )}
                  </View>
                  <View
                    style={[
                      styles.productType,
                      {
                        backgroundColor:
                          product?.type === 2
                            ? COLORS.normalBrown
                            : COLORS.whiteBrown,
                      },
                    ]}
                  >
                    {product?.type === 2 ? (
                      <Text style={styles.productText}>THƯỜNG</Text>
                    ) : (
                      <Text style={styles.productText}>CAO CẤP</Text>
                    )}
                  </View>
                  <Text style={styles.productPrice}>
                    {formatCurrencyVND(product?.price)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          {arr_products_sort_by_category_id?.length % 2 !== 0 && (
            <View
              style={{
                width: SIZE_IMAGE,
                height: SIZE_IMAGE,
              }}
            />
          )}
        </View>
      ) : (
        <View style={styles.content}>
          <Text>Không có kết quả nào được tìm thấy.</Text>
        </View>
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  content: {
    height: WINDOW_HEIGHT / 2,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  product: {
    alignItems: "center",
    marginLeft: 7,
    marginRight: 7,
  },
  productGuild: {
    color: COLORS.grey,
    fontSize: SIZES.font,
    fontWeight: "600",
    width: "45%",
  },
  productName: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium + 1,
    fontWeight: "600",
    marginBottom: 5,
    width: "100%",
  },
  productPrice: {
    color: COLORS.normalBlack,
    fontSize: SIZES.extraLarge,
    fontWeight: "600",
  },
  productSource: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium + 1,
    fontWeight: "600",
    marginBottom: 5,
    width: "100%",
  },
  productText: {
    color: COLORS.white,
  },
  productType: {
    height: 20,
    width: 80,
    ...GLOBAL_STYLES.flexCenter,
    borderRadius: SIZES.base - 2,
    marginBottom: 5,
  },
  productWeight: {
    color: COLORS.grey,
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginRight: 10,
    width: "40%",
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 35,
    paddingRight: 35,
  },
  weightGuild: {
    flexDirection: "row",
    marginBottom: 5,
    width: "100%",
  },
});
