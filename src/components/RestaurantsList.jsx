import React from "react";
import { View, Text, FlatList } from "react-native";
import restaurants from "../data/restaurants";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
    return (
        <FlatList 
        data={restaurants}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: rest}) => (
            <RestaurantItem{... rest} />
        )}                
        />
    )
}

export default RestaurantList;