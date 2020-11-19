import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingScreen from '../Screens/ShoppingScreen';
import ShoppingDetailScreen from '../Screens/ShoppingDetailScreen';

const ShopNavigation = () => {
    const Stack = createStackNavigator()
    return (
       <Stack.Navigator>
           <Stack.Screen name='Shopping' component={ShoppingScreen} />
           <Stack.Screen name='Shopping Details' component={ShoppingDetailScreen} />
       </Stack.Navigator>
    )
}

export default ShopNavigation

const styles = StyleSheet.create({})
