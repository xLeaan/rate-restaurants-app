import React from "react"
import { Image, View, Text, StyleSheet} from "react-native-web"
import StyledText from "./StyledText"
import RestaurantStats from "./RestaurantsStats"
import theme from "../theme"

const RestaurantsItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2}}>
        <View style={{ paddingRight: 10}}>
        <Image style={styles.image} source={{ uri: props.url}}></Image>
        </View>
        <View sytle={{ flex: 1 }}>
            <StyledText color= 'secondary'>Nombre:</StyledText>
            <StyledText fontWeight='bold'>{props.fullName}</StyledText>
            <StyledText style={styles.description}>{props.description}</StyledText>
        </View>
    </View>
)

const RestaurantItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RestaurantsItemHeader {...props}/>
        <RestaurantStats {...props} />
    </View> 
    )

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            oaddingVertical: 5
        },
        description: {
            padding: 4,
            color: theme.colors.white,
            backgroundColor: theme.colors.primary,
            marginVertical: 4,
            borderRadius: 4,
            alignSelf: 'flex-start'
        },
        image: {
            width: 48,
            height: 48,
            borderRadius: 4
        }
})

export default RestaurantItem;