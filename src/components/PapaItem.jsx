import React from "react"
import StyledText from "./StyledText"
import theme from "../theme"
import { Image, StyleSheet, Text, View } from "react-native"
import Stats from "./Stats"

const PapaItemHeader = (props) => (
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

const PapaItem = (props) => (
    <View key={props.id} style={styles.container}>
        <PapaItemHeader {...props}/>
        <Stats {...props} />
    </View> 
    )

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            paddingVertical: 10
        },
        description: {
            padding: 4,
            color: theme.colors.white,
            backgroundColor: theme.colors.third,
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

export default PapaItem;