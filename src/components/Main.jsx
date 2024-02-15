import React from "react";
import { Text, View } from "react-native-web";
import RestaurantList from "./RestaurantsList";
import AppBar from "./AppBar";

const Main = () => {
    return(
        <View style={{ flex: 1}}>
            <AppBar />
            <RestaurantList/>
        </View>
    )
}

export default Main