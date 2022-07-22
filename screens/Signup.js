import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Userinput from "../component/auth/Userinput";
import { ScaledSheet } from "react-native-size-matters";



const Signup = ({ navigation }) => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [TelePhone, setTelePhone] = useState("");
    const [PassWord, setPassWord] = useState("");
    return (
        <View style={styles.con}>


            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={styles.contaire}>
                    S'inscripte
                </Text>
            </View>
            <ScrollView style={styleES.ScrollV}>
                <Userinput
                    name="Nom et Prénom"
                    value={Name}
                    setValue={setName}
                    autoCapitalize="words"
                    autoCorrect={false} />
                <Userinput
                    name="E-mail"
                    value={Email}
                    setValue={setEmail}
                    keyboardType="email-address" />
                <Userinput
                    name="Téléphone"
                    value={TelePhone}
                    setValue={setTelePhone}
                    keyboardType="numeric" />
                <Userinput
                    name="mot de passe"
                    value={PassWord}
                    setValue={setPassWord}
                    secureTextEntry={true}
                    autoComplteType="password" />

                <Text style={styleES.texte}>Minimum 6 caractére
                    <Text style={styleES.texte2}>.</Text>
                    <Text style={styleES.texte}>Lettre </Text>
                    <Text style={styleES.texte2}>.</Text>
                    <Text style={styleES.texte2}>Chiffre</Text>
                </Text>

                <><TouchableOpacity>
                    <Text style={styles.Btn}>
                        Suivant
                    </Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("Signin") }}>
                        <Text
                            style={styleES.texte3}>
                            J’ai déjà un compte
                        </Text>
                    </TouchableOpacity></>
            </ScrollView>
        </View>


    )
}


const styles = ScaledSheet.create({
    con: {
        flex: 1,
        padding: '10@s',
        backgroundColor: "#E1FAF6"

    },
    Btn: {
        backgroundColor: '#268C63',
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: '15@s',
        marginVertical: '10@vs',

    },

    contaire: {
        color: "#539D48",
        fontSize: 34,
        fontWeight: "bold"
    },

})
const styleES = ScaledSheet.create({
    texte: {
        color: '#229764',
        fontSize: 18,
        alignItems: 'stretch',
    },
    texte2: {
        color: '#000',
        alignItems: 'stretch',
        fontSize: 18,
    },
    texte3: {
        color: "#7d7d7d",
        alignItems: "stretch",
        fontSize: 18,
        marginVertical: '10@s',
    },
    ScrollV: {
        marginHorizontal: '20@s',
    },
})
export default Signup;