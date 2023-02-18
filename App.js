import { StatusBar, StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppContext, AppContextProvider } from './utils/AppContext';
import AppNavigator from './utils/AppNavigator';
import { Colors } from './assets/constants/Colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <AppNavigator />
      </NavigationContainer>
    </AppContextProvider>
  )
}

export default App
