import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconBack, IconBookmark, IconBookmarkActive, IconCommentOutline, IconHeartFill, IconHeartOutline, IconMoreOption, IconShare } from '../../assets/images';
import TopicAuthorCard from '../../Components/TopicAuthorCard';
import ImageLoader from '../../Components/ImageLoader';
import { DisplaySmallRegular, LinkMediumBold, TextMedium, TextSmall } from '../../assets/constants/Typography';
import { Colors } from '../../assets/constants/Colors';
import { DATA } from '../../assets/ExampleData';
import NewsCard from '../../Components/Card/NewsCard';
import Spacing from '../../Components/Spacing';
import FastImage from 'react-native-fast-image'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Fallback } from '../../assets/constants/Fallback';
import AxiosIntance from '../../utils/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = ({ navigation, route }) => {

    const { params } = route;
    const [isHeart, setIsHeart] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);

    const handleIconHearth = () => {
        let tempIsHeart = isHeart;
        setIsHeart(!tempIsHeart);
    }

    const handleIconBookMark = () => {
        let tempIsBookmark = isBookmark;
        setIsBookmark(!tempIsBookmark);
    }

    const hanleRenderItem = ({ item }) => (
        <NewsCard
            key={item._id} data={item} horizontal
            onPress={() => { console.log("onclick news"); }}
            onPressMoreButton={() => { console.log("Press into more button"); }}
            onPressNewsAuthor={() => { console.log("Press into news author"); }} />
    )

    const getKey = (item) => {
        return item._id;
    }

    const getDetail = async (_id) => {
        const token = await AsyncStorage.getItem("token");
        const res = await AxiosIntance().get("articles/" + token + _id);
        console.log(res);
    }

    // useEffect(() => {
    //     getDetail(params?._id);
    //     return () => { }
    // }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <View style={styles.leftHeader}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <IconBack />
                    </Pressable>
                </View>
                <View style={styles.rightHeader}>
                    <Pressable>
                        <IconShare width={20} height={23} />
                    </Pressable>
                    <Pressable>
                        <IconMoreOption width={24} height={4} style={styles.iconMoreOption} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.authorCardContainer}>
                        <TopicAuthorCard authorCard data={params} />
                    </View>
                    <View style={styles.newsContent}>
                        <FastImage
                            source={{ uri: params?.image ? params.image : Fallback.newImage }}
                            style={{ width: "100%", height: 245, borderRadius: 6 }}
                            fallback={true}
                            resizeMode={FastImage.resizeMode.cover} />

                        <Text style={[TextSmall, { marginTop: 13, color: Colors.bodyText }]}>{params?.category ? params?.category : "Europe"}</Text>
                        <Text style={[DisplaySmallRegular, { marginTop: 13, color: "#000" }]}>{params?.title}</Text>
                        <Text style={[TextMedium, { marginTop: 13, color: Colors.bodyText }]}>{params?.content}</Text>
                    </View>
                    <View style={styles.suggestNews}>
                        <View style={styles.headerContent}>
                            <Text style={[LinkMediumBold, { color: "#000" }]}>Latest</Text>
                            <Text style={[TextSmall]}>See all</Text>
                        </View>
                        <FlatList
                            ItemSeparatorComponent={<Spacing />}
                            data={DATA}
                            keyExtractor={getKey}
                            renderItem={hanleRenderItem}
                            scrollEnabled={false}
                            removeClippedSubviews={true}
                            updateCellsBatchingPeriod={70}
                            initialNumToRender={2}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.leftAction}>
                    <View style={styles.fDRowCenter}>
                        <BouncyCheckbox
                            textStyle={[{ marginStart: -10, textDecorationLine: "none", color: "#000" }, TextMedium]}
                            innerIconStyle={{ borderWidth: 0 }}
                            fillColor="#fff"
                            unfillColor='#fff'
                            onPress={handleIconHearth}
                            iconComponent={isHeart ? <IconHeartFill /> : <IconHeartOutline />}
                            text="25K" />
                        {/* <Text style={[TextMedium, { marginStart: 6, color: "#000" }]}>25K</Text> */}
                    </View>
                    <View style={[styles.fDRowCenter, { marginStart: 30 }]}>
                        <Pressable>
                            <IconCommentOutline />
                        </Pressable>
                        <Text style={[TextMedium, { marginStart: 6, color: "#000" }]}>25K</Text>
                    </View>
                </View>
                <View style={styles.rightAction}>
                    <BouncyCheckbox
                        innerIconStyle={{ borderWidth: 0 }}
                        fillColor="#fff"
                        unfillColor='#fff'
                        onPress={handleIconBookMark}
                        iconComponent={isBookmark ? <IconBookmarkActive /> : <IconBookmark />} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    contentContainer: {
        flex: 9,
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: "#fff",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#fff",
        elevation: 16,
        paddingVertical: 20,
        paddingHorizontal: 25
    },
    leftHeader: {
        flex: 1
    },
    rightHeader: {
        width: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconMoreOption: {
        transform: [{ rotate: "90deg" }],
        marginRight: -10
    },
    authorCardContainer: {
        height: 70,
        marginTop: 5,
        flex: 0
        // backgroundColor: "blue"
    },
    newsContent: {
        flex: 1,
        marginBottom: 30,
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#fff",
        elevation: 16,
        paddingVertical: 20,
        paddingHorizontal: 25
    },
    leftAction: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "red"
    },
    hearthActionField: {
        flexDirection: "row",
        alignItems: "center",
    },
    commentActionField: {

    },
    fDRowCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    rightAction: {
        width: 100,
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center",
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16
    },
    suggestNews: {
        paddingBottom: 10
    }
})