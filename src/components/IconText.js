import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ItemText = (props) => {
  const { iconName, iconColor, iconText, bodyTextStyles } = props
  const { textTheme, container } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{iconText}</Text>
    </View>
  )
}

const styles = new StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})

export default ItemText
