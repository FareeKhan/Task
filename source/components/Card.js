import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = ({ children, style, title, btn,btnStyle ,btnTextStyle,onPress}) => {
    return (
        <View style={[style, { marginTop: 15 }]}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.shadowContainer}>
                {children}
                {
                    btn &&
                    <TouchableOpacity onPress={onPress} style={[btnStyle,{ alignItems: "center", paddingVertical: 20 }]}>
                        <Text style={btnTextStyle}>Pending</Text>
                    </TouchableOpacity>
                }
            </View>




        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: "#000",
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        color: "#fff",
        fontWeight: "700",
        paddingLeft: 15
    },
    shadowContainer: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        backgroundColor: "#fff",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }
})