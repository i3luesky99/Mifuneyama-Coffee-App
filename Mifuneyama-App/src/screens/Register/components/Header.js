import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, hitSlopIcon, SIZES } from "../../../themes";
import { TouchableOpacity } from "react-native";
import ArrowIcon from "../../../../assets/images/svg/arrow";
function Header({ title, back, navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <View style={{ width: "100%", alignItems: "center" }}>
        {back && (
          <TouchableOpacity
            hitSlop={hitSlopIcon}
            onPress={handleBack}
            style={styles.button}
          >
            <ArrowIcon style={styles.backIcon} />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    height: 20,
    width: 20,
  },
  button: {
    height: 20,
    left: 10,
    position: "absolute",
    width: 40,
  },
  header: {
    alignItems: "center",
    backgroundColor: COLORS.normalGrey,
    height: 50,
    justifyContent: "flex-end",
  },
  title: {
    color: COLORS.blackest,
    fontFamily: "NotoSansCJKjp-Regular",
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginBottom: 10,
  },
});
export default Header;
