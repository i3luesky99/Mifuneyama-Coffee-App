import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, GLOBAL_STYLES, SIZES } from "../../../themes";
import ImageNew from "./ImageNew";
import { WINDOW_HEIGHT } from "../../../themes/themes";

function Content(props) {
  const { navigation, arr_news_sort_by_category_id } = props;
  const handleOpenDetail = (new_detail) => {
    navigation.navigate("NewDetail", { new_detail: new_detail });
  };

  const fetchImage = async () => {};
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      {arr_news_sort_by_category_id?.length > 0 ? (
        <>
          {arr_news_sort_by_category_id?.map((new_detail, index) => (
            <View key={`key-${index}`}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => handleOpenDetail(new_detail)}
                style={[
                  styles.content,
                  index === arr_news_sort_by_category_id.length - 1 && {
                    marginBottom: 80,
                  },
                ]}
              >
                <ImageNew index={index} path={new_detail.path} />
                <View style={styles.bottomText}>
                  <Text style={styles.title}>{new_detail?.title}</Text>
                </View>
                <Text style={styles.textBottom}>グレー</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      ) : (
        <View style={styles.noDataText}>
          <Text>Không có kết quả nào được tìm thấy.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    bottom: 30,
    justifyContent: "space-evenly",
    paddingLeft: "6%",
    position: "absolute",
  },
  container: {
    flex: 1,
  },

  noDataText: {
    height: WINDOW_HEIGHT / 1.5,
    ...GLOBAL_STYLES.flexCenter,
  },
  text: {
    color: COLORS.white,
    elevation: 20,
    fontSize: SIZES.font,
    fontWeight: "500",
    shadowColor: COLORS.blackest,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  textBottom: {
    bottom: 10,
    color: COLORS.black,
    fontSize: SIZES.font,
    fontWeight: "600",
    left: 10,
    position: "absolute",
  },

  title: {
    color: COLORS.darkGrey,
    elevation: 20,
    fontSize: SIZES.large,
    fontWeight: "500",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
});
export default Content;
