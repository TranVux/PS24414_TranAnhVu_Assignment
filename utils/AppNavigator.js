import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import NavigatorScreen from '../Screens/NavigatorScreen'
import DetailScreen from '../Screens/DetailScreen'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import FillProfileScreen from '../Screens/FillProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppContext } from './AppContext'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const { isLogin } = useContext(AppContext);
    console.log(isLogin);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                !isLogin ?
                    <>
                        <Stack.Screen component={LoginScreen} name='LoginScreen' />
                        <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
                    </> :
                    <>
                        <Stack.Screen component={NavigatorScreen} name='NavigatorScreen' />
                        <Stack.Screen component={DetailScreen} name='DetailScreen' />
                        <Stack.Screen component={FillProfileScreen} name='FillProfileScreen' />
                    </>
            }
        </Stack.Navigator>
    )
}

export default AppNavigator