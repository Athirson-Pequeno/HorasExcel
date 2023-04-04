import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RenderFlatList({item}){

    const navigation = useNavigation()
    

    return (
    <TouchableOpacity
        style={estilos.botao}
        onPress={()=> navigation.navigate('Digitação', {item})}
    >
        <Text style={estilos.textoBotao}>{item.data}</Text>
    </TouchableOpacity>
        
)}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor:"#c0c0c0",
        margin:2,
        borderColor:"#545454",
        borderWidth:2,
        padding:6,
        borderRadius:6
    },
    textoBotao:{
        fontSize:22,
        color:"#1d1d1d"
    }
})