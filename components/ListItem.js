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
    padding: 11,
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: "#444",
    marginBottom: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

export default ListItem;