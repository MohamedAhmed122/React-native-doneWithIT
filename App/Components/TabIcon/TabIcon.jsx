import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { primary, white } from '../../Config/Color';


const TabIcon = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <AntDesign name="plus" size={24} color={primary} />
            </View>

        </View>
    )
}

export default TabIcon

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: primary,
        height:60,
        width:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    },
    subContainer:{
        backgroundColor: white,
        height:35,
        width:35,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
})
