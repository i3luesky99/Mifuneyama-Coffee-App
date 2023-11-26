import React, {useState} from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';

import GestureRecognizer from 'react-native-swipe-gestures';
import {useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import SkeletonView from './components/SkeletonView';
import HeaderAnimation from '../../components/HeaderAnimation';
import Content from './components/Content';
import {useEffect} from 'react';
import {FetchProductDetail} from '../../apis/products';
import {getImage} from '../../apis/auth';
import {colors, configSwipeGesture, ios, WINDOW_WIDTH} from '../../themes';
import ImageAnimation from '../../components/ImageAnimation';

function ProductDetail({navigation}) {
  const [loading, setLoading] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const imageHeight = WINDOW_WIDTH;
  const route = useRoute();
  const id = route?.params.id;
  const [product, setProduct] = useState();
  const [title, setTitle] = useState();
  const [images, setImages] = useState([]);
  const onSwipe = () => {
    navigation.goBack();
  };
  useEffect(() => {
    async function fetchDataProductDetail() {
      try {
        await Promise.all([FetchProductDetail(id)]).then(function (values) {
          const PRODUCT_DETAIL_DATA = values[0];
          Object.keys(PRODUCT_DETAIL_DATA).length &&
            setProduct(PRODUCT_DETAIL_DATA?.data);
          setTitle(PRODUCT_DETAIL_DATA?.data.name);

          const arr_product_image = PRODUCT_DETAIL_DATA?.data.item_images;
          if (arr_product_image.length > 0) {
            arr_product_image.map(async file_path => {
              const {data} = await getImage(file_path?.file_path);
              if (data !== undefined) {
                const fileReaderInstance = new FileReader();
                fileReaderInstance.readAsDataURL(data);
                fileReaderInstance.onload = () => {
                  const base64 = fileReaderInstance.result;
                  setImages(link => [
                    ...link,
                    {
                      id: file_path.id_image,
                      uri: base64,
                    },
                  ]);
                };
                setLoading(false);
              }
            });
          } else {
            setLoading(false);
          }
        });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchDataProductDetail();
  }, [id]);
  return (
    <>
      {ios ? (
        <View style={styles.container}>
          {loading ? (
            <SkeletonView imageHeight={imageHeight} />
          ) : (
            <View style={{flex: 1}}>
              <HeaderAnimation
                animatedValue={animatedValue}
                navigation={navigation}
                title={title}
              />
              <ImageAnimation
                animatedValue={animatedValue}
                images={images}
                navigation={navigation}
              />
              <ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={e => {
                  const offsetY = e.nativeEvent.contentOffset.y;
                  animatedValue.setValue(offsetY);
                }}
                scrollEventThrottle={16}>
                <Content
                  animatedValue={animatedValue}
                  title={title}
                  product={product}
                />
              </ScrollView>
            </View>
          )}
        </View>
      ) : (
        <GestureRecognizer
          style={{flex: 1}}
          onSwipeRight={onSwipe}
          config={configSwipeGesture}>
          <View style={styles.container}>
            {loading ? (
              <SkeletonView imageHeight={imageHeight} />
            ) : (
              <View style={{flex: 1}}>
                <HeaderAnimation
                  animatedValue={animatedValue}
                  navigation={navigation}
                  title={title}
                />
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  onScroll={e => {
                    const offsetY = e.nativeEvent.contentOffset.y;
                    animatedValue.setValue(offsetY);
                  }}
                  scrollEventThrottle={16}>
                  <ImageAnimation
                    animatedValue={animatedValue}
                    images={images}
                  />

                  <Content
                    animatedValue={animatedValue}
                    title={title}
                    product={product}
                    images={images}
                  />
                </ScrollView>
              </View>
            )}
          </View>
        </GestureRecognizer>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default ProductDetail;
