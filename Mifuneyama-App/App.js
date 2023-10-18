import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-web";
import AppNavigator from "./src/components/Navigation/AppNavigator";
import { COLORS, GLOBAL_STYLES } from "./src/themes";

export default function App() {
  const [fontsLoad] = useFonts({
    "ZuumeSoft-LightItalic": require("./assets/fonts/ZuumeSoft-LightItalic.ttf"),
  });

  if (!fontsLoad) {
    return (
      <View style={{ flex: 1, ...GLOBAL_STYLES.flexCenter }}>
        <ActivityIndicator size="large" color={COLORS.grey} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppNavigator />
      {/* <Text>dasdasd</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
