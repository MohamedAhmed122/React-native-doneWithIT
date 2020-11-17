import React  from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Constants from "expo-constants";
import AppFormField from '../Components/Forms/AppFormField'
import * as Yup from 'yup'
import AppSubmitButton from '../Components/Forms/AppSubmitButton';
import AppForm from '../Components/Forms/AppForm';
import AppFormPicker from '../Components/Forms/AppFormPicker';


const ListEditScreen = () => {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().label('Title') ,
        price: Yup.number().required().label('Price'),
        category: Yup.string().required().nullable().label('Category') ,
        description: Yup.string().required().min(12).label('Description'),
        
    })

    return (
        <View style={styles.screen}>
            <AppForm
                initialValues={{title: '', price: '',description:'',category:null }}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                    <>
                        <AppFormField  name='title' placeholder='Title'/>
                        <View style={styles.priceContainer}>
                         <AppFormField 
                            name='price'
                            placeholder='Price'
                            autoCorrect
                            keyboardType='numeric'
                        />
                        </View>
                        <View style={styles.pickerContainer} >
                            <AppFormPicker   name='category'  placeholder='Category'/>
                        </View>
                        
                         <AppFormField 
                            name='description'
                            placeholder='Description'
                            autoCorrect
                            keyboardType='default'
                            multiline
                            numberOfLines={3}
                        />
                        <AppSubmitButton 
                            title='Post' 
                        />
                    </>
            </AppForm>
          
        </View>
    )
}

export default ListEditScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
    },
    pickerContainer:{
        width: '60%'
    },
    priceContainer:{
        width: '35%',
    }
   
})
