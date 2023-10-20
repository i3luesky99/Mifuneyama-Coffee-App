import { Dimensions } from "react-native";

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");

const getLocationMarker = (shop, position) => {
  if (parseFloat(shop?.google_map?.split("@")[1])) {
    return parseFloat(shop?.google_map?.split("@")[1]?.split(",")[position]);
  } else {
    return 0;
  }
};
const onSwipe = (navigation) => {
  navigation.goBack();
};

export const imageAnimationFunction = (animatedValue) => {
  return {
    marginBottom: 30,
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH,
    opacity: animatedValue.interpolate({
      inputRange: [0, 200, 500],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    }),
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 150, 350],
          outputRange: [1.2, 1, 1],
          extrapolate: "clamp",
        }),
      },
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 150, 350],
          outputRange: [1.2, 1, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };
};

export const imageAnimationIOSFunction = (animatedValue) => {
  return {
    marginBottom: 25,
    width: WINDOW_WIDTH,
    opacity: animatedValue.interpolate({
      inputRange: [0, 200, 350],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    }),
    height: animatedValue.interpolate({
      inputRange: [0, 350],
      outputRange: [WINDOW_WIDTH, 100],
      extrapolate: "clamp",
    }),
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 150, 350],
          outputRange: [1.1, 1, 1],
          extrapolate: "clamp",
        }),
      },
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 150, 350],
          outputRange: [1.1, 1, 1],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 150, 350],
          outputRange: [0, 0, -20],
          extrapolate: "clamp",
        }),
      },
    ],
  };
};

export const opacityAnimationFunction = (animatedValue) => {
  return {
    opacity: animatedValue.interpolate({
      inputRange: [0, 10],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };
};

export const scrollToTopFunction = (animatedValue) => {
  animatedValue.current?.scrollTo({
    y: 0,
    animated: true,
  });
};

export const [screen_extra_small, screen_small, screen_medium, screen_large] = [
  WINDOW_HEIGHT.toFixed() <= 600,
  WINDOW_HEIGHT.toFixed() <= 740 && WINDOW_HEIGHT.toFixed() > 600,
  WINDOW_HEIGHT.toFixed() > 740 && WINDOW_HEIGHT.toFixed() < 850,
  WINDOW_HEIGHT.toFixed() >= 850,
];

export const [screen_width_small, screen_width_medium, screen_width_large] = [
  WINDOW_WIDTH.toFixed() < 390,
  WINDOW_WIDTH.toFixed() >= 390 && WINDOW_WIDTH.toFixed() <= 400,
  WINDOW_WIDTH.toFixed() > 400 && WINDOW_WIDTH.toFixed() <= 420,
];

export { getLocationMarker, onSwipe };
