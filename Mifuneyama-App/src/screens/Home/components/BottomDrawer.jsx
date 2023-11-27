import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modalize } from "react-native-modalize";
import { WINDOW_HEIGHT } from "../../../themes/themes";
import {
  COLORS,
  GLOBAL_STYLES,
  ios,
  SCREEN_PADDING,
  SIZES,
} from "../../../themes";

function BottomDrawer(props) {
  const {
    navigation,
    setShopName,
    shopID,
    setShopID,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    mainShop,
    setMainShop,
    setShopInfo,
    shopInfo,
  } = props;

  const shopName = "dsadsa";
  const modalizeRef = useRef(Modalize);

  const [shops, setShops] = useState();
  const [activeShop, setActiveShop] = useState(false);
  const UP = WINDOW_HEIGHT * 0.8;

  const snapPoints = useMemo(() => [UP], [UP]);

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, [shopID]);

  const handleOpenMap = () => {
    modalizeRef.current.open();
  };

  const setStateListInfoShop = (shop) => {
    setShopName(shop?.name);
    setMainShop(shop?.main_shop);
    setShopID(shop?.id);
    setShopInfo((preState) => ({
      ...preState,
      postal_code: shop?.postal_code,
      address: shop?.address,
      business_hours: shop?.business_hours,
      day_off: shop?.day_off,
      tel: shop?.tel,
      instagram: shop?.instagram,
      facebook: shop?.facebook,
      twitter: shop?.twitter,
      image: shop?.image,
      logo: shop?.logo,
    }));
  };

  const onHandleChangeToMenu = () => {
    navigation.navigate("ProductMenu", {
      shopName: shopName,
      mainShop: mainShop,
      shopID: shopID,
    });
  };

  const handleSelect = async (shop) => {
    try {
      setStateListInfoShop(shop);
      const SHOP_ID = shop?.id.toString();
      await AsyncStorage.setItem("shopID", SHOP_ID);
      if (shop?.google_map) {
        const x = shop?.google_map?.split("@")[1]?.split(",")[0] || -1000;
        const y = shop?.google_map?.split("@")[1]?.split(",")[1] || -1000;
        setLatitude(x);
        setLongitude(y);
        setActiveShop(true);
      }
      modalizeRef.current.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={UP}
      handlePosition="outside"
      handleStyle={styles.indicator}
      HeaderComponent={
        <View style={styles.bottom}>
          <Text style={styles.bottomShopName}>MIFUNEYAMA COFFEE</Text>
          <Menu>
            <MenuTrigger>
              {mainShop === 1 ? (
                <Text style={styles.menuText}>{shopName}(本店)▼</Text>
              ) : (
                <Text style={styles.menuText}>{shopName}▼</Text>
              )}
            </MenuTrigger>
            <MenuOptions style={styles.menu}>
              {shops?.map((shop, index) => (
                <MenuOption key={index} onSelect={() => handleSelect(shop)}>
                  {shop?.main_shop === 1 ? (
                    <Text style={styles.menuText}>
                      {shop?.name}
                      (本店)
                    </Text>
                  ) : (
                    <Text style={styles.menuText}>{shop?.name}</Text>
                  )}
                </MenuOption>
              ))}
            </MenuOptions>
          </Menu>
          <Text style={styles.bottomText}>
            ご来店前にメニュ一覧をご覧ください。
          </Text>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={onHandleChangeToMenu}
          >
            <Text style={styles.textButton}>メニューを見る。</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.map}>{/* Your GoogleMap component */}</View>
    </Modalize>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: 150,
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
    width: "100%",
  },

  bottomSheet: {
    backgroundColor: COLORS.normalGrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 100,
    flex: 1,
    shadowColor: COLORS.brown,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    width: "100%",
  },
  bottomShopName: {
    color: COLORS.brown,
    fontSize: SIZES.large,
    fontWeight: ios ? "400" : "500",
  },
  bottomText: {
    color: COLORS.brown,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.font,
  },
  bottomView: {
    backgroundColor: COLORS.normalGrey,
    flex: 0,
    height: "100%",
  },
  buttonMenu: {
    backgroundColor: COLORS.lightRed,
    height: 40,
    ...GLOBAL_STYLES.flexCenter,
    borderRadius: 10,
    width: "100%",
  },
  handleStyle: {
    backgroundColor: COLORS.normalGrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  indicator: {
    backgroundColor: COLORS.mediumGrey,
    height: 4,
    width: 60,
  },
  map: {
    height: " 100%",
  },
  menu: {
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingBottom: 5,
    paddingTop: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 250,
  },
  menuText: {
    color: COLORS.brown,
    fontFamily: ios ? "NotoSansCJKjp-Regular" : "Hiragino-Gothic5",
    fontSize: SIZES.large,
    fontWeight: ios ? "400" : "500",
    textAlign: "center",
    width: 250,
  },

  textButton: {
    color: COLORS.white,
    fontFamily: ios ? "NotoSansCJKjp-Regular" : "Hiragino-Gothic4",
    textAlign: "center",
  },
});

export default BottomDrawer;
