import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={contaire0.V}>
            <ScrollView>

                <Text style={contaire0.txt}>  Fil D'actualité
                    <View >
                        <Image source={require("../img/pngs/2.png")} style={contaire0.logop1} />
                    </View>
                    <View >
                        <Image source={require("../img/pngs/1.png")} style={contaire0.logop2} />
                    </View>
                </Text>

                <Image source={require("../img/pngs/3.png")} style={contaire0.logop3} />
            </ScrollView>
        </View >
    )
}

const contaire0 = StyleSheet.create({
    V: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFFFF'
    },
    txt: {
        fontSize: 30,
        color: '#CA135E',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    logop1: {
        width: 34,
        height: 34,
        left: 90,
        flexDirection: 'row-reverse'
    },
    logop2: {
        width: 34,
        height: 34,
        left: 130,
        flexDirection: 'row-reverse'
    },
    logop3: {
        width: 49.92,
        height: 48,
        marginVertical: 20,
    },
});



export default Home;
