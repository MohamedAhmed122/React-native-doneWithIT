import React from 'react'
import ListItem from '../Components/ListItem/ListItem'
import Constants from "expo-constants";
import { FlatList, StyleSheet, View,  } from 'react-native'
import AppSeparator from '../Components/ListItem/AppSeparator';
import ListItemDelete from '../Components/ListItem/ListItemDelete';

const MessagesListScreen = () => {
    return (
        <View  style={styles.container}>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                ItemSeparatorComponent={()=><AppSeparator />}
                renderItem={({item})=>
                <ListItem
                    title={item.title} 
                    description={item.description} 
                    renderRightActions={()=> <ListItemDelete />}
                />
            }
            />
        </View>
    )
}

export default MessagesListScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%'
    },
    
})

const messages =[
    {
        id:1,
        title: 'Mohamed Youssef',
        description: 'D1'
    },
    {
        id:2,
        title: 'Mohamed Ahmed',
        description: 'D2'
    }
]