import React, { useContext } from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import horariosJSON from "../../dados/horarios.json"
import estilos from "../../componentes/estilos";
import { useNavigation, useRoute } from "@react-navigation/core";


export default function SelecaoHorarioInutilizado(){

    const navigation = useNavigation();
    const rota = useRoute();
    const data = rota.params.item.data


    

    return(<View>
        <FlatList
            data={horariosJSON.dados}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
                <TouchableOpacity 
                    key={item.id}
                    style={estilos.botaoFlat}
                    onPress={()=>{navigation.navigate("DigitacaoInutilizadoCelula", {item,data})}}
                >
                        <Text style={estilos.textoBotaoFlat}>{item.descricao}</Text>
                </TouchableOpacity>)}
        />
    </View>
    )
}