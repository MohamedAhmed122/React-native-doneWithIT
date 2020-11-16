import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './App/Screens/HomeScreen'
import ViewImageScreen from './App/Screens/ViewImageScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    // flex: 1,
    // backgroundColor: '#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
