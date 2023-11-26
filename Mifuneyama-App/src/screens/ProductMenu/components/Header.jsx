import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ArrowIcon from "../../../../assets/images/svg/arrow";
import {
  COLORS,
  GLOBAL_STYLES,
  SIZES,
  hitSlopIcon,
  ios,
} from "../../../themes";
import { scrollToTopFunction } from "../../../themes/themes";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Header = ({
  navigation,
  categories,
  animatedValue,
  categoryId,
  setCategoryId,
  title,
}) => {
  const headerHeight = 230;
  const ChangeTopAnimated = (minHeight) => {
    return {
      height: animatedValue.interpolate({
        inputRange: [0, 250],
        outputRange: [headerHeight, minHeight],
        extrapolate: "clamp",
      }),
      paddingLeft: animatedValue.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 30],
        extrapolate: "clamp",
      }),
    };
  };

  const iconAnimation = {
    width: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [65, 40],
      extrapolate: "clamp",
    }),
    height: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [65, 40],
      extrapolate: "clamp",
    }),
  };
  const changeTextAnimated = (initialFontSize) => {
    return {
      fontSize: animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [initialFontSize, 0],
        extrapolate: "clamp",
      }),
      opacity: animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: "clamp",
      }),
    };
  };
  const changHeaderAnimated = () => {
    return {
      height: animatedValue.interpolate({
        inputRange: [0, 200],
        outputRange: [70, 0],
        extrapolate: "clamp",
      }),
      width: animatedValue.interpolate({
        inputRange: [0, 200],
        outputRange: [200, 0],
        extrapolate: "clamp",
      }),
    };
  };

  const changeAnimatedIconBack = (minTop) => {
    return {
      top: animatedValue.interpolate({
        inputRange: [0, 200],
        outputRange: [40, minTop],
        extrapolate: "clamp",
      }),
    };
  };

  const onHandleToChangeCategoryId = (id) => {
    setCategoryId(id);
    scrollToTopFunction(animatedValue);
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderCategories = ({ item }) => {
    return (
      <View style={styles.categoryList}>
        <TouchableOpacity onPress={() => onHandleToChangeCategoryId(item?.id)}>
          <AnimatedImage
            style={[
              styles.category,
              iconAnimation,
              item?.id === categoryId && {
                borderWidth: 2,
                borderColor: COLORS.green,
              },
            ]}
            source={require("../../../../assets/images/picture/cafe1.png")}
          />
        </TouchableOpacity>
        <Text style={styles.textList}>{item?.name}</Text>
      </View>
    );
  };
  return (
    <Animated.View
      style={[
        ChangeTopAnimated(ios ? 125 : 110),
        {
          ...GLOBAL_STYLES.flexCenter,
        },
      ]}
    >
      <Animated.View style={[changHeaderAnimated()]}>
        <Animated.Text
          style={[styles.title, changeTextAnimated(SIZES.large + 2)]}
        >
          {title?.shopName}
          {title?.mainShop === 1 && <Text style={styles.title}>(本店)</Text>}
        </Animated.Text>
        <Animated.Text
          style={[styles.textTitle, changeTextAnimated(SIZES.large)]}
        >
          Menu quán
        </Animated.Text>
      </Animated.View>
      <View style={styles.list}>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          horizontal={true}
          // showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `key-key-${item.id}-key`}
        />
      </View>
      <AnimatedTouchableOpacity
        onPress={handleGoBack}
        hitSlop={hitSlopIcon}
        style={[styles.icon, changeAnimatedIconBack(ios ? 40 : 30)]}
      >
        <ArrowIcon fill={COLORS.primaryGray} />
      </AnimatedTouchableOpacity>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  category: {
    borderRadius: 50,
    marginBottom: -5,
    marginRight: 25,
    ...GLOBAL_STYLES.flexCenter,
  },
  categoryList: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  icon: {
    height: 25,
    left: 10,
    position: "absolute",
    width: 40,
    zIndex: 10,
  },
  list: {
    ...GLOBAL_STYLES.flexCenter,
    flexDirection: "row",
    paddingLeft: 20,
  },
  textList: {
    color: COLORS.black,
    fontSize: SIZES.font,
    fontWeight: "600",
    marginRight: 25,
    marginTop: 10,
  },
  textTitle: {
    color: COLORS.normalBlack,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
  },

  title: {
    color: COLORS.normalBlack,
    fontWeight: "600",
    textAlign: "center",
  },
});
