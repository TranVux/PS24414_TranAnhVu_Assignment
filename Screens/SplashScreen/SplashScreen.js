import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppLogo } from '../../assets/images'

const SplashScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <AppLogo width={217} height={66} />
        </SafeAreaView>
    )
}

export default SplashScreen