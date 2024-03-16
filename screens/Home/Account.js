import React from "react";
import { Text, ScrollView, View } from "react-native";

const gamses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const Account = () => {
  return (

    <ScrollView style={{ flex: 1 }}>
      <View style={{
        padding: 10,
        alignItems: 'center'
      }}>
      {gamses.map((game, index) => {
        return (
          <View key={index} style={{
            padding: 10,
            margin: '5%',
            borderRadius: 10,
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
            width: "80%",
          }}>
            {/* ADD heading with text center */}
            <View style={{
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Game {index + 1}</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text>Game {index + 1}</Text>
              <Text>₦ 1000</Text>
              <Text>₦ 1000</Text>
            </View>
          <Text >{game}</Text>
          </View>
        )
      })}
      </View>
    </ScrollView>
  );
}

export default Account;