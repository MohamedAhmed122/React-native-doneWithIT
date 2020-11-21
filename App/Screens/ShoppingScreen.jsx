import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card/Card'
import { lightGray } from '../Config/Color'
import Constants from "expo-constants";
import { getListings } from '../api/listings'
import AppButton from '../Components/AppButton/AppButton'
import AppActivityIndictor from '../Components/AppActivityIndictor';
import UseApi from '../Hooks/UseApi';


const ShoppingScreen = ({navigation}) => {
    
    const {data :items, error, loading, request: getListingsApi} = UseApi(getListings)
    useEffect(()=>{
        getListingsApi()
    },[])

    // console.log(items);

    return (
        <View style={styles.screen}>
            {error && <>
            <Text style={styles.text}>couldn't get the data for the server</Text>
            <AppButton title='Retry' onPress={getListingsApi} />
            </>}
           <AppActivityIndictor visible={loading} />
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
        
    },
    text:{
        textAlign:'center'
    }
})

