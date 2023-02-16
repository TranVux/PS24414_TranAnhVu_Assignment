import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DATA } from "../../assets/ExampleData"
import NewsCard from "../../Components/Card/NewsCard"
import Spacing from "../../Components/Spacing"
import AxiosIntance from "../../utils/AxiosIntance"

const MyNewsScreen = ({ navigation }) => {

    const [listData, setListData] = useState([]);

    const handleGetMyNews = async () => {
        try {
            const res = await AxiosIntance().get("articles/my-articles");
            if (!res.error) {
                setListData(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleGetMyNews();
    }, [])

    const getKey = (item) => {
        return item._id;
    }

    const handleRenderItem = ({ item, index }) => {
        return (
            <NewsCard
                key={item._id} data={item} horizontal
                onPress={() => { handleOnClickNews(item) }}
                onPressMoreButton={() => { console.log("Press into more button"); }}
                onPressNewsAuthor={() => { console.log("Press into news author"); }} />
        )
    }

    const handleOnClickNews = (data) => {
        navigation.navigate('DetailScreen', { ...data });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            {listData.length > 0 &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<Spacing />}
                    data={listData}
                    keyExtractor={getKey}
                    renderItem={handleRenderItem}
                    removeClippedSubviews={true}
                    updateCellsBatchingPeriod={70}
                />}
        </SafeAreaView>
    )
}

export default MyNewsScreen;