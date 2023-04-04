import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Inicio({navigation}){
    return(
        <View style={estilos.container}>
            <TouchableOpacity 
                style={estilos.botao}
                onPress={()=>{navigation.navigate("DataInutilizado")}}
                >
                <Text style={{color:"#fff"}}>INUTILIZADO</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={()=>{navigation.navigate("DataHorasParadas")}}
                >
                <Text style={{color:"#fff"}}>HORAS PARADAS</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"grey",
        borderRadius:6,
        padding:10,
        marginBottom:4,
        width:'50%'
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})