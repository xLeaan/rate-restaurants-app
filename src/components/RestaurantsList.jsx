import React from "react";
import { View, Text } from "react-native";
import restaurants from "../data/restaurants";
import { FlatList } from "react-native-web";
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