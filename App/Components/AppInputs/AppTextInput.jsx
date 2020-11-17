import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { black, lightGray } from '../../Config/Color'
import { AntDesign } from '@expo/vector-icons';

const AppTextInput = ({icon}) => {
    const[input, setInput]= useState('')
    return (
        <View style={styles.container}>
            {icon?
            <>
                <AntDesign name="search1" size={24} color="gray" />
                <TextInput value={input} onChangeText={(text)=>setInput(text)} style={styles.inputText} placeholder='First Name' />
            </>:
               <TextInput value={input} onChangeText={(text)=>setInput(text)} style={styles.inputText} placeholder='First Name' />
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
        marginBottom:20,
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
