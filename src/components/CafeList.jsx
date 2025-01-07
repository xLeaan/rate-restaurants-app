import React from "react";
import { View, Text, FlatList } from "react-native";
import cafes from "../data/cafes";
import CafeItem from "./CafeItem";

const CafeList = () => {
    return (
        <FlatList 
        data={cafes}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: rest}) => (
            <CafeItem{... rest} />
        )}                
        />
    )
}

export default CafeList;