import React, { useState } from "react";
import { View } from "react-native";
import MapView, { CalloutSubview, Marker } from "react-native-maps";
import { getLocationMarker, ios } from "../../../themes";
import Logo from "../../../components/Logo";

const GoogleMap = ({
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta,
  activeShop,
  shops,
  navigation,
  shopID,
  shopInfo,
}) => {
  const [isMapReady, setIsMapReady] = useState(false);
  const onSetMapReady = () => {
    setTimeout(() => setIsMapReady(true), 1000);
  };

  const handleOpenShopDetail = (shop) => {
    navigation.navigate("ShopDetail", { shopID: shopID || shop?.id });
  };

  return (
    <MapView
      style={[{ flex: 1 }]}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      }}
      onMapReady={onSetMapReady}
      showsUserLocation={true}
    >
      {isMapReady && (
        <>
          {activeShop ? (
            <>
              {ios ? (
                <CalloutSubview onPress={handleOpenShopDetail}>
                  <Marker
                    coordinate={{ latitude: latitude, longitude: longitude }}
                  >
                    <Logo logo={shopInfo?.logo} latitude={latitude} />
                  </Marker>
                </CalloutSubview>
              ) : (
                <Marker
                  onPress={handleOpenShopDetail}
                  coordinate={{ latitude: latitude, longitude: longitude }}
                >
                  <Logo logo={shopInfo?.logo} latitude={latitude} />
                </Marker>
              )}
            </>
          ) : (
            <>
              {shops?.map((shop, index) => (
                <View key={index}>
                  {ios ? (
                    <CalloutSubview onPress={() => handleOpenShopDetail(shop)}>
                      <Marker
                        coordinate={{
                          latitude: getLocationMarker(shop, 0),
                          longitude: getLocationMarker(shop, 1),
                        }}
                      >
                        <Logo logo={shop?.logo} latitude={latitude} />
                      </Marker>
                    </CalloutSubview>
                  ) : (
                    <Marker
                      onPress={() => handleOpenShopDetail(shop)}
                      coordinate={{
                        latitude: getLocationMarker(shop, 0),
                        longitude: getLocationMarker(shop, 1),
                      }}
                    >
                      <Logo logo={shop?.logo} latitude={latitude} />
                    </Marker>
                  )}
                </View>
              ))}
            </>
          )}
        </>
      )}
    </MapView>
  );
};

export default GoogleMap;
