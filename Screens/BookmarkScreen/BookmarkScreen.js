import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DisplayMediumBold, TextSmall } from '../../assets/constants/Typography'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { IconOption, IconSearch } from '../../assets/images'
import AxiosIntance from '../../utils/AxiosIntance'
import ItemLoading from '../../Components/ItemLoading'
import Spacing from '../../Components/Spacing'
import NewsCard from '../../Components/Card/NewsCard'

const BookmarkScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState([]);

    const handleRenderItem = ({ item, index }) => {
        return (
            <NewsCard
                key={item._id} data={item} horizontal={true}
                onPress={() => { handleOnClickNews(item) }}
                onPressMoreButton={() => { console.log("Press into more button"); }}
                onPressNewsAuthor={() => { console.log("Press into news author"); }} />
        )
    }

    const handleOnClickNews = (data) => {
        navigation.navigate('DetailScreen', { ...data });
    }

    const getKey = (item) => {
        return item._id;
    }

    const handleFetchData = async () => {
        try {
            setIsLoading(true);
            const res = await AxiosIntance().get("/articles");
            // console.log(res);
            if (!res.error) {
                setDataList(res.data);
            }
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleFetchData();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.headerContainer}>
                <Text style={[DisplayMediumBold, { color: "#000" }]}>Bookmark</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchBar}>
                    <Pressable style={styles.leftContainer} onPress={() => { navigation.navigate("SearchScreen") }}>
                        <IconSearch />
                        <Text style={[TextSmall, { color: Colors.placeHolder }]}>Search</Text>
                    </Pressable>
                    <Pressable onPress={() => { console.log("option button presss"); }}>
                        <IconOption />
                    </Pressable>
                </View>
                <Spacing />
                {
                    dataList.length > 0 ?
                        <FlatList
                            ItemSeparatorComponent={<Spacing />}
                            data={dataList}
                            keyExtractor={getKey}
                            renderItem={handleRenderItem}
                            scrollEnabled={false}
                            removeClippedSubviews={true}
                            updateCellsBatchingPeriod={70}
                        /> :
                        isLoading ?
                            <>
                                <ItemLoading />
                                <ItemLoading />
                                <ItemLoading />
                                <ItemLoading />
                                <ItemLoading />
                                <ItemLoading />
                            </> :
                            <></>
                }
            </ScrollView>
        </View>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: Colors.bodyText,
        height: 48,
        borderRadius: 6,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12
    },
    leftContainer: {
        flexDirection: "row",
        gap: 10,
        flex: 1
    }
})