import React from 'react'
import CurrentWeather from '../screens/currentWeather.js'
import UpcommingWeather from '../screens/upcommingWeather.js'
import City from '../screens/City.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle:{
            backgroundColor:'#ADD8E6'
          },
          headerStyle:{
            backgroundColor:'#ADD8E6'
          },
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:25,
            color:'tomato'
          }
        }}
      >
        <Tab.Screen
          name={'current'}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'droplet'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
        <Tab.Screen
          name={'upcomming'}
          component={UpcommingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'clock'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
        <Tab.Screen
          name={'city'}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'home'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
      </Tab.Navigator>
  )
}

export default Tabs
