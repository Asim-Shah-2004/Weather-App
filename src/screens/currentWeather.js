import React from "react";
import { View, Text, SafeAreaView, StyleSheet ,StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}> Feels like 8</Text>
        <View style={styles.HighLowWrapper}>
          <Text style={styles.HighLow}>High 5</Text>
          <Text style={styles.HighLow}>Low 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.message}>Its sunny</Text>
        <Text style={styles.description}>Its perfect T-shirt weather</Text>
      </View>

      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  HighLow: {
    color: 'black',
    fontSize: 20
  },
  HighLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 38
  },
  message: {
    fontSize: 48
  }
});

export default CurrentWeather;
