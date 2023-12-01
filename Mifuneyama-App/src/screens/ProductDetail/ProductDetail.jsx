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
import {
  addCartDetail,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import moment from "moment";
import {
  addProductDetail,
  increaseQuantityProductBuy,
  decreaseQuantityProductBuy,
} from "../../store/productSlice";

function ProductDetail({ navigation }) {
  const animatedValue = useState(new Animated.Value(0))[0];
  const route = useRoute();
  const title = "Chi tiết sản phẩm";
  const cart = useSelector((state) => state.cart);
  const productBuying = useSelector((state) => state.productBuying);
  const isHistory = route.params?.isHistory;
  const product = route.params.product;
  const dispatch = useDispatch();

  const { is_sold, id } = product;

  const quantityProductCart = cart.find(
    (item) => item.product_id === product.product_id
  )?.quantity;

  const quantityProductBuying = productBuying.find(
    (item) => item.product_id === product.product_id
  )?.quantity;

  const day = moment(product?.created_at).format("DD/MM/YYYY");

  useEffect(() => {
    async function fetchDataProductDetail() {
      // Thêm logic để fetch dữ liệu chi tiết sản phẩm nếu cần
    }
    fetchDataProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    dispatch(addCartDetail(newProduct));
  };

  const increaseQuantityProduct = () => {
    dispatch(increaseQuantity(product));
  };

  const decreaseQuantityProduct = () => {
    dispatch(decreaseQuantity(product));
  };

  const increaseQuantityProductBuying = () => {
    dispatch(increaseQuantityProductBuy(product));
  };

  const decreaseQuantityProductBuying = () => {
    dispatch(decreaseQuantityProductBuy(product));
  };

  const handleBuyNow = () => {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    dispatch(addProductDetail(newProduct));
  };

  const handleToProductDetail = () => {
    navigation.navigate("ProductDetail", { product: product });
  };

  const handleToPaymentScreen = () => {
    navigation.navigate("Payment");
  };

  return (
    <View style={styles.container}>
      <CartShop color={COLORS.lightRed} navigation={navigation} />
      <ImageAnimation
        animatedValue={animatedValue}
        path={product.path}
        navigation={navigation}
      />
      <Content animatedValue={animatedValue} title={title} product={product} />
      {!is_sold && (
        <View style={styles.buttonContainer}>
          <View
            style={[
              styles.button,
              {
                flexDirection: "row",
                backgroundColor: COLORS.yellowLightest,
                width: isHistory && "70%",
              },
            ]}
          >
            {!isHistory ? (
              <>
                {quantityProductCart > 0 && (
                  <>
                    <Animatable.View
                      style={styles.button}
                      animation={
                        quantityProductCart > 0 ? "slideInLeft" : undefined
                      }
                      duration={500}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <TouchableOpacity
                          style={styles.buttonMathMark}
                          onPress={decreaseQuantityProduct}
                        >
                          <Text style={styles.mathMathText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.number}>
                          <Text style={styles.mathMathText}>
                            {quantityProductCart}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.buttonMathMark}
                          onPress={increaseQuantityProduct}
                        >
                          <Text style={styles.mathMathText}>+</Text>
                        </TouchableOpacity>
                      </View>
                      <Text
                        style={[
                          styles.buttonText,
                          {
                            color: COLORS.lightRed,
                            textAlign: "center",
                            fontSize: 10,
                            marginBottom: 3,
                          },
                        ]}
                      >
                        Số lượng
                      </Text>
                    </Animatable.View>
                    <Animatable.View
                      style={{
                        borderWidth: 1,
                        height: 30,
                        borderColor: COLORS.black,
                      }}
                      animation={
                        quantityProductCart > 0 ? "slideInDown" : undefined
                      }
                      duration={500}
                    />
                  </>
                )}
                <TouchableOpacity
                  style={[styles.button, { paddingLeft: 5, paddingRight: 5 }]}
                  onPress={handleAddToCart}
                >
                  <CartIcon style={styles.icon} color={COLORS.lightRed} />
                  <Text
                    style={[
                      styles.buttonText,
                      {
                        color: COLORS.lightRed,
                        textAlign: "center",
                        fontSize: 10,
                      },
                    ]}
                  >
                    Thêm vào giỏ hàng
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text>Đơn hàng đã mua vào ngày {day} </Text>
            )}
          </View>
          {isHistory ? (
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: COLORS.lightRed, width: isHistory && "30%" },
              ]}
              onPress={handleToProductDetail}
            >
              <Text style={styles.buttonText}>Mua lại</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.button,
                {
                  flexDirection: "row",
                  backgroundColor: COLORS.lightRed,
                },
              ]}
            >
              {quantityProductBuying > 0 ? (
                <>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      { backgroundColor: COLORS.lightRed },
                    ]}
                    onPress={handleToPaymentScreen}
                  >
                    <Text style={styles.buttonText}>Đặt ngay</Text>
                  </TouchableOpacity>
                  <Animatable.View
                    style={{
                      borderWidth: 1,
                      height: 30,
                      borderColor: COLORS.white,
                    }}
                    animation={
                      quantityProductBuying > 0 ? "slideInDown" : undefined
                    }
                    duration={500}
                  />
                  <Animatable.View
                    style={styles.button}
                    animation={
                      quantityProductBuying > 0 ? "slideInRight" : undefined
                    }
                    duration={500}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={[
                          styles.buttonMathMark,
                          { borderColor: COLORS.white },
                        ]}
                        onPress={decreaseQuantityProductBuying}
                      >
                        <Text
                          style={[styles.mathMathText, { color: COLORS.white }]}
                        >
                          -
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={[styles.number, { borderColor: COLORS.white }]}
                      >
                        <Text
                          style={[styles.mathMathText, { color: COLORS.white }]}
                        >
                          {quantityProductBuying}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.buttonMathMark,
                          { borderColor: COLORS.white },
                        ]}
                        onPress={increaseQuantityProductBuying}
                      >
                        <Text
                          style={[styles.mathMathText, { color: COLORS.white }]}
                        >
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={[
                        styles.buttonText,
                        {
                          color: COLORS.white,
                          textAlign: "center",
                          fontSize: 10,
                          marginTop: 3,
                        },
                      ]}
                    >
                      Số lượng
                    </Text>
                  </Animatable.View>
                </>
              ) : (
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: COLORS.lightRed }]}
                  onPress={handleBuyNow}
                >
                  <Text style={styles.buttonText}>Mua hàng</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  icon: { width: 40, height: 24 },
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
    height: 50,
    width: "50%",
    ...GLOBAL_STYLES.flexCenter,
    flexDirection: "column",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  buttonMathMark: {
    borderWidth: 1,
    borderColor: COLORS.black,
    width: 30,
    ...GLOBAL_STYLES.flexCenter,
  },
  mathMathText: {
    fontSize: 14,
    color: COLORS.lightRed,
  },
  number: {
    width: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    ...GLOBAL_STYLES.flexCenter,
  },
});

export default ProductDetail;
