import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { useRef } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { useRoute } from "@react-navigation/native";
import { COLORS, GLOBAL_STYLES } from "../../themes";
Animated.createAnimatedComponent(TouchableOpacity);

function ProductMenu({ navigation }) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const categories = [
    {
      id: 1,
      name: "Tiệm 1",
    },
    {
      id: 2,
      name: "Tiệm 2",
    },
    {
      id: 3,
      name: "Tiệm 3",
    },
    {
      id: 4,
      name: "Tiệm 4 ",
    },
  ];
  const [categoryId, setCategoryId] = useState(1);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPage, setTotalPage] = useState();
  const route = useRoute();
  const title = route?.params;
  const [images, setImages] = useState([]);

  useEffect(() => {}, [currentPage]);

  const new_arr_product = [
    {
      id: 1,
      category_id: 1,
      name: "Cafe1",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
      path: require("../../../assets/images/picture/product_1.png"),
    },
    {
      id: 2,
      category_id: 2,
      name: "Cafe2",
      category_name: "Tiệm 2",
      type: 2,
      price: "20000",
      path: require("../../../assets/images/picture/product_2.png"),
    },
    {
      id: 11,
      category_id: 1,
      name: "Cafe1",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
      path: require("../../../assets/images/picture/product_3.png"),
    },
    {
      id: 21,
      category_id: 1,
      name: "Cafe2",
      category_name: "Tiệm 2",
      type: 2,
      price: "20000",
      path: require("../../../assets/images/picture/product_4.png"),
    },
    {
      id: 3,
      category_id: 3,
      name: "Cafe3",
      category_name: "Tiệm 3",
      type: 2,
      price: "100000",
      path: require("../../../assets/images/picture/product_2.png"),
    },
    {
      id: 4,
      category_id: 2,
      name: "Cafe4",
      category_name: "Tiệm 1",
      price: "100000",
      type: 2,
      path: require("../../../assets/images/picture/product_1.png"),
    },
    {
      id: 5,
      category_id: 3,
      name: "Cafe5",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
    },
    {
      id: 6,
      category_id: 1,
      name: "Cafe6",
      category_name: "Tiệm 1",
      price: "100000",
      type: 2,
    },
    {
      id: 7,
      category_id: 1,
      name: "Cafe7",
      category_name: "Tiệm 1",
      price: "100000",
      type: 1,
    },
    {
      id: 8,
      category_id: 1,
      name: "Cafe8",
      category_name: "Tiệm 1",
      price: "100000",
      type: 2,
    },
  ];

  //Sort by categoryID
  const arr_products_sort_by_category_id = new_arr_product.filter(
    (product) => product.category_id === categoryId
  );

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        categories={categories}
        categoriesSkeleton={true}
        animatedValue={animatedValue}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        title={title}
      />
      <ScrollView
        ref={animatedValue}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);

          if (
            isCloseToBottom(e.nativeEvent) &&
            totalPage > currentPage &&
            !loading
          ) {
            setCurrentPage((currentPage) => currentPage + 1);
          }
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.content}>
          <Products
            products={products}
            navigation={navigation}
            arr_products_sort_by_category_id={arr_products_sort_by_category_id}
            images={images}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: -30,
  },
  bottom: {
    flex: 1,
    height: 20,
    ...GLOBAL_STYLES.flexCenter,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default ProductMenu;
