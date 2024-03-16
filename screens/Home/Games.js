import React from "react";
import { Text, ScrollView, View, StyleSheet, RefreshControl } from "react-native";
import { Button } from "../../components"
import COLORS from "../../constants/colors";

const gamses = [
  {
    name: 'Kalayan',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Mumbai',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Kalayan',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Mumbai',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Kalayan',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Mumbai',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Kalayan',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Mumbai',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Kalayan',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
  {
    name: 'Mumbai',
    start: '12:00 PM',
    end: '12:00 PM',
    active: true,
    result: {
      open_patti: '234',
      close_patti: '234',
      open: '2',
      close: '2',
    }
  },
]
const Games = () => {
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
        {gamses.map((game, index) => {
          return (
            <View key={index} style={{
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
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
            }}>
              {/* ADD heading with text center */}
              <View style={{
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 22,
                  color: COLORS.black,
                  fontWeight: 'bold'
                }}>{game.name}</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                margin: 10,
              }}>
                <Text style={styles.label}>{game.result.open_patti}</Text>
                <Text style={styles.label}>-</Text>
                <Text  style={styles.label}>{game.result.open}{game.result.close}</Text>
                <Text style={styles.label}>-</Text>
                <Text style={styles.label}>{game.result.close_patti}</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
                <Text style={styles.timeLable}>Open {game.start}</Text>
                <Text  style={styles.timeLable}>Close {game.end}</Text>
              </View>
              <Button title="Play" filled
                style={{
                  marginTop: 18,
                  marginBottom: 4,
                }}
                />
            </View>
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black
  },
  timeLable: {
    fontSize: 16,
    color: COLORS.black
  }
})

export default Games;