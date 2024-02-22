import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View ,StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: '8.55',
            temp_min: '7.15'
        },
        weather: {
            main: 'clear'
        }
    },
    {
        dt_txt: "2023-02-19 12:00:00",
        main: {
            temp_max: '10.00',
            temp_min: '6.50'
        },
        weather: {
            main: 'cloudy'
        }
    },
    {
        dt_txt: "2023-02-20 12:00:00",
        main: {
            temp_max: '7.80',
            temp_min: '5.25'
        },
        weather: {
            main: 'rainy'
        }
    }
];

const Item = (props) => {
    const { dt_txt, min, max } = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
};

const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return <Item dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : StatusBar.currentHeight || 0,
        backgroundColor:'red'
    },
    item:{
        backgroundColor:'pink',
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
});

export default UpcomingWeather;
