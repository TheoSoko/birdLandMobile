import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from './types'
import Home from './screens/Home'
import Login from './screens/Login'
import Registration from './screens/Registration'
import Registration2 from './screens/Registration2'
import SuccessRegistration from './screens/SuccessRegistration';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registration' component={Registration}/>
        <Stack.Screen name='Registration2' component={Registration2}/>
        <Stack.Screen name='SuccessRegistration' component={SuccessRegistration}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

