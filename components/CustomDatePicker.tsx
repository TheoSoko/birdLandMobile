import DateTimePickerModal from "react-native-modal-datetime-picker";import {useState} from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'

type DatePickerProps = {
  onDatePick(date:string):void
}  

export default function CustomDatePicker(props:DatePickerProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickedDate, setPickedDate] = useState<string|undefined>()

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date:Date) => {
    let dateString = date.toLocaleDateString()
    props.onDatePick(dateString)
    setPickedDate(dateString)
    hideDatePicker()
  }

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.button}><Text style={styles.buttonText}>{pickedDate ? pickedDate : 'Entrez votre date de naissance'}</Text></TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}


const styles = StyleSheet.create(
    {
        button: {
          paddingVertical: 15.5,
          borderRadius: 8,
          borderColor: '#eEeEeE',
          borderWidth: 1.2,
          width: 260,
          marginVertical: 13.2,
          paddingStart: 13,
          backgroundColor: '#eEeEeE',
          fontSize: 17,
        },
        buttonText: {
            paddingLeft: 5,
            fontSize: 16,
        }
    }
)