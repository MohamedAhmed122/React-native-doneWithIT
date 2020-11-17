import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { black, lightGray } from '../../Config/Color'
import { MaterialIcons } from '@expo/vector-icons';
const AppTextInput = ({icon, placeholder, onChangeText, ...otherProps}) => {
    
    return (
        <View style={styles.container}>
            {icon?
            <>
                <MaterialIcons name={icon} size={24} color="gray" />
                <TextInput 
                onChangeText={onChangeText} 
                style={styles.inputText} 
                placeholder={placeholder}
                {...otherProps} 
                />
            </>:
                <TextInput 
                onChangeText={onChangeText} 
                style={styles.inputText} 
                placeholder={placeholder}
                {...otherProps} 
                />
            }
        
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        width:'95%',
        marginLeft: 5,
        backgroundColor: lightGray,
        height:50,
        borderRadius:25,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },
    inputText:{
        backgroundColor:'transparent',
        width: 'auto',
        height:'100%',
        marginLeft:10,
        color: black,
        fontSize:17,
    }
})
