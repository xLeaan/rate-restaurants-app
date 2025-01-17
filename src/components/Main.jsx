import React from "react";
import { Text, View} from "react-native";
import RestaurantList from "./RestaurantsList";
import AppBar from "./AppBar";
import { Route, Redirect, Routes } from 'react-router-native'
import CafeList from "./CafeList";
import PapaList from "./PapaList";

const Main = () => {
    return(
        <View style={{ flex: 1}}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RestaurantList/>} />
                <Route path="/cafe" element={<CafeList />} />
                <Route path="/papas" element={<PapaList />} />
            </Routes>
        </View>
    )
}

export default Main


