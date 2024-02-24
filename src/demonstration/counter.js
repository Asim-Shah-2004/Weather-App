import React,{useState} from 'react'
import { View, Text ,StyleSheet , Button } from 'react-native'

const counter = () => {
  const [count,setCount] = useState(0)
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{`count : ${count}`}</Text>
      <View style={styles.buttonContainer}>
      <Button
        style={styles.button} // Add the button style
        color="red"
        title="+"
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Button
        style={styles.button} // Add the button style
        color="green"
        title="-"
        onPress={() => {
          setCount(count - 1)
        }}
      />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6', // Light bluish-green background color
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20, // Add some horizontal padding
    },
    title: {
      alignSelf: 'center',
      fontSize: 36, // Increase font size
      marginTop: 25,
      marginBottom: 30, // Add some margin at the bottom
      color: 'white', // Make text color white
    },
    buttonContainer: {
      flexDirection: 'row', // Place buttons side-by-side
      justifyContent: 'center',
      width: '100%',
    },
    button: {
      flex: 1, // Make buttons take up equal space
      padding:10
    },
  })

export default counter
