import React from "react";
import {Text,StyleSheet,StatusBar,SafeAreaView,ImageBackground,View} from 'react-native'
import { Feather } from '@expo/vector-icons';
const City = ()=>{

    const {container,imageLayout,cityName,countryName,text,populationWrapper,populationText,riseSetWrapper,riseSetText} = styles;

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city-bg-image.jpg')} style={imageLayout}>
                <Text style={[text,countryName]}>India</Text>
                <Text style={[text,cityName]}>Mumbai</Text>
            <View style={populationWrapper}>
                <Feather name={"user"} size={50} color={'black'}  />
                <Text style={populationText}>8000</Text>
            </View>
            <View style={riseSetWrapper}>
                <Feather name={'sunrise'} size={50} color={'black'} />
                <Text style={riseSetText}>10:46:58am</Text>
                <Feather name={'sunset'} size={50} color={'black'}/>
                <Text style={riseSetText}>17:28:58pm</Text>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop : StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1,
    },
    cityName:{
        fontSize:40
    },
    countryName:{
        fontSize:30
    },
    text:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'black'
    },
    populationWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'black',
        fontWeight:'bold'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
  });

export default City