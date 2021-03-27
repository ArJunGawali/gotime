import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import dashboard from '../screen/dashboard';

const Drawer = createDrawerNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Nav;
