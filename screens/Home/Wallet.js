import React from "react";
import { Text, ScrollView, View, RefreshControl } from "react-native";
import { Button } from "../../components"
import COLORS from "../../constants/colors";


const items = [1, 2, 3, 4, 5, 6, 7, 8]

const Wallet = () => {
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
        <Text>Bids screen</Text>
      </View>
    </ScrollView>
  );
}

export default Wallet;