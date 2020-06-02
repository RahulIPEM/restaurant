import React from 'react'
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchSubmit }) => {
    return (
        <View style={styles.searchBackground}>
            <Ionicons name="ios-search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={searchTerm}
                onChangeText={newSearchTerm => onSearchTermChange(newSearchTerm)}
                onEndEditing={() => onSearchSubmit(searchTerm)}
                placeholder="Search"
                style={styles.inputStyle} />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBackground: {
        backgroundColor: '#dddddd',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
});

export default SearchBar;