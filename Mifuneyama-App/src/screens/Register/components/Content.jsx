import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../../themes";
import { TouchableOpacity } from "react-native";

function Content({ userForm, setUserForm, email, onClick }) {
  const [security, setSecurity] = useState(true);
  const handleChangeInput = (inputName, inputValue) => {
    setUserForm((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };
  const handleSecurity = () => {
    setSecurity(!security);
  };

  return (
    <>
      <View style={styles.boxUserName}>
        <View style={styles.boxInput}>
          <Text
            style={[
              styles.textTitleInput,
              onClick && {
                color:
                  userForm.lastName === "" ? COLORS.lightRed : COLORS.lightGray,
              },
            ]}
          >
            Họ
          </Text>
          <TextInput
            value={userForm.lastName}
            style={[
              styles.input,
              onClick && {
                borderWidth: userForm.lastName === "" ? 1 : 0,
                borderColor: userForm.lastName === "" && COLORS.lightRed,
              },
            ]}
            onChangeText={(value) => handleChangeInput("lastName", value)}
          />
        </View>
        <View style={styles.boxInput}>
          <Text
            style={[
              styles.textTitleInput,
              onClick && {
                color:
                  userForm.firstName === ""
                    ? COLORS.lightRed
                    : COLORS.lightGray,
              },
            ]}
          >
            Tên
          </Text>
          <TextInput
            value={userForm.firstName}
            style={[
              styles.input,
              onClick && {
                borderWidth: userForm.firstName === "" ? 1 : 0,
                borderColor: userForm.firstName === "" && COLORS.lightRed,
              },
            ]}
            onChangeText={(value) => handleChangeInput("firstName", value)}
          />
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.textTitleInput}>Email</Text>
        <View style={styles.input} placeholderTextColor={COLORS.mediumGrey}>
          <Text style={styles.textEmail}>{email}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text
          style={[
            styles.textTitleInput,
            onClick && {
              color:
                userForm.password === "" ? COLORS.lightRed : COLORS.lightGray,
            },
          ]}
        >
          Mật khẩu
        </Text>
        <View
          style={[
            styles.input,
            {
              paddingLeft: 0,
            },
            onClick && {
              borderWidth: userForm.password === "" ? 1 : 0,
              borderColor: userForm.password === "" && COLORS.lightRed,
            },
          ]}
        >
          <TextInput
            value={userForm.password}
            style={styles.inputPassword}
            secureTextEntry={security}
            onChangeText={(value) => handleChangeInput("password", value)}
          />
          <TouchableOpacity
            style={styles.touchableOpacity}
            hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
            onPress={handleSecurity}
          >
            {security ? (
              <Text style={styles.textPassword}>Hiện</Text>
            ) : (
              <Text style={styles.textPassword}>Ẩn</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textTitleInput}>Mã lời mời (tùy chọn)</Text>
        <TextInput
          style={styles.input}
          value={userForm.inviteCode}
          onChangeText={(value) => handleChangeInput("inviteCode", value)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    bottom: -15,
    color: COLORS.mediumGrey,
    left: 5,
    position: "absolute",
  },
  box: {
    width: "100%",
  },
  boxInput: {
    width: "48%",
  },
  boxUserName: {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between",
    width: "100%",
  },
  boxUserNameKana: {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    backgroundColor: COLORS.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 57,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    paddingLeft: 10,
  },
  inputPassword: {
    backgroundColor: COLORS.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 53,
    paddingLeft: 10,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    paddingRight: 60,
  },
  textEmail: {
    fontFamily: "NotoSansCJKjp-Regular",
    fontWeight: "500",
  },
  textPassword: {
    color: COLORS.lightGray,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.title,
  },
  textTitleInput: {
    fontSize: SIZES.title,
    fontWeight: "800",
    marginBottom: 7,
    marginLeft: 5,
  },
  touchableOpacity: {
    position: "absolute",
    right: 10,
  },
});
export default Content;
