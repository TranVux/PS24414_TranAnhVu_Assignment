import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './Screens/DetailScreen'
import NavigatorScreen from './Screens/NavigatorScreen'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import FillProfileScreen from './Screens/FillProfileScreen';
import { AppContext, AppContextProvider } from './utils/AppContext';
import AppNavigator from './utils/AppNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppContextProvider>
  )
}

export default App
