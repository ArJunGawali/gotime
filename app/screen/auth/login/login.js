import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const login = props => {
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
        <Text style={{fontSize: 24, color: 'white'}}>Hello ...</Text>
        <Text style={{fontSize: 18, color: 'white'}}>
          Sign in to your account
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
            <Text style={{color: 'grey', marginTop: 20}}>Email</Text>
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
            <Text style={{color: 'grey', marginTop: 20}}>Password</Text>
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
            style={{alignSelf: 'flex-end', marginTop: 10, marginBottom: 10}}>
            <Text>Forgot Password </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fc6a4f',
              borderRadius: 30,
              width: '100%',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  padding: 10,
                  color: 'white',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>or login using social media</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Icon name="facebook-square" size={30} style={{marginRight: 10}} />
            <Icon name="facebook" size={30} />
          </View>
        </View>
        <View>
          <Text style={{color: 'white', marginTop: 15}}>
            Don't have an account ?{' '}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Register1');
              }}>
              <Text style={{color: '#cbd94c', marginTop: 15}}>
                Register now
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
