import {TextInput, StyleSheet } from 'react-native';


type inputProps = {
    onBlur?(): void
    onChangeText?(string: string): void
    placeholder?: string
    value?: string
    secureTextEntry?: boolean
    inputType?: 'email' | 'password'
}


export default function CustomInput(props: inputProps) {

  let keyboard: 'default' | 'email-address' | 'visible-password'
  let textContent: 'none' | 'emailAddress' | 'password'

  switch (props.inputType) {
    case undefined:
        keyboard = 'default'
        textContent = 'none'
        break;
    case 'email':
        keyboard = 'email-address'
        textContent = 'emailAddress'
        break;
    case 'password':
        keyboard = 'visible-password'
        textContent = 'password'
        break;
  }

  return (
    <TextInput onBlur={() => props.onBlur ? props.onBlur() : null} 
              onChangeText={(text)=> props.onChangeText ? props.onChangeText(text) : null} 
              style={[styles.textInput]} 
              placeholder={props.placeholder} 
              placeholderTextColor="#c4c4c4"
              value={props.value} 
              keyboardType={keyboard} 
              textContentType={textContent}
              secureTextEntry={props.secureTextEntry === undefined ? false : props.secureTextEntry}
              />
  );
}

const styles = StyleSheet.create({
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
})