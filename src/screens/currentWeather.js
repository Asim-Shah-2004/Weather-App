import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'
const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    HighLowWrapper,
    HighLow,
    description,
    bodyWrapper,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}> Feels like 8</Text>
        <RowText
          wrapper={HighLowWrapper}
          messageOne={'High: 8  '}
          messageTwo={'Low: 6'}
          messageOneStyle={HighLow}
          messageTwoStyle={HighLow}
        />
      </View>
      <RowText
        wrapper={bodyWrapper}
        messageOne={'Its sunny'}
        messageTwo={weatherType['Thunderstorm'].message}
        messageOneStyle={message}
        messageTwoStyle={description}
      />
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
})

export default CurrentWeather
