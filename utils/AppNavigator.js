import React, { useContext } from 'react'
import NavigatorScreen from '../Screens/NavigatorScreen'
import DetailScreen from '../Screens/DetailScreen'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import FillProfileScreen from '../Screens/FillProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppContext } from './AppContext'
import CreationScreen from '../Screens/CreationScreen'
import EditProfileScreen from '../Screens/EditProfileScreen'
import SettingScreen from '../Screens/SettingScreen'
import SearchScreen from '../Screens/SearchScreen'

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
                        <Stack.Screen component={SearchScreen} name='SearchScreen' />
                        <Stack.Screen component={CreationScreen} name="CreationScreen" />
                        <Stack.Screen component={SettingScreen} name='SettingScreen' />
                        <Stack.Screen component={DetailScreen} name='DetailScreen' />
                        <Stack.Screen component={FillProfileScreen} name='FillProfileScreen' />
                        <Stack.Screen component={EditProfileScreen} name="EditProfileScreen" />
                    </>
            }
        </Stack.Navigator>
    )
}

export default AppNavigator