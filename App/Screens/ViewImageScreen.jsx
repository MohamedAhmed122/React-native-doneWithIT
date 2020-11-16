import React from 'react'
import { StyleSheet,Image,  View } from 'react-native'
 import {secondary , primary, black} from '../Config/Color'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.trashIcon} />
            <Image 
            style={styles.image}
            resizeMode='contain'
            source={require('../../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({

container:{
    backgroundColor: black,
},

closeIcon:{
    height:50,
    width:60,
    backgroundColor: secondary,
    position:'absolute',
    top: 40,
    left:40,
  
},
trashIcon:{
    height:50,
    width:60,
    top: 40,
    right:40,
    position:'absolute',
    backgroundColor: primary,
},
image:{
    height: '100%',
    width: '100%',
}
})
