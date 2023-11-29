import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  COLORS,
  GLOBAL_STYLES,
  ios,
  SCREEN_PADDING,
  SIZES,
} from "../../../themes";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Content from "../components/Content";
import Checkbox from "expo-checkbox";
import { useRoute } from "@react-navigation/native";

function CreateAccount({ navigation }) {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    inviteCode: "",
  });
  const [onClick, setOnClick] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [warning, setWarning] = useState(false);
  const email = useRoute()?.params?.email || "";

  const handleNextCreateAccount = async () => {
    try {
      setOnClick(true);
      for (const [key, value] of Object.entries(userForm)) {
        if (value === "" && key !== "inviteCode") {
          setWarning(true);
          return;
        }
      }
      setWarning(false);
      // await RegisterInfoUpdateApi(email, userForm);
      navigation.navigate("CreateAccountNext", {
        email: email,
        password: userForm.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Tạo tài khoản" back={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Vui lòng cho tôi biết tên của bạn</Text>
          <Content
            userForm={userForm}
            setUserForm={setUserForm}
            email={email}
            onClick={onClick}
          />
          <View style={styles.checkBoxView}>
            <Checkbox
              value={isSelected}
              onValueChange={(newValue) => setIsSelected(newValue)}
              boxType="square"
              onCheckColor={COLORS.lightRed}
              onTintColor={COLORS.lightRed}
              style={ios && { width: 20, height: 20 }}
            />
            <Text style={styles.text}>
              Chính sách bảo mật dịch vụ
              <Text style={[styles.text, { color: COLORS.black }]}>
                Tôi đồng ý.
              </Text>
            </Text>
          </View>
          <View style={styles.bottom}>
            {warning && (
              <Text style={styles.warningText}>
                Vui lòng điền vào phần được yêu cầu.
              </Text>
            )}
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: isSelected
                    ? COLORS.lightRed
                    : COLORS.mediumGrey,
                },
              ]}
              onPress={handleNextCreateAccount}
              disabled={isSelected ? false : true}
            >
              <Text style={styles.buttonText}>Tiếp theo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
    height: 50,
  },
  button: {
    borderRadius: 20,
    height: 45,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  buttonText: {
    color: COLORS.white,
  },
  checkBoxView: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: -10,
    paddingLeft: 5,
    width: "100%",
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    height: 850,
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
  },
  text: {
    color: COLORS.lightRed,
    fontSize: SIZES.small,
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
  },

  warningText: {
    color: COLORS.lightRed,
    fontSize: SIZES.font,
    position: "absolute",
    top: -20,
  },
});
export default CreateAccount;
