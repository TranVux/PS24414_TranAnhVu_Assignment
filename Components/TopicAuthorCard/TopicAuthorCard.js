import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../Button'
import { FallBackImage, IconPlus } from '../../assets/images'
import { LinkMediumBold, TextMedium, TextSmall } from '../../assets/constants/Typography'
import { Colors } from '../../assets/constants/Colors'
import ImageLoader from '../ImageLoader'
import { } from '../../assets/constants/Typography'
import FastImage from 'react-native-fast-image'
import { Fallback } from '../../assets/constants/Fallback'

const TopicAuthorCard = ({ authorCard = true, topicCard, isFollow = false, isSave, onPress = () => { }, onPressButton = () => { }, style, data }) => {

    const [amountOfDate, setAmountOfDate] = useState({});

    const A_DAY = 24 * 60 * 60 * 1000; // mili giấy nên phải nhân cho 1000
    function caculateAmountDate(createdAt) {
        let createDate = new Date(createdAt);
        let timeBetween = new Date().getTime() - createDate.getTime();
        let amountOfDate = timeBetween / A_DAY;
        if (amountOfDate < 1) {
            return { type: 'h', value: Math.round(timeBetween / (60 * 60 * 1000)) }
        } else if (amountOfDate < 30) {
            return { type: 'd', value: Math.round(amountOfDate) };
        } else if (amountOfDate >= 30 && (amountOfDate / 30) < 12) {
            return { type: 'm', value: Math.round(amountOfDate / 30) };
        } else {
            return { type: 'y', value: Math.round(amountOfDate / 30 / 12) }
        }
    }
    useEffect(() => {
        setAmountOfDate(caculateAmountDate(data.createdAt));
    }, [])

    return (
        <SafeAreaView style={[styles.cardContainer, { ...style }]}>
            {/* Topics */}
            {/* {topicCard && authorCard*/}
            <View style={styles.leftCardContainer}>
                <View style={styles.lefContent}>
                    <FastImage source={{ uri: topicCard ? data?.image : data?.createdBy?.avatar ? data.createdBy.avatar : Fallback.authorImage }}
                        style={{ width: topicCard ? 70 : 50, height: topicCard ? 70 : 50, borderRadius: topicCard ? 6 : 10000 }} />
                </View>
                <View style={styles.rightContent}>
                    {topicCard &&
                        <>
                            <Text numberOfLines={1} style={[styles.titleCard, TextMedium]}>{data.topics ? data.topics : "Topics"}</Text>
                            <Text numberOfLines={2} style={[styles.contentCard, TextSmall]}>{data?.title}</Text>
                        </>}
                    {authorCard &&
                        <>
                            <Text numberOfLines={1} style={[styles.titleCard, LinkMediumBold]}>{data?.createdBy?.name ? data?.createdBy?.name : "Author"}</Text>
                            <Text numberOfLines={2} style={[styles.contentCard, TextSmall]}>{amountOfDate.value}{amountOfDate.type} ago</Text>
                        </>}
                </View>
            </View>
            <View style={styles.rightCardContainer}>
                {!topicCard &&
                    <Button Button outline={!isFollow ? true : false} style={{ width: 97, ...styles.buttonStyle }} onPress={() => { console.log("Follow Click"); }}>
                        {!isFollow && <IconPlus iconRight colorBg={Colors.primaryColor} />}
                        <Text style={[LinkMediumBold, { color: !isFollow ? Colors.primaryColor : "#fff" }]}>{isFollow ? "Following" : "Follow"}</Text>
                    </Button>
                }
                {topicCard &&
                    <Button Button outline={!isSave ? true : false} style={{ width: topicCard ? 78 : 97, ...styles.buttonStyle }} onPress={() => { console.log("Follow Click"); }}>
                        <Text style={[LinkMediumBold, { color: !isSave ? Colors.primaryColor : "#fff" }]}>{isSave ? "Saved" : "Save"}</Text>
                    </Button>
                }
            </View>
        </SafeAreaView >
    )
}

export default TopicAuthorCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        height: 50
    },
    titleCard: {
        // marginBottom: 4,
        color: "#000"
    },
    contentCard: {
        color: Colors.bodyText
    },
    leftCardContainer: {
        flex: 1,
        height: 50,
        flexDirection: "row"
    },
    rightContent: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 8
    },
    rightCardContainer: {
        width: 97,
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    textButton: {
        color: Colors.primaryColor
    },
    buttonStyle: {
        height: 34,
    }
})