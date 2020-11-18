import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListEditScreen from './App/Screens/ListEditScreen';


const Stack = createStackNavigator();
const StackNavigation = ()=>{
  return(
    <Stack.Navigator>
          <Stack.Screen name='Tweets'  component={Tweet}  />
          <Stack.Screen 
          name='Tweets Details' 
          component={TweetDetails}
          options={({route})=> ({title: route.params.id})}  />
      </Stack.Navigator>
  )
  
}

export default function App() {
  return (
    // <View style={styles.container}>
    //  <ListEditScreen />
    // </View>
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  );
}
const Tweet =({navigation})=>{
  return(
    <View>
      <Button
        title='View other Tweets'
        onPress={()=>navigation.navigate('Tweets Details', {id: 1}) } />
          {/* <Link />              <---- */}
    </View>
  )
}
const TweetDetails =({route})=>{
    //UseRoute
  return(
    <View style={{marginTop:100}}>
      <Text>Tweet Details {route.params.id}</Text>
      
      {/* <Link />              <---- */}
    </View>
  )
}
// const Link = ()=>{
//   const navigation = useNavigation()
//   return(
//     <Button
//         title='View other Tweets'
//         onPress={()=>navigation.navigate('Tweets Details',) } />
//   )
// }

const styles = StyleSheet.create({ 
  container: {
    flex:1,
    // marginTop:50,
    // backgroundColor:'#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
