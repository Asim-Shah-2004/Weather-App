import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';
import LoginScreen from './src/screens/Login';

const Stack = createStackNavigator();

const App = () => {
  const [loading, error, weather] = useGetWeather();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen name="Tabs" options={{ headerShown: false }}>
              {() => <Tabs weather={weather} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <LoginScreen onLoginSuccess={handleLoginSuccess} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size="large" color="blue" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
