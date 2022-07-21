import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import items from '../img/pngs/postes'


const Home = ({ navigation }) => {
    const Item = () => (
        <View>
            <Text style={contaire0.Tel}> Coca-Cola
                <View >
                    <Image source={require("../img/pngs/3.png")} style={contaire0.logop3} />
                </View>
                <View >
                    <TouchableOpacity >
                        <Image source={require("../img/pngs/coeur.png")} style={contaire0.logop4} />
                    </TouchableOpacity>
                </View>
            </Text>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate("Détails") }}>
                    <Image source={require("../img/pngs/4.png")} style={{ width: 427.5, height: 285 }} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={contaire0.Tel2}>Nouvelle proposition graphique</Text>
                <Text style={contaire0.Tel3}>2021-08-31 — 09:39</Text>
                <Text style={contaire0.Tel4}>Rabat, Agdal, Av Oqba ...</Text>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
        />

    );
    return (
        <View style={contaire0.V}>

            <Text style={contaire0.txt}>  Fil D'actualité
                <View >
                    <TouchableOpacity >
                        <Image source={require("../img/pngs/2.png")} style={contaire0.logop1} />
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => { navigation.navigate("Signin") }}>
                        <Image source={require("../img/pngs/1.png")} style={contaire0.logop2} />
                    </TouchableOpacity>
                </View>
            </Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={contaire0.logop5}>
                    <TouchableOpacity >
                        <Image source={require("../img/pngs/coeur2.png")} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const contaire0 = StyleSheet.create({
    V: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFFFF',

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
    logop5: {
        // alignItems: 'flex-end',
        alignSelf: 'flex-end',
        // backgroundColor: 'red',
        width: 100,
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});



export default Home;
