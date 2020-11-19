import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListEditScreen from './App/Screens/ListEditScreen';
import ShoppingScreen from './App/Screens/ShoppingScreen';
import HomeScreen from './App/Screens/HomeScreen'
import TabNavigation from './App/Navigation/TabNavigation';



export default function App() {
  return (
   <NavigationContainer>
     <TabNavigation />
   </NavigationContainer>
  
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
