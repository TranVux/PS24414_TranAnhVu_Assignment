import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { IconAddPic, IconBack, IconEdit, IconMoreOption, IconPlus, IconTextAlign, IconTypography } from '../../assets/images'
import { DisplaySmallRegular, LinkMediumBold, TextLarge, TextMedium, TextSmall, TextXSmall } from '../../assets/constants/Typography'
import { Colors } from '../../assets/constants/Colors'
import Button from '../../Components/Button'
import FastImage from 'react-native-fast-image';
import Dialog from "react-native-dialog";
import AxiosIntance from '../../utils/AxiosIntance';

const CreationScreen = ({ navigation }) => {

    const [lockPublishButton, setLockPublishButton] = useState(true);
    const [textTitle, setTextTitle] = useState("");
    const [textArticle, setTextArticle] = useState("");
    const [uriImage, setUriImage] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [dialogDisplay, setDialogDisplay] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonPublish = () => {
        if (textArticle.length > 0 && textTitle.length > 0 && uriImage !== "") {
            setLockPublishButton(false)
        } else {
            setLockPublishButton(true)
        }
    }

    useEffect(() => {
        handleButtonPublish();
    }, [textArticle, textTitle, uriImage])

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

        console.log(res);
        if (res.didCancel) {
            console.log(res);
        } else if (res.errorCode === "camera_unavailable") {
            ToastAndroid.show("Camera not available!")
        } else if (res.errorCode === "permission") {
            ToastAndroid.show("Haven't permission access camera")
        } else if (res.errorCode === "others") {
            console.log(res.errorMessage);
        } else {
            setUriImage(res.assets[0].uri)
            console.log(res.assets[0].uri);
            // console.log(uriImage);
            setDialogDisplay(false);
        }
    }

    const handlePublishNews = async () => {
        setIsLoading(true)
        try {
            const formData = new FormData();
            formData.append("image", {
                uri: uriImage,
                type: "image/jpeg",
                name: "image.jpg"
            })

            //post image
            const res = await AxiosIntance("multipart/form-data").post("media/upload", formData);
            // console.log(res);
            if (!res.error) {
                setUrlImage(res.data.path);
                const data = {
                    "title": textTitle,
                    "content": textArticle,
                    "image": urlImage
                }
                console.log(data);

                //Post News
                const resFull = await AxiosIntance().post("articles", data)
                console.log(resFull);

                if (!resFull.error) {
                    console.log(resFull.data._id);
                    ToastAndroid.show("Publish success!", ToastAndroid.SHORT)
                    setTextTitle("");
                    setTextArticle("");
                    setUriImage("");
                    setUrlImage("");
                } else {
                    ToastAndroid.show("Having an error. Please publish again.", ToastAndroid.SHORT)
                }
            } else {
                ToastAndroid.show("Having an error. Please publish again.", ToastAndroid.SHORT)
            }
            setIsLoading(false);
        } catch (err) {
            ToastAndroid.show("Having an error. Please publish again.", ToastAndroid.SHORT)
            console.log(err);
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.header}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <IconBack />
                    </Pressable>
                    <Text style={[TextMedium, { color: "#000" }]}>Create News</Text>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <IconMoreOption style={styles.moreButtonStyle} width={18} height={3} />
                    </Pressable>
                </View>
                <View style={styles.editorContainer}>
                    <View style={[styles.imageArticle, { borderWidth: uriImage !== "" ? 0 : 1 }]}>
                        {
                            uriImage !== "" ?
                                <View style={{ width: "100%", height: 183 }}>
                                    <FastImage source={{ uri: uriImage }} resizeMode="cover" style={styles.imageStyle} />
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
                        <Button onPress={handlePublishNews} disabled={lockPublishButton} secondary={lockPublishButton} style={styles.buttonPublish}>
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
            {isLoading &&
                <View style={styles.styleDialog}>
                    <View style={styles.dialogBox}>
                        <ActivityIndicator size={'large'} color={Colors.primaryColor} />
                        <Text style={[TextXSmall, { color: "#000" }]}>Posting News...</Text>
                    </View>
                </View>
            }
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
    },
    styleDialog: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#00000078",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10
    },
    dialogBox: {
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 5,
        elevation: 5
    }
})