import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import RestaurantDetail from './RestaurantDetail';
import { withNavigation } from "react-navigation";

const RestaurantList = ({ title, results, navigation }) => {
    return (
        <View>
            {
                results.length > 0 ?
                    <Text style={styles.titleStyle}>{title}</Text> : null
            }
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.restaurant.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate("RestaurantScreen", { id: item.restaurant.id })}>
                        <RestaurantDetail restaurant={item.restaurant} />
                    </TouchableOpacity>
                }}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "700"
    }
});

export default withNavigation(RestaurantList);