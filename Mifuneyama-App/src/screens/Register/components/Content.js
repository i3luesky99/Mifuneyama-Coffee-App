import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {colors, globalStyles, SIZES} from '../../../themes';
import {TouchableOpacity} from 'react-native';

function Content({userForm, setUserForm, email, onClick}) {
  const [security, setSecurity] = useState(true);
  const handleChangeInput = (inputName, inputValue) => {
    setUserForm(state => ({
      ...state,
      [inputName]: inputValue,
    }));
  };
  const handleSecurity = () => {
    setSecurity(!security);
  };
  const userNameKanaRegex = '^[ァ-ヶー　 ]*$';
  return (
    <>
      <View style={styles.boxUserName}>
        <View style={styles.boxInput}>
          <Text
            style={[
              styles.textTitleInput,
              onClick && {
                color:
                  userForm.lastName === '' ? colors.lightRed : colors.lightGray,
              },
            ]}>
            姓
          </Text>
          <TextInput
            value={userForm.lastName}
            style={[
              styles.input,
              onClick && {
                borderWidth: userForm.lastName === '' ? 1 : 0,
                borderColor: userForm.lastName === '' && colors.lightRed,
              },
            ]}
            placeholder="三舟"
            placeholderTextColor={colors.mediumGrey}
            onChangeText={value => handleChangeInput('lastName', value)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.boxInput}>
          <Text
            style={[
              styles.textTitleInput,
              onClick && {
                color:
                  userForm.firstName === ''
                    ? colors.lightRed
                    : colors.lightGray,
              },
            ]}>
            名
          </Text>
          <TextInput
            value={userForm.firstName}
            style={[
              styles.input,
              onClick && {
                borderWidth: userForm.firstName === '' ? 1 : 0,
                borderColor: userForm.firstName === '' && colors.lightRed,
              },
            ]}
            placeholder="春子"
            placeholderTextColor={colors.mediumGrey}
            onChangeText={value => handleChangeInput('firstName', value)}
          />
        </View>
        <Text style={styles.bottomText}>
          ※姓名は漢字またはローマ字でご入力ください。
        </Text>
      </View>
      <View style={styles.boxUserNameKana}>
        <View style={styles.boxInput}>
          <Text
            style={[
              styles.textTitleInput,
              onClick && {
                color:
                  !userForm.lastNameKana.match(userNameKanaRegex) ||
                  userForm.lastNameKana === ''
                    ? colors.lightRed
                    : colors.lightGray,
              },
            ]}>
            セイ
          </Text>
          <TextInput
            value={userForm.lastNameKana}
            style={[
              styles.input,
              onClick && {
                borderWidth:
                  !userForm.lastNameKana.match(userNameKanaRegex) ||
                  userForm.lastNameKana === ''
                    ? 1
                    : 0,
                borderColor:
                  !userForm.lastNameKana.match(userNameKanaRegex) ||
                  userForm.lastNameKana === ''
                    ? colors.lightRed
                    : colors.transparent,
              },
            ]}
            placeholder="ミフネ"
            placeholderTextColor={colors.mediumGrey}
            onChangeText={value => handleChangeInput('lastNameKana', value)}
          />
        </View>
        <View style={styles.boxInput}>
          <Text
            style={[
              styles.textTitleInput,
              onClick && {
                color:
                  !userForm.firstNameKana.match(userNameKanaRegex) ||
                  userForm.firstNameKana === ''
                    ? colors.lightRed
                    : colors.lightGray,
              },
            ]}>
            メイ
          </Text>
          <TextInput
            value={userForm.firstNameKana}
            style={[
              styles.input,
              onClick && {
                borderWidth:
                  !userForm.firstNameKana.match(userNameKanaRegex) ||
                  userForm.firstNameKana === ''
                    ? 1
                    : 0,
                borderColor:
                  !userForm.firstNameKana.match(userNameKanaRegex) ||
                  userForm.firstNameKana === ''
                    ? colors.lightRed
                    : colors.transparent,
              },
            ]}
            placeholder="ハルコ"
            placeholderTextColor={colors.mediumGrey}
            onChangeText={value => handleChangeInput('firstNameKana', value)}
          />
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textTitleInput}>メールアドレス</Text>
        <View style={styles.input} placeholderTextColor={colors.mediumGrey}>
          <Text style={styles.textEmail}>{email}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text
          style={[
            styles.textTitleInput,
            onClick && {
              color:
                userForm.password === '' ? colors.lightRed : colors.lightGray,
            },
          ]}>
          パスワード
        </Text>
        <View
          style={[
            styles.input,
            onClick && {
              borderWidth: userForm.password === '' ? 1 : 0,
              borderColor: userForm.password === '' && colors.lightRed,
            },
          ]}>
          <TextInput
            value={userForm.password}
            style={styles.inputPassword}
            secureTextEntry={security}
            onChangeText={value => handleChangeInput('password', value)}
          />
          <TouchableOpacity
            style={styles.touchableOpacity}
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
            onPress={handleSecurity}>
            {security ? (
              <Text style={styles.textPassword}>表示</Text>
            ) : (
              <Text style={styles.textPassword}>非表示</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textTitleInput}>招待コード（任意）</Text>
        <TextInput
          style={styles.input}
          value={userForm.inviteCode}
          onChangeText={value => handleChangeInput('inviteCode', value)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    bottom: -15,
    color: colors.mediumGrey,
    left: 5,
    position: 'absolute',
  },
  box: {
    width: '100%',
  },
  boxInput: {
    width: '48%',
  },
  boxUserName: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-between',
    width: '100%',
  },
  boxUserNameKana: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    backgroundColor: colors.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: '600',
    height: 57,
    paddingLeft: 10,
    width: '100%',
    ...globalStyles.flexCenter,
  },
  inputPassword: {
    backgroundColor: colors.normalGrey,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: '600',
    height: 53,
    paddingLeft: 10,
    width: '98%',
    ...globalStyles.flexCenter,
    paddingRight: 60,
  },
  textEmail: {
    fontFamily: 'NotoSansCJKjp-Regular',
    fontWeight: '500',
  },
  textPassword: {
    color: colors.lightGray,
    fontFamily: 'NotoSansCJKjp-Regular',
    fontSize: SIZES.title,
  },
  textTitleInput: {
    fontSize: SIZES.title,
    fontWeight: '800',
    marginBottom: 7,
    marginLeft: 5,
  },
  touchableOpacity: {
    position: 'absolute',
    right: 10,
  },
});
export default Content;
