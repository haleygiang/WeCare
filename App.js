import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Authentication/Login/Login';
import Opening from './components/Authentication/Opening/Opening';
import Age from './components/Authentication/Registration/Age';
import DataPrivacy from './components/Authentication/Registration/DataPrivacy';
import Register from './components/Authentication/Registration/Register';
import Navigator from './routes/HomeStack'

function App(props) {
  return (
    <Navigator />
  );
}

export default App;