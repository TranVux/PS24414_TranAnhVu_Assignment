import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(null);
    const handleIsLogin = async () => {
        const token = await AsyncStorage.getItem("token");
        let tempIsLogin = token ? true : false;
        setIsLogin(tempIsLogin);
        // console.log(token);
    }

    useEffect(() => {
        handleIsLogin();
    }, [])

    if (isLogin === null) {
        return null;
    }

    return (
        <AppContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    )
}