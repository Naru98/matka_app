import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const Label = (props) => {
  return (
    <Text style={[styles.label, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
    color: COLORS.black
  }
})

export default Label;