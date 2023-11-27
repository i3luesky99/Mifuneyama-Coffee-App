import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PencilIcon} from '../../../assets/images/svg';
import {TextInput} from 'react-native';
import {UpdateUserDetailApi} from '../../../apis/auth';
import {
  buttonCancel,
  buttonSave,
  colors,
  globalStyles,
  hitSlopIcon,
} from '../../../themes';
import {useSelector} from 'react-redux';

function Email({
  email,
  setEmail,
  emailRef,
  emailEditable,
  setEmailEditTable,
  emailRegex,
  setEmailRegex,
}) {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const {user} = useSelector(user => user.user);

  const onChangeEditEmail = () => {
    clearTimeout(timeOut_);
    setEmailEditTable(true);
    const timeOut_ = setTimeout(() => {
      emailRef.current.focus();
    }, 100);
  };

  const onCancelEdit = () => {
    setEmailEditTable(false);
  };
  const onSave = () => {
    setEmailEditTable(false);
    updateEmail();
  };

  const updateEmail = async () => {
    try {
      if (email.match(regexEmail)) {
        setEmailRegex(false);
        if (user.email !== email) {
          await UpdateUserDetailApi('', '', email, '');
        }
      } else {
        setEmailRegex(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.input}>
      <View style={styles.headerInput}>
        <Text style={styles.titleInput}>電子メールアドレス</Text>
        {!emailEditable && (
          <TouchableOpacity
            onPress={onChangeEditEmail}
            hitSlop={hitSlopIcon}
            style={styles.icon}>
            <PencilIcon fill={colors.blue} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.footerInput}>
        <View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
            editable={emailEditable}
            style={styles.textInput}
          />
        </View>
        {emailEditable && (
          <View style={styles.footerInputRight}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={onCancelEdit}>
              <Text style={styles.buttonCancelText}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSave} onPress={onSave}>
              <Text style={styles.buttonSaveText}>保存</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {emailRegex && (
        <Text style={styles.errorText}>メールアドレスが不正です。</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonCancel: {
    ...buttonCancel,
  },
  buttonCancelText: {
    color: colors.lightRed,
    fontWeight: '700',
  },
  buttonSave: {
    ...buttonSave,
  },
  buttonSaveText: {
    color: colors.blue,
    fontWeight: '700',
  },
  errorText: {
    bottom: 0,
    color: colors.lightRed,
    position: 'absolute',
  },
  footerInput: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    ...globalStyles.flexCenterBetween,
  },
  footerInputRight: {
    flexDirection: 'row',
  },
  headerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 15,
    width: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.buttonGray,
    height: 100,
    justifyContent: 'center',
    marginTop: 15,
  },
  textInput: {
    color: colors.black,
    fontFamily: 'NotoSansCJKjp-Regular',
    height: '100%',
    width: '100%',
  },
  titleInput: {
    color: colors.black,
    fontWeight: '600',
  },
});
export default Email;
