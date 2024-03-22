import React from 'react'
import { DatePickerModal, enGB, registerTranslation } from 'react-native-paper-dates'
import { TouchableOpacity, StyleSheet, TextInput } from "react-native";
import COLORS from '../constants/colors';
import { DateFormat } from '../constants/formats';
import moment from 'moment';
import { Octicons } from '@expo/vector-icons';
registerTranslation('en', enGB)

const DatePicker = ({ date, setOpen, ...rest }) => {
  return (
      <TouchableOpacity
      style={{
        width: '100%',
        flexDirection: 'row',
        borderColor: '#444',
        borderBottomWidth: 1,
      }}
        onPress={() => setOpen(true)}
      >
        <Octicons style={{ alignSelf: 'center'}} name='calendar' size={23} color={COLORS.primary} />
        <TextInput
        style={styles.textInput}
        name="date"
        value={date ? moment(date).format(DateFormat) : ''}
        editable={false}
        selectTextOnFocus={false}
        />
        <Octicons style={{ marginLeft: 'auto', alignSelf: 'center' }} name='pencil' size={23} color={COLORS.primary} />
      <DatePickerModal
        locale={'en'}
        mode="single"
        date={date}
        {...rest}
      />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textInput: {
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingVertical: 6,
    fontSize: 19,
    color: COLORS.black,
  },
})


export default DatePicker;