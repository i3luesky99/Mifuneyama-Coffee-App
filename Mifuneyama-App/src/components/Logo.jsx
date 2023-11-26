import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getImage} from '../apis/auth';
import {colors, globalStyles} from '../themes';

function Logo(props) {
  const {logo, latitude} = props;
  const marker = {image: require('../assets/images/png/icon.png')};
  const [logoPath, setLogoPath] = useState();
  const [loading, setLoading] = useState(true);
  const fetchLogo = async () => {
    try {
      setLoading(true);
      const {data} = await getImage(latitude !== -1000 ? logo : '');
      const fileReaderInstance = new FileReader();
      fileReaderInstance.readAsDataURL(data);
      fileReaderInstance.onload = () => {
        const base64 = fileReaderInstance.result;
        setLogoPath(latitude !== -1000 ? base64 : '');
      };
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
  useEffect(() => {
    fetchLogo();
  }, [latitude]);
  return (
    <>
      {latitude === -1000 ? (
        <></>
      ) : (
        <>
          {loading ? (
            <View style={styles.marker}>
              <ActivityIndicator size="small" color={colors.mediumGrey} />
            </View>
          ) : (
            <>
              {logo ? (
                <Image source={{uri: logoPath}} style={styles.marker} />
              ) : (
                <Image source={marker.image} style={styles.marker} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  marker: {
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 50,
    width: 50,
    ...globalStyles.flexCenter,
  },
});
export default Logo;
