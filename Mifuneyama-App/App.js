import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-web";
import AppNavigator from "./src/components/Navigation/AppNavigator";
import { COLORS, GLOBAL_STYLES } from "./src/themes";

export default function App() {
  const [fontsLoad] = useFonts({
    "ZuumeSoft-LightItalic": require("./assets/fonts/ZuumeSoft-LightItalic.ttf"),
    "Acumin Variable Concept": require("./assets/fonts/Acumin Variable Concept.ttf"),
    "Hiragino-Gothic1": require("./assets/fonts/Hiragino-Gothic1.ttf"),
    "Hiragino-Gothic2": require("./assets/fonts/Hiragino-Gothic2.ttf"),
    "Hiragino-Gothic3": require("./assets/fonts/Hiragino-Gothic3.ttf"),
    "Hiragino-Gothic4": require("./assets/fonts/Hiragino-Gothic4.ttf"),
    "Hiragino-Gothic5": require("./assets/fonts/Hiragino-Gothic5.ttf"),
    "Hiragino-Gothic6": require("./assets/fonts/Hiragino-Gothic6.ttf"),
    "Hiragino-Gothic8": require("./assets/fonts/Hiragino-Gothic8.ttf"),
    "NotoSansCJKjp-Black": require("./assets/fonts/NotoSansCJKjp-Black.ttf"),
    "NotoSansCJKjp-Bold": require("./assets/fonts/NotoSansCJKjp-Bold.ttf"),
    "NotoSansCJKjp-Regular": require("./assets/fonts/NotoSansCJKjp-Regular.ttf"),
    "SourceSansPro-Regular": require("./assets/fonts/SourceSansPro-Regular.ttf"),
    "ZuumeSoft-Light": require("./assets/fonts/NotoSansCJKjp-Regular.ttf"),
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
