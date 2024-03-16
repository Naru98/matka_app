import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const TextField = ({ name, error, ...rest }) => {
  return (
    <>
    <TextInput
      style={{
        ...styles.textInput,
        width: "100%"
      }}
      name={name}
      {...rest}
    />
    {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingVertical: 6
  }
})

export default TextField;