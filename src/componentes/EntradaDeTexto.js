import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export default function EntradaDeTexto({value, onChangeText, label, flex=1, inputMode="text"}){

    const estilo = estilos(flex)

    return (
        <View style={estilo.containerTextInput}>
            <Text style={estilo.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={estilo.textInput}
                inputMode={inputMode}
                
            />
        </View>
    )
}

const estilos = (flex) => StyleSheet.create({
    textInput:{
        fontSize:20
    },
    containerTextInput:{
        borderColor:"grey",
        borderWidth:1,
        flex:flex,
        borderRadius:6,
        padding:5,
        margin:3
    },
    label:{
        borderBottomColor:"grey",
        borderBottomWidth:1
    }
})