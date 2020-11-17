import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { lightGray } from '../../Config/Color'
import AppText from '../AppText/AppText'


const PickerItem = ({label ,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <AppText style={styles.text}>{label}</AppText>
            </View>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: lightGray,
        width: '100%',
        padding: 10,
        marginBottom: 5,
    },
    text:{
        // margin: 10,
    }
})
