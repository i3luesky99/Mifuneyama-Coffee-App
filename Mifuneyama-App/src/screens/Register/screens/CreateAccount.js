import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import Header from '../components/Header';
import {colors, globalStyles, ios, screenPadding, SIZES} from '../../../themes';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import Content from '../components/Content';
import CheckBox from '@react-native-community/checkbox';
import {useRoute} from '@react-navigation/native';
import {RegisterInfoUpdateApi} from '../../../apis/auth';
import {backHandler} from '../../../utils/preventBack';
import {KeyboardAvoidingView} from 'react-native';

function CreateAccount({navigation}) {
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    password: '',
    inviteCode: '',
  });
  const [onClick, setOnClick] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [warning, setWarning] = useState(false);
  const email = useRoute()?.params?.email || '';

  const handleNextCreateAccount = async () => {
    try {
      setOnClick(true);
      for (const [key, value] of Object.entries(userForm)) {
        if (value === '' && key !== 'inviteCode') {
          setWarning(true);
          return;
        }
      }
      setWarning(false);
      await RegisterInfoUpdateApi(email, userForm);
      navigation.navigate('CreateAccountNext', {
        email: email,
        password: userForm.password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    backHandler();
  });
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={ios ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Header title="アカウントの作成" back={true} navigation={navigation} />
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.content}>
              <Text style={styles.title}>
                お名前とメールアドレスを教えてください
              </Text>
              <Content
                userForm={userForm}
                setUserForm={setUserForm}
                email={email}
                onClick={onClick}
              />
              <View style={styles.checkBoxView}>
                <CheckBox
                  value={isSelected}
                  onValueChange={newValue => setIsSelected(newValue)}
                  boxType="square"
                  onCheckColor={colors.lightRed}
                  onTintColor={colors.lightRed}
                  style={ios && {width: 20, height: 20}}
                />
                <Text style={styles.text}>
                  サービス利用規約、プライバシーポリシー
                  <Text style={[styles.text, {color: colors.black}]}>
                    に同意します。
                  </Text>
                </Text>
              </View>
              <View style={styles.bottom}>
                {warning && (
                  <Text style={styles.warningText}>
                    必須項目に入力してください。
                  </Text>
                )}
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: isSelected
                        ? colors.lightRed
                        : colors.mediumGrey,
                    },
                  ]}
                  onPress={handleNextCreateAccount}
                  disabled={isSelected ? false : true}>
                  <Text style={styles.buttonText}>次へ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    ...globalStyles.flexCenter,
    height: 50,
  },
  button: {
    borderRadius: 20,
    height: 45,
    width: '100%',
    ...globalStyles.flexCenter,
  },
  buttonText: {
    color: colors.white,
  },
  checkBoxView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: -10,
    paddingLeft: 5,
    width: '100%',
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    height: 850,
    width: '100%',
    ...globalStyles.flexCenterEvenly,
    ...screenPadding,
  },
  text: {
    color: colors.lightRed,
    fontFamily: 'NotoSansCJKjp-Regular',
    fontSize: SIZES.small,
    marginLeft: 10,
  },
  title: {
    fontFamily: 'NotoSansCJKjp-Regular',
    fontWeight: '500',
  },

  warningText: {
    color: colors.lightRed,
    fontFamily: 'NotoSansCJKjp-Regular',
    fontSize: SIZES.font,
    position: 'absolute',
    top: -20,
  },
});
export default CreateAccount;
