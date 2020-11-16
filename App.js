import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './App/Screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    // backgroundColor: '#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
