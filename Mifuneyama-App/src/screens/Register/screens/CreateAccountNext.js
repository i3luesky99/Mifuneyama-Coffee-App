import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  globalStyles,
  screenPadding,
  screen_large,
  screen_medium,
  SIZES,
} from '../../../themes';
import Header from '../components/Header';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {useEffect} from 'react';
import {LoginApi, storeState} from '../../../apis/auth';
import {useDispatch} from 'react-redux';
import {UpdateUserDetail} from '../../../redux/reducer/action';
import {useRoute} from '@react-navigation/native';

function CreateAccountNext({navigation}) {
  const email = useRoute()?.params?.email || '';
  const password = useRoute()?.params?.password || '';

  const dispatch = useDispatch();
  const gifPath = require('../../../assets/images/gif/celebration.gif');

  const handleChangeToPersonalSetting = () => {
    navigation.navigate('PersonalSetting');
  };
  const handleChangeToHome = () => {
    navigation.navigate('HomeTab', {screen: 'ホーム'});
  };
  let size = 0;
  switch (true) {
    case screen_medium:
      size = 13;
      break;
    case screen_large:
      size = 15;
      break;
    default:
      size = 12;
  }

  const title = {
    fontFamily: 'NotoSansCJKjp-Regular',
    fontWeight: '600',
    letterSpacing: 2,
    lineHeight: 20,
    fontSize: size,
    color: colors.blackest,
  };

  useEffect(() => {
    async function Login() {
      try {
        const {data} = await LoginApi(email, password);
        const USER_ID = data?.user.customer.id.toString();
        const USER_TYPE = data?.user.type;
        const TOKEN = data?.access_token;
        const REFRESH_TOKEN = data?.refresh_token;
        const EXPIRED_TOKEN = data?.expires_in.toString();
        if (USER_TYPE === 2) {
          await storeState(USER_ID, TOKEN, REFRESH_TOKEN, EXPIRED_TOKEN);
          dispatch(
            UpdateUserDetail({
              loading: true,
            }),
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    Login();
  }, []);

  return (
    <View style={styles.container}>
      <Header title=" アカウントの作成" />
      <View style={styles.content}>
        <View style={styles.gifBox}>
          <Text style={[title, {fontSize: SIZES.large}]}>
            登録が完了しました
          </Text>
          <Image source={gifPath} style={styles.gifPicture} />
          <View>
            <Text style={title}>このアカウントは事前オーダーサービス</Text>
            <Text style={title}>でもご利用いただけます</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleChangeToPersonalSetting}>
            <Text style={styles.buttonText}>プロフィール設定に進む</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={handleChangeToHome}>
            <Text style={styles.buttonTextHome}>閉じる</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    ...globalStyles.flexCenterEvenly,
    height: 140,
  },
  button: {
    borderRadius: 20,
    height: 45,
    width: '100%',
    ...globalStyles.flexCenter,
    backgroundColor: colors.lightRed,
  },
  buttonHome: {
    borderRadius: 20,
    height: 45,
    width: '100%',
    ...globalStyles.flexCenter,
    backgroundColor: colors.mediumGrey,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '500',
  },
  buttonTextHome: {
    fontWeight: '500',
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    height: 550,
    width: '100%',
    ...globalStyles.flexCenterEvenly,
    ...screenPadding,
  },
  gifBox: {
    ...globalStyles.flexCenter,
    height: '40%',
    width: '100%',
  },
  gifPicture: {
    height: 200,
    width: 200,
  },
});
export default CreateAccountNext;
