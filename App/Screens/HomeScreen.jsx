import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'

export default function HomeScreen() {
    return (
      <ImageBackground 
        source={require('../../assets/background.jpg')} 
        style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/logo-red.png')} /> 
                <Text style={styles.text}>Sell your old product here</Text>
            </View>
         
            <View style={styles.loginBtn} />
            <View style={styles.registerBtn} />
      </ImageBackground>

    )
}
const styles = StyleSheet.create({ 
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoContainer:{
        position: 'absolute',
        top:100,
        alignItems:'center'
    },
    logo:{
        height:100,
        width:100,
        marginBottom:20
    },
    text:{
       textAlign:'center'
    },
    loginBtn:{
        width: '100%',
        height: 60,
        backgroundColor:'#fc5c65'
    },
    registerBtn:{
        width: '100%',
        height: 60,
        backgroundColor:'#4ecdc4',
        bottom:30,
        marginTop:50
    }
  });
  