import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../../themes";
import moment from "moment";
import "moment/locale/ja";

moment.locale("vi");
function Content({ item }) {
  const day = moment(item?.created_at).format("DD/MM/YYYY");
  const shopName = item.name;
  const mainShop = item.main_shop;
  const time = moment(item.created_at).fromNow();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.textLeft}>Ngày mua</Text>
        <Text style={styles.textDay}>{day} </Text>
      </View>
      <View style={styles.headerRight}>
        {mainShop === 1 ? (
          <Text style={styles.textRight}>{shopName}(本店)</Text>
        ) : (
          <Text style={styles.textRight}>{shopName}</Text>
        )}
        <Text style={styles.textRight}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    ...GLOBAL_STYLES.flexRowCenterBetween,
  },
  headerLeft: {
    alignItems: "center",
    flexDirection: "row",
  },

  headerRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 12,
  },
  textDay: {
    color: COLORS.normalBlack,
    fontSize: SIZES.extraLarge + 2,
    fontWeight: "700",
  },
  textLeft: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: "600",
    marginRight: 10,
  },
  textRight: {
    color: COLORS.normalBlack,
    fontSize: SIZES.font - 1,
    fontWeight: "800",
    marginTop: 5,
  },
});

export default Content;
