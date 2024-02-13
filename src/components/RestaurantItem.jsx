import React from "react"
import { View, Text, StyleSheet} from "react-native-web"
import StyledText from "./StyledText"
import RestaurantStats from "./RestaurantsStats"
import theme from "../theme"


const RestaurantItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>Nombre: {props.fullName}</StyledText>
        <StyledText style={styles.description}>{props.description}</StyledText>
        <RestaurantStats {...props} />
    </View> 
    )

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            paddingBottom: 5,
            paddingTop: 5
        },
        description: {
            padding: 4,
            color: theme.colors.white,
            backgroundColor: theme.colors.primary,
            alignSelf: 'flex-start'
        }
})

export default RestaurantItem;