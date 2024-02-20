import React from "react";
import { Text, View} from "react-native";
import RestaurantList from "./RestaurantsList";
import AppBar from "./AppBar";
import { Route, Redirect, Routes } from 'react-router-native'

const Main = () => {
    return(
        <View style={{ flex: 1}}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RestaurantList/>} />
                <Route path="/signin" element={<Text> Work on it!</Text>} />
                
            </Routes>
        </View>
    )
}

export default Main


