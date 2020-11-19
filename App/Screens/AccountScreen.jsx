import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants";
import { FlatList } from 'react-native-gesture-handler';
import { lightGray, primary, secondary, yellow } from '../Config/Color';
import ListIcon from '../Components/ListItem/ListIcon';
import ListItem from '../Components/ListItem/ListItem';
import AppSeparator from '../Components/ListItem/AppSeparator';
const AccountScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.listItem}>
                <ListItem source={require('../../assets/user.png')} title='Mohamed Youssef' description='mohamed@gmail.com'/>
            </View>
            <View>
                <FlatList
                    data={icons}
                    keyExtractor={icons => icons.id.toString()}
                    ItemSeparatorComponent={()=> <AppSeparator />}
                    renderItem={({item})=>
                        <ListIcon  
                            title={item.title}
                            color={item.color}
                            icon={item.icon}
                            onPress={console.log(item)}
                        />
                    }
                />
                <View style={styles.listIcon}>
                        <ListIcon title='Logout' icon='logout' color='gold'/>
                </View>
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
        backgroundColor:lightGray
    },
    listItem:{
        marginBottom: 50,
    },
    listIcon:{
        marginTop: 20,
    }
})

const icons=[
    {
        id: 1,
        color: primary,
        title: 'My Listings',
        icon: 'format-list-bulleted',
    },
    {

        id: 2,
        color: secondary,
        title: 'My Listings',
        icon: 'email',
    }
]