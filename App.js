import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs.js'
import Counter from './src/demonstration/counter.js'
import LoginScreen from './src/screens/Login.js'
const App = () => {
  return (
    <NavigationContainer>
       <LoginScreen />
    </NavigationContainer>
  )
}

export default App
