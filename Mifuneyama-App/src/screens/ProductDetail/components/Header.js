import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowIcon} from '../../../assets/images/svg';
import {colors, globalStyles, hitSlopIcon, SIZES} from '../../../themes';

function Header({animatedValue, imageHeight, navigation, title}) {
  const headerAnimated = {
    zIndex: animatedValue.interpolate({
      inputRange: [0, imageHeight - 250],
      outputRange: [0, 10],
      extrapolate: 'clamp',
    }),
    opacity: animatedValue.interpolate({
      inputRange: [0, imageHeight - 250],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const titleAnimated = {
    opacity: animatedValue.interpolate({
      inputRange: [0, imageHeight - 250],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <Animated.View style={[styles.header, headerAnimated]}>
      <Animated.Text style={[styles.title, titleAnimated, {marginTop: 20}]}>
        {title}
      </Animated.Text>
      <TouchableOpacity
        onPress={handleGoBack}
        hitSlop={hitSlopIcon}
        style={[styles.iconHeader, {top: 35}]}>
        <ArrowIcon fill={colors.primaryGray} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 80,
    position: 'absolute',
    width: '100%',
    ...globalStyles.flexCenter,
  },
  iconHeader: {
    height: 25,
    position: 'absolute',
    right: 10,
    top: 30,
    width: 40,
    zIndex: 11,
  },
  title: {
    color: colors.grey,
    fontSize: SIZES.extraLarge,
    fontWeight: '600',
  },
});
export default Header;
