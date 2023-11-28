import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, globalStyles, screenPadding, SIZES} from '../../../themes';
import Header from '../components/Header';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  AuthCodeRegisterApi,
  AuthCodePasswordApi,
  RegisterApi,
  SendEmailChangePasswordApi,
} from '../../../apis/auth';

function ConfirmEmail({navigation}) {
  const [codeVerify, setCodeVerify] = useState();
  const [codeVerifyRegex, setCodeVerifyRegex] = useState(false);
  const email = useRoute()?.params?.email;
  const isChangePassword = useRoute()?.params?.isChangePassword;

  const handleRegister = async () => {
    if (codeVerify.length === 6) {
      try {
        if (isChangePassword) {
          const {data} = await AuthCodePasswordApi(email, codeVerify);
          navigation.navigate('UpdateNewPassword', {auth_key: data.auth_key});
        } else {
          await AuthCodeRegisterApi(email, codeVerify);
          navigation.navigate('CreateAccount', {email: email});
        }
        setCodeVerifyRegex(false);
      } catch (error) {
        setCodeVerifyRegex(true);
        console.log(error);
      }
    } else {
      setCodeVerifyRegex(true);
    }
  };

  const resendAuthCode = async () => {
    try {
      isChangePassword
        ? await SendEmailChangePasswordApi(email)
        : await RegisterApi(email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header title="認証コードを入力" back={true} navigation={navigation} />
        <View style={styles.content}>
          <Text style={styles.title}>届いた番号を入力してください</Text>
          <View style={[styles.inputEmail, globalStyles.flexCenter]}>
            <TextInput
              value={codeVerify}
              style={styles.input}
              onChangeText={setCodeVerify}
              maxLength={6}
              keyboardType="numeric"
            />
            {!codeVerify && (
              <Text style={styles.textInputPlaceHolder}>認証コード</Text>
            )}
          </View>
          {codeVerifyRegex && (
            <Text style={styles.errorText}>認証コードが間違いました。</Text>
          )}
          <TouchableOpacity onPress={resendAuthCode}>
            <Text style={styles.text}>認証コードを再送する</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: codeVerify
                  ? colors.lightRed
                  : colors.mediumGrey,
              },
            ]}
            onPress={handleRegister}
            disabled={codeVerify ? false : true}>
            <Text style={styles.buttonText}>次へ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    width: '100%',
    ...globalStyles.flexCenter,
    bottom: -35,
    position: 'absolute',
  },
  buttonText: {
    color: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    height: 220,
    width: '100%',
    ...globalStyles.flexCenterEvenly,
    ...screenPadding,
  },
  errorText: {
    bottom: 60,
    color: colors.lightRed,
    position: 'absolute',
  },
  input: {
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: '600',
    height: 70,
    textAlign: 'center',
    width: '100%',
    zIndex: 1,
  },
  inputEmail: {
    backgroundColor: colors.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: '600',
    height: 45,
    textAlign: 'center',
    width: '100%',
  },
  text: {
    color: colors.lightRed,
    fontFamily: 'NotoSansCJKjp-Regular',
    fontWeight: '500',
  },
  textInputPlaceHolder: {
    color: colors.mediumGrey,
    fontSize: SIZES.large,
    letterSpacing: 2,
    position: 'absolute',
  },
  title: {
    fontFamily: 'NotoSansCJKjp-Regular',
    fontWeight: '500',
  },
});
export default ConfirmEmail;
