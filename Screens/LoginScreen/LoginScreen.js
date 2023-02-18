import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import InputField from '../../Components/InputField'
import { Colors } from '../../assets/constants/Colors'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Button from '../../Components/Button'
import { IconFacebook, IconGoogle } from '../../assets/images'
import { DisplayLargeBold, LinkMediumBold, TextLarge, TextSmall, TextXSmall } from '../../assets/constants/Typography'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext'

const LoginScreen = ({ navigation }) => {

    const [usename, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLogin, setInfoUser } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (usename, password) => {
        try {
            setIsLoading(true);
            const responseLogin = await AxiosIntance().post(
                "/auth/login", { email: usename, password: password }
            );
            console.log(responseLogin);

            if (!responseLogin.error) {
                await AsyncStorage.setItem("token", responseLogin.data.token);
                await AsyncStorage.setItem("infoUser", JSON.stringify(responseLogin.data.user));
                console.log(responseLogin.data.token);
                setIsLogin(true);
                setInfoUser(responseLogin.data.user);
                console.log(responseLogin.data.user);
                ToastAndroid.show("Login Success!", ToastAndroid.SHORT);
            } else {
                ToastAndroid.show("Login failure. Please check email or password again", ToastAndroid.SHORT);
            }
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            ToastAndroid.show("Login failure. Please check email or password again", ToastAndroid.SHORT);
            console.log(err);
        }
    }

    const handleUserNameChange = (usename) => {
        setUsername(usename);
        // console.log(usename);
    }

    const handlePasswordChange = (password) => {
        setPassword(password);
        // console.log(password);
    }

    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "white", flex: 1 }}
            contentContainerStyle={{ flex: isLoading ? 1 : 0 }}>
            <View style={styles.loginScreenContainer}>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        <Text style={[DisplayLargeBold, { color: Colors.titleActive }]}>Hello</Text>
                        <Text style={[DisplayLargeBold, { color: Colors.primaryColor }]}>Again!</Text>
                    </View>
                    <View style={styles.subTitleContainer}>
                        <Text style={[TextLarge, styles.subTitle]}>Welcome back you’ve been missed</Text>
                    </View>
                </View>
                <View style={styles.formContainer}>

                    {/* input field */}
                    <InputField value={usename} importance titleField="Username" inputContainerStyle={{ marginBottom: 16 }} onChangeText={(text) => { handleUserNameChange(text) }} />
                    <InputField value={password} importance titleField="Password" secureTextEntry={true} onChangeText={(text) => { handlePasswordChange(text) }} />
                    {/*  */}

                    <View style={styles.optionFormContainer}>
                        <BouncyCheckbox
                            size={20}
                            style={styles.checkBox}
                            text="Remember me"
                            textStyle={[TextSmall, styles.checkBoxTextStyle]}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={Colors.primaryColor}
                            unfillColor={"#fff"}
                            innerIconStyle={{ borderRadius: 3, borderWidth: 2, borderColor: Colors.primaryColor }}
                            onPress={(isChecked) => { /**Handle checked event of radio button */ }} />
                        <TouchableOpacity>
                            <Text style={[TextSmall, styles.textForgotPassword]}>Forgot the password ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    style={{ marginTop: 18 }}
                    height={50}
                    onPress={() => { handleLogin(usename, password) }}>
                    <Text style={[LinkMediumBold, styles.textButton, {}]}>Login</Text>
                </Button>
                <Text style={[TextSmall, styles.continueText]}>or continue with</Text>
                <View style={styles.optionsLoginContainer}>
                    <Button
                        secondary
                        height={48}
                        width={158}
                        onPress={() => { console.log("Login Facebook"); }}>
                        <IconFacebook />
                        <Text style={[LinkMediumBold, { color: Colors.buttonText }]}>Facebook</Text>
                    </Button>
                    <Button
                        secondary
                        height={48}
                        width={158}
                        onPress={() => { console.log("Login Google"); }}>
                        <IconGoogle />
                        <Text style={[LinkMediumBold, { color: Colors.buttonText }]}>Google</Text>
                    </Button>
                </View>
                <View style={styles.suggestSignUp}>
                    <Text style={[TextSmall, styles.textSuggestSignUp]}>Don’t have an account ? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("RegisterScreen") }}>
                        <Text style={[TextSmall, { color: Colors.primaryColor, fontWeight: '700' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isLoading &&
                <View style={styles.styleDialog}>
                    <View style={styles.dialogBox}>
                        <ActivityIndicator size={'large'} color={Colors.primaryColor} />
                        <Text style={[TextXSmall, { color: "#000" }]}>Please wait...</Text>
                    </View>
                </View>
            }
        </KeyboardAwareScrollView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginScreenContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    subTitle: {
        marginEnd: 120,
        marginTop: 3,
        color: Colors.bodyText,
    },
    formContainer: { marginTop: 40 },
    checkBox: {
    },
    checkBoxTextStyle: {
        textDecorationLine: "none",
        color: Colors.bodyText,
        marginStart: -10,
        marginTop: 1
    },
    optionFormContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10
    },
    textForgotPassword: {
        color: "#5890FF"
    },
    continueText: {
        color: Colors.bodyText,
        width: "100%",
        textAlign: "center",
        marginVertical: 16
    },
    optionsLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSuggestSignUp: {
        color: Colors.bodyText
    },
    suggestSignUp: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16
    },
    textButton: {
        color: "#fff"
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
        zIndex: 10,
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