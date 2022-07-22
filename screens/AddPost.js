import React, { useState } from 'react'
import { Text, View, Platform, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScaledSheet } from "react-native-size-matters";
import ModalConf from '../component/modalglobal';

export default function Detais({ navigation }) {

    const [Show2, setShow2] = useState(false);
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
            <View style>
                <Image source={require("../img/pngs/4.png")} style={{ width: 397.5, height: 225 }} />
            </View>
            <View style={{ right: -13 }}>
                <TouchableOpacity><Text style={StylesDetails.Tel3}> Modifier
                    <View>
                        <TouchableOpacity >
                            <Image source={require("../img/pngs/Modifie.png")} style={StylesDetails.logop1} />
                        </TouchableOpacity>
                    </View>
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{ top: -10 }}>
                <Text style={StylesDetails.Tel5}>Titre :</Text>
                <View style={StylesDetails.V3}>
                    <TextInput style={StylesDetails.Tel2}>Nouvelle proposition graphique</TextInput>
                </View>
                <View >
                    <Text style={StylesDetails.Tel5}>  Date :                                       Time :</Text>
                    <View style={StylesDetails.V4}>

                        <TouchableOpacity style={StylesDetails.Tel32} onPress={() => showMode('date')} >
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
                        <TouchableOpacity style={StylesDetails.Tel33} onPress={() => showMode('time')} >
                            <Text style={StylesDetails.Tel08}>{Tm}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ top: -70 }}>
                    <Text style={StylesDetails.Tel5}>Localisation :</Text>
                    <View style={StylesDetails.V43}>
                        <TextInput style={StylesDetails.Tel2}>Rabat, Agdal, Av Oqba ...</TextInput>
                    </View>
                </View ><View style={{ top: -20 }}>
                    <Text style={StylesDetails.Tel6}> Can be liked</Text>
                    <View style={StylesDetails.V8}></View>
                    <View style={StylesDetails.V9}></View>
                </View>
            </View>
            <TouchableOpacity onPress={() => { setShow2(true) }}>
                <Text style={StylesDetails.Btn}>Suivant </Text>
            </TouchableOpacity>
            <ModalConf modalVisible={Show2} Onclose={() => { setShow2(false); }} OnConf={() => { setShow2(true); }} onPress={() => { navigation.navigate("Home"); }} />

        </View>

    )
}

const StylesDetails = ScaledSheet.create({
    V: {
        flex: 1,
        padding: '20@s',
        backgroundColor: '#FFFFFFFF',
    },
    LogoML: {
        height: '225@s',
        width: '337.5@s',
    },
    V2: {
        marginVertical: 10,
        top: '-9@s',
    },
    V3: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: '10@s',
        borderColor: '#373737',
        shadowColor: '#373737',
        elevation: 4,
    },
    V43: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: '10@s',
        borderColor: '#373737',
        shadowColor: '#373737',
        elevation: 4,
    },
    logop1: {
        width: '20@s',
        height: '20@s',
        left: '-83@s',

    },
    V4: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: '20@s',
        alignSelf: 'flex-start',
    },
    V8: {
        backgroundColor: '#d74483',
        borderRadius: 9.5,
        padding: '0@s',
        width: '59@s',
        height: '14@s',
        top: -40,
    },
    V9: {
        backgroundColor: '#CA135E',
        borderRadius: 30,
        padding: '10@s',
        width: '22@s',
        height: '22@s',
        top: '-49@s',
        left: '37@s',
    },
    V5: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: '20@s',
        alignSelf: 'flex-end',
        top: '-69@mvs',
    },
    txt: {
        fontSize: 30,
        color: '#CA135E',
        fontWeight: 'bold',
        left: 10,
    },
    Tel33: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: 22,
    },
    Tel32: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: -20,
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
        left: 30,
        width: '100@s',
        alignItems: 'center',
    },
    Tel08: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: '0@s',
        width: '80@s',
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
        padding: '15@s',
        marginVertical: '10@s',
        top: '-60@s',
    },
    Tel3: {
        color: '#AAAAAA',
        fontSize: 18,
        alignSelf: 'flex-end',
        marginVertical: '5@s',

    },
});
