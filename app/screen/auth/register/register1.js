import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const register1 = props => {
  return (
    <View style={styles.container}>
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

        <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
          Create your account
        </Text>

        <View
          style={{
            width: '90%',

            backgroundColor: 'white',
            borderRadius: 25,

            marginTop: 20,
            alignItems: 'center',
            padding: 20,
          }}>
          <View style={{width: '100%'}}>
            <Text style={{color: 'grey', marginTop: 20, fontWeight: 'bold'}}>
              Username *
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: '100%',
                height: 30,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={{color: 'grey', marginTop: 20, fontWeight: 'bold'}}>
              Email *
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: '100%',
                height: 30,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={{color: 'grey', marginTop: 20, fontWeight: 'bold'}}>
              Password*
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: '100%',
                height: 30,
                marginTop: 10,
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: '#fd694f',
              borderRadius: 30,
              width: '100%',
              marginBottom: 10,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Register2');
              }}>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  padding: 10,
                  color: 'white',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color: '#383838'}}>
              or Register using Social Media
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Icon name="facebook-square" size={30} style={{marginRight: 10}} />
            <Icon name="facebook" size={30} />
          </View>
        </View>
        <View>
          <Text style={{color: 'white', marginTop: 15}}>
            Already have an account ?{' '}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Register1');
              }}>
              <Text style={{color: '#cbd94c'}}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default register1;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
