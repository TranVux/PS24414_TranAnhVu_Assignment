import { Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconBack, IconChangeAvatar, IconCheck } from '../../assets/images'
import { TextLarge, TextMedium, TextSmall } from '../../assets/constants/Typography'
import InputField from '../../Components/InputField'
import { Fallback } from '../../assets/constants/Fallback'
import Dialog from "react-native-dialog";
import { Colors } from '../../assets/constants/Colors'
import FastImage from 'react-native-fast-image'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const EditProfileScreen = ({ navigation }) => {

    const [dialogDisplay, setDialogDisplay] = useState(false);
    const [uriImage, setUriImage] = useState({});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleEmail = (email) => {
        console.log(email);
        setEmail(email);
    }
    const handleUsername = (username) => {
        console.log(username);
        setUsername(username);
    }
    const handleAddress = (address) => {
        console.log(address);
        setAddress(address)
    }
    const handlePhoneNumber = (phoneNumber) => {
        console.log(phoneNumber);
        setPhoneNumber(phoneNumber)
    }

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
        }
        setDialogDisplay(false)
    }

    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            style={{ flex: 1, backgroundColor: "#fff" }}
        >
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.header}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <IconBack />
                    </Pressable>
                    <Text style={[TextMedium, { color: "#000" }]}>Edit Profile</Text>
                    <Pressable onPress={() => { console.log("Update profile"); }}>
                        <IconCheck />
                    </Pressable>
                </View>
                <View style={styles.avatarField}>
                    <FastImage
                        source={JSON.stringify(uriImage) !== "{}" ? uriImage : { uri: Fallback.newImage }}
                        style={styles.imageStyle} />
                    <Pressable style={styles.iconContainer}
                        onPress={() => { setDialogDisplay(true) }}>
                        <IconChangeAvatar style={styles.iconStyle} />
                    </Pressable>
                </View>
                <View style={styles.inputContainer}>
                    <InputField
                        onChangeText={(newText) => { handleUsername(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Username"} />
                    <InputField
                        onChangeText={(newText) => { handleEmail(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Email"} />
                    <InputField
                        onChangeText={(newText) => { handleAddress(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Address"} />
                    <InputField
                        onChangeText={(newText) => { handlePhoneNumber(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Phone Number"} />
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
        </KeyboardAwareScrollView>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    avatarField: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 16,
        position: 'relative',
    },
    imageStyle: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    iconContainer: {
        position: "absolute",
        bottom: -5,
        transform: [{ translateX: 30 }]
    },
    inputContainer: {
        flex: 1,
        gap: 16
    },
    inputStyle: {
    }
})