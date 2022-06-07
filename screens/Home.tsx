import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'
import Button from '../components/Button'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({route, navigation}:HomeProps) {
  return (
    <View style={styles.container}>
        <View style={styles.mainTitleView}>
            <Text style={styles.mainTitle}>BirdLand</Text>
        </View>
        <View style={styles.ButtonsBloc}>
            <View style={styles.loginBloc}>
              <Button outline={false} text='Se connecter' touchEvent={() => navigation.navigate('Login')}/>
            </View>
            <View style={styles.registerBloc}>
              <Button outline={true} text="S'incrire" touchEvent={() => navigation.navigate('Login')}/>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mainTitle: {
    fontSize: 43,
    fontWeight: '500',
    color: 'white',
    marginBottom: 85,
  },
  ButtonsBloc: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  registerButtonText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#F0F3BD',
    textAlign: 'center'
  },
  loginButton: {
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: '#F0F3BD',
    borderColor: '#F0F3BD',
    borderWidth: 1.5,
    width: 215,
  },
  registerButton: {
    paddingVertical: 10,
    borderRadius: 3,
    borderColor: '#F0F3BD',
    borderWidth: 1.5,
    width: 215,
  },
  loginBloc: {
    marginVertical: 21,
  },
  registerBloc: {
    marginBottom: 145,
  }
});
