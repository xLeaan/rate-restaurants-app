import React from "react";
import Constans from "expo-constants";
import { Text, View } from "react-native-web";
import RestaurantList from "./RestaurantsList";

const Main = () => {
    return(
        <View style={{ marginTop: Constans.statusBarHeight, flexGrow: 1}}>
            <Text>Rate Restaurants App</Text>
            <RestaurantList/>
        </View>
    )
}

export default Main