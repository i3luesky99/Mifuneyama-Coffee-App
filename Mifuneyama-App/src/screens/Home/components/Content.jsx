import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  COLORS,
  GLOBAL_STYLES,
  ios,
  SCREEN_PADDING,
  SIZES,
} from "../../../themes";
// import Popup from "../../../components/Popup";
// import { useDispatch, useSelector } from "react-redux";
// import BoxChat from "../../../components/BoxChat";
import { WarningIcon } from "../../../../assets/images";
import BoxChat from "../../../components/BoxChat";
// import { openQRCodePopUp } from "../../../redux/reducer/action";

function Content({ HEIGHT_CONTENT, navigation }) {
  //   const dispatch = useDispatch();
  const handleOpenDialogQRcode = () => {
    // dispatch(
    //   openQRCodePopUp({
    //     data: true,
    //   })
    // );
  };
  const handleOpenShopsDetail = () => {
    navigation.navigate("Shops");
  };
  const { token } = true;
  const houseIconPath = require("../../../../assets/images/picture/houseIcon.png");
  return (
    <View style={styles.middleContent}>
      <View style={[styles.customerInfo, { height: HEIGHT_CONTENT }]}>
        <View style={styles.topContent}>
          <Image source={houseIconPath} style={[styles.icon]} />
          <Text style={styles.topContentText}>あなたの街の珈琲屋</Text>
        </View>
        <BoxChat home={true} />
        <TouchableOpacity
          style={styles.bottomMiddleContent}
          onPress={handleOpenShopsDetail}
        >
          <WarningIcon style={styles.iconInformation} fill={COLORS.lightRed} />
          <Text style={styles.bottomMiddleContentText}>店舗情報を見る</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButtonMiddleContent,
            { backgroundColor: token ? COLORS.lightRed : COLORS.mediumGrey },
          ]}
          onPress={handleOpenDialogQRcode}
          disabled={token ? false : true}
        >
          <Text style={styles.buttonText}>来店する (ポイント)</Text>
        </TouchableOpacity>
        {/* <Popup navigation={navigation} /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomButtonMiddleContent: {
    height: 40,
    ...GLOBAL_STYLES.flexCenter,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
  },
  bottomMiddleContent: {
    alignItems: "center",
    flexDirection: "row",
    height: 30,
    justifyContent: "flex-end",
    marginTop: 20,
  },
  bottomMiddleContentText: {
    color: COLORS.lightRed,
    fontFamily: ios ? "NotoSansCJKjp-Black" : "Hiragino-Gothic8",
    fontWeight: "500",
    marginLeft: 8,
  },

  buttonText: {
    color: COLORS.white,
    fontFamily: "NotoSansCJKjp-Bold",
    textAlign: "center",
  },

  customerInfo: {
    backgroundColor: COLORS.white,
    marginTop: 0,
    width: "100%",
    ...SCREEN_PADDING,
  },

  icon: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
  iconInformation: {
    height: 25,
    width: 25,
  },
  middleContent: {
    flex: 1,
  },

  topContent: {
    flexDirection: "row",
    marginTop: 20,
  },
  topContentText: {
    color: COLORS.darkBrown,
    fontFamily: ios ? "NotoSansCJKjp-Regular" : "Hiragino-Gothic8",
    fontSize: SIZES.medium,
    fontWeight: "600",
    letterSpacing: 3,
  },
});

export default Content;
