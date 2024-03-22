import React from "react";
import { Text, ScrollView, View, RefreshControl, StyleSheet } from "react-native";
import { ListItem, DatePicker, Label, Button } from "../../components"
import COLORS from "../../constants/colors";
import moment from "moment";
import { Octicons } from '@expo/vector-icons';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Wallet = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
// set defaut date to today
  const [date, setDate] = React.useState(moment().toDate());

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      console.log(params.date);
    },
    [setOpen, setDate]
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }
    , []);
  return (
    <ScrollView style={{ flex: 1 }} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={{
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: 'white',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              // full available width
              width: "90%",
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.primary, fontSize:28, fontWeight: 'bold'}}> Available Cash </Text>
              <Text style={{ color: COLORS.black, fontSize:28, fontWeight: 'bold'}}> ₹ 1000 </Text>
              <Text style={{ color: COLORS.blue, fontSize:14, fontWeight: 'bold'}}> <Octicons name='sync' size={14} color={COLORS.blue} /> Refresh </Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                marginTop: 10,
              }}>
                <Button title='Add Cash' onPress={() => {}} color={COLORS.blue} filled style={styles.button}/>
                <Button title='Withdraw' onPress={() => {}} color={COLORS.secondary} filled style={styles.button}/>
                </View>
            </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: COLORS.white,
          padding: 10,
          marginBottom: 5,
          shadowColor: "#444",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <DatePicker
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
          setOpen={setOpen}
        />
      </View>
      <View style={{
        alignItems: 'center'
      }}>
        {items.map((v, index) => (
          <ListItem key={index}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={styles.label}>Withdraw</Text>
              <Text style={styles.label}>G-Pay</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={styles.label}>Amount</Text>
              <Text style={styles.label}>₹555</Text>
              <Text style={styles.label}>Completed</Text>
            </View>
          </ListItem>))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black
  },
  button: {
    paddingLeft: 19,
    paddingRight: 19,
  }
})

export default Wallet;