import login from '../screen/auth/login/login';
import register1 from '../screen/auth/register/register1';
import register2 from '../screen/auth/register/register2';
import register3 from '../screen/auth/register/register3';
import home from '../screen/dashboard';
import category from '../screen/multiCategories';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from './drawer';

const defaultNav = {
  headerShown: false,
};

const StackNavigator = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={defaultNav}>
        <StackNavigator.Screen name="Register1" component={register1} />
        <StackNavigator.Screen name="Register2" component={register2} />
        <StackNavigator.Screen name="Register3" component={register3} />
        <StackNavigator.Screen name="Login" component={login} />
        <StackNavigator.Screen name="Home" component={home} />
        <StackNavigator.Screen name="Category" component={category} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import login from '../screen/auth/login/login';
// import register1 from '../screen/auth/register/register1';
// import register2 from '../screen/auth/register/register2';
// import register3 from '../screen/auth/register/register3';
// import home from '../screen/dashboard';
// import category from '../screen/multiCategories';
// const defaultNav = {
//   headerShown: false,
// };
// const LoginStack = createStackNavigator(
//   {
//     login: login,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );
// const Register1Stack = createStackNavigator(
//   {
//     register1: register1,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );
// const Register2Stack = createStackNavigator(
//   {
//     register2: register2,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );
// const Register3Stack = createStackNavigator(
//   {
//     register3: register3,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );

// const HomeStack = createStackNavigator(
//   {
//     home: home,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );
// const CatStack = createStackNavigator(
//   {
//     category: category,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );

// const MainNavigator = createStackNavigator(
//   {
//     Register1: Register1Stack,
//     Register2: Register2Stack,
//     Register3: Register3Stack,
//     Login: LoginStack,
//     Home: HomeStack,
//     Category: CatStack,
//   },
//   {
//     defaultNavigationOptions: defaultNav,
//   },
// );

// export default createAppContainer(MainNavigator);
