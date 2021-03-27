import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

import MainNavigator from './app/navigation/Navigator';
import DrawerNavigator from './app/navigation/drawer';

const App = () => {
  return <MainNavigator />;
  // return <DrawerNavigator />;
};

export default App;

const styles = StyleSheet.create({});

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Image,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {Avatar} from 'react-native-elements';
// import AvatarImage from './app/pics/images.png';
// import {FlatList} from 'react-native-gesture-handler';
// const allImages = [
//   {
//     image: require('./app/pics/download.jpeg'),
//     title: 'cricket',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/football.jpeg'),
//     title: 'football',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/tennis.jpeg'),
//     title: 'tennis',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/basketball.jpeg'),
//     title: 'basketball',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/download.jpeg'),
//     title: 'cricket',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/football.jpeg'),
//     title: 'football',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/tennis.jpeg'),
//     title: 'tennis',
//     marked: false,
//   },
//   {
//     image: require('./app/pics/basketball.jpeg'),
//     title: 'basketball',
//     marked: false,
//   },
// ];
// const selectedImage = [];
// const pressHandler = (item, selectedImage) => {
//   if (selectedImage.indexOf(item) === -1) {
//     selectedImage.push(item);
//     console.log(selectedImage);
//   }
// };
// const App = () => {
//   const renderImage = ({item}) => {
//     let isSelected = selectedImage.indexOf(item) === -1 ? false : true;
//     return (
//       <TouchableOpacity onPress={pressHandler(item, selectedImage)}>
//         <View
//           style={{
//             borderRadius: 10,
//             borderWidth: 1,
//             borderColor: '#fc6a4f',
//             elevation: 5,
//             margin: 10,
//             backgroundColor: 'white',
//             shadowColor: '#fc6a4f',
//           }}>
//           <Image
//             source={item.image}
//             style={{width: 110, height: 110, margin: 10}}
//           />

//           <Text
//             style={{
//               marginBottom: 10,
//               textAlign: 'center',
//               fontWeight: 'bold',
//             }}>
//             {item.title}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <ScrollView style={styles.container}>
//       <LinearGradient
//         colors={['#fc6a4f', '#1f4185']}
//         style={{flex: 1, alignItems: 'center'}}>
//         <View style={{width: '100%', Height: 747}}>
//           <Text
//             style={{
//               alignSelf: 'center',
//               color: 'white',
//               fontWeight: 'bold',
//               marginTop: 30,
//               marginBottom: 20,
//             }}>
//             Choose Multiple Categories
//           </Text>

//           <ScrollView
//             contentContainerStyle={{alignItems: 'center'}}
//             style={{
//               alignSelf: 'center',
//               backgroundColor: 'white',
//               height: 600,
//               borderRadius: 15,
//               width: '90%',
//               paddingVertical: 10,
//             }}>
//             <FlatList
//               data={allImages}
//               renderItem={renderImage}
//               numColumns="2"
//             />
//           </ScrollView>
//           <View
//             style={{
//               backgroundColor: '#fc6a4f',
//               width: '30%',
//               alignSelf: 'center',
//               margin: 20,
//               padding: 10,
//               borderRadius: 40,
//               elevation: 5,
//               shadowColor: 'white',
//             }}>
//             <Text
//               style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
//               DONE
//             </Text>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     height: 687,
//     width: '100%',
//   },
// });
