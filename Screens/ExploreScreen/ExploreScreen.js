import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DisplayMediumBold, LinkMediumBold, TextMedium, TextSmall } from '../../assets/constants/Typography'
import TopicAuthorCard from '../../Components/TopicAuthorCard'
import { DATA } from '../../assets/ExampleData'
import Spacing from '../../Components/Spacing'
import NewsCard from '../../Components/Card/NewsCard'

const ExploreScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.headerContainer}>
                <Text style={[DisplayMediumBold, { color: "#000" }]}>Explore</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View styles={styles.contentContainer}>
                    {/* Header */}
                    <View style={[styles.headerContent]}>
                        <Text style={[LinkMediumBold, { color: "#000" }]}>Trending</Text>
                        <Text style={[TextSmall]}>See all</Text>
                    </View>
                    <View styles={styles.topicContainer}>
                        <TopicAuthorCard topicCard={true} data={DATA[0]} isSave />
                        <Spacing />
                        <TopicAuthorCard topicCard={true} data={DATA[1]} />
                        <Spacing />
                        <TopicAuthorCard topicCard={true} data={DATA[2]} isSave />
                    </View>
                    <View style={styles.popularContainer}>
                        <Text style={[LinkMediumBold, { color: "#000", marginTop: 20, marginBottom: 5 }]}>Popular Topic</Text>
                        <NewsCard horizontal={false} data={DATA[0]} />
                        <Spacing spaceSize={18} />
                        <NewsCard horizontal={false} data={DATA[1]} />
                        <Spacing spaceSize={18} />
                        <NewsCard horizontal={false} data={DATA[2]} />
                        <Spacing />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    contentContainer: {
    },
    headerContainer: {
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16
    },
    content: {
        flex: 1
    },
    itemTopic: {
        marginTop: 30
    },
    topiccardContainer: {
        // height: 70,
        // marginTop: 5,
        // flex: 0
    },
    topicContainer: {

    }
})