import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './App/Navigation/TabNavigation';




export default function App() {
  return (
   <NavigationContainer>
     <TabNavigation />
   </NavigationContainer>
    // <View style={styles.container}>
    //   <ShoppingDetailScreen />
    // </View>
  
  );
}

const styles = StyleSheet.create({ 
  container: {
    // flex:1,
    // marginTop:50,
    // backgroundColor:'#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
