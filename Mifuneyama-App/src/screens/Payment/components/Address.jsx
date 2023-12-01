import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LocationIcon } from "../../../../assets/images";
import { COLORS } from "../../../themes";

const Address = () => {
  return (
    <View style={styles.address}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <LocationIcon fill={COLORS.lightRed} style={styles.icon} />
        <Text>Địa chỉ nhận hàng</Text>
      </View>
      <Text>Số điện thoại : 0906624069</Text>
      <Text>Đường số 17, phường 11, quận Gò Vấp, TP.Hồ Chí Minh</Text>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: -25,
  },
  address: {
    padding: 30,
    gap: 10,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
  },
});
