import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListEditScreen from './App/Screens/ListEditScreen';
import ShoppingScreen from './App/Screens/ShoppingScreen';



export default function App() {
  return (
    <View style={styles.container}>
     <ShoppingScreen />
    </View>
  
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex:1,
    // marginTop:50,
    // backgroundColor:'#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
