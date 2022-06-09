import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'
import { AntDesign } from '@expo/vector-icons'; 
import validator from 'validator';
import Button from '../components/Button'
import CustomInput from '../components/CustomInput'

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function Login({route, navigation}:LoginProps) {
    
    const [email, setEmail] = useState<string|undefined>()
    const [password, setPassword] = useState<string|undefined>()
    const [checkEmail, setCheckEmail] = useState<boolean|undefined>()
    const [checkPassword, setCheckpassword] = useState<boolean|undefined>()
    const [hidePassword, setHidePassword] = useState<boolean>(true)

    const errorEmail = 'Veuillez rentrer un adresse mail valide'
    const errorPassword = 'Le mot de passe doit contenir au moins 8 huit caractères, dont une lettre, une majuscule, un chiffre et un caractère spécial'

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
    
    function displayEmailMessage(){
        let message
        if (checkEmail === undefined || (email !== undefined && email.length === 0)){
            message = null
        } else if(checkEmail === false) {
            message = <View><Text style={{fontSize: 20, fontWeight: '600', color:'#6d1111'}}>{errorEmail}</Text></View>
        }
        return message
    }
    function displayPasswordMessage(){
        let message
        if (checkPassword === undefined || (password !== undefined && password.length === 0)){
            message = null
        } else if (checkPassword === false) {
            message = <View style={{marginHorizontal: 28}}><Text style={{fontSize: 20, fontWeight: '600', color:'#6d1111'}}>{errorPassword}</Text></View>
        }
        return message
    }
    function displayLoginButton(){
        let button
        if (checkEmail === true && checkPassword === true){
            button = <Button outline={true} text='Me connecter' touchEvent={() => 'lol'}/>
        } else {
            button = null
        }
        return button
    }


  return (
    <View style={styles.container}>
        <View style={styles.mainTitleView}>
            <Text style={styles.mainTitle}>Connexion</Text>
        </View>
        <View style={styles.inputBloc}>
            <CustomInput onBlur={() => checkField('email')} 
                        onChangeText={(text)=> setEmail(text)} 
                        placeholder='Entrez votre adresse mail' 
                        value={email}  
                        inputType='email'
                        />
            {displayEmailMessage()}
            <View style={styles.passwordContainer}>
                <CustomInput onBlur={() => checkField('password')} 
                            onChangeText={(text)=> setPassword(text)} 
                            placeholder='Entrez votre mot de passe' 
                            value={password} 
                            secureTextEntry = {hidePassword}
                            inputType='email'
                            />
                <AntDesign onPress={() => setHidePassword(hidePassword ? false : true)} name="eye" size={24} color="black" style={styles.eyeIcon}/>
            </View>
            {displayPasswordMessage()}
            <View style={styles.buttonView}>
                {displayLoginButton()}
            </View>
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
        marginTop: 29,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 260,
    },
    eyeIcon: {
        paddingLeft: 17,
    }
})