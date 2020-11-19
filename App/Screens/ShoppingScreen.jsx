import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card/Card'
import { lightGray } from '../Config/Color'
import Constants from "expo-constants";

const ShoppingScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <FlatList 
                data={cardItems}
                keyExtractor={(cardItems)=> cardItems.id.toString()}
                renderItem={({item})=> (
                    <Card items ={item} onPress={()=>navigation.navigate('Shopping Details',  item)}/>
                )}
                />
        </View>
    )
}

export default ShoppingScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
        backgroundColor: lightGray,
        
    }
})


const cardItems=[
    {
        id:1,
        source: require('../../assets/jacket.jpg'),
        title: 'red Jacket for sale',
        price:'40'
    },
    {
        id:2,
        source: require('../../assets/couch.jpg'),
        title:'good Couch For Sale',
        price:'170'
    },
   
    // {
    //     id:3,
    //     source:require('../../assets/whiteJacket.jpeg'),
    //     title:'white jacket Sale',
    //     price:'30'
    // },
]