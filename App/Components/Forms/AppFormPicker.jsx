import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import { StyleSheet} from 'react-native'
import AppPicker from '../AppPicker/AppPicker'

const AppFormPicker = ({name, ...otherProps}) => {
    const { errors, setFieldValue,values, touched} = useFormikContext()
    return (
        <>
             <AppPicker 
                setSelectedItem={(item)=>setFieldValue(name, item)}
                {...otherProps}
                items={categories} 
                selectedItem={values[name]} 
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}

export default AppFormPicker

const styles = StyleSheet.create({})

const categories =[
    {label: 'Furniture', id:1},
    {label: 'Camera', id:2},
    {label: 'Glass', id:3},
    {label: 'Phones', id:4},

]