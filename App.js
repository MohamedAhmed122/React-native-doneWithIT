import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from './App/Components/AppInputs/AppTextInput';
import Card from './App/Components/Card/Card';
import ListIcon from './App/Components/ListItem/ListIcon';
import { lightGray } from './App/Config/Color';
import AccountScreen from './App/Screens/AccountScreen';
import HomeScreen from './App/Screens/HomeScreen'
import MessagesListScreen from './App/Screens/MessagesListScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import AppSwitch from './App/Components/AppSwitch/AppSwitch'
import ListEditScreen from './App/Screens/ListEditScreen';
import LoginScreen from './App/Screens/LoginScreen';
import RegisterScreen from './App/Screens/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <ListEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    // flex:1,
    // backgroundColor:'#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
