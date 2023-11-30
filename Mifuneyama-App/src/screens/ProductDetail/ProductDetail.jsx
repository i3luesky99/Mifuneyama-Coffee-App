import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { COLORS, GLOBAL_STYLES } from "../../themes";
import Content from "./components/Content";
import ImageAnimation from "./components/ImageAnimation";
import { CartIcon } from "../../../assets/images";
import CartShop from "../../components/CartShop";
import { setCartDetail } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetail({ navigation }) {
  const animatedValue = useState(new Animated.Value(0))[0];
  const route = useRoute();
  const title = "Chi tiết sản phẩm";
  const id = route.params.product.id;

  const product = route.params.product;
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDataProductDetail() {
      // Thêm logic để fetch dữ liệu chi tiết sản phẩm nếu cần
    }
    fetchDataProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    // console.log(product);
    // Xử lý khi nút "Thêm vào giỏ hàng" được nhấn
    dispatch(setCartDetail(product));

    console.log("Thêm vào giỏ hàng");
  };

  const handleBuyNow = () => {
    // Xử lý khi nút "Mua hàng" được nhấn
    console.log("Mua hàng");
  };

  return (
    <View style={styles.container}>
      <CartShop color={COLORS.lightRed} />
      <ImageAnimation
        animatedValue={animatedValue}
        path={product.path}
        navigation={navigation}
      />
      <Content animatedValue={animatedValue} title={title} product={product} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderRightWidth: 2,
              borderColor: COLORS.lightBlack,
            },
          ]}
          onPress={handleAddToCart}
        >
          <CartIcon style={styles.icon} color={COLORS.lightRed} />
          <Text style={[styles.buttonText, { color: COLORS.lightRed }]}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.lightRed }]}
          onPress={handleBuyNow}
        >
          <Text style={styles.buttonText}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  icon: { width: 40, height: 40 },
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
  },
  button: {
    backgroundColor: COLORS.white,
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

export default ProductDetail;
