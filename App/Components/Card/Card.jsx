import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { secondary, white } from '../../Config/Color'
import AppText from '../AppText/AppText'

const Card = () => {
    return (
        <TouchableOpacity style={styles.container}>
           <Image 
           source={require('../../../assets/jacket.jpg')}  
           style={styles.image}/>
           <View style={styles.textContainer}>
                <AppText>Red Jacket for sale!</AppText>
                <Text style={styles.text}>100$</Text>
           </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        height:350,
        width:'92%',
        backgroundColor:white,
        borderRadius:25,
        overflow:'hidden'

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
