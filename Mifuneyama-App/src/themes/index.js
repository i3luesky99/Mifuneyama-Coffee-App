import { Platform } from "react-native";

const COLORS = {
  white: "#FFFFFF",
  brown: "#3b1d1d",
  brownLight: "#484848",
  yellowLight: "#c5bd5f",
  lightWhite: "#f7f6e4",
  buttonGray: "#DDDDDD",
  lightBrown: "#313131",
  grey: "#a3a3a3",
  yellow: "#9d874a",
  primaryBrown: "#231917",
  lightRed: "#e95740",
  lightGray: "#898989",
  primaryGray: "#9e9e9e",
  black: "#565454",
  mediumGrey: "#c2c3be",
  lightestGrey: "#f8f4f4",
  normalBlack: "#373737",
  normalBrown: "#532d20",
  normalGrey: "#f4f4f4",
  whiteBrown: "#936c5b",
  green: "#d4ec64",
  trueBrown: "#391e1e",
  red: "#ff0000",
  blue: "#4d86c5",
  lightBlue: "#55aeb4",
  brownLightest: "#d4cc6c",
  transparent: "transparent",
  darkBrown: "#323333",
  yellowLightest: "#f1eed0",
  blackest: "#080404",
  lightestRed: "#f05c54",
  darkRed: "#d05c4c",
  lightBlack: "#242526",
  darkGrey: "#4c4c4c",
  blueLighter: "#2487fc",
};

const GLOBAL_STYLES = {
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexCenterEvenly: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexCenterBetween: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowCenterEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

const SIZES = {
  base: 8,
  small: 12,
  font: 13,
  title: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  huge: 36,
  iconWidth: 25,
  iconHeight: 25,
};

const SCREEN_PADDING = {
  paddingLeft: 20,
  paddingRight: 20,
};

const configSwipeGesture = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 150,
};

const hitSlopIcon = {
  top: 40,
  right: 20,
  bottom: 40,
  left: 20,
};

const ios = Platform.OS === "ios";

const buttonSave = {
  borderWidth: 1,
  height: 35,
  width: 55,
  ...GLOBAL_STYLES.flexCenter,
  borderColor: COLORS.blue,
  borderRadius: SIZES.base,
};

const buttonCancel = {
  borderWidth: 1,
  height: 35,
  width: 85,
  ...GLOBAL_STYLES.flexCenter,
  borderColor: COLORS.lightRed,
  borderRadius: SIZES.base,
  marginRight: 5,
};

export {
  buttonSave,
  buttonCancel,
  COLORS,
  GLOBAL_STYLES,
  SIZES,
  SCREEN_PADDING,
  configSwipeGesture,
  hitSlopIcon,
  ios,
};
