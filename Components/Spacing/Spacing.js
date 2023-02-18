import { View } from 'react-native'
import React from 'react'

const Spacing = ({ spaceSize }) => {
    return (
        <View style={{ marginVertical: spaceSize ? spaceSize : 10 }} />
    )
}

export default Spacing
