import React from "react";
import { View, StyleSheet } from "react-native";
import  CurrentWeather  from "./src/screens/currentWeather.js";
import UpcommingWeather from "./src/screens/upcommingWeather.js";
const App = () => {
  return (
    <View style={styles.container}>
      <UpcommingWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
