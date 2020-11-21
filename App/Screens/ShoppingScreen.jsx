import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card/Card'
import { lightGray } from '../Config/Color'
import Constants from "expo-constants";
import { getListings } from '../api/listings'


const ShoppingScreen = ({navigation}) => {
    const [ items, setItems ] = useState([])

    const getListingsApi = async () =>{
        
        const response = await getListings();
        setItems(response.data) 
    }

    useEffect(()=>{
        getListingsApi()
    },[])
    console.log(items);

    return (
        <View style={styles.screen}>
            <FlatList 
                data={items}
                keyExtractor={(items)=> items.id.toString()}
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

