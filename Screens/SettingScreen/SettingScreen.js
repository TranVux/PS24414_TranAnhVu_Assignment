import { ActivityIndicator, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconArrow, IconBack, IconChangeMode, IconHelp, IconLogout, IconNotifySmall, IconSecurity } from '../../assets/images'
import { TextMedium, TextXSmall } from '../../assets/constants/Typography'
import { Switch } from '@rneui/themed'
import { Colors } from '../../assets/constants/Colors'
import AxiosIntance from '../../utils/AxiosIntance'
import { AppContext } from '../../utils/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SettingScreen = ({ navigation }) => {
    const { isLogin, setIsLogin } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            const res = await AxiosIntance().get("auth/logout");
            console.log(res);
            if (!res.error && res.data.logout) {
                ToastAndroid.show("Logout Success!", ToastAndroid.SHORT);
                setIsLogin(false);
                AsyncStorage.removeItem("token");
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>
                <View style={styles.header}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <IconBack />
                    </Pressable>
                    <Text style={[TextMedium, { color: "#000" }]}>Setting</Text>
                    <View style={{ width: 16 }} />
                </View>
                <View style={styles.optionContainer}>
                    <Pressable style={styles.optionItem}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <IconNotifySmall />
                            <Text style={[TextMedium, { color: "#000" }]}>Notification</Text>
                        </View>
                        <IconArrow style={styles.iconArrow} />
                    </Pressable>
                    <Pressable style={styles.optionItem}
                        onPress={() => { navigation.navigate("ChangePasswordScreen") }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <IconSecurity />
                            <Text style={[TextMedium, { color: "#000" }]}>Change Password</Text>
                        </View>
                        <IconArrow style={styles.iconArrow} />
                    </Pressable>
                    <Pressable style={styles.optionItem}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <IconHelp />
                            <Text style={[TextMedium, { color: "#000" }]}>Help</Text>
                        </View>
                        <IconArrow style={styles.iconArrow} />
                    </Pressable>
                    <Pressable style={styles.optionItem}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <IconChangeMode />
                            <Text style={[TextMedium, { color: "#000" }]}>Dark Mode</Text>
                        </View>
                        <Switch />
                    </Pressable>
                    <Pressable style={styles.optionItem} onPress={handleLogout}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <IconLogout />
                            <Text style={[TextMedium, { color: "#000" }]}>Logout</Text>
                        </View>
                    </Pressable>
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
        </SafeAreaView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    optionContainer: {
        gap: 48,
        marginTop: 20
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    iconArrow: {
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