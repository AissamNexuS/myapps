import React, { useState } from 'react'
import { Text, View, Platform, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function AddPost() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Ajouter une date et un temps pour le post');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        setText(fDate + '                                          ' + fTime);
        console.log(fDate + '(' + fTime + ')')
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <ScrollView><View style={StylesDetails.V}>
            <View style={StylesDetails.V2}>
                <Text style={StylesDetails.txt}>  Nouveau post </Text>
            </View>

            <Text style={StylesDetails.Tel2}>Bannière</Text>
            <View>
                <Image source={require("../img/pngs/4.png")} style={{ width: 387.5, height: 225 }} />
            </View>
            <TouchableOpacity><Text style={StylesDetails.Tel3}> Modifier
                <View >
                    <TouchableOpacity >
                        <Image source={require("../img/pngs/Modifie.png")} style={StylesDetails.logop1} />
                    </TouchableOpacity>
                </View>
            </Text></TouchableOpacity>
            <View>
                <Text style={StylesDetails.Tel5}>Titre :</Text>
                <View style={StylesDetails.V3}>
                    <TextInput style={StylesDetails.Tel2}>Nouvelle proposition graphique</TextInput>
                </View>
                <View style={{ top: 0 }}>
                    <Text style={StylesDetails.Tel5}>Date :                                                      Heure :</Text>
                    <View style={StylesDetails.V4}>
                        <TouchableOpacity style={StylesDetails.Tel2} onPress={() => showMode('date')} >
                            <Text style={StylesDetails.Tel2}>{text}</Text>
                        </TouchableOpacity>

                        {show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChange}
                            />
                        )}
                    </View>
                    <Text>Can be liked</Text>
                </View>
                <View style={{ top: 10 }}>
                    <Text style={StylesDetails.Tel5}>Localisation :</Text>
                    <View style={StylesDetails.V3}>
                        <TextInput style={StylesDetails.Tel2}>Rabat, Agdal, Av Oqba ...</TextInput>

                    </View>
                    <Text>Can be liked</Text>
                    <TouchableOpacity >
                        <Text style={StylesDetails.Btn} >Suivant</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View ></ScrollView>

    )
}

const StylesDetails = StyleSheet.create({
    V: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFFFF',
    },
    V2: {
        marginVertical: 20
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
        fontSize: 18,
        left: 10,
    },
    Tel5: {
        fontWeight: '500',
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
