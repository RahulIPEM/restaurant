import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurants, errorMessage, onSearchSubmit] = useRestaurants();

    const filterRestaurantsByPrice = (price_range) => {
        return restaurants.filter(result => {
            return result.restaurant.price_range === price_range;
        })
    }

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onSearchSubmit={onSearchSubmit} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <View style={styles.restaurantViewStyle}>
                <ScrollView>
                    <RestaurantList results={filterRestaurantsByPrice(1)} title="Cost Effective" />
                    <RestaurantList results={filterRestaurantsByPrice(2)} title="Bit Pricier" />
                    <RestaurantList results={filterRestaurantsByPrice(3)} title="Expensive" />
                </ScrollView>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    restaurantViewStyle: {
        marginLeft: 15
    }
});

export default SearchScreen;