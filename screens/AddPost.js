import React, { useState } from 'react'
import { Text, View, Platform, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Detais({ navigation }) {


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Date');
    const [Tm, setTm] = useState('Time');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        setText(fDate);
        setTm(fTime);

        console.log(fDate + '(' + fTime + ')')
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    return (
        <View style={StylesDetails.V}>
            <View style={StylesDetails.V2}>
                <Text style={StylesDetails.txt}>  Nouveau post </Text>
            </View>
            <Text style={StylesDetails.Tel2}>Bannière</Text>
            <View>
                <Image source={require("../img/pngs/4.png")} style={{ width: 427.5, height: 285 }} />
            </View>
            <View>
                <Text style={StylesDetails.Tel5}>Titre :</Text>
                <View style={StylesDetails.V3}>
                    <TextInput style={StylesDetails.Tel2}>Nouvelle proposition graphique</TextInput>
                </View>
                <View style={{ top: 10 }}>
                    <Text style={StylesDetails.Tel5}>  Date :                                                   Time :</Text>
                    <View style={StylesDetails.V4}>
                        <TouchableOpacity style={StylesDetails.Tel2} onPress={() => showMode('date')} >
                            <Text style={StylesDetails.Tel09}>{text}</Text>
                        </TouchableOpacity>
                    </View>
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
                    <View style={StylesDetails.V5}>
                        <TouchableOpacity onPress={() => showMode('time')} >
                            <Text style={StylesDetails.Tel08}>{Tm}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ top: -50 }}>
                    <Text style={StylesDetails.Tel5}>Localisation :</Text>
                    <View style={StylesDetails.V3}>
                        <TextInput style={StylesDetails.Tel2}>Rabat, Agdal, Av Oqba ...</TextInput>
                    </View>
                </View>
                <Text style={StylesDetails.Tel6}> Can be liked</Text>
                <View style={StylesDetails.V8}></View>
                <View style={StylesDetails.V9}></View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <Text style={StylesDetails.Btn}>Suivant </Text>
            </TouchableOpacity>
        </View>

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
        padding: 10
    },
    V4: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 20,
        alignSelf: 'flex-start',
    },
    V8: {
        backgroundColor: '#d74483',
        borderRadius: 9.5,
        padding: 10,
        width: 72,
        height: 19,
        top: -30,
    },
    V9: {
        backgroundColor: '#CA135E',
        borderRadius: 30,
        padding: 10,
        width: 28,
        height: 28,
        top: -54,
        left: 46,
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
    Tel09: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: 10,
        width: 150,
        alignItems: 'center',
    },
    Tel08: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: 10,
        width: 80,
        alignItems: 'center',
    },


    Tel5: {
        fontWeight: '500',
        fontSize: 18,
        color: '#373737',
    },
    Tel6: {
        fontWeight: '500',
        fontSize: 18,
        color: '#373737',
        top: -45,
        left: -8,
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
        top: -60,
    },
});
