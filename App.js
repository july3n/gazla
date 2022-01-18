import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import MapScreen from './src/screens/MapScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator(
    {
      Map: MapScreen,
      Account: AccountScreen,
    },
    {
      tabBarOptions: {
        // activeTintColor: 'orangered',
        labelStyle: {
          fontSize: 14,
          marginBottom: 15,
        },
      },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={navigator => setNavigator(navigator)} />
      </AuthProvider>
    </LocationProvider>
  );
};
