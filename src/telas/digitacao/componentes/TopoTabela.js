import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TopoTabela(){
    return (
        <View style={estilos.container}>
            <Text style={[estilos.texto,{flex:1}]}>Cél.</Text>
            <Text style={[estilos.texto,{flex:2}]}>Hora Inicío</Text>
            <Text style={[estilos.texto,{flex:2}]}>Hora Fim</Text>
            <Text style={[estilos.texto,{flex:2}]}>Cód. parada</Text>
            <Text style={[estilos.texto,{flex:3}]}>OBS.</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto:{
        flex:1,
        borderColor:"black",
        borderWidth:1,
        paddingHorizontal:5,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:18,
    },
    container:{
        marginTop:10,
        flexDirection:"row",
        flex:1,
        paddingHorizontal:12,
    }
})