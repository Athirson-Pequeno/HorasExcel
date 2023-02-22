import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { ModalVisivelContext } from "../../../contexts/ModalVisivelContext";

export default function RenderFlatList({item}){

    const { setModalVisivel, setParadaSelecionada } = useContext(ModalVisivelContext)

    return (
        <TouchableOpacity 
            style={estilos.container}
            onLongPress={()=>{
                setParadaSelecionada(item)
                setModalVisivel(true)
            }}
        >
            <Text style={[estilos.texto,{flex:1}]}>{item.celula}</Text>
            <Text style={[estilos.texto,{flex:2}]}>{item.horaInicio}</Text>
            <Text style={[estilos.texto,{flex:2}]}>{item.horaFim}</Text>
            <Text style={[estilos.texto,{flex:2}]}>{item.codParada}</Text>
            <Text style={[estilos.texto,{flex:3}]}>{item.obs}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    texto:{
        flex:1,
        borderLeftColor:"grey",
        borderLeftWidth:1,
        borderRightColor:"grey",
        borderRightWidth:1,
        paddingHorizontal:5,
        borderBottomColor:"grey",
        borderBottomWidth:1,
        textAlign:"center",
        fontSize:18,
        paddingVertical:4,
        textAlignVertical:"center",
        
        
    },
    container:{
        flexDirection:"row",
        flex:1,
        paddingHorizontal:12,
    }
})
