import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ios, globalStyles, screenPadding, SIZES} from '../../../themes';
import {Animated} from 'react-native';

function Content({title, product, animatedValue}) {
  const comments = product?.comment ? product?.comment?.split('\n') : [];

  const contentAnimationIOS = {
    marginTop: animatedValue.interpolate({
      inputRange: [0, 350],
      outputRange: [0, 350],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View style={[styles.content, ios && contentAnimationIOS]}>
        <View style={styles.contentView}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Text style={styles.productName}>{product?.category.name}</Text>
            <Text style={styles.productSource}>{title}</Text>
          </View>
          <View style={styles.weightGuild}>
            <Text style={styles.productWeight}>
              {product?.item_prices[0].kind}
            </Text>
            <Text style={styles.productGuild}>{product?.kodawari}</Text>
          </View>
          <View
            style={[
              styles.productType,
              {
                backgroundColor:
                  product?.type === 2 ? colors.normalBrown : colors.whiteBrown,
              },
            ]}>
            {product?.type === 2 ? (
              <Text style={styles.productText}>DARK</Text>
            ) : (
              <Text style={styles.productText}>MEDIUM</Text>
            )}
          </View>
        </View>
        <>
          {comments?.map((comment, index) => (
            <View key={index}>
              <Text style={styles.productDescription}>{comment}</Text>
            </View>
          ))}
        </>
        <Text style={styles.productPrice}>
          ¥{product?.item_prices[0]?.price}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    ...screenPadding,
    marginBottom:500
  },
  contentView: {
    height: 170,
    justifyContent: 'space-evenly',
    marginBottom: 0,
  },
  productDescription: {
    color: colors.grey,
    fontSize: SIZES.title,
    fontWeight: '600',
    lineHeight: 25,
  },
  productGuild: {
    color: colors.grey,
    fontSize: SIZES.font,
    fontWeight: '600',
  },
  productName: {
    color: colors.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: '600',
    lineHeight: 20,
  },
  productPrice: {
    color: colors.normalBlack,
    fontSize: SIZES.extraLarge,
    fontWeight: '600',
    marginBottom: 200,
    marginTop: 10,
  },
  productSource: {
    color: colors.normalBlack,
    fontSize: SIZES.medium,
    fontWeight: '600',
  },
  productText: {
    color: colors.white,
  },
  productType: {
    height: 20,
    width: 70,
    ...globalStyles.flexCenter,
    backgroundColor: colors.normalBrown,
    borderRadius: SIZES.base - 2,
  },
  productWeight: {
    color: colors.grey,
    fontSize: SIZES.medium,
    fontWeight: '500',
    marginRight: 20,
  },

  title: {
    color: colors.grey,
    fontSize: SIZES.extraLarge,
    fontWeight: '600',
  },
  weightGuild: {
    flexDirection: 'row',
  },
});
export default Content;
