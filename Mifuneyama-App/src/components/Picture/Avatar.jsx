import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../themes";
import { GuestIcon } from "../../../assets/images";
// import BottomSelect from "./BottomSelect";

function Avatar({
  position,
  image,
  profile,
  size,
  setting,
  refRBSheet,
  onPickImage,
}) {
  const { user, loading } = {};
  const imagePick = image?.path;
  const avatar = user?.avatar;
  const last_name = user?.last_name?.slice(0, 1) || " ";
  const guestAvatarPath = require("../../../assets/images/picture/guestAvatar.png");
  useEffect(() => {}, [loading, image]);
  const handleOpenPopup = () => {
    refRBSheet.current.open();
  };
  return (
    <View
      style={[
        profile && {
          position: "absolute",
          borderRadius: 50,
          borderWidth: 3,
          borderColor: COLORS.white,
          left: 15,
          bottom: -40,
        },
        setting && {
          borderRadius: 50,
        },
      ]}
    >
      <>
        {user && !loading ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleOpenPopup()}
          >
            {avatar ? (
              <Image
                style={[styles.imageIcon, { ...size }]}
                source={{ uri: imagePick || avatar }}
              />
            ) : (
              <>
                {imagePick ? (
                  <Image
                    style={[styles.imageIcon, { ...size }]}
                    source={{ uri: imagePick }}
                  />
                ) : (
                  <View
                    style={[
                      styles.imageIcon,
                      { backgroundColor: COLORS.normalGrey },
                      { ...size },
                    ]}
                  >
                    <Text style={styles.text}>{last_name}</Text>
                  </View>
                )}
              </>
            )}
            {/* <BottomSelect
              refRBSheet={refRBSheet}
              avatar={imagePick || avatar}
              onPickImage={onPickImage}
            /> */}
          </TouchableOpacity>
        ) : (
          <>
            {imagePick ? (
              <Image
                style={[styles.imageIcon, { ...size }]}
                source={{ uri: imagePick }}
              />
            ) : (
              <View
                style={[
                  styles.imageIcon,
                  { backgroundColor: COLORS.normalGrey },
                  { ...size },
                ]}
              >
                {position && (
                  <GuestIcon styles={styles.icon} fill={COLORS.white} />
                )}
                {profile && (
                  <Image source={guestAvatarPath} style={styles.guestAvatar} />
                )}
                {setting && (
                  <Image source={guestAvatarPath} style={styles.guestAvatar} />
                )}
              </View>
            )}
          </>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  guestAvatar: {
    height: 55,
    width: 55,
  },
  icon: {
    height: 40,
    width: 40,
  },
  imageIcon: {
    borderRadius: 50,
    height: 50,
    width: 50,
    ...GLOBAL_STYLES.flexCenter,
  },
  text: {
    color: COLORS.black,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
});
export default Avatar;
