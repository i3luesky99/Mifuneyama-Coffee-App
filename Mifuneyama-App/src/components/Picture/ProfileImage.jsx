import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS, GLOBAL_STYLES } from "../../themes";
import BottomSelect from "./BottomSelect";
import { useState } from "react";
import { useRef } from "react";
// import ImagePicker from "react-native-image-crop-picker";
import { AddProfileImageIcon } from "../../../assets/images";

function ProfileImage() {
  const { user, loading } = {};
  const refRBProfile = useRef();

  const handleOpenPopup = () => {
    // refRBProfile.current.open();
  };

  const [image, setImage] = useState();
  const [imageTemporary, setImageTemporary] = useState();
  const fetchImageProfile = async () => {};
  useEffect(() => {}, [loading]);

  const onPickImage = () => {
    // ImagePicker.openPicker({
    //   width: 400,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then((image) => {
    //     setImageTemporary(image?.path);
    //     updateAvatar(image, "profile_image");
    //   })
    //   .catch((error) => {
    //     if (error.code !== "E_PICKER_CANCELLED") {
    //       refRBProfile.current.close();
    //       dispatch(
    //         openPermissionPopup({
    //           data: true,
    //         })
    //       );
    //     } else {
    //       return;
    //     }
    //   });
  };

  return (
    <View style={[styles.header]}>
      {user ? (
        <>
          {image ? (
            <TouchableOpacity style={styles.button} onPress={handleOpenPopup}>
              <Image
                source={{ uri: imageTemporary || image }}
                style={styles.header}
              />
              <BottomSelect
                refRBProfile={refRBProfile}
                profileImage={imageTemporary || image}
                onPickImage={onPickImage}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleOpenPopup}>
              {imageTemporary ? (
                <Image source={{ uri: imageTemporary }} style={styles.header} />
              ) : (
                <AddProfileImageIcon fill={COLORS.black} style={styles.icon} />
              )}
              {/* <BottomSelect
                refRBProfile={refRBProfile}
                profileImage={imageTemporary}
                onPickImage={onPickImage}
              /> */}
            </TouchableOpacity>
          )}
        </>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: "100%",
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  header: {
    backgroundColor: COLORS.normalGrey,
    height: 200,
    width: "100%",
  },
  icon: {
    height: 30,
    width: 30,
  },
});
export default ProfileImage;
