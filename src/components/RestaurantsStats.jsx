import React from "react"
import { View } from 'react-native'
import StyledText from "./StyledText"

const parseThounsands = value => {
    return value >= 1000
    ? `${Math.round(value/100) / 10}k`
    : String(value)
}

const RestaurantStats = props => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThounsands(props.review)}</StyledText>
                <StyledText>Review:</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThounsands(props.rating)}</StyledText> 
                <StyledText>Rating:</StyledText> 
            </View>     
        </View>
    )
}

export default RestaurantStats;