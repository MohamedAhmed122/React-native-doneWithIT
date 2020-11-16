import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './App/Components/Card/Card';
import UserList from './App/Components/UserList/UserList';
import { lightGray } from './App/Config/Color';
import HomeScreen from './App/Screens/HomeScreen'
import ViewImageScreen from './App/Screens/ViewImageScreen';
export default function App() {
  return (
    <View style={styles.container}>
     <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex:1,
    backgroundColor:lightGray,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
