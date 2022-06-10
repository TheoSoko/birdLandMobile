import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import validator from 'validator';
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import CustomDatePicker from '../components/CustomDatePicker'

type RegistrationProps = NativeStackScreenProps<RootStackParamList, 'Registration2'>


export default function Registration({route, navigation}:RegistrationProps){


    //states des valeurs des champs
    const [firstName, setFirstName] = useState<string|undefined>()
    const [lastName, setLastName] = useState<string|undefined>()
    const [civilStatus, setCivilStatus] = useState<string|undefined>()
    const [birthDate, setBirthdate] = useState<string|undefined>()

    //Messages d'erreurs
    const emailMessage = 'Veuillez rentrer un adresse mail valide'
    const passwordFormatMessage = 'Le mot de passe doit contenir au moins 8 huit caractères, dont une lettre, une majuscule, un chiffre et un caractère spécial.'
    const secondPasswordMessage = 'Vous n\'avez pas saisi le même mot de passe'

    //Navigation
    function confirmAndNavigate():void{
        if (firstName && lastName && civilStatus && birthDate){
            navigation.navigate('SuccessRegistration', {
                email: route.params.email,
                password: route.params.password,
                firstName: firstName,
                lastName: lastName,
                civilStatus: civilStatus,
                birthDate: birthDate 
                })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainTitleView}>
                <Text style={styles.mainTitle}>Inscription 2</Text>
            </View>
            <View style={styles.inputContainer}>

                <CustomSelect onSelect={(item) => setCivilStatus(item)} 
                            data={['M.', 'Mme']}
                            defaultText={'Choisissez votre civilité'}
                            />
                            
                <CustomInput onBlur={() => null}
                            onChangeText={(text)=> setFirstName(text)}
                            placeholder='Entrez votre Prénom'
                            value={firstName} 
                            inputType='email'
                            />

                <CustomInput onBlur={() => null}
                            onChangeText={(text)=> setLastName(text)}
                            placeholder='Entrez votre nom'
                            value={lastName}
                            inputType='password'
                            />
            
                <View><CustomDatePicker onDatePick={(date) => setBirthdate(date)}/></View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.nextButton} onPress={() => confirmAndNavigate()}>
                        <Text style={styles.nextButtonText}>Terminer</Text> 
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