import { Image, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import FastImage from 'react-native-fast-image'
import InputField from '../../Components/InputField'
import Button from '../../Components/Button'
import { LinkMediumBold, TextXSmall } from '../../assets/constants/Typography'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AxiosIntance from '../../utils/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../assets/constants/Colors'
import { AppContext } from '../../utils/AppContext'

const ChangePassScreen = ({ navigation }) => {

    const { currentPass } = useContext(AppContext);

    const [curentPassUser, setCurrentPassUser] = useState(currentPass)
    const [isLoading, setIsLoading] = useState(false);

    const [currentPassword, setPassword] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPassAgain, setNewPassAgain] = useState("");

    const [error, setError] = useState("");
    const [errorNewPass, setErrorNewPass] = useState("");
    const [errorNewPassAgain, setErrorNewPassAgain] = useState("");


    const handleChangeCurrentPassword = (newText) => {
        setPassword(newText);
        console.log(currentPassword);
    }
    const handleChangeNewPassword = (newText) => {
        setNewPass(newText);
        console.log(newPass);
    }
    const handleChangeNewPasswordAgain = (newText) => {
        setNewPassAgain(newText);
        console.log(newPassAgain);
    }

    const handleErrorCurrentPass = () => {
        if (currentPassword !== curentPassUser && currentPassword.length > 0) {
            setError("Không đúng mật khẩu hiện tại");
        } else if (newPass !== newPassAgain && newPassAgain.length > 0) {
            setErrorNewPassAgain("Mật khẩu nhập vào không khớp với nhau")
        } else {
            setError("");
            setErrorNewPass("")
            setErrorNewPassAgain("")
        }
    }

    const handleChangePass = async () => {
        if (error.length === 0 && errorNewPass.length === 0 && errorNewPassAgain.length === 0) {
            setIsLoading(true);
            try {
                const res = AxiosIntance().post("users/change-password", { password: newPassAgain })
                if (!res.error) {
                    await AsyncStorage.setItem("password", newPass);
                    ToastAndroid.show("Password Change Success!", ToastAndroid.SHORT);
                    navigation.goBack();
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }
    }

    useEffect(() => {
        // console.log(currentPass);
        handleErrorCurrentPass();
    }, [currentPassword, newPass, newPassAgain])

    return (
        <KeyboardAwareScrollView style={styles.container}
            contentContainerStyle={{
                flex: isLoading ? 1 : 0
            }}>
            <SafeAreaView style={{ flex: 1, padding: 20 }}>
                <View style={{ flex: 0 }}>
                    <FastImage source={require('../../assets/images/20944201.jpg')} style={{ width: 200, aspectRatio: 1, alignSelf: "center", marginBottom: 20 }} />
                    <InputField
                        errorMessage={error}
                        onChangeText={(newText) => { handleChangeCurrentPassword(newText) }}
                        value={currentPassword}
                        inputContainerStyle={styles.inputContainerStyle}
                        secureTextEntry={true}
                        importance
                        titleField={"Current Password"} />

                    <InputField
                        errorMessage={errorNewPass}
                        onChangeText={(newText) => { handleChangeNewPassword(newText) }}
                        value={newPass}
                        inputContainerStyle={styles.inputContainerStyle}
                        secureTextEntry={true}
                        importance
                        titleField={"New Password"} />

                    <InputField
                        errorMessage={errorNewPassAgain}
                        onChangeText={(newText) => { handleChangeNewPasswordAgain(newText) }}
                        value={newPassAgain}
                        inputContainerStyle={styles.inputContainerStyle}
                        secureTextEntry={true}
                        importance
                        titleField={"Type New Password Again"} />
                </View>
                <View style={{ height: 55, marginTop: 50 }}>
                    <Button style={{ height: 55 }} onPress={() => { handleChangePass() }}>
                        <Text style={[LinkMediumBold, { color: "#fff" }]}>Change Password</Text>
                    </Button>
                </View>
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

export default ChangePassScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    inputContainerStyle: {
        marginBottom: 20
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