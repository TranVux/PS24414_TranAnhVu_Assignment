import { Pressable, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { Colors } from '../../assets/constants/Colors';

const Button = ({ disabled = false, children, width, height, style, primary, secondary, outline, onPress = () => { } }) => {
    // console.log("Button: " + disabled);
    return (
        <Pressable
            disabled={disabled ? true : false}
            style={[
                styles.button,
                {
                    height: height,
                    backgroundColor: primary ? Colors.primaryColor : (secondary ? Colors.button : (outline ? "#fff" : Colors.primaryColor)),
                    borderWidth: outline ? 2 : 0,
                    borderColor: outline ? Colors.primaryColor : "",
                    width: (width === undefined) ? "100%" : width
                },
                { ...style }
            ]}
            onPress={onPress}>
            {/* use chilren prop to pass icon into component */}
            {children}
        </Pressable>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    button: {
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 6,
        flexDirection: 'row',
        // paddingHorizontal: 15
    }
})