import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import SplashScreen from "../Screens/SplashScreen";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(null);
    const [infoUser, setInfoUser] = useState({});
    const [currentPass, setCurrentPass] = useState("");

    const handleIsLogin = async () => {
        const token = await AsyncStorage.getItem("token");
        const _currentPass = await AsyncStorage.getItem("password");
        let tempIsLogin = token ? true : false;
        setIsLogin(tempIsLogin);
        setCurrentPass(_currentPass);
        console.log("Password in context " + currentPass);
        // console.log(token);
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
        <AppContext.Provider value={{ isLogin, setIsLogin, infoUser, setInfoUser, setCurrentPass, currentPass }}>
            {children}
        </AppContext.Provider>
    )
}