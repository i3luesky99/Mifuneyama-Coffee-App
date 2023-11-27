// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import {colors, globalStyles, screenPadding} from '../../themes';
// import {PersonIcon, PictureIcon} from '../../assets/images/svg';
// import ImageView from 'react-native-image-viewing';

// function BottomSelect(props) {
//   const {refRBSheet, avatar, onPickImage, profileImage, refRBProfile} = props;
//   const images = [
//     {
//       uri: profileImage || avatar,
//     },
//   ];
//   const [visible, setIsVisible] = useState(false);
//   const openViewImage = () => {
//     if (profileImage || avatar) {
//       setIsVisible(true);
//     } else {
//       return;
//     }
//   };
//   return (
//     <RBSheet
//       ref={refRBSheet || refRBProfile}
//       closeOnDragDown={true}
//       closeOnPressMask={true}
//       height={260}
//       customStyles={{
//         container: {
//           ...styles.container,
//         },
//         draggableIcon: {
//           ...styles.indicator,
//         },
//       }}>
//       <View style={styles.bottomSheet}>
//         <TouchableOpacity style={styles.button} onPress={onPickImage}>
//           <View style={styles.iconView}>
//             <PictureIcon style={styles.iconPicture} fill={colors.white} />
//           </View>
//           <Text style={styles.textButton}>変更</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={openViewImage}>
//           <View style={styles.iconView}>
//             <PersonIcon style={styles.iconPerson} fill={colors.white} />
//           </View>
//           <Text style={styles.textButton}>見る</Text>
//         </TouchableOpacity>
//       </View>
//       <ImageView
//         images={images}
//         imageIndex={0}
//         visible={visible}
//         onRequestClose={() => setIsVisible(false)}
//       />
//     </RBSheet>
//   );
// }

// const styles = StyleSheet.create({
//   bottomSheet: {
//     height: 120,
//     justifyContent: 'space-evenly',
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   button: {
//     ...globalStyles.flexRowCenter,
//     borderBottomWidth: 0.7,
//     borderColor: colors.primaryGray,
//     height: 60,
//     paddingLeft: 10,
//   },
//   container: {
//     backgroundColor: colors.white,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     ...screenPadding,
//   },
//   iconPerson: {
//     height: 23,
//     width: 23,
//   },
//   iconPicture: {
//     height: 19,
//     width: 19,
//   },
//   iconView: {
//     backgroundColor: colors.black,
//     borderRadius: 50,
//     height: 38,
//     width: 38,
//     ...globalStyles.flexCenter,
//   },
//   indicator: {
//     backgroundColor: colors.black,
//     height: 4,
//     width: 40,
//   },
//   textButton: {
//     color: colors.black,
//     fontFamily: 'NotoSansCJKjp-Regular',
//     fontWeight: '500',
//     marginLeft: 10,
//   },
// });

// export default BottomSelect;
