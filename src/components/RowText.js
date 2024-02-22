import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
  const { wrapper, messageOne, messageTwo, messageOneStyle, messageTwoStyle } =
    props
  return (
    <View style={wrapper}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
