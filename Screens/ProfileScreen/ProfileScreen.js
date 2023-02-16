import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinkMediumBold, TextMedium } from '../../assets/constants/Typography'
import { IconPlus, IconSetting } from '../../assets/images'
import FastImage from 'react-native-fast-image'
import { Colors } from '../../assets/constants/Colors'
import Button from '../../Components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NewsCard from '../../Components/Card/NewsCard'
import { Skeleton } from '@rneui/themed'
import MyNewsScreen from './MyNewsScreen'
import RecentNewsScreen from './RecentNewScreen'
import AxiosIntance from '../../utils/AxiosIntance'

const Tab = createMaterialTopTabNavigator();
const ProfileScreen = ({ navigation }) => {

    const [listMyNews, setListMyNews] = useState([]);

    const handleGetMyNews = async () => {
        try {
            const res = await AxiosIntance().get("articles/my-articles");
            if (!res.error) {
                setListMyNews(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleGetMyNews();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}> */}
            <View style={styles.header}>
                <View style={{ width: 24, height: 24 }} />
                <Text style={[TextMedium, { color: "#000", }]}>Profile</Text>
                <Pressable onPress={() => { navigation.navigate("SettingScreen") }}>
                    <IconSetting />
                </Pressable>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.firstPart}>
                    <FastImage
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0nV59R9ja-A8uRs347CfNrOYvWJsxh_VcQ&usqp=CAU" }}
                        style={styles.avatarStyle} />
                    <View style={styles.analystContainer}>
                        <Text style={[LinkMediumBold, { color: "#000" }]}>2156</Text>
                        <Text style={[TextMedium, { color: Colors.bodyText }]}>Followers</Text>
                    </View>
                    <View style={styles.analystContainer}>
                        <Text style={[LinkMediumBold, { color: "#000" }]}>512</Text>
                        <Text style={[TextMedium, { color: Colors.bodyText }]}>Following</Text>
                    </View>
                    <View style={styles.analystContainer}>
                        <Text style={[LinkMediumBold, { color: "#000" }]}>{listMyNews.length}</Text>
                        <Text style={[TextMedium, { color: Colors.bodyText }]}>News</Text>
                    </View>
                </View>
                <View style={styles.secondPart}>
                    <Text style={[LinkMediumBold, { color: "#000" }]}>TAVUX</Text>
                    <Text style={[TextMedium, { color: Colors.bodyText }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => { navigation.navigate("EditProfileScreen") }}
                    primary style={styles.button}>
                    <Text style={[LinkMediumBold, { color: "#fff" }]}>Edit Profile</Text>
                </Button>
                <Button
                    primary style={styles.button}>
                    <Text style={[LinkMediumBold, { color: "#fff" }]}>Website</Text>
                </Button>
            </View>
            <View style={styles.contentContainer}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarIndicatorStyle: {
                            borderBottomWidth: 3,
                            borderColor: Colors.primaryColor,
                            borderRadius: 2,
                        },
                        tabBarIndicatorContainerStyle: {
                            marginHorizontal: 20,
                            paddingHorizontal: 40
                        },
                        tabBarLabelStyle: {
                            textTransform: 'capitalize',
                            ...TextMedium,
                            fontSize: 14,
                        },
                        tabBarActiveTintColor: "#000",
                        tabBarInactiveTintColor: Colors.bodyText,
                        tabBarStyle: {
                            width: 160,
                            elevation: 0,
                            alignSelf: "center"
                        },
                        tabBarItemStyle: {
                            width: 80,
                            height: 50,
                        },
                        tabBarPressColor: "transparent",
                        lazy: true,
                        lazyPlaceholder: () => <Skeleton width={"100%"} height={"100%"} />
                    }}>
                    <Tab.Screen component={MyNewsScreen} name="News" />
                    <Tab.Screen component={RecentNewsScreen} name="Recent" />
                </Tab.Navigator>
            </View>
            <View style={styles.floatingButtonContainer}>
                <Button style={styles.floatingButton} onPress={() => { navigation.navigate("CreationScreen") }}>
                    <IconPlus colorBg="#fff" />
                </Button>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView >
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    infoContainer: {
        marginVertical: 16
    },
    firstPart: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    },
    avatarStyle: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50
    },
    analystContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 16
    },
    button: {
        flex: 1,
        height: 50
    },
    floatingButton: {
        width: 54,
        height: 54,
        borderRadius: 50,
        elevation: 5
    },
    floatingButtonContainer: {
        position: "absolute",
        bottom: 18,
        right: 0,
        zIndex: 10,
    },
    contentContainer: {
        flex: 1,
        paddingBottom: 3
    }
})