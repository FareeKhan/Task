import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../helper/Helper'
import ThreeItems from '../components/ThreeItems'
import Card from '../components/Card'
import { userData } from '../Servics/ApiServices'

const Index = () => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk'
    const [allData, setAllData] = useState()
    const [active, setActive] = useState('Application')

    const data = [
        {
            title: "Family Member Name",
            name: "Irfan Ali"
        },
        {
            title: "Family Member CNIC",
            name: "45555-6666677-7"
        },
        {
            title: "Religion",
            name: "Islam"
        },
        {
            title: "Is Disable",
            name: "No"
        },
        {
            title: "Business Address",
            name: "Civic center lahore"
        }

    ]

    const requestData = [
        {
            title: "Request Amount",
            name: "25000/-"
        },
        {
            title: "Category",
            name: "Category"
        },
        {
            title: "Purpose",
            name: "Purpose"
        },


    ]

    const userInfo = async () => {
        try {
            const result = await userData(accessToken)
            if (result.message == "Fetched successfully") {
                setAllData(result.data.member_personal_details)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        userInfo()
    }, [])






    console.log('--->>', allData?.family)
    const fullDob = allData?.dob ? allData.dob : ''
    const year = fullDob?.slice(0, 4)
    const monthNumber = fullDob?.slice(5, 7)
    const date = fullDob?.slice(8, 10)
    const monthName = new Date(0, monthNumber - 1).toLocaleString('default', { month: 'long' });
    const fullDate = date + '-' + monthName + '-' + year

    console.log(fullDate)


    const handlePending = ()=>{
        alert('You Clicked Pending Button')
    }

    return (
        <View style={styles.mainContainer}>
            <Header />

            {/*- - - - CARD_SECTION - - -*/}
            <View style={styles.cardContainer}>
                <Image source={require('../assets/curlyHair.png')} style={styles.cardImg} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.cardTitle}>{`${allData?.first_name} ${allData?.last_name}`}</Text>
                    <View style={styles.cardNumber}>
                        <FontAwesome name='address-card-o' color={Colors.themeColor} size={15} />
                        <Text style={{ marginLeft: 7, color: Colors.themeColor, fontWeight: "600", fontSize: 12 }}>{allData?.cnic}</Text>
                    </View>
                </View>
            </View>


            {/*- - - - TAB_SECTION - - -*/}
            <View style={styles.tabContainer}>
                <TouchableOpacity activeOpacity={1} onPress={() => setActive('Application')} style={{ borderBottomWidth: 2, borderBottomColor: active == 'Application' ? Colors.themeColor : "#f6f6f6" }}>
                    <Text style={[styles.tabText, { color: active == 'Application' ? Colors.themeColor : '#000', }]}>Application Details</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => setActive('Status')} style={{ borderBottomWidth: 2, borderBottomColor: active == 'Status' ? Colors.themeColor : "#f6f6f6" }}>
                    <Text style={[styles.tabText, { color: active == 'Status' ? Colors.themeColor : '#000' }]}>Status</Text>
                </TouchableOpacity>
            </View>

            {
                active == 'Application' ?
                    <ScrollView style={{ paddingHorizontal: 14 }} showsVerticalScrollIndicator={false}>
                        <View style={[styles.miniContainer, { paddingTop: 30 }]}>
                            <ThreeItems
                                iconName='user'
                                status={allData?.gender}
                                title='Gender'
                                iconCommunity='SimpleLineIcons'
                            />

                            <ThreeItems
                                iconName='ring'
                                status={allData?.marital_status}
                                title='Marital Status'
                                iconCommunity='MaterialCommunityIcons'

                            />

                            <ThreeItems
                                iconName='family-tree'
                                status='Father'
                                title='Parentage(Father)'
                                iconCommunity='MaterialCommunityIcons'

                            />
                        </View>

                        <View style={[styles.miniContainer, { paddingTop: 30 }]}>
                            <ThreeItems
                                iconName='phone-call'
                                status={allData?.telephone}
                                title='Mobile'
                                iconCommunity='Feather'
                            />

                            <ThreeItems
                                iconName='ios-calendar-outline'
                                status={fullDate}
                                title='Date of Birth'
                                iconCommunity='Ionicons'

                            />

                            <ThreeItems
                                iconName='user'
                                status={allData?.education}
                                title='Education'
                                iconCommunity='SimpleLineIcons'

                            />
                        </View>

                        <Card
                            title='Family Details'
                        >
                            {
                                data.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.dataContainer}>
                                            <Text style={{ fontSize: 12, fontWeight: '300' }}>{item.title}</Text>
                                            <Text style={{ fontSize: 13 }}>{item.name}</Text>
                                        </View>
                                    )
                                })


                            }

                        </Card>


                        <Card style={{ marginBottom: 40 }}
                            title='Request Amount'
                            btn={true}
                            btnTextStyle={{color:"#c9181d",fontWeight:"500"}}
                            onPress={handlePending}
                        >
                            {
                                requestData.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.dataContainer}>
                                            <Text style={{ fontSize: 12, fontWeight: '300' }}>{item.title}</Text>
                                            <Text style={{ fontSize: 13 }}>{item.name}</Text>
                                        </View>
                                    )
                                })


                            }

                        </Card>


                    </ScrollView>
                    :
                   <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                     <Text>Here will be Status Content</Text>
                    </View>

            }

        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.22,
        backgroundColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2.22,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        marginRight: 20,
        marginTop: 20
    },
    cardImg: {
        width: 90,
        height: 90,
        borderRadius: 100
    },
    cardTitle: {
        fontWeight: "500",
        fontSize: 15
    },
    cardNumber: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7
    },


    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#f6f6f6",
        paddingTop: 100,
        // top:-60,
        zIndex: -1,
        marginTop: -60,
        marginBottom: 10

    }
    ,
    tabText: {
        fontWeight: "500",
        marginBottom:4
    },


    miniContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },


    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 10
    }



})