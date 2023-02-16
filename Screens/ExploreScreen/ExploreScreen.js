import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ExploreScreen = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <View>
            <Button title='Click Here' onPress={handleClick} />
            <Text>{count}</Text>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({})