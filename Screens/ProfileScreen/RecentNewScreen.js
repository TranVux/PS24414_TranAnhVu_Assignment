import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "../../assets/ExampleData";
import NewsCard from "../../Components/Card/NewsCard";
import Spacing from "../../Components/Spacing";

const RecentNewsScreen = ({ navigation }) => {

    const getKey = (item) => {
        return item._id;
    }


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

    const handleOnClickNews = (data) => {
        navigation.navigate('DetailScreen', { ...data });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={<Spacing />}
                data={DATA}
                keyExtractor={getKey}
                renderItem={handleRenderItem}
                removeClippedSubviews={true}
                updateCellsBatchingPeriod={70}
            />
        </SafeAreaView>
    )
}

export default RecentNewsScreen;
