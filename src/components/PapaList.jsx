import React from "react";
import { View, Text, FlatList } from "react-native";
import papas from "../data/papas";
import PapaItem from "./PapaItem";

const PapaList = () => {
    return (
        <FlatList 
        data={papas}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: rest}) => (
            <PapaItem{... rest} />
        )}                
        />
    )
}

export default PapaList;