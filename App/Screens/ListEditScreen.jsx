import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppPicker from '../Components/AppPicker/AppPicker'

const ListEditScreen = () => {
    return (
        <View style={{width:'100%'}}>
            <AppPicker items={categories} />
        </View>
    )
}

export default ListEditScreen

const styles = StyleSheet.create({})

const categories =[
    {label: 'Furniture', id:1},
    {label: 'Camera', id:2},
    {label: 'Glass', id:3},
    {label: 'Phones', id:4},

]