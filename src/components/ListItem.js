import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_txt, min, max ,condition} = props;
        const {item,temp} = styles;
        return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    );
};

const styles = new StyleSheet.create({
    item:{
        backgroundColor:'#80ace1',
        padding:20,
        marginVertical:8,
        marginHorizontal: 16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth: 5,
    },
    temp:{
        color:'white',
        fontSize:20
    }
})

export default ListItem;
