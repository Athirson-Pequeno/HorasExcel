import React from "react";
import { Text } from "react-native";
import AdicionarDatas from "../../componentes/AdicionarData";

export default function TelaInutilizadoData({navigation}){
    return(<AdicionarDatas 
            navigation={navigation} 
            tabelaSQL={"DataInutilizado"} 
            navegarPara={"SelecaoHorarioInutilizado"}>

        </AdicionarDatas>
    )
}