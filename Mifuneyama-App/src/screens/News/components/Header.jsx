import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, GLOBAL_STYLES, ios } from "../../../themes";
import Icon from "./Icon";

function Header({
  animatedValue,
  categoryID,
  setCategoryID,
  setCategoryName,
  categoryList,
}) {
  const height = 160;
  const headerAnimation = ({ height, heightOutput, paddingTop }) => {
    return {
      height: animatedValue.interpolate({
        inputRange: [0, 200],
        outputRange: [height, heightOutput],
        extrapolate: "clamp",
      }),
      paddingTop: animatedValue.interpolate({
        inputRange: [0, 200],
        outputRange: [0, paddingTop],
        extrapolate: "clamp",
      }),
    };
  };

  const iconAnimation = () => {
    return {
      width: animatedValue.interpolate({
        inputRange: [0, height],
        outputRange: [65, 40],
        extrapolate: "clamp",
      }),
      height: animatedValue.interpolate({
        inputRange: [0, height],
        outputRange: [65, 40],
        extrapolate: "clamp",
      }),
    };
  };

  const onHandleToChangeCategoryID = (id, category_name) => {
    setCategoryID(id);
    setCategoryName(category_name);
  };
  const renderCategories = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemList}>
        <TouchableOpacity
          onPress={() =>
            onHandleToChangeCategoryID(item?.id * 1, item.category_name)
          }
          style={[
            styles.category,
            {
              borderColor: COLORS.green,
              borderWidth: item?.id * 1 === categoryID ? 2 : 0,
            },
          ]}
        >
          <Animated.View style={[styles.icon, iconAnimation()]}>
            <Icon path={item?.icon} />
          </Animated.View>
        </TouchableOpacity>
        <Text style={[styles.textList, { fontSize: 12 }]}>{item?.name}</Text>
      </View>
    );
  };
  return (
    <Animated.View
      style={[
        headerAnimation(
          ios
            ? {
                height: 200,
                paddingTop: 20,
                heightOutput: 120,
              }
            : { height: 160, paddingTop: 0, heightOutput: 90 }
        ),
        styles.content,
      ]}
    >
      <FlatList
        data={categoryList}
        renderItem={renderCategories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `key-key-${item.id}`}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  category: {
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 20,
  },
  content: {
    backgroundColor: COLORS.white,
    paddingLeft: 20,
  },
  icon: {
    borderRadius: 50,
    ...GLOBAL_STYLES.flexCenter,
  },
  itemList: {
    ...GLOBAL_STYLES.flexCenter,
  },
  textList: {
    color: COLORS.black,
    fontWeight: "600",
    marginRight: 20,
  },
});
export default Header;
