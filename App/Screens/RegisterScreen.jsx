import React  from 'react'
import {  StyleSheet, View } from 'react-native'
import Constants from "expo-constants";
import AppFormField from '../Components/Forms/AppFormField'
import * as Yup from 'yup'
import AppSubmitButton from '../Components/Forms/AppSubmitButton';
import AppForm from '../Components/Forms/AppForm';


const RegisterScreen = () => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label('Name') ,
        email: Yup.string().required().email().label('Email') ,
        password: Yup.string().required().min(6).label('Password')
    })

    return (
        <View style={styles.screen}>
            <AppForm
                initialValues={{email: '', password:'', name:''}}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                    <>
                    <AppFormField 
                            icon='person'
                            name='name'
                            placeholder='Name'
                            autoCapitalize='none'
                            autoCorrect
                            keyboardType='default'
                            textContentType='name'
                        />
                        <AppFormField 
                            icon='email'
                            name='email'
                            placeholder='Email Address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                        <AppFormField 
                            icon='lock'
                            placeholder='Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            name='password'
                        />
                        <AppSubmitButton 
                            title='Register' 
                        />
                    </>
            </AppForm>
          
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
    },
   
})
