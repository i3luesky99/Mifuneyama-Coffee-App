import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, GLOBAL_STYLES, SCREEN_PADDING, SIZES } from "../../themes";
import Header from "./components/Header";
import { KeyboardAvoidingView } from "react-native";

function Register({ navigation }) {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [email, setEmail] = useState();
  const [emailRegex, setEmailRegex] = useState(false);

  const handleRegister = async () => {
    if (email.match(regexEmail)) {
      navigation.navigate("ConfirmEmail", { email: email });
    } else {
      setEmailRegex(true);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Header title="Địa chỉ email" back={true} navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Hãy điền địa chỉ email của bạn</Text>
          <View style={[styles.inputEmail, GLOBAL_STYLES.flexCenter]}>
            <TextInput
              value={email}
              style={styles.input}
              onChangeText={setEmail}
            />
            {!email && (
              <Text style={styles.textInputPlaceHolder}>
                hello@mifuneyamacoffee.com
              </Text>
            )}
          </View>

          <Text style={styles.text}>
            MIFUNEYAMA hỗ trợ ứng dụng này, chúng tôi sẽ gửi cho bạn một mã xác
            nhận.
          </Text>
          {emailRegex && (
            <Text style={styles.errorText}>Địa chỉ email không hợp lệ.</Text>
          )}
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: email ? COLORS.lightRed : COLORS.mediumGrey,
              },
            ]}
            onPress={handleRegister}
            disabled={email ? false : true}
          >
            <Text style={styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    width: "100%",
    ...GLOBAL_STYLES.flexCenter,
  },
  buttonText: {
    color: COLORS.white,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    marginTop: 15,
    width: "100%",
    ...GLOBAL_STYLES.flexCenterEvenly,
    ...SCREEN_PADDING,
    gap: 20,
  },
  errorText: {
    bottom: 0,
    color: COLORS.lightRed,
  },
  input: {
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 70,
    textAlign: "center",
    width: "100%",
    zIndex: 1,
  },
  inputEmail: {
    backgroundColor: COLORS.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
    height: 45,
    textAlign: "center",
    width: "100%",
  },
  text: {
    color: COLORS.blackest,
  },

  textInputPlaceHolder: {
    color: COLORS.mediumGrey,
    position: "absolute",
  },
  title: {
    color: COLORS.blackest,
    fontWeight: "500",
  },
});
export default Register;
