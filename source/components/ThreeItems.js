import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../helper/Helper'

const ThreeItems = ({ iconName, status, title, iconCommunity }) => {
    return (
        <View style={{ width: "28%" }}>
            {
                iconCommunity == 'SimpleLineIcons' ?
                    <SimpleLineIcons name={iconName} size={18} color={Colors.themeColor} />
                    :
                    iconCommunity == 'MaterialCommunityIcons' ?
                    <MaterialCommunityIcons name={iconName} size={18} color={Colors.themeColor} />
                    :
                    iconCommunity == 'Feather' ?
                    <Feather name={iconName} size={18} color={Colors.themeColor} />
                    : iconCommunity == 'Ionicons' ?
                    <Ionicons name={iconName} size={18} color={Colors.themeColor} />
                    :
                    ''


            }
            <Text style={{ fontSize: 12, marginTop: 7 }}>{status}</Text>
            <Text style={{ fontSize: 10, color: "#787878", marginTop: 4 }}>{title}</Text>
        </View>
    )
}

export default ThreeItems

const styles = StyleSheet.create({})