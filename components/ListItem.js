import React from 'react'
import { View, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const ListItem = (props) => {
  return (
    <View style={[styles.listItem, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
    color: COLORS.black
  }
})

export default ListItem;