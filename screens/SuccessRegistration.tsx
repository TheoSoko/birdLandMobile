import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Button from '../components/Button'
import { Feather } from '@expo/vector-icons'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'

type successProps = NativeStackScreenProps<RootStackParamList, 'SuccessRegistration'>

export default function SuccessRegistration({route, navigation}:successProps){

    let firstSentence = `Bonjour, ${route.params.civilStatus} ${route.params.firstName} ${route.params.lastName}, né le ${route.params.birthDate}.`
    let secondSentence = `Votre addresse mail est ${route.params.email}`
    return(
        <View style={styles.container}>
            <Feather name="user-check" size={110} color="green" style={styles.icon}/>
            <View style={styles.TextView}>
                <Text style={styles.text}> Votre compte a été créé avec succès </Text>
                <Text style={styles.text}>{firstSentence}</Text>
                <Text style={styles.text}>{secondSentence}</Text>
            </View>
            <Button outline={false} text='Se connecter' touchEvent={ () => navigation.navigate('Login') }></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00A896'
    },
    icon: {
        marginTop: 100,
    },
    TextView: {
        marginVertical: 60,
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 17,
        marginVertical: 8,
    }
})
