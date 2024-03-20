import React from "react";
import { Text, ScrollView, View, RefreshControl } from "react-native";
import { Button } from "../../components"
import COLORS from "../../constants/colors";
import ListItem from '../../components/ListItem';


const items = [1, 2, 3, 4, 5, 6, 7, 8]

const Bids = () => {
  const [refreshing, setRefreshing] = React.useState(false);

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
        alignItems: 'center'
      }}>
        <ListItem>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
        <Text>Kalyan</Text>
        <Text>22</Text>
        <Text>**</Text>
        </View>
        </ListItem>
      </View>
    </ScrollView>
  );
}

export default Bids;