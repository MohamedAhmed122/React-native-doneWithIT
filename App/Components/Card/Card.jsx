import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { secondary, white } from '../../Config/Color'
import AppText from '../AppText/AppText'

const Card = ({items}) => {
    return (
        <TouchableWithoutFeedback style={styles.container}>
           <Image 
           source={items.source}  
           style={styles.image}/>
           <View style={styles.textContainer}>
                <AppText>{items.title}</AppText>
                <Text style={styles.text}>{items.price}$</Text>
           </View>
        </TouchableWithoutFeedback>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        height:350,
        width:'92%',
        backgroundColor:white,
        borderRadius:25,
        overflow:'hidden',
        marginBottom:20,
        alignSelf:'center'

    },
    image:{
        height:260,
        width:'100%',
    },
    text:{
        color: secondary,
        fontWeight: 'bold',
        fontSize:17,
        marginTop:10,
    },
    textContainer:{
        padding: 20,
        paddingLeft:30
    }
})
