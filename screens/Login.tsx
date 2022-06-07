import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'
import validator from 'validator';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function Login({route, navigation}:LoginProps) {
    
    const [email, setEmail] = useState<string|undefined>()
    const [password, setPassword] = useState<string|undefined>()
    const [checkEmail, setCheckEmail] = useState<boolean|undefined>()
    const [checkPassword, setCheckpassword] = useState<boolean|undefined>()
    
    const errorEmail = 'Veuillez rentrer un adresse mail valide'
    const successEmail = 'C\'est bon pour l\'email'
    const errorPassword = 'Veuilez rentrer un mot de passe valide'
    const successPassword = 'C\'est bon pour le mot de passe'

    useEffect(() => {
        if (email) {
            if (validator.isEmail(email)){
                setCheckEmail(true)
            } else {
                setCheckEmail(false)
            }
        }
        if (password) {
            if (validator.isStrongPassword(password)){
                setCheckpassword(true)
            } else {
                setCheckpassword(false)
            }
        }
      });

    function displayEmailMessage(){
        let message
        if (checkEmail === true) {
            message = <View><Text style={{fontSize: 20, fontWeight: '600'}}>{successEmail}</Text></View>
        }
        if (checkEmail === false) {
            message = <View><Text style={{fontSize: 20, fontWeight: '600', color:'red'}}>{errorEmail}</Text></View>
        }
        if (!checkEmail) {
            message = null
        }
        return message
    }
    function displayPasswordMessage(){
        let message
        if (checkPassword === true) {
            message = <View><Text style={{fontSize: 20, fontWeight: '600'}}>{successPassword}</Text></View>
        }
        if (checkPassword === false) {
            message = <View><Text style={{fontSize: 20, fontWeight: '600', color:'red'}}>{errorPassword}</Text></View>
        }
        if (!checkPassword) {
            message = null
        }
        return message
    }


  return (
    <View style={styles.container}>
        <View style={styles.mainTitleView}>
            <Text style={styles.mainTitle}>Connexion</Text>
        </View>
        <View style={styles.inputBloc}>
            <TextInput onBlur={(event) => setEmail(event.nativeEvent.text)} style={styles.textInput} placeholder='Entrez votre email' value={email} keyboardType='email-address' textContentType='emailAddress'/>
            {displayEmailMessage()}
            <TextInput onBlur={(event) => setPassword(event.nativeEvent.text)} style={styles.textInput} placeholder='Entrez votre mot de passe' value={password} textContentType='password'/>
            {displayPasswordMessage()}
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A896'
      },
      mainTitleView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      mainTitle: {
        fontSize: 43,
        fontWeight: '500',
        color: 'white',
        marginBottom: 65,
      },
      textInput:{
        paddingVertical: 15,
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1.2,
        width: 260,
        marginVertical: 13,
        paddingStart: 13,
        backgroundColor: 'white',
        fontSize: 17,
    },
    inputBloc: {
        marginBottom: 30,
    }
})