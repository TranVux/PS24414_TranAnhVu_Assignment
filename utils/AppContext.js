import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import SplashScreen from "../Screens/SplashScreen";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(null);

    const handleIsLogin = async () => {
        const token = await AsyncStorage.getItem("token");
        let tempIsLogin = token ? true : false;
        setIsLogin(tempIsLogin);
        console.log(token);
    }

    console.log(isLogin);

    useEffect(() => {
        handleIsLogin();
    }, [])

    if (isLogin === null) {
        return (
            <SplashScreen />
        );
    }

    return (
        <AppContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    )
}