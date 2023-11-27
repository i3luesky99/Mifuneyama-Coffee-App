import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../../themes";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
// import HistoryPopup from "./HistoryPopup";
import { WarningIcon } from "../../../../assets/images";

function Content({ navigation }) {
  const { user } = {};
  const userPoint = user?.point || 0;
  const handleChangeToCoupon = () => {
    navigation.navigate("Coupon");
  };
  const refRBSheet = useRef();
  const openPopupHistory = () => {
    refRBSheet.current.open();
  };
  return (
    <View style={styles.content}>
      <View style={styles.viewText}>
        <Text style={styles.beanPointBText}>B</Text>
        <Text style={styles.beanPointText}> Điểm đạt được</Text>
      </View>
      <View style={styles.boxPoint}>
        <Text style={styles.boxText}>ĐIỂM</Text>
        <Text style={styles.boxPointText}>{userPoint}</Text>
        <Text style={styles.boxUnit}>Bt</Text>
      </View>
      <View style={styles.bottom}>
        {user && (
          <TouchableOpacity
            onPress={handleChangeToCoupon}
            style={styles.boxCoupon}
          >
            <View style={styles.boxCouponTop}>
              <Text style={styles.textCouponTop}>クーポンコードは</Text>
              <Text style={styles.textCouponTop}>ここから追加できます。</Text>
            </View>
            <View style={styles.boxCouponGift}>
              <Image
                style={styles.gift}
                source={require("../../../../assets/images/picture/gift.png")}
              />
              <Text style={styles.textCouponGift}>クーポン</Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.bottomMiddleContent}
          disabled={user ? false : true}
          onPress={openPopupHistory}
        >
          <WarningIcon
            style={styles.iconInformation}
            fill={user ? COLORS.lightRed : COLORS.grey}
          />
          <Text
            style={[
              styles.bottomMiddleContentText,
              { color: user ? COLORS.lightRed : COLORS.grey },
            ]}
          >
            Xem lịch sử điểm
          </Text>
        </TouchableOpacity>
      </View>
      {/* <HistoryPopup refRBSheet={refRBSheet} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  beanPointBText: {
    color: COLORS.blackest,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.large + 2,
    fontWeight: "500",
  },
  beanPointText: {
    color: COLORS.blackest,
    fontSize: SIZES.medium,
    fontWeight: "500",
    alignItems: "center",
  },
  bottom: {
    height: 220,
  },
  bottomMiddleContent: {
    flexDirection: "row",
    position: "absolute",
    right: 20,
    top: 15,
  },
  bottomMiddleContentText: {
    fontFamily: "NotoSansCJKjp-Regular",
    fontWeight: "600",
    letterSpacing: 2,
    marginLeft: 8,
    marginTop: 5,
  },
  boxCoupon: {
    backgroundColor: COLORS.yellowLightest,
    borderRadius: 10,
    bottom: 40,
    height: 120,
    position: "absolute",
    width: 180,
  },
  boxCouponGift: {
    alignItems: "center",
    backgroundColor: COLORS.yellowLight,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    height: "35%",
    paddingLeft: 10,
    width: "100%",
  },
  boxCouponTop: {
    height: "65%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  boxPoint: {
    alignItems: "center",
    backgroundColor: COLORS.normalGrey,
    borderRadius: SIZES.medium,
    flexDirection: "row",
    height: 85,
    paddingLeft: 10,
    width: "100%",
  },
  boxPointText: {
    color: COLORS.blackest,
    fontSize: SIZES.huge + 5,
    fontWeight: "700",
    marginRight: 10,
  },
  boxText: {
    color: COLORS.blackest,
    fontSize: SIZES.font,
    fontWeight: "500",
    marginRight: 10,
  },
  boxUnit: {
    color: COLORS.blackest,
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
  content: {
    marginTop: 80,
    ...SCREEN_PADDING,
  },
  gift: {
    height: 15,
    marginRight: 7,
    width: 15,
  },
  iconInformation: {
    height: 25,
    width: 25,
  },
  textCouponGift: {
    color: COLORS.white,
  },
  textCouponTop: {
    color: COLORS.yellowLight,
  },
  viewText: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Content;
