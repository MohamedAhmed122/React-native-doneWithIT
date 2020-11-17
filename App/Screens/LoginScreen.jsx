import React  from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppTextInput from '../Components/AppInputs/AppTextInput'
import Constants from "expo-constants";
import AppButton from '../Components/AppButton/AppButton';
import { primary } from '../Config/Color';
import { Formik } from 'formik';
import AppFormField from '../Components/Forms/AppFormField'
import * as Yup from 'yup'
import AppSubmitButton from '../Components/Forms/AppSubmitButton';
import AppForm from '../Components/Forms/AppForm';


const LoginScreen = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label('Email') ,
        password: Yup.string().required().min(6).label('Password')
    })

    return (
        <View style={styles.screen}>
            <Image 
            style={styles.logo}
            source={require('../../assets/logo-red.png')} />
            <AppForm
                initialValues={{email: '', password:''}}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                    <>
                        <AppFormField 
                            icon='email'
                            name='email'
                            placeholder='Email Address'
                            autoCapitalize='none'
                            autCorrect={false}
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
                            title='Login' 
                        />
                    </>
            </AppForm>
          
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
