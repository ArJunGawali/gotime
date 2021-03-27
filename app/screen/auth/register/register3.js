import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Avatar} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarImage from '../../../pics/images.png';

const allImages = [
  {
    image: require('../../../pics/download.jpeg'),
    title: 'cricket',
    marked: false,
  },
  {
    image: require('../../../pics/football.jpeg'),
    title: 'football',
    marked: false,
  },
  {
    image: require('../../../pics/tennis.jpeg'),
    title: 'tennis',
    marked: false,
  },
  {
    image: require('../../../pics/basketball.jpeg'),
    title: 'basketball',
    marked: false,
  },
  {
    image: require('../../../pics/download.jpeg'),
    title: 'cricket',
    marked: false,
  },
  {
    image: require('../../../pics/football.jpeg'),
    title: 'football',
    marked: false,
  },
  {
    image: require('../../../pics/tennis.jpeg'),
    title: 'tennis',
    marked: false,
  },
  {
    image: require('../../../pics/basketball.jpeg'),
    title: 'basketball',
    marked: false,
  },
];

const register3 = props => {
  const renderImage = ({item}) => {
    return (
      <Image source={item.image} style={{height: 100, width: 100, margin: 5}} />
    );
  };
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#1f4185']}
        style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 48,
            fontWeight: 'bold',
            marginTop: 70,
            marginBottom: 30,
          }}>
          LOGO
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '600',
            alignSelf: 'flex-start',
            marginLeft: 20,
          }}>
          Choose your profile pic
        </Text>
        <ScrollView horizontal={true}>
          <View style={{margin: 10}}>
            <Avatar size="large" rounded source={AvatarImage} />
          </View>
          <View style={{margin: 10}}>
            <Avatar size="large" rounded source={AvatarImage} />
          </View>
          <View style={{margin: 10}}>
            <Avatar size="large" rounded source={AvatarImage} />
          </View>
          <View style={{margin: 10}}>
            <Avatar size="large" rounded source={AvatarImage} />
          </View>
        </ScrollView>

        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '600',
            alignSelf: 'flex-start',
            marginLeft: 20,
          }}>
          Choose multiple categories
        </Text>

        <View
          style={{
            width: '90%',

            backgroundColor: 'white',
            borderRadius: 25,

            marginTop: 20,
            alignItems: 'center',
            paddingVertical: 20,
            paddingLeft: 20,
          }}>
          <ScrollView horizontal={true}>
            <FlatList
              data={allImages}
              numColumns={allImages.length / 2}
              // horizontal={true}
              renderItem={renderImage}
            />
          </ScrollView>

          <View
            style={{
              backgroundColor: '#fc6a4f',
              width: '90%',
              padding: 10,
              alignItems: 'center',
              borderRadius: 20,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                DONE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignSelf: 'flex-start', marginLeft: 40, marginTop: 10}}>
          <Text
            style={{
              color: '#cbd94c',
              fontSize: 16,
            }}>
            Back
          </Text>
        </View>
        <View style={{width: '100%', height: 85}}></View>
      </LinearGradient>
    </ScrollView>
  );
};

export default register3;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
