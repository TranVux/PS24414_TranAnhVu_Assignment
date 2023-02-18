import { StyleSheet, } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconBookmark, IconBookmarkActive, IconExplore, IconExploreActive, IconHome, IconHomeActive, IconProfile, IconProfileActive } from '../../assets/images'
import HomeScreen from '../HomeScreen';
import ExploreScreen from '../ExploreScreen';
import BookmarkScreen from '../BookmarkScreen';
import ProfileScreen from '../ProfileScreen';
import { AppContext } from '../../utils/AppContext';

const Tab = createBottomTabNavigator();

const NavigatorScreen = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, }} sceneContainerStyle={styles.container} initialRouteName="Bookmark">
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconHomeActive /> : <IconHome />
                    )
                },
                lazy: true,
            }} name="Home" component={HomeScreen} />

            {/* Explore Screen */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconExploreActive /> : <IconExplore />
                    )
                },
                lazy: true,
            }} name="Explore" component={ExploreScreen} />

            {/* Bookmark Screen */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconBookmarkActive /> : <IconBookmark />
                    )
                },
                lazy: true,
            }} name="Bookmark" component={BookmarkScreen} />

            {/* Profile Screen */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconProfileActive /> : <IconProfile />
                    )
                },
                lazy: true,
            }} name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default NavigatorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
})