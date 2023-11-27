import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PencilIcon} from '../../../assets/images/svg';
import {TextInput} from 'react-native-gesture-handler';
import formatPhoneNumber from '../../../utils/formatPhoneNumber';
import {
  buttonCancel,
  buttonSave,
  colors,
  globalStyles,
  hitSlopIcon,
} from '../../../themes';
import {UpdateUserDetailApi} from '../../../apis/auth';
import {useSelector} from 'react-redux';

function Phone({
  phone,
  setPhone,
  phoneRef,
  phoneEditable,
  setPhoneEditTable,
  phoneRegex,
  setPhoneRegex,
}) {
  const {user} = useSelector(user => user.user);

  const onChangeEditPhone = () => {
    clearTimeout(timeOut_);
    const timeOut_ = setTimeout(() => {
      phoneRef.current.focus();
    }, 1);
    setPhoneEditTable(true);
  };

  const onCancelEditPhone = () => {
    setPhoneEditTable(false);
  };
  const onSave = () => {
    setPhoneEditTable(false);
    updatePhone();
  };

  const updatePhone = async () => {
    try {
      const phoneBase = phone.replace('-', '').replace('-', '');
      if (phoneBase.length <= 11 && phoneBase.length >= 9) {
        setPhoneRegex(false);
        if (user.phone !== phoneBase) {
          await UpdateUserDetailApi('', '', '', phoneBase);
        }
      } else {
        setPhoneRegex(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.input}>
      <View style={styles.headerInput}>
        <Text style={styles.titleInput}>
          <Text style={styles.titleInput}>電話番号</Text>
        </Text>
        {!phoneEditable && (
          <TouchableOpacity
            onPress={onChangeEditPhone}
            hitSlop={hitSlopIcon}
            style={styles.icon}>
            <PencilIcon fill={colors.blue} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.footerInput}>
        <View>
          <TextInput
            value={formatPhoneNumber(phone) || phone}
            onChangeText={setPhone}
            maxLength={13}
            keyboardType="numeric"
            editable={phoneEditable}
            ref={phoneRef}
            showSoftInputOnFocus={phoneEditable}
            style={styles.textInput}
          />
        </View>
        {phoneEditable && (
          <View style={styles.footerInputRight}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={onCancelEditPhone}>
              <Text style={styles.buttonCancelText}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSave} onPress={onSave}>
              <Text style={styles.buttonSaveText}>保存</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {phoneRegex && <Text style={styles.errorText}>電話番号が不正です。</Text>}
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
  },
  titleInput: {
    color: colors.black,
    fontWeight: '600',
  },
});

export default Phone;
