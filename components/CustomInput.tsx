import {TextInput, StyleSheet } from 'react-native';

type KeyboardTypeOptions = (
  'default' |
  'numeric' |
  'email-address' |
  "ascii-capable" | 
  'numbers-and-punctuation' | 
  'url' | 
  'number-pad' | 
  'phone-pad' | 
  'name-phone-pad' | 
  'decimal-pad' | 
  'twitter' | 
  'web-search' | 
  'visible-password' 
)

type textContentTypeoptions = (
  'none' |
  'URL' |
  'addressCity' |
  'addressCityAndState' | 
  'addressState' | 
  'countryName' | 
  'creditCardNumber' | 
  'emailAddress' | 
  'familyName' | 
  'fullStreetAddress' | 
  'givenName' | 
  'jobTitle' | 
  'location' | 
  'middleName' | 
  'name' | 
  'namePrefix' | 
  'nameSuffix' | 
  'nickname' | 
  'organizationName' | 
  'postalCode' | 
  'streetAddressLine1' | 
  'streetAddressLine2' | 
  'sublocality' | 
  'telephoneNumber' |
  'username' | 
  'password' 
)


type inputProps = {
    onBlur?(): void
    onChangeText?(string: string): void
    placeholder?: string
    value?: string
    keyboardType?: KeyboardTypeOptions
    textContentType?: textContentTypeoptions
    secureTextEntry?: boolean
}


export default function CustomInput(props: inputProps) {

  return (
    <TextInput onBlur={() => props.onBlur ? props.onBlur() : null} 
              onChangeText={(text)=> props.onChangeText ? props.onChangeText(text) : null} 
              style={[styles.textInput]} 
              placeholder={props.placeholder} 
              value={props.value} 
              keyboardType={props.keyboardType ? props.keyboardType : 'default'} 
              textContentType={props.textContentType ? props.textContentType : 'none'}
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