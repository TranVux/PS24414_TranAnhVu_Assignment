import { Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { IconAddPic, IconBack, IconEdit, IconMoreOption, IconPlus, IconTextAlign, IconTypography } from '../../assets/images'
import { DisplaySmallRegular, LinkMediumBold, TextLarge, TextMedium, TextSmall } from '../../assets/constants/Typography'
import { Colors } from '../../assets/constants/Colors'
import Button from '../../Components/Button'
import FastImage from 'react-native-fast-image';
import Dialog from "react-native-dialog";

const CreationScreen = ({ navigation }) => {

    const [lockPublishButton, setLockPublishButton] = useState(true);
    const [textTitle, setTextTitle] = useState("");
    const [textArticle, setTextArticle] = useState("");
    const [uriImage, setUriImage] = useState({});
    const [dialogDisplay, setDialogDisplay] = useState(false);

    const handleButtonPublish = () => {
        if (textArticle.length > 0 && textTitle.length > 0 && JSON.stringify(uriImage) !== "{}") {
            setLockPublishButton(false)
        } else {
            setLockPublishButton(true)
        }
    }

    useEffect(() => {
        handleButtonPublish();
    }, [textArticle, textTitle])

    const handleUriImage = async (type) => {
        let options = {
            storageOptions: {
                path: "images",
                mediaType: "photo"
            },
            includeBase64: true
        }

        let res;
        switch (type) {
            case "Camera": {
                res = await launchCamera(options);
                break
            }
            case "Gallery": {
                res = await launchImageLibrary(options);
                break;
            }
            default:
                throw new Error("Invalid type ");
        }

        if (res.didCancel) {
            console.log(res);
        } else if (res.errorCode === "camera_unavailable") {
            ToastAndroid.show("Camera không khả dụng!")
        } else if (res.errorCode === "permission") {
            ToastAndroid.show("Không được cấp quyền truy cập camera!")
        } else if (res.errorCode === "others") {
            console.log(res.errorMessage);
        } else {
            setUriImage({ uri: res.assets[0].uri })
            console.log(res.assets[0].uri);
            // console.log(uriImage);
        }
        setDialogDisplay(false)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <Pressable>
                    <IconBack />
                </Pressable>
                <Text style={[TextMedium, { color: "#000" }]}>Create News</Text>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <IconMoreOption style={styles.moreButtonStyle} width={18} height={3} />
                </Pressable>
            </View>
            <View style={styles.editorContainer}>
                <View style={[styles.imageArticle, { borderWidth: JSON.stringify(uriImage) !== "{}" ? 0 : 1 }]}>
                    {
                        JSON.stringify(uriImage) !== "{}" ?
                            <View style={{ width: "100%", height: 183 }}>
                                <FastImage source={uriImage} resizeMode="cover" style={styles.imageStyle} />
                                <Pressable style={styles.iconEdit}
                                    onPress={() => { setDialogDisplay(true) }}>
                                    <IconEdit />
                                </Pressable>
                            </View>
                            :
                            <Pressable
                                style={{ justifyContent: "center", alignItems: "center" }}
                                onPress={() => { setDialogDisplay(true) }}>
                                <IconPlus colorBg={Colors.bodyText} />
                                <Text style={[TextSmall, { color: Colors.bodyText, textTransform: 'capitalize' }]}>Add cover photo</Text>
                            </Pressable>
                    }
                </View>
                <View style={styles.newsTitle}>
                    <TextInput
                        value={textTitle}
                        onChangeText={(newText) => { setTextTitle(newText) }}
                        style={styles.inputStyle}
                        placeholder="News title"
                        placeholderTextColor={Colors.placeHolder} />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        value={textArticle}
                        onChangeText={(newText) => { setTextArticle(newText) }}
                        multiline={true}
                        style={styles.inputFieldStyle}
                        placeholder="Add News/Article"
                        placeholderTextColor={Colors.placeHolder} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.leftContainer}>
                    <Pressable>
                        <IconTypography />
                    </Pressable>
                    <Pressable>
                        <IconTextAlign />
                    </Pressable>
                    <Pressable>
                        <IconAddPic />
                    </Pressable>
                    <Pressable>
                        <IconMoreOption width={18} height={3} />
                    </Pressable>
                </View>
                <View style={styles.rightContainer}>
                    <Button secondary={lockPublishButton} style={styles.buttonPublish}>
                        <Text style={[LinkMediumBold, { color: lockPublishButton ? Colors.buttonText : "#fff" }]}>Publish</Text>
                    </Button>
                </View>
            </View>

            {/* Dialog */}
            <Dialog.Container
                onBackdropPress={() => { setDialogDisplay(false) }}
                visible={dialogDisplay}>
                <Dialog.Title style={[TextLarge, { color: Colors.bodyText }]}>Choose A Option</Dialog.Title>
                <Pressable
                    onPress={() => { handleUriImage("Camera") }}
                    style={{ flexDirection: "row", alignItems: "center", gap: 18, paddingStart: 30 }}>
                    <FastImage source={require("../../assets/images/camera.png")} style={{ width: 50, height: 50 }} />
                    <Text style={[TextSmall, { color: Colors.bodyText }]}>Camera</Text>
                </Pressable>
                <Pressable
                    onPress={() => { handleUriImage("Gallery") }}
                    style={{ flexDirection: "row", alignItems: "center", gap: 18, paddingStart: 30 }}>
                    <FastImage source={require("../../assets/images/gallery.png")} style={{ width: 50, height: 50 }} />
                    <Text style={[TextSmall, { color: Colors.bodyText }]}>Gallery</Text>
                </Pressable>
                <Dialog.Button
                    label="Cancel"
                    style={[TextMedium, { color: Colors.primaryColor, textTransform: 'capitalize' }]}
                    onPress={() => { setDialogDisplay(false) }} />
            </Dialog.Container>
        </SafeAreaView>
    )
}

export default CreationScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    moreButtonStyle: {
        transform: [{ rotate: "90deg" }]
    },
    editorContainer: {
        paddingHorizontal: 24,
        flex: 1,
    },
    imageArticle: {
        width: "100%",
        height: 183,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.inputDisable,
        borderRadius: 6,
        borderStyle: 'dashed',
        borderColor: Colors.bodyText,
    },
    imageStyle: {
        width: "100%",
        height: 183,
        borderRadius: 6
    },
    iconEdit: {
        position: 'absolute',
        bottom: 8,
        right: 12,
        backgroundColor: Colors.inputDisable,
        borderRadius: 100,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    inputStyle: {
        borderColor: "#C4C4C4",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        height: 36,
        ...DisplaySmallRegular,
        color: Colors.titleActive,
        marginVertical: 15,
        paddingVertical: -3,
        maxWidth: "100%",
        textTransform: 'capitalize'
    },
    inputFieldStyle: {
        ...TextMedium,
        borderWidth: 0,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: 'left',
        textAlignVertical: 'top',
        maxWidth: "100%"
    },
    buttonContainer: {
        height: 78,
        width: "100%",
        elevation: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        gap: 95,
        backgroundColor: "#fff"
    },
    leftContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    buttonPublish: {
        width: 109,
        height: 50
    }
})