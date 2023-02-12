import { Pressable, SafeAreaView, StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputField from '../../Components/InputField'
import { AppLogo, IconNotify, IconOption, IconSearch } from '../../assets/images'
import { LinkMediumBold, TextSmall } from '../../assets/constants/Typography'
import NewsCard from '../../Components/Card'
import Spacing from '../../Components/Spacing'
import AxiosIntance from '../../utils/AxiosIntance'

const HomeScreen = ({ navigation }) => {

    const [dataList, setDataList] = useState([]);

    const handleOnClickNews = (data) => {
        navigation.navigate('DetailScreen', { ...data });
    }

    const handleFetchData = async () => {
        try {
            const res = await AxiosIntance().get("/articles");
            // console.log(res.data);
            if (!res.data.error) {
                setDataList(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleFetchData();
        return () => { }
    }, [])

    const handleRenderItem = ({ item, index }) => {
        if (index > 0) {
            return (
                <NewsCard
                    key={item._id} data={item} horizontal
                    onPress={() => { handleOnClickNews(item) }}
                    onPressMoreButton={() => { console.log("Press into more button"); }}
                    onPressNewsAuthor={() => { console.log("Press into news author"); }} />
            )
        }
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <AppLogo />
                <Pressable onPress={() => { console.log("notify icon clicked"); }}>
                    <IconNotify style={styles.iconNotify} />
                </Pressable>
            </View>
            <ScrollView keyboardShouldPersistTaps="always" style={styles.scrollView} scrollEnabled={true} showsVerticalScrollIndicator={false}>
                {/* Search input */}
                <InputField
                    iconLeft={true}
                    iconRight={true}
                    onlyDisplayIconRightOnFocus={false}
                    inputStyle={styles.inputStyle}
                    inputContainerStyle={{ marginTop: 0 }}
                    placeholder="Search"
                    onPressIconRight={() => { console.log("Press icon right"); }}
                    onPressIconLeft={() => { console.log("Press icon left"); }}
                >
                    <IconSearch iconLeft />
                    <IconOption iconRight />
                </InputField>

                {/* header content */}
                {dataList.length > 0 &&
                    <View style={styles.headerContent}>
                        <Text style={[LinkMediumBold, { color: "#000" }]}>Trending</Text>
                        <Text style={[TextSmall]}>See all</Text>
                    </View>}
                <View style={styles.topTrendingNews}>
                    {dataList.length > 0 &&
                        <NewsCard
                            vertical data={dataList[0]}
                            onPress={() => { handleOnClickNews(dataList[0]) }}
                            onPressMoreButton={() => { console.log("Press into more button"); }}
                            onPressNewsAuthor={() => { console.log("Press into news author"); }} />
                    }
                </View>
                {dataList.length > 2 &&
                    <View style={styles.headerContent}>
                        <Text style={[LinkMediumBold, { color: "#000" }]}>Latest</Text>
                        <Text style={[TextSmall]}>See all</Text>
                    </View>}
                <FlatList
                    ItemSeparatorComponent={<Spacing />}
                    data={dataList}
                    keyExtractor={item => item._id}
                    renderItem={handleRenderItem}
                    scrollEnabled={false}
                    removeClippedSubviews={true}
                    updateCellsBatchingPeriod={70}
                />
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headerContainer: {
        flex: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        height: 45
    },
    scrollView: {
        flex: 1,
        marginBottom: 3
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16
    },
    inputStyle: {
        height: 48,
    },
    iconNotify: {
        marginEnd: 0,
    },
    inputContainerStyle: {
        height: 0
    }
})