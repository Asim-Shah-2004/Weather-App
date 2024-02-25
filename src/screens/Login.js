import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        
      } else {
        console.log('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error during login request:', error);
      Alert.alert('Error', 'An error occurred while logging in.');
    }
  };

  return (
    <View style={styles.container}>
      <Feather name="user" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Feather name="lock" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
      />

      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 35,
    zIndex: 1,
  },
});

export default LoginScreen;