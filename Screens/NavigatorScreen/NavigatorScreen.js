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
        <Tab.Navigator screenOptions={{ headerShown: false }} sceneContainerStyle={styles.container}>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconHomeActive /> : <IconHome />
                    )
                }
            }} name="Home" component={HomeScreen} />

            {/* Explore Screen */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconExploreActive /> : <IconExplore />
                    )
                }
            }} name="Explore" component={ExploreScreen} />

            {/* Bookmark Screen */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconBookmarkActive /> : <IconBookmark />
                    )
                }
            }} name="Bookmark" component={BookmarkScreen} />

            {/* Profile Screen */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        focused ? <IconProfileActive /> : <IconProfile />
                    )
                }
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