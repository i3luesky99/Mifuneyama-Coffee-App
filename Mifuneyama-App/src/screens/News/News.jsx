import React, { useCallback, useState } from "react";
import { StyleSheet, View, ScrollView, Animated } from "react-native";
import { useRef } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { GLOBAL_STYLES } from "../../themes";
import { useScrollToTop } from "@react-navigation/native";
import { WINDOW_WIDTH } from "../../themes/themes";

function News({ navigation }) {
  const [categoryID, setCategoryID] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [categoryName, setCategoryName] = useState("お知らせ");
  useScrollToTop(animatedValue);

  const categoryList = [
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
  const news = [
    {
      id: 1,
      category_id: 1,
      title: "Tin tức 1",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
      kind: "100",
      path: require("../../../assets/images/picture/product_1.png"),
      is_sold: true,
    },
    {
      id: 2,
      category_id: 2,
      title: "Tin tức 2",
      category_name: "Tiệm 2",
      type: 2,
      price: "20000",
      kind: "100",
      path: require("../../../assets/images/picture/product_2.png"),
    },
    {
      id: 11,
      category_id: 1,
      title: "Tin tức 11",
      category_name: "Tiệm 1",
      type: 1,
      price: "100000",
      kind: "100",
      path: require("../../../assets/images/picture/product_3.png"),
    },
    {
      id: 3,
      category_id: 3,
      title: "Tin tức 3",
      category_name: "Tiệm 3",
      type: 2,
      price: "100000",
      path: require("../../../assets/images/picture/product_2.png"),
      kind: "200",
    },
    {
      id: 4,
      category_id: 2,
      title: "Tin tức 4",
      category_name: "Tiệm 2",
      price: "100000",
      type: 2,
      path: require("../../../assets/images/picture/product_1.png"),
      kind: "300",
    },
    {
      id: 5,
      category_id: 3,
      title: "Tin tức 5",
      category_name: "Tiệm 3",
      type: 1,
      price: "100000",
      kind: "500",
      is_sold: true,
    },
    {
      id: 6,
      category_id: 4,
      title: "Tin tức 6",
      category_name: "Tiệm 4",
      price: "100000",
      type: 2,
      kind: "400",
    },
    {
      id: 7,
      category_id: 4,
      title: "Tin tức 7",
      category_name: "Tiệm 4",
      price: "100000",
      type: 1,
      kind: "100",
      is_sold: true,
    },
  ];

  //Sort by categoryID
  const arr_news_sort_by_category_id = news.filter(
    (new_detail) => new_detail?.category_id === categoryID
  );

  return (
    <View style={styles.container}>
      {categoryList?.length > 0 && (
        <Header
          animatedValue={animatedValue}
          categoryID={categoryID}
          setCategoryID={setCategoryID}
          setCategoryName={setCategoryName}
          categoryList={categoryList}
        />
      )}
      <ScrollView ref={animatedValue}>
        <Content
          navigation={navigation}
          categoryName={categoryName}
          arr_news_sort_by_category_id={arr_news_sort_by_category_id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 50,
    ...GLOBAL_STYLES.flexCenter,
    width: WINDOW_WIDTH,
  },
  skeletonImage: {
    height: 1500,
    width: "100%",
  },
});

export default News;
