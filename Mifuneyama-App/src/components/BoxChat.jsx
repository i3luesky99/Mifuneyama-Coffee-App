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
      <View>
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
        <Text style={styles.staffText}>Nhân viên</Text>
      </View>
      <View style={styles.boxChat}>
        <View style={styles.triangle} />
        {home && (
          <View
            style={{
              height: 100,
              justifyContent: "center",
              width: 280,
              alignItems: "center",
            }}
          >
            <Text style={styles.centerContentText}>
              Chúng tôi đã tạo một ứng dụng cho cửa hàng của mình với hy vọng
              đưa chúng tôi đến gần hơn với khách hàng thông qua cà phê.
            </Text>
          </View>
        )}
        {shopDetail && (
          <>
            {introduction ? (
              <View style={{ paddingTop: 5, paddingBottom: 5 }}>
                <Text style={styles.centerContentText}>{introduction}</Text>
              </View>
            ) : (
              <View
                style={{
                  height: 90,
                  justifyContent: "center",
                  width: 250,
                  alignItems: "center",
                }}
              >
                <Text style={styles.centerContentText}>
                  Tại cửa hàng chính, bạn có thể xem hạt cà phê được rang. Nếu
                  bạn đang tìm kiếm hạt cà phê yêu thích của mình, vui lòng hỏi
                  nhân viên của chúng tôi.
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
    paddingLeft: 10,
    paddingRight: 10,
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
    lineHeight: 20,
    textAlign: "justify",
  },
  staffIcon: {
    borderRadius: 50,
    height: 60,
    marginLeft: -5,
    width: 60,
  },
  staffText: {
    color: COLORS.darkBrown,
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
