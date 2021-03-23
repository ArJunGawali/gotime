import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import login from '../screen/auth/login/login';

const MainNavigator = createStackNavigator({
  login: login,
});

export default createAppContainer(MainNavigator);
