import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'


export default function Detais({ navigation }) {
    return (
        <View style={StylesDetails.V}>
            <Text style={StylesDetails.txt}>  Nouveau post </Text>
            <ScrollView>
                <Text style={StylesDetails.Tel2}>Bannière</Text>
                <View>
                    <Image source={require("../img/pngs/4.png")} style={{ width: 427.5, height: 285 }} />
                </View>
                <Text style={StylesDetails.Tel3}> Modifier
                    <View >
                        <TouchableOpacity >
                            <Image source={require("../img/pngs/Modifie.png")} style={StylesDetails.logop1} />
                        </TouchableOpacity>
                    </View>
                </Text>
                <View>
                    <Text style={StylesDetails.Tel5}>Titre :</Text>
                    <View style={StylesDetails.V3}>
                        <Text style={StylesDetails.Tel2}>Nouvelle proposition graphique</Text>
                    </View>
                    <View style={{ top: 10 }}>
                        <Text style={StylesDetails.Tel5}>Date :                                                   Time :</Text>
                        <View style={StylesDetails.V4}>
                            <Text style={StylesDetails.Tel2}>2021-08-3     </Text>
                        </View>
                        <View style={StylesDetails.V5}>
                            <Text style={StylesDetails.Tel2}> 09:39     </Text>
                        </View>
                    </View>
                    <View style={{ top: -50 }}>
                        <Text style={StylesDetails.Tel5}>Localisation :</Text>
                        <View style={StylesDetails.V3}>
                            <Text style={StylesDetails.Tel2}>Rabat, Agdal, Av Oqba ...</Text>

                        </View>
                        <Text style={StylesDetails.Tel5}>Can be liked</Text>
                        <TouchableOpacity >
                            <Text style={StylesDetails.Btn} >Suivant</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >

    )
}

const StylesDetails = StyleSheet.create({
    V: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFFFF',
    },
    V2: {
        marginVertical: 20,
    },
    V3: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 20
    },
    V4: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 20,
        alignSelf: 'flex-start',
    },
    V5: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 20,
        alignSelf: 'flex-end',
        top: -69,
    },
    logop1: {
        width: 20,
        height: 20,
        left: -102,
    },
    txt: {
        fontSize: 30,
        color: '#CA135E',
        fontWeight: 'bold',
        left: 10,
    },

    Tel2: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: 10,
    },
    Tel5: {
        fontWeight: '300',
        fontSize: 18,
        color: '#373737',
    },
    Btn: {
        backgroundColor: '#CA135E',
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
    },
    Tel3: {
        color: '#AAAAAA',
        fontSize: 18,
        alignSelf: 'flex-end',
        marginVertical: 10,

    },
});
