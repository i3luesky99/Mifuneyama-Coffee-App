import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../themes";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <Text style={styles.headingText}>HELLO !!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    ...GLOBAL_STYLES.flexCenter,
  },

  contentWrap: {
    ...GLOBAL_STYLES.flexCenter,
    width: "100%",
  },

  headingText: {
    color: COLORS.blackest,
    fontFamily: "ZuumeSoft-LightItalic",
    fontSize: SIZES.huge + 30,
    textAlign: "center",
    width: "100%",
  },
});
