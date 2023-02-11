import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FallBackImage } from '../../assets/images';

const ImageLoader = ({ circleRounder, style, source, borderRadius = 0 }) => {

    const [url, setUrl] = useState({ uri: source });

    const handleOnError = () => {
        console.log("Lỗi load ảnh");
        setUrl(FallBackImage);
    }
    // console.log(source);
    return (
        <View style={[{ overflow: "scroll", borderRadius: circleRounder ? 1000 : borderRadius }]}>
            <Image
                style={[{ ...style, borderRadius: circleRounder ? 1000 : borderRadius },]}
                source={url}
                defaultSource={FallBackImage}
                onError={handleOnError}
            />
        </View >
    )
}

export default ImageLoader

const styles = StyleSheet.create({
})