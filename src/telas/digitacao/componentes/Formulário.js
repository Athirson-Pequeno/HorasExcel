import React, { useRef } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native"; 

export default function EntradaDeTexto({parada}){

const estilo = estilosConst(flex)

return (
    <View style={estilo.containerTextInput}>
        <Text style={estilo.label}>Célula</Text>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={estilo.textInput}
            keyboardType={keyboardType}
        />
    </View>
)
}

const estilosConst = (flex) => StyleSheet.create({
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