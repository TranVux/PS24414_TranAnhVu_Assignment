import { ActivityIndicator, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconBack, IconChangeAvatar, IconCheck } from '../../assets/images'
import { TextLarge, TextMedium, TextSmall, TextXSmall } from '../../assets/constants/Typography'
import InputField from '../../Components/InputField'
import { Fallback } from '../../assets/constants/Fallback'
import Dialog from "react-native-dialog";
import { Colors } from '../../assets/constants/Colors'
import FastImage from 'react-native-fast-image'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'


const EditProfileScreen = ({ navigation }) => {

    const [dialogDisplay, setDialogDisplay] = useState(false);
    const [uriImage, setUriImage] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { infoUser, setInfoUser } = useContext(AppContext);

    const [isLoading, setIsLoading] = useState(false);

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
            setUriImage(res.assets[0].uri)
            console.log(res.assets[0].uri);
        }
        setDialogDisplay(false)
    }

    const handleFillProfile = () => {
        console.log(infoUser);
        setEmail(infoUser?.email);
        setUsername(infoUser?.name);
        setPhoneNumber(infoUser?.phone);
        setUriImage(infoUser?.avatar);
        setAddress(infoUser?.address)
    }

    const handleUpdateProfile = async () => {
        setIsLoading(true);
        try {
            let formData = new FormData();
            formData.append("image", {
                uri: uriImage,
                type: "image/jpeg",
                name: "image.jpg"
            })
            //post image
            const resImage = await AxiosIntance("multipart/form-data").post("media/upload", formData);
            // console.log(res);
            if (!resImage.error) {
                let data = {
                    name: username,
                    address: address,
                    phone: phoneNumber,
                    avatar: resImage.data.path,
                    dob: infoUser.dob,
                    email: email
                }
                const res = await AxiosIntance().post("users/update-profile", data)
                console.log(res);
                if (!res.error) {
                    ToastAndroid.show("Change info success!", ToastAndroid.SHORT);
                    setInfoUser(data);
                    await AsyncStorage.setItem("infoUser", JSON.stringify({ ...infoUser, ...data }));
                    navigation.goBack();
                } else {
                    ToastAndroid.show("Change info failure!", ToastAndroid.SHORT);
                }
                setIsLoading(false);
            }
        } catch (err) {
            ToastAndroid.show("Change info failure!", ToastAndroid.SHORT);
            console.log(err);
            setIsLoading(false);
        }
    }

    // Fill profile at first time 
    useEffect(() => {
        handleFillProfile()
    }, [])
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            style={{ flex: 1, backgroundColor: "#fff" }}
            contentContainerStyle={{ flex: isLoading ? 1 : 0 }}
        >
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.header}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <IconBack />
                    </Pressable>
                    <Text style={[TextMedium, { color: "#000" }]}>Edit Profile</Text>
                    <Pressable onPress={handleUpdateProfile}>
                        <IconCheck />
                    </Pressable>
                </View>
                <View style={styles.avatarField}>
                    <FastImage
                        source={{ uri: uriImage !== "" ? uriImage : Fallback.newImage }}
                        style={styles.imageStyle} />
                    <Pressable style={styles.iconContainer}
                        onPress={() => { setDialogDisplay(true) }}>
                        <IconChangeAvatar style={styles.iconStyle} />
                    </Pressable>
                </View>
                <View style={styles.inputContainer}>
                    <InputField
                        value={username}
                        onChangeText={(newText) => { handleUsername(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Username"} />
                    <InputField
                        value={email}
                        onChangeText={(newText) => { handleEmail(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Email"} />
                    <InputField
                        value={address}
                        onChangeText={(newText) => { handleAddress(newText) }}
                        importance
                        inputStyle={styles.inputStyle} titleField={"Address"} />
                    <InputField
                        value={phoneNumber}
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

            {isLoading &&
                <View style={styles.styleDialog}>
                    <View style={styles.dialogBox}>
                        <ActivityIndicator size={'large'} color={Colors.primaryColor} />
                        <Text style={[TextXSmall, { color: "#000" }]}>Please wait...</Text>
                    </View>
                </View>
            }
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