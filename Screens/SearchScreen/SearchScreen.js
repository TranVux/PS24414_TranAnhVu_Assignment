import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '../../Components/InputField'
import { IconSearch } from '../../assets/images'
import { TextSmall } from '../../assets/constants/Typography'
import { Colors } from '../../assets/constants/Colors'
import AxiosIntance from '../../utils/AxiosIntance'
import Spacing from '../../Components/Spacing'
import NewsCard from '../../Components/Card/NewsCard'
import FastImage from 'react-native-fast-image'

const SearchScreen = ({ navigation }) => {

    const [searchValue, setSearchValue] = useState("");
    const [listNews, setListNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchValue = (searchValue) => {
        setSearchValue(searchValue);
    }

    const handleOnClickNews = (data) => {
        navigation.navigate('DetailScreen', { ...data });
    }

    const handleRenderItem = ({ item }) => {
        return (
            <NewsCard
                key={item._id} data={item} horizontal
                onPress={() => { handleOnClickNews(item) }}
                onPressMoreButton={() => { console.log("Press into more button"); }}
                onPressNewsAuthor={() => { console.log("Press into news author"); }} />
        )
    }

    const handleGetIdItem = (item) => {
        return item._id
    }

    useEffect(() => {
        const handleTimeOut = setTimeout(async () => {
            try {
                if (searchValue.length !== 0) {
                    setIsLoading(true);
                    const res = await AxiosIntance().get("articles/search?title=" + searchValue);
                    console.log(res.data);
                    if (!res.error) {
                        setListNews(res.data)
                    } else {
                        ToastAndroid.show("error");
                    }
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                ToastAndroid.show("error");
                setIsLoading(false);
            }
        }, 500)

        return () => {
            clearTimeout(handleTimeOut);
        }
    }, [searchValue])

    return (
        <SafeAreaView style={styles.screenStyle}>
            <InputField
                progressBar={isLoading}
                placeholder='Search' iconLeft onChangeText={handleSearchValue}>
                <IconSearch iconLeft />
            </InputField>
            <View style={styles.headerContent}>
                <Text style={styles.headertitle}>News</Text>
            </View>
            {listNews.length > 0 ?
                <FlatList
                    ItemSeparatorComponent={<Spacing />}
                    data={listNews}
                    renderItem={handleRenderItem}
                    keyExtractor={handleGetIdItem}
                    removeClippedSubviews={true}
                    updateCellsBatchingPeriod={70}
                />
                :
                <View style={styles.emptyBoxStyle}>
                    <FastImage
                        source={require("../../assets/images/empty.png")}
                        style={styles.imageStyle}
                        resizeMode={FastImage.resizeMode.contain} />
                    <Text style={[TextSmall, { color: "#000", textAlign: "center", marginTop: 5 }]}>No result...</Text>
                </View>
            }
        </SafeAreaView >
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 24,
        paddingTop: 12,
        backgroundColor: "#fff"
    },
    headerContent: {
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        marginTop: 16
    },
    headertitle: {
        ...TextSmall,
        color: "#000",
        borderBottomWidth: 3,
        borderColor: Colors.primaryColor
    },
    imageStyle: {
        height: 120,
    },
    emptyBoxStyle: {
        flex: 1,
        justifyContent: "center",
        paddingBottom: 50
    }
})