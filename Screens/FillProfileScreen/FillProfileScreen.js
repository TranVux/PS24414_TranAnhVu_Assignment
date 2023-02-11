import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { } from 'react'

import { IconBack, IconChangeAvatar } from '../../assets/images'
import { LinkMediumBold } from '../../assets/constants/Typography'
import ImageLoader from '../../Components/ImageLoader'
import InputField from '../../Components/InputField'
import Button from '../../Components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FillProfileScreen = () => {
    //handle button next with keyboard
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", flex: 1 }}>
            <SafeAreaView style={styles.screenContainer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.headerScreen}>
                        <Pressable onPress={() => { console.log("backPress"); }}>
                            <IconBack style={styles.iconBack} />
                        </Pressable>
                        <Text style={[LinkMediumBold, styles.textheader]}>Fill your Profile</Text>
                    </View>
                    <View style={styles.avatarField}>
                        <ImageLoader
                            source={"https://thicc.mywaifulist.moe/waifus/shinobu-kocho-demon-slayer-kimetsu-no-yaiba/B7bzbtVkxExvGKUORPmKxvashLZqSoeeYwdePHAo_thumbnail.jpg"}
                            circleRounder
                            style={styles.imageStyle}
                        />
                        <Pressable style={styles.iconContainer}
                            onPress={() => { console.log("Change Avt"); }}>
                            <IconChangeAvatar style={styles.iconStyle} />
                        </Pressable>
                    </View>
                    <View style={styles.formContainer}>
                        <InputField titleField={"Username"} />
                        <InputField inputContainerStyle={{ marginTop: 16 }} titleField={"Full Name"} />
                        <InputField inputContainerStyle={{ marginTop: 16 }} importance titleField={"Email Address"} />
                        <InputField inputContainerStyle={{ marginTop: 16 }} importance titleField={"Phone Number"} />
                    </View>
                </View>
                <View style={[styles.buttonContainer]}>
                    <Button primary height={50}>
                        <Text style={[LinkMediumBold, styles.textButton]}>Next</Text>
                    </Button>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default FillProfileScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 16,
        flexDirection: 'column',
        backgroundColor: "#fff",
    },

    headerScreen: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    iconBack: {
    },
    textheader: {
        flex: 1,
        textAlign: 'center',
        color: "#000"
    },
    avatarField: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
        position: 'relative'
    },
    imageStyle: {
        width: 140,
        height: 140
    },
    iconContainer: {
        position: "absolute",
        bottom: -5,
        transform: [{ translateX: 30 }]
    },
    iconStyle: {

    },
    textButton: {
        color: "#fff"
    },
    buttonContainer: {
        paddingTop: 40,
        paddingBottom: 15,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        bottom: 0
    }
})