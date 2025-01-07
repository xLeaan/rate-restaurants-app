import React, { useState } from "react"
import StyledText from "./StyledText"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Link } from "react-router-native"
import Constants from 'expo-constants';
import theme from "../theme";
import StarRating from "react-native-star-rating";

const parseThounsands = value => {
    return value >= 1000
    ? `${Math.round(value/100) / 10}k`
    : String(value)
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.blue,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10
    },
    text: {
        color: theme.appBar.secondary,
        paddingHorizontal: 10
    }
})

const AppBarTap = ({ active, children, to}) => {
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const Stats = props => {
    const [showPStars, setShowPStars] = useState(false);
    const [showLStars, setShowLStars] = useState(false);
    const [pStarRating, setPStarRating] = useState(0);
    const [lStarRating, setLStarRating] = useState(0);

    const togglePStars = () => {
        setShowPStars(!showPStars);
    };

    const toggleLStars = () => {
        setShowLStars(!showLStars);
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <View> 
            {showPStars && (
                <View>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={pStarRating}
                    selectedStar={(rating) => setPStarRating(rating)}
                    fullStarColor={'gold'}
                    starSize={25}
                />
            </View>
            )}
            <TouchableOpacity onPress={togglePStars}>
                    <StyledText align='center' fontWeight='bold'>{parseThounsands(props.PStars)}</StyledText>
                    <StyledText>Rating P:</StyledText>
                </TouchableOpacity>
            </View>
            <View>
            {showLStars && (
                <StarRating
                disabled={false}
                maxStars={5}
                rating={lStarRating}
                selectedStar={(rating) => setLStarRating(rating)}
                fullStarColor={'gold'}
                starSize={25}
            />
            )}
            <TouchableOpacity onPress={toggleLStars}>
                    <StyledText align='center' fontWeight='bold'>{parseThounsands(props.LStars)}</StyledText>
                    <StyledText>Rating L:</StyledText>
                </TouchableOpacity>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThounsands(props.rating)}</StyledText> 
                <StyledText>Rating:</StyledText> 
            </View>     
        </View>
    )
}

export default Stats;