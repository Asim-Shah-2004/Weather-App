import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs.js'
import Counter from './src/demonstration/counter.js'
const App = () => {
  return (
    <NavigationContainer>
      <Counter />
    </NavigationContainer>
  )
}

export default App
