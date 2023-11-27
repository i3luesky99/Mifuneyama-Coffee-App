import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {PencilIcon} from '../../../assets/images/svg';
import {TouchableOpacity} from 'react-native';
import {UpdateUserDetailApi} from '../../../apis/auth';
import {Text} from 'react-native';
import {
  buttonCancel,
  buttonSave,
  colors,
  globalStyles,
  hitSlopIcon,
} from '../../../themes';
import {useSelector} from 'react-redux';

function UserName({
  userNameRef,
  setUserNameEditable,
  firstName,
  lastName,
  setFirstName,
  setLastName,
  userNameEditable,
}) {
  const {user} = useSelector(user => user.user);

  const onChangeEditUserName = async () => {
    clearTimeout(timeOut_);
    setUserNameEditable(true);
    const timeOut_ = setTimeout(() => {
      userNameRef.current.focus();
    }, 100);
  };

  const onCancelEdit = () => {
    setUserNameEditable(false);
  };
  const onSave = () => {
    setUserNameEditable(false);
    updateUserName();
  };
  const updateUserName = async () => {
    try {
      if (user.first_name !== firstName || user.last_name !== lastName) {
        await UpdateUserDetailApi(firstName, lastName, '', '');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.customerName}>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          ref={userNameRef}
          editable={userNameEditable}
          style={[
            styles.customerNameText,
            userNameEditable && {
              borderWidth: 1,
              height: 35,
              width: 70,
            },
          ]}
        />
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          ref={userNameRef}
          editable={userNameEditable}
          style={[
            styles.customerNameText,
            userNameEditable && {
              borderWidth: 1,
              width: 70,
              marginRight: 5,
              height: 35,
            },
            {marginLeft: 5},
          ]}
        />
        {!userNameEditable && (
          <TouchableOpacity
            onPress={onChangeEditUserName}
            hitSlop={hitSlopIcon}
            style={styles.iconChangeCustomerName}>
            <PencilIcon style={styles.icon} fill={colors.blue} />
          </TouchableOpacity>
        )}
        {userNameEditable && (
          <View style={styles.contentRight}>
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
  container: {
    flex: 1,
    ...globalStyles.flexCenter,
  },
  contentRight: {
    height: '100%',
    ...globalStyles.flexRowCenterEvenly,
  },
  customerName: {
    flexDirection: 'row',
  },
  customerNameText: {
    color: colors.black,
    fontFamily: 'NotoSansCJKjp-Regular',
    fontWeight: '700',
  },
  icon: {
    height: 15,
    width: 15,
  },
  iconChangeCustomerName: {
    position: 'absolute',
    right: -35,
  },
});

export default UserName;
