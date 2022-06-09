import SelectDropdown from 'react-native-select-dropdown'
import {StyleSheet, View} from 'react-native' 
import { Entypo } from '@expo/vector-icons'; 


type selectProps = {
    onSelect(item:string, key:number):void,
    data:Array<any>, 
    defaultText:string
}

export default function CustomSelect(props:selectProps){

    let data = props.data
    let defaultText = props.defaultText

    return (
        <SelectDropdown
            data={data}
            onSelect={(item, key) => {
                props.onSelect(item, key)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
            buttonStyle = {styles.select}
            buttonTextStyle = {styles.selectTextStyle}
            dropdownStyle= {styles.dropDown}
            rowStyle= {styles.row}
            defaultButtonText = {defaultText}
            renderDropdownIcon={isOpened => {
                return <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} size={24} color="black" style={styles.icon}/>
            }}
            dropdownIconPosition={'right'}
        />
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    select:{
      borderRadius: 8,
      width: 260,
      marginVertical: 13,
      height: 52,
    },
    selectTextStyle:{
      fontSize: 17,
      color: '#3d3d3d',
    },
    icon: {
        marginRight: 7
    },
    dropDown: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: -3,
    },
    row: {
        height: 51,
    }
})
