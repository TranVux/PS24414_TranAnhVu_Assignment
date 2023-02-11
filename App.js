import { StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './Screens/DetailScreen'
import NavigatorScreen from './Screens/NavigatorScreen'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import FillProfileScreen from './Screens/FillProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="NavigatorScreen">
        <Stack.Screen component={NavigatorScreen} name='NavigatorScreen' />
        <Stack.Screen component={DetailScreen} name='DetailScreen' />
        <Stack.Screen component={LoginScreen} name='LoginScreen' />
        <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
        <Stack.Screen component={FillProfileScreen} name='FillProfileScreen' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
