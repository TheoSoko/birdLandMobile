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
    
    //Toggle de visibilité du mot de passe
    const [hidePassword, setHidePassword] = useState<boolean>(true)

    //States de vérifications des formats de données
    const [errorEmail, setErrorEmail] = useState<string|null>(null)
    const [errorPassword, setErrorPassword] = useState<string|null>(null)

    //Messages d'erreurs
    const emailMessage = 'Veuillez rentrer un adresse mail valide'
    const passwordFormatMessage = 'Le mot de passe doit contenir au moins 8 huit caractères, dont une lettre, une majuscule, un chiffre et un caractère spécial.'
    const secondPasswordMessage = 'Vous n\'avez pas saisi le même mot de passe'

    //Vérification des formats des données
    function checkField(field: string):void {
        if (email !== undefined && email.length > 0) {
            if (!validator.isEmail(email)){
                setErrorEmail(emailMessage)
            } else {
                setErrorEmail(null)
            } 
        }
        if (password !== undefined && password.length > 0) {
            if (!validator.isStrongPassword(password)){
                setErrorPassword(passwordFormatMessage)
                return
            } else {
                setErrorPassword(null)
            } 
        } 
        if (secondPassword !== undefined && secondPassword.length > 0){
            if (secondPassword !== password){
                setErrorPassword(secondPasswordMessage)
            } else {
                setErrorPassword(null)
            }  
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.mainTitleView}>
                <Text style={styles.mainTitle}>Inscription</Text>
            </View>
            <View style={styles.inputContainer}>
                <CustomInput onBlur={() => checkField('email')}
                            onChangeText={(text)=> setEmail(text)}
                            placeholder='Entrez votre adresse mail'
                            value={email} 
                            inputType = 'email'
                            />

                {
                    errorEmail ? <View><Text style={{fontSize: 19, marginBottom: 12, marginTop: 9, fontWeight: '600', color:'#6d1111'}}>{errorEmail}</Text></View> : null    
                }    

                <View style={styles.passwordContainer}>
                    <CustomInput onBlur={() => checkField('password')}
                                onChangeText={(text)=> setPassword(text)}
                                placeholder='Entrez votre mot de passe'
                                value={password}
                                secureTextEntry = {hidePassword}
                                inputType = 'password'
                                />
                    <AntDesign onPress={() => setHidePassword(hidePassword ? false : true)} name="eye" size={24} color="black" style={styles.eyeIcon}/>
                </View>
                <View style={styles.passwordContainer}>
                    <CustomInput onBlur={() => checkField('secondPassword')}
                                onChangeText={(text)=> setSecondPassword(text)} 
                                placeholder='Confirmez votre mot de passe' 
                                value={secondPassword}
                                secureTextEntry = {hidePassword}
                                inputType = 'password'
                                />
                    <AntDesign onPress={() => setHidePassword(hidePassword ? false : true)} name="eye" size={24} color="black" style={styles.eyeIcon}/>
                </View>

                {
                    errorPassword ? <View style={{marginHorizontal: 26, position: 'relative', top: 11}}><Text style={{fontSize: 17, fontWeight: '600', color:'#6d1111'}}>{errorPassword}</Text></View> : null
                }

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
        marginBottom: 60,
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
    inputContainer: {
        marginBottom: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        marginTop: 35,
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