import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../helper/Helper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Iconic from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>GROWTECH</Text>
                <Text style={styles.subTitle}>Application Verifications</Text>
            </View>

            <View style={{ flexDirection: "row",alignItems:"center" }}>
                <MaterialIcons name='notifications-on' color={'#9c9c9c'} size={16} style={{ marginRight: 5 }}/>
                <Iconic name='ios-reorder-three-outline' color={'#9c9c9c'} size={24}/>
                
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3",
        paddingHorizontal: 15,
        paddingTop: Platform.OS == 'ios' ? 45 : 20,
        paddingBottom:20
    },
    title: {
        fontSize: 25,
        fontWeight: "900",
        color: Colors.themeColor
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "700",
        color: "#5e5e5e"

    }
})