import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageLoader from '../ImageLoader';
import { LinkXSmallBold, TextMedium, TextXSmall } from '../../assets/constants/Typography';
import { Colors } from '../../assets/constants/Colors';
import { IconMoreOption, IconTime } from '../../assets/images';

const NewsCard = (
    {
        style, horizontal, vertical, data,
        onPress = () => { }, onPressNewsAuthor = () => { },
        onPressMoreButton = () => { },
    }) => {

    const { _id, title, content, image, createdAt, createdBy } = data;
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
        setAmountOfDate(caculateAmountDate(createdAt));
    }, [])

    return (
        <SafeAreaView style={[
            styles.cardContainer,
            { flexDirection: horizontal ? "row" : "column" },
            { ...style }
        ]}>
            <Pressable onPress={onPress} style={{ width: horizontal ? 96 : "100%" }}>
                <ImageLoader source={image} borderRadius={6} style={{
                    width: horizontal ? 96 : "100%",
                    height: horizontal ? 96 : 183,
                    ...styles.imageNewsStyle
                }} />
            </Pressable>
            <View style={[styles.contentContainer, { marginStart: horizontal ? 4 : 0 }]}>
                <Text style={[TextXSmall, styles.categoryNews, { marginTop: horizontal ? 0 : 8 }]}>Europe</Text>
                <Pressable onPress={onPress}>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={[TextMedium, styles.newsTitle]}>{title}</Text>
                </Pressable>
                <View style={styles.ortherInfoContainer}>
                    <View style={styles.leftContainer}>
                        <Pressable onPress={onPressNewsAuthor}>
                            <View style={styles.authorContainer}>
                                <ImageLoader circleRounder source={createdBy.avatar ? createdBy.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0nV59R9ja-A8uRs347CfNrOYvWJsxh_VcQ&usqp=CAU"} style={styles.creatorAvatarStyle} />
                                <Text numberOfLines={1} style={[LinkXSmallBold, { maxWidth: 100 }]}>{createdBy.name ? createdBy.name : "TAVUX"}</Text>
                            </View>
                        </Pressable>
                        <View style={styles.timeContainer}>
                            <IconTime />
                            <Text style={[TextXSmall, styles.timeCreate]}>{amountOfDate.value}{amountOfDate.type} ago</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <Pressable onPress={onPressMoreButton} style={{ paddingVertical: 5 }}>
                            <IconMoreOption />
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: "center",
    },
    imageNewsStyle: {
    },
    contentContainer: {
        flex: 1
    },
    categoryNews: {
        color: Colors.bodyText,
    },
    newsTitle: {
        color: "#000",
        marginVertical: 4,
    },
    ortherInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftContainer: { flexDirection: 'row' },
    rightContainer: {},
    authorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginEnd: 13
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    creatorAvatarStyle: {
        width: 20,
        height: 20,
        marginEnd: 4
    },
    timeCreate: {
        marginStart: 4
    }
})