import React from 'react'
import { StyleSheet,Image,Alert, TouchableWithoutFeedback, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { lightGray } from '../../Config/Color';

const ImageInput = ({image,setImage ,pickImage }) => {

    const HandleDelete = () =>{
        Alert.alert(
          "Delete",
          "Are you Sure you wanna delete this image?",
          [
            {
              text: "Yes",
              onPress: () => setImage(null),
              
            },
            { text: "No", onPress: () => console.log("OK Pressed") }
          ],
        );
    }

    return (
        <View style={{marginTop:30, flexDirection:'row'}} >
             
          {image && 
            <TouchableWithoutFeedback onPress={()=>HandleDelete()}>
                <Image  source={{ uri: image }} style={styles.image} />
            </TouchableWithoutFeedback>}
            <View style={styles.container}>
                <Entypo name="camera" size={40} color="black" onPress={pickImage} />
            </View>
         </View>
    );
}

export default ImageInput

const styles = StyleSheet.create({
    container:{
        height:120,
        width:120,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: lightGray,
        margin:10,
    },
    image:{
        height:120,
        width:120,
        borderRadius:25,
        marginHorizontal:10,
        marginVertical:10,
    }
})
