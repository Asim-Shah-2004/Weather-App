import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View ,StatusBar ,ImageBackground } from "react-native";
import ListItem from "../components/ListItem"

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

const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return <ListItem dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />;
    };
    const {image,container} = styles;
    return (
        <SafeAreaView style={container}>
            <Text>Upcoming weather</Text>
            <ImageBackground source={require('../../assets/bgImage.jpg')} style={image}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : StatusBar.currentHeight || 0,
        backgroundColor:'skyblue'
    },
    image:{
        flex:1
    }
});

export default UpcomingWeather;
