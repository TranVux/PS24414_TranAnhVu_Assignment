import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'


const ItemLoading = ({ vertical = false }) => {
    return (
        <>
            {vertical ?
                <View>
                    {/* loading view */}
                    <Skeleton width={"100%"} height={180} />
                    <View style={{ marginTop: 8 }}>
                        <Skeleton height={30} />
                    </View>
                    <View style={{ marginTop: 4, flexDirection: "row", justifyContent: "flex-start" }}>
                        <Skeleton height={20} width={20} style={{ borderRadius: 50 }} />
                        <Skeleton height={20} width={120} style={{ marginStart: 4 }} />
                        <Skeleton height={20} width={120} style={{ marginStart: 10, flex: 1 }} />
                    </View>
                </View> :
                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                    <Skeleton width={96} height={96} />
                    <View style={{ flex: 1, marginStart: 4, paddingVertical: 5 }}>
                        <Skeleton height={40} style={{ flex: 1 }} />
                        <View style={{ marginTop: 4, flexDirection: "row" }}>
                            <Skeleton width={20} height={20} style={{ borderRadius: 50 }} />
                            <Skeleton height={20} style={{ marginStart: 4 }} />
                        </View>
                    </View>
                </View>
            }
        </>
    )
}

export default ItemLoading