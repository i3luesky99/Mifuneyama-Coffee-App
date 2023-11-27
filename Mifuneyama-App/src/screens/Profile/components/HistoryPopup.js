import {
  ActivityIndicator,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors, globalStyles, screenPadding, SIZES} from '../../../themes';
import {useState} from 'react';
import {useEffect} from 'react';
import {getHistoryPoint} from '../../../apis/auth';
import {useSelector} from 'react-redux';
import {useRef} from 'react';
import moment from 'moment';

function BottomSelect({refRBSheet}) {
  const [historyInfo, setHistoryInfo] = useState([]);
  const {loading} = useSelector(user => user.user);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [totalPage, setTotalPage] = useState();
  const [open, setOpen] = useState(false);
  const fetchHistoryInfo = async () => {
    try {
      const {data} = await getHistoryPoint(currentPage);
      const HISTORY_LIST = data?.point_histories?.data;
      setHistoryInfo(HISTORY_LIST);
      setLoadingHistory(false);
      setTotalPage(data?.point_histories.last_page);
      if (currentPage > 1 && data?.point_histories.total > historyInfo.length) {
        setHistoryInfo(historyInfo.concat(HISTORY_LIST));
      } else {
        setHistoryInfo(HISTORY_LIST);
      }
    } catch (error) {
      setHistoryInfo([]);
      setCurrentPage(1);
      setLoadingHistory(false);
      return error;
    }
  };
  useEffect(() => {
    if (open === false) {
      setHistoryInfo([]);
      setCurrentPage(1);
    }
    setLoadingHistory(true);
    fetchHistoryInfo();
  }, [loading, currentPage, open]);

  const convertDay = day => {
    const dayUTC = moment(day).format('YYYY/MM/DD HH:mm');
    return dayUTC;
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      height={400}
      customStyles={{
        container: {
          ...styles.container,
        },
        draggableIcon: {
          ...styles.indicator,
        },
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={animatedValue}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);

          if (
            isCloseToBottom(e.nativeEvent) &&
            totalPage > currentPage &&
            !loadingHistory
          ) {
            setCurrentPage(currentPage => currentPage + 1);
          }
        }}
        scrollEventThrottle={16}>
        <View style={styles.content}>
          <Text style={styles.title}>ポイント履歴</Text>
          <TouchableOpacity style={styles.header}>
            <View style={styles.viewDay}>
              <Text style={styles.textHeader}>利用日時</Text>
            </View>
            <View style={styles.shopNameView}>
              <Text style={styles.textHeader}>店舖</Text>
            </View>
            <View style={styles.statusView}>
              <Text style={styles.textStatus}>アクション</Text>
            </View>
            <View style={styles.pointView}>
              <Text style={styles.textHeader}>ポイント</Text>
            </View>
          </TouchableOpacity>
          {historyInfo?.map((info, index) => (
            <TouchableOpacity style={styles.history} key={index}>
              <View style={styles.viewDay}>
                <Text style={styles.day}>{convertDay(info?.created_at)}</Text>
              </View>
              <View style={styles.shopNameView}>
                <Text style={styles.textHistory} numberOfLines={1}>
                  {info?.shop?.name}
                </Text>
              </View>
              <View style={styles.statusView}>
                {info?.reason === 3 && (
                  <Text style={styles.textStatus}>利用済みのポイント</Text>
                )}
                {info?.reason === 2 && (
                  <Text style={styles.textStatus}>登録ポイント</Text>
                )}
                {info?.reason === 1 && (
                  <Text style={styles.textStatus}>来店ポイント</Text>
                )}
              </View>
              <View style={styles.pointView}>
                <Text style={styles.textPoint}>{info?.point}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {loadingHistory && (
          <ActivityIndicator size="small" color={colors.mediumGrey} />
        )}
      </ScrollView>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...screenPadding,
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  day: {
    color: colors.darkGrey,
    fontSize: SIZES.title,
    fontWeight: '500',
  },
  header: {
    borderBottomWidth: 0.7,
    borderColor: colors.primaryGray,
    height: 60,
    width: '100%',
    ...globalStyles.flexRowCenterBetween,
    paddingLeft: 10,
    paddingRight: 10,
  },
  history: {
    ...globalStyles.flexRowCenterBetween,
    borderBottomWidth: 0.7,
    borderColor: colors.primaryGray,
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
  },
  indicator: {
    backgroundColor: colors.black,
    height: 4,
    width: 40,
  },
  pointView: {
    alignItems: 'flex-end',
    width: '20%',
  },
  shopNameView: {
    width: '10%',
  },
  statusView: {
    width: '35%',
  },
  textHeader: {
    color: colors.darkGrey,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: SIZES.title,
    fontWeight: '500',
  },
  textHistory: {
    color: colors.darkGrey,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: SIZES.title,
    fontWeight: '500',
    width: 50,
  },
  textPoint: {
    color: colors.darkGrey,
    fontSize: SIZES.title,
    fontWeight: '500',
  },
  textStatus: {
    color: colors.darkGrey,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: SIZES.title,
    fontWeight: '500',
    textAlign: 'center',
    width: 150,
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    letterSpacing: 1,
    textAlign: 'center',
  },
  viewDay: {
    width: '24%',
  },
});

export default BottomSelect;
