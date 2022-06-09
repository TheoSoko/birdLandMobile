import DatePicker from 'react-native-date-picker'
import {useState} from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'


export default function CustomDatePicker (){
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState<boolean>(false)
  
    return (
      <>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}><Text style={styles.buttonText}>Entrez votre date de naissance</Text></TouchableOpacity>
        <DatePicker
          modal={true}
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </>
    )
  }

  const styles = StyleSheet.create(
      {
          button: {
            paddingVertical: 15,
            borderRadius: 8,
            borderColor: 'lightgrey',
            borderWidth: 1.2,
            width: 260,
            marginVertical: 13,
            paddingStart: 13,
            backgroundColor: 'lightgrey',
            fontSize: 17,
          },
          buttonText: {
              paddingLeft: 5,
              fontSize: 16,
          }
      }
  )