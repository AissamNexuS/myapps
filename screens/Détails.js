import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Detais() {
    return (
        <View style={contaire0.V}>
            <View style={contaire0.V2}>
                <Text style={contaire0.txt}>  Détails </Text>
            </View>
            <Text style={contaire0.Tel2}>Bannière</Text>
            <View>
                <Image source={require("../img/pngs/4.png")} style={{ width: 427.5, height: 285 }} />
            </View><View>
                <Text style={contaire0.Tel5}>Titre :</Text>
                <View style={contaire0.V3}>
                    <Text style={contaire0.Tel2}>Nouvelle proposition graphique</Text>
                </View><View>
                    <Text style={contaire0.Tel5}>Date :                                                   Time :</Text>
                    <View style={contaire0.V4}>
                        <Text style={contaire0.Tel2}>2021-08-3     </Text>
                    </View>
                    <View style={contaire0.V5}>
                        <Text style={contaire0.Tel2}> 09:39     </Text>
                    </View>
                    <Text style={contaire0.Tel5}>Localisation :</Text>
                    <View style={contaire0.V3}>
                        <Text style={contaire0.Tel2}>Rabat, Agdal, Av Oqba ...</Text>
                    </View>
                </View>
            </View>
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
        marginVertical: 30,
    },
    V3: {
        backgroundColor: '#ECECEC',
        borderRadius: 5,
        padding: 20
    },
    V4: {
        backgroundColor: '#ECECEC',
        borderRadius: 5,
        padding: 20,
        alignSelf: 'flex-start',
    },
    V5: {
        backgroundColor: '#ECECEC',
        borderRadius: 5,
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
    logop1: {
        width: 34,
        height: 34,
        left: 90,
    },
    logop2: {
        width: 34,
        height: 34,
        left: 130,
    },
    logop3: {
        width: 49.92,
        height: 40,
        top: 12,
        left: -160,
    },
    logop4: {
        width: 34,
        height: 34,
        top: 12,
        left: 160,
    },
    Tel: {
        color: '#373737',
        fontSize: 20,
        fontWeight: '600',
        left: 60,
        height: 60,
    },
    Tel2: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: 10,
    },
    Tel3: {
        color: '#AAAAAA',
        fontSize: 14,
        left: 10,
    },
    Tel4: {
        color: '#373737',
        fontSize: 14,
        left: 10
    },
    Tel5: {
        fontWeight: '300',
        fontSize: 18,
        color: '#373737',
    },
    logop5: {
        // alignItems: 'flex-end',
        alignSelf: 'flex-end',
        backgroundColor: 'red',
        width: 100,
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});