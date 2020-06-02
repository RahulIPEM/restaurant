import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{ uri: restaurant.featured_image }} />
            <Text style={styles.nameStyle}>{restaurant.name}</Text>
            <Text>{restaurant.user_rating.aggregate_rating} Stars, {restaurant.all_reviews_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginRight: 10,
        marginVertical: 5
    },
    imageStyle: {
        width: 250,
        height: 130,
        borderRadius: 5
    },
    nameStyle: {
        fontWeight: '700'
    }
});

export default RestaurantDetail;