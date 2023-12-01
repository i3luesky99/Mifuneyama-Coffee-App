import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { CartIcon } from "../../assets/images";
import { Text } from "react-native";
import { COLORS, GLOBAL_STYLES } from "../themes";
import { useSelector } from "react-redux";

const CartShop = (props) => {
  const { color, navigation } = props;
  const cart = useSelector((state) => state.cart);
  const handleToCartScreen = () => {
    navigation.navigate("Cart");
  };
  return (
    <TouchableOpacity style={styles.cart} onPress={handleToCartScreen}>
      {cart.length > 0 && (
        <View style={styles.numberBox}>
          <Text style={styles.number}>{cart.length}</Text>
        </View>
      )}
      <CartIcon style={styles.icon} color={color ? color : COLORS.white} />
    </TouchableOpacity>
  );
};

export default CartShop;

const styles = StyleSheet.create({
  cart: {
    zIndex: 10,
    position: "absolute",
    top: 20,
    right: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
  numberBox: {
    position: "absolute",
    top: -10,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: COLORS.lightRed,
    ...GLOBAL_STYLES.flexCenter,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  number: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "700",
  },
});
