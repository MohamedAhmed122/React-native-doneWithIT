import React  from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppTextInput from '../Components/AppInputs/AppTextInput'
import Constants from "expo-constants";
import AppButton from '../Components/AppButton/AppButton';
import { primary } from '../Config/Color';
import { Formik } from 'formik';
import ErrorMessage from '../Components/Forms/ErrorMessage'
import AppText from '../Components/AppText/AppText'
import * as Yup from 'yup'


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
            <Formik
                initialValues={{email: '', password:''}}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched })=>(
                    <>
                        <AppTextInput 
                            icon='email'
                            onChangeText={handleChange('email')}
                            placeholder='Email Address'
                            autoCapitalize='none'
                            autCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            onBlur={()=>setFieldTouched('email')}
                        />
                        <ErrorMessage isTouched={touched.email} error={errors.email}/>
                        <AppTextInput 
                            icon='lock'
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            onBlur={()=>setFieldTouched('password')}
                        />
                       <ErrorMessage isTouched={touched.password} error={errors.password}/>
                        <AppButton 
                            title='Login' 
                            color={primary} 
                            onPress={handleSubmit} 
                        />
                    </>
                )}
            </Formik>
          
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
