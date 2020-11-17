import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../Components/AppInputs/AppTextInput'
import Constants from "expo-constants";
import AppButton from '../Components/AppButton/AppButton';
import { primary } from '../Config/Color';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = ()=>{
        console.log(email, password)
        setEmail('')
        setPassword('')
       
    }
    return (
        <View style={styles.screen}>
            <Image 
            style={styles.logo}
            source={require('../../assets/logo-red.png')} />
            <View>
                
            </View>
            <AppTextInput 
                icon='email'
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder='Email Address'
                autoCapitalize='none'
                autCorrect={false}
                keyboardType='email-address'
                textContentType='emailAddress'
            />
            <AppTextInput 
                value={password}
                icon='lock'
                onChangeText={(password) => setPassword(password)}
                placeholder='Password'
                autoCapitalize='none'
                autCorrect={false}
                textContentType='password'
                secureTextEntry
            />
            <AppButton title='Login' color={primary} onPress={()=> handlePress()} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
    },
    logo:{
        width: 90,
        height:90,
        alignSelf:'center',
        marginBottom: 20,
        marginTop:70,
        
    }
})
