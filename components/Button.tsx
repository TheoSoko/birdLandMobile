import {Text, TouchableOpacity, StyleSheet } from 'react-native';

type buttonProps = {
    outline: boolean
    text: string
    touchEvent():void
}

export default function Button(props: buttonProps) {
    let bgColor = props.outline ? undefined : '#F0F3BD'
    let textColor = props.outline ? '#F0F3BD' : undefined

  return (
    <TouchableOpacity onPress={() => props.touchEvent()} style={[styles.button, {backgroundColor: bgColor}]}>
        <Text style={[styles.buttonText, {color: textColor}]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      paddingVertical: 10,
      borderRadius: 4,
      borderColor: '#F0F3BD',
      borderWidth: 1.5,
      width: 215,
    },
    buttonText: {
      fontSize: 25,
      fontWeight: '500',
      textAlign: 'center'
    },
  })