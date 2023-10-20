import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useState, useEffect } from "react";
// import { getImage } from "../apis/auth";
import { COLORS, ios, SIZES } from "../themes";

function BoxChat(props) {
  const { home, shopDetail, boxChatDetail } = props;
  const path = boxChatDetail?.introductionIcon;
  const introduction = boxChatDetail?.introduction;
  const [icon, setIcon] = useState();
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const { data } = await getImage(path);
      if (data !== undefined) {
        const fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(data);
        fileReaderInstance.onload = () => {
          const base64 = fileReaderInstance.result;
          setIcon(base64);
        };
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
  useEffect(() => {
    path && fetchImages();
  }, [path]);

  return (
    <View style={[styles.centerContent, { marginTop: home ? 20 : 0 }]}>
      <View style={{}}>
        {path ? (
          <>
            {loading ? (
              <View style={[styles.staffIcon]}>
                <ActivityIndicator color={COLORS.grey} />
              </View>
            ) : (
              <Image style={[styles.staffIcon]} source={{ uri: icon }} />
            )}
          </>
        ) : (
          <Image
            source={require("../../assets/images/picture/staff.png")}
            style={[styles.staffIcon]}
          />
        )}
        <Text style={styles.staffText}>本店スタッフ</Text>
      </View>
      <View style={styles.boxChat}>
        <View style={styles.triangle} />
        {home && (
          <View style={{ height: 90, justifyContent: "center" }}>
            <Text style={styles.centerContentText}>
              もっとお客様との距離を珈琲で
            </Text>
            <Text style={styles.centerContentText}>
              近づけたらと、お店のアプリを作成
            </Text>
            <Text style={styles.centerContentText}>しました。</Text>
          </View>
        )}
        {shopDetail && (
          <>
            {introduction ? (
              <View style={{ paddingTop: 5, paddingBottom: 5 }}>
                <Text style={styles.centerContentText}>{introduction}</Text>
              </View>
            ) : (
              <View style={{ height: 110, justifyContent: "center" }}>
                <Text style={styles.centerContentText}>
                  本店では珈琲豆を焙煎しているところ
                </Text>
                <Text style={styles.centerContentText}>
                  を見る事ができます。
                </Text>
                <Text style={styles.centerContentText}>
                  自分好みの珈琲豆をお探しの際は、
                </Text>
                <Text style={styles.centerContentText}>
                  お気軽にスタッフまでお声掛けください。
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxChat: {
    backgroundColor: COLORS.normalGrey,
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 20,
    // width: "80%",
  },
  centerContent: {
    flexDirection: "row",
    // width: "100%",
  },
  centerContentText: {
    color: COLORS.blackest,
    fontSize: SIZES.title,
    fontWeight: "500",
    letterSpacing: -1,
    lineHeight: 20,
  },
  staffIcon: {
    borderRadius: 50,
    height: 60,
    marginLeft: -5,
    width: 60,
  },
  staffText: {
    color: COLORS.darkBrown,
    fontFamily: ios ? "NotoSansCJKjp-Black" : "Hiragino-Gothic6",
    fontSize: SIZES.small - 1,
    fontWeight: "400",
    lineHeight: 20,
    marginLeft: -5,
  },
  triangle: {
    backgroundColor: COLORS.transparent,
    borderBottomColor: COLORS.transparent,
    borderBottomWidth: 5,
    borderLeftColor: COLORS.transparent,
    borderLeftWidth: 0,
    borderRightColor: COLORS.normalGrey,
    borderRightWidth: 25,
    borderTopColor: COLORS.transparent,
    borderTopWidth: 15,
    height: 0,
    left: -10,
    position: "absolute",
    top: 20,
    width: 0,
  },
});
export default BoxChat;
