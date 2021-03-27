import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {color} from 'react-native-reanimated';

export default class dashboard extends Component {
  state = {
    category1: true,
    category2: true,
    category3: true,
  };

  render() {
    return (
      <LinearGradient
        colors={['#fc6a4f', '#1f4185']}
        style={styles.backgroundGradientColor}>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.profileContainer}>
              <View style={styles.profileImg}>
                <Image
                  source={require('../pics/football.jpeg')}
                  style={{height: 80, width: 80}}
                />
              </View>
              <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>Johndoe@gmail.com</Text>
              </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <Text style={{marginStart: 10, fontSize: 16}}>
                Your selected categories
              </Text>
              <TouchableOpacity style={styles.editCategory}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              {this.state.category1 ? (
                <View style={styles.category}>
                  <Image
                    source={require('../pics/football.jpeg')}
                    style={{height: 60, width: 50, marginVertical: 5}}
                  />
                  <Text>Cricket</Text>
                </View>
              ) : null}
              {this.state.category1 ? (
                <View style={styles.category}>
                  <Image
                    source={require('../pics/football.jpeg')}
                    style={{height: 60, width: 50, marginVertical: 5}}
                  />
                  <Text>Football</Text>
                </View>
              ) : null}
              {this.state.category1 ? (
                <View style={styles.category}>
                  <Image
                    source={require('../pics/basketball.jpeg')}
                    style={{height: 60, width: 50, marginVertical: 5}}
                  />
                  <Text>Basket Ball</Text>
                </View>
              ) : null}
            </View>
            <Text
              style={{
                marginStart: 10,
                marginVertical: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              New Events
            </Text>
            <View style={{margin: 20, flexDirection: 'row'}}>
              <View style={styles.eventImgContainer}>
                <Image
                  source={require('../pics/basketball.jpeg')}
                  style={{height: 50, width: 50}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                }}>
                <Text style={styles.eventsTitle}>Basket Ball Championship</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'gray',
                    alignItems: 'center',
                    marginStart: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}>
                  28 oct 2020
                </Text>
              </View>
            </View>

            <View
              style={{marginStart: 20, borderRadius: 10, flexDirection: 'row'}}>
              <View style={styles.eventImgContainer}>
                <Image
                  source={require('../pics/football.jpeg')}
                  style={{height: 50, width: 50}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                }}>
                <Text style={styles.eventsTitle}>Cricket Championship</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'gray',
                    alignItems: 'center',
                    marginStart: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}>
                  01 Nov 2020
                </Text>
              </View>
            </View>

            <Text style={styles.challengesHeading}>Challenges</Text>
            <View style={{margin: 20, flexDirection: 'row'}}>
              <View style={styles.eventImgContainer}>
                <Image
                  source={require('../pics/basketball.jpeg')}
                  style={{height: 50, width: 50}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                }}>
                <Text style={styles.eventsTitle}>Basket Ball Challenge</Text>
                <Text
                  style={{
                    width: 100,
                    fontSize: 12,
                    color: 'gray',
                    alignItems: 'center',
                    marginStart: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}>
                  28 oct 2020
                </Text>
              </View>
              <Text style={styles.joinedPlayers}>150 joined</Text>
            </View>

            <View style={{marginStart: 20, flexDirection: 'row'}}>
              <View style={styles.eventImgContainer}>
                <Image
                  source={require('../pics/basketball.jpeg')}
                  style={{height: 50, width: 50}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                }}>
                <Text style={styles.eventsTitle}>Hockey Challenge</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'gray',
                    alignItems: 'center',
                    marginStart: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}>
                  01 Nov 2020
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{height: 50, width: '100%', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.createNewEventBtn}>
            <Text style={{fontSize: 18, color: 'white'}}>Create New Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createNewChallengeBtn}>
            <Text style={{fontSize: 18, color: 'white'}}>
              Create New Challenge
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  backgroundGradientColor: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    height: '80%',
    width: '90%',
    backgroundColor: '#fff',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  profileContainer: {
    margin: 20,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  profileImg: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  name: {
    marginStart: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    alignItems: 'center',
    marginStart: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  editCategory: {
    marginStart: 50,
    height: 30,
    width: 80,
    backgroundColor: '#f57542',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    height: 100,
    width: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginStart: 10,
    alignItems: 'center',
  },
  challengesHeading: {
    marginStart: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  joinedPlayers: {
    fontSize: 12,
    color: 'gray',
    alignItems: 'center',
    marginStart: 10,
    marginTop: 5,
    borderRadius: 10,
    textAlignVertical: 'bottom',
  },
  createNewEventBtn: {
    width: '50%',
    height: 50,
    backgroundColor: '#fc6a4f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createNewChallengeBtn: {
    width: '50%',
    height: 50,
    backgroundColor: '#1f4185',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventsTitle: {
    marginStart: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  eventImgContainer: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
});
