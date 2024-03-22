import React from "react";
import { Text, ScrollView, View, RefreshControl, StyleSheet } from "react-native";
import { ListItem, DatePicker, Label } from "../../components"
import COLORS from "../../constants/colors";
import moment from "moment";


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Bids = () => {
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
              <Text style={styles.label}>Kalyan</Text>
              <Text style={styles.label}>22</Text>
              <Text style={styles.label}>₹555</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={styles.label}>Open</Text>
              <Text style={styles.label}>**</Text>
              <Text style={styles.label}>₹00</Text>
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
})

export default Bids;