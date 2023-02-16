import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconArrow, IconBack, IconChangeMode, IconHelp, IconLogout, IconNotifySmall, IconSecurity } from '../../assets/images'
import { TextMedium, TextXSmall } from '../../assets/constants/Typography'
import { Switch } from '@rneui/themed'
import { Colors } from '../../assets/constants/Colors'

const SettingScreen = ({ navigation }) => {

    return (
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
                <Pressable style={styles.optionItem}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <IconSecurity />
                        <Text style={[TextMedium, { color: "#000" }]}>Security</Text>
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
                <Pressable style={styles.optionItem}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <IconLogout />
                        <Text style={[TextMedium, { color: "#000" }]}>Logout</Text>
                    </View>
                </Pressable>
            </View>
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
    }
})