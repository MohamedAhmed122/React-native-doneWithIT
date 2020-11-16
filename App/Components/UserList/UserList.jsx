import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { white } from '../../Config/Color'
import AppText from '../AppText/AppText'

const UserList = () => {
    return (
        <View style={styles.container}>
          <Image 
          source={require('../../../assets/mosh.jpg')}
          style={styles.image} />
          <View style={styles.textContainer}>
              <AppText>Mohamed Youssef</AppText>
              <Text style={styles.text}>5 Listings</Text>
          </View>
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        backgroundColor: white,
        width: '100%',
        height: 85,
        flexDirection:'row',
        alignItems: 'center',
    },
    image:{
        height:70,
        width:70,
        borderRadius: 35,
        marginHorizontal:20,
    },
    text:{
        color: 'gray',
        marginTop:6,
    }
})
