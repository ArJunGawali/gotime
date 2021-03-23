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

const register2 = props => {
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
            <Text
              style={{
                color: 'grey',
                marginTop: 20,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Contact No.
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
              width: '100%',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={{width: '40%', marginRight: 22}}>
              <Text
                style={{
                  color: 'grey',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Age
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
            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: 'grey',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Weight
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}>
                <TextInput
                  style={{
                    width: '50%',
                    height: 30,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    width: '50%',
                    height: 30,
                    marginTop: 10,
                    fontSize: 18,
                    marginLeft: 45,
                    color: '#7b3f9a',
                  }}>
                  KG
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={{width: '40%', marginRight: 22}}>
              <Text
                style={{
                  color: 'grey',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Height
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}>
                <TextInput
                  style={{
                    width: '50%',
                    height: 30,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    width: '50%',
                    height: 30,
                    marginTop: 10,
                    fontSize: 18,
                    marginLeft: 20,
                    color: '#7b3f9a',
                  }}>
                  Feet
                </Text>
              </View>
            </View>

            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: 'grey',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}></Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}>
                <TextInput
                  style={{
                    width: '50%',
                    height: 30,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    width: '50%',
                    height: 30,
                    marginTop: 10,
                    fontSize: 18,
                    marginLeft: 20,
                    color: '#7b3f9a',
                  }}>
                  Inches
                </Text>
              </View>
            </View>
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
                props.navigation.navigate('Register3');
              }}>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  padding: 10,
                  color: 'white',
                }}>
                Next Step
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, alignSelf: 'flex-start', marginLeft: 40}}>
          <Text
            style={{
              color: '#cbd94c',
              marginTop: 15,
              textAlign: 'left',
              fontSize: 16,
            }}>
            {'< '}Back
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default register2;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
