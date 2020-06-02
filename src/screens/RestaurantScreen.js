import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import zomato from '../api/zomato';

const RestaurantScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [restaurant, setRestaurant] = useState({});

    const getRestaurnat = async (id) => {
        const { data } = await zomato.get("/restaurant", {
            params: {
                res_id: id
            }
        })
        setRestaurant(data);
    };

    useEffect(() => {
        getRestaurnat(id);
    }, [])

    const { name, cuisines, featured_image, menu_url, timings, phone_numbers, location } = restaurant;

    return (
        <View>
            <Image source={{ uri: featured_image }} style={{ height: 200 }} />
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <Text>{name}</Text>
                <Text>{cuisines}</Text>
                <Text>{timings}</Text>
                <Text>{phone_numbers}</Text>
                <Text>{location ? location.address : "NA"}</Text>
                <Image source={{ uri: menu_url }} style={{ height: 200, width: 150 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({});

export default RestaurantScreen;