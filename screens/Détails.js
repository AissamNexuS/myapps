import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function Detais({ navigation }) {
    return (
        <View style={StylesDetails.V}>
            <View style={StylesDetails.V2}>
                <Text style={StylesDetails.txt}>  Détails </Text>
            </View>
            <Text style={StylesDetails.Tel2}>Bannière</Text>
            <View>
                <Image source={require("../img/pngs/4.png")} style={{ width: 427.5, height: 285 }} />
            </View>
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
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <Text style={StylesDetails.Btn}>Retour aux postes</Text>
            </TouchableOpacity>
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
});
