import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import validator from 'validator';
import CustomInput from '../components/CustomInput'

type RegistrationProps = NativeStackScreenProps<RootStackParamList, 'Registration'>



export default function Registration({route, navigation}:RegistrationProps){

    //states des valeurs des champs
    const [email, setEmail] = useState<string|undefined>()
    const [password, setPassword] = useState<string|undefined>()
    const [secondPassword, setSecondPassword] = useState<string|undefined>()

    //States de vérifications des formats de données
    const [checkEmail, setCheckEmail] = useState<boolean|undefined>()
    const [checkPassword, setCheckpassword] = useState<boolean|undefined>()
    const [hidePassword, setHidePassword] = useState<boolean>(true)

    //Messages d'erreurs
    const errorEmail = 'Veuillez rentrer un adresse mail valide'
    const errorPassword = 'Le mot de passe doit contenir au moins 8 huit caractères, dont une lettre, une majuscule, un chiffre et un caractère spécial.'
    const notsamePassword = 'Vous n\'avez pas saisi le même mot de passe'

    //Vérification des formats des données
    function checkField(fieldName: string):void{
        if (fieldName == 'email') {
            if (email && email.length > 0) {
                if (validator.isEmail(email)){
                    setCheckEmail(true)
                } else {
                    setCheckEmail(false)
                }
            }
        } else if (fieldName == 'password') {
            if (password && password.length > 0) {
                if (validator.isStrongPassword(password)){
                    setCheckpassword(true)
                } else {
                    setCheckpassword(false)
                }
            }
        }
    }

    //Fonctions d'affichage des messages d'erreur
    function displayEmailMessage(){
        let message
        if (checkEmail === undefined || (email !== undefined && email.length === 0) || checkEmail === true){
            message = null
        } else if(checkEmail === false) {
            message = <View><Text style={{fontSize: 20, fontWeight: '600', color:'#6d1111'}}>{errorEmail}</Text></View>
        }
        return message
    }
    function displayPasswordMessage(){
        let message
        if (checkPassword === undefined || (password !== undefined && password.length === 0) || (checkPassword === true && password === secondPassword)){
            message = null
        } else if (checkPassword === false) {
            message = <View style={{marginHorizontal: 26, position: 'relative', top: 11}}><Text style={{fontSize: 17, fontWeight: '600', color:'#6d1111'}}>{errorPassword}</Text></View>
        } else if (secondPassword !== undefined && secondPassword.length > 0 && password !== secondPassword){
            message = <View style={{marginHorizontal: 28}}><Text style={{fontSize: 19, fontWeight: '600', color:'#6d1111'}}>{notsamePassword}</Text></View>
        }
        return message
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainTitleView}>
                <Text style={styles.mainTitle}>Inscription</Text>
            </View>
            <View style={styles.inputBloc}>

                <CustomInput onBlur={() => checkField('email')} 
                            onChangeText={(text)=> setEmail(text)} 
                            placeholder='Entrez votre adresse mail' 
                            value={email} keyboardType='email-address' 
                            textContentType='emailAddress'/>

                {displayEmailMessage()}

                <View style={styles.passwordContainer}>
                    <CustomInput onBlur={() => checkField('password')} 
                                onChangeText={(text)=> setPassword(text)} 
                                placeholder='Entrez votre mot de passe' 
                                value={password} 
                                textContentType='password'
                                secureTextEntry = {hidePassword}
                                />
                    <AntDesign onPress={() => setHidePassword(hidePassword ? false : true)} name="eye" size={24} color="black" style={styles.eyeIcon}/>
                </View>
                
                <View style={styles.passwordContainer}>
                    <CustomInput onChangeText={(text)=> setSecondPassword(text)} 
                                placeholder='Confirmez votre mot de passe' 
                                value={secondPassword} 
                                textContentType='password'
                                secureTextEntry = {hidePassword}
                                />
                    <AntDesign onPress={() => setHidePassword(hidePassword ? false : true)} name="eye" size={24} color="black" style={styles.eyeIcon}/>
                </View>

                {displayPasswordMessage()}

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Suivant</Text> 
                        <MaterialIcons name="navigate-next" size={33} color="#F0F3BD" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
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
        borderRadius: 8,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        marginTop: 40,
        alignContent: 'center',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 260,
    },
    eyeIcon: {
        position: 'absolute',
        right: 13.5,
    },
    nextButton: {
        paddingVertical: 6,
        borderRadius: 10,
        borderColor: '#F0F3BD',
        borderWidth: 1.5,
        width: 162,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    nextButtonText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 3.5,
        marginStart: 29,
        marginEnd: -4,
        color: '#F0F3BD',
      },
})