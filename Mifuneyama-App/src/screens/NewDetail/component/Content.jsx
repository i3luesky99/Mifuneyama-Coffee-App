import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, ios, SCREEN_PADDING, SIZES } from "../../../themes";
import { Animated } from "react-native";

function Content({ newDetail, animatedValue }) {
  return (
    <View style={[styles.content]}>
      <View style={styles.contentHeader}>
        <Text style={styles.text}>{newDetail?.title}</Text>
      </View>
      <View
        style={{
          marginTop: 40,
          flex: 1,
        }}
      >
        <Text style={styles.textContent}>
          "Hành Trình Hương Vị Mới". Đến và khám phá những sản phẩm cafe mới,
          được chọn lọc kỹ lưỡng từ những hạt cà phê chất lượng cao từ các nguồn
          cung cấp uy tín trên thế giới.Chúng tôi đã tỉ mỉ chọn lựa từng hạt cà
          phê để tạo ra những tách cafe đặc biệt, với hương thơm và vị ngon
          tuyệt vời. Từ những hạt Arabica mềm mại đến hương vị độc đáo của
          Robusta, mỗi cốc cafe đều là một cuộc phiêu lưu mới trong thế giới
          hương vị. 📰 Thông Báo: Khám Phá Hương Vị Mới Tại Quán Cafe Chúng Tôi!
          ☕️ Chào quý khách yêu thương của [Tên Quán Cafe]! Chúng tôi vô cùng
          phấn khích thông báo đến bạn về sự kiện mới nhất tại quán - "Hành
          Trình Hương Vị Mới". Đến và khám phá những sản phẩm cafe mới, được
          chọn lọc kỹ lưỡng từ những hạt cà phê chất lượng cao từ các nguồn cung
          cấp uy tín trên thế giới. 🌍 Hành Trình Hương Vị: Chúng tôi đã tỉ mỉ
          chọn lựa từng hạt cà phê để tạo ra những tách cafe đặc biệt, với hương
          thơm và vị ngon tuyệt vời. Từ những hạt Arabica mềm mại đến hương vị
          độc đáo của Robusta, mỗi cốc cafe đều là một cuộc phiêu lưu mới trong
          thế giới hương vị. ☕️ Sản Phẩm Đặc Sắc: Cà Phê Đen Đậm: Cho những ai
          yêu thích vị đậm đà, đắng mạnh. Cà Phê Sữa Sáng Tạo: Một sự kết hợp
          hoàn hảo giữa cà phê và sữa, tạo nên hương vị riêng biệt và bổ dưỡng.
          Cà Phê Caramel Deluxe: Hòa quyện vị ngọt của caramel cùng hương vị độc
          đáo của cà phê.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-evenly",
    ...SCREEN_PADDING,
    flex: 1,
    marginBottom: 30,
  },
  contentHeader: {
    height: 50,
    justifyContent: "space-evenly",
  },

  text: {
    color: COLORS.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: "600",
    lineHeight: 20,
  },
  textContent: {
    fontSize: SIZES.title,
    lineHeight: 20,
    marginLeft: 10,
  },
});
export default Content;
