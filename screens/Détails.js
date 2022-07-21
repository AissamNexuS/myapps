import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Detais({ navigation }) {
    return (
        <View style={contaire0.V}>
            <View style={contaire0.V2}>
                <Text style={contaire0.txt}>  Détails </Text>
            </View>
            <Text style={contaire0.Tel2}>Bannière</Text>
            <View>
                <Image source={require("../img/pngs/4.png")} style={{ width: 427.5, height: 285 }} />
            </View>
            <View>
                <Text style={contaire0.Tel5}>Titre :</Text>
                <View style={contaire0.V3}>
                    <Text style={contaire0.Tel2}>Nouvelle proposition graphique</Text>
                </View>
                <View style={{ top: -10 }}>
                    <Text style={contaire0.Tel5}>Date :                                                   Time :</Text>
                    <View style={contaire0.V4}>
                        <Text style={contaire0.Tel2}>2021-08-3     </Text>
                    </View>
                    <View style={contaire0.V5}>
                        <Text style={contaire0.Tel2}> 09:39     </Text>
                    </View>
                </View>
                <View style={{ top: -50 }}>
                    <Text style={contaire0.Tel5}>Localisation :</Text>
                    <View style={contaire0.V3}>
                        <Text style={contaire0.Tel2}>Rabat, Agdal, Av Oqba ...</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <Text style={contaire0.Btn}>Revenir à la page home</Text>
            </TouchableOpacity>
        </View >

    )
}

const contaire0 = StyleSheet.create({
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
