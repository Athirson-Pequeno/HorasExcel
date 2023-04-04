import React from "react";
import AdicionarDatas from "../../componentes/AdicionarData";


export default function DataHorasParadas({navigation}){

    return(
        <AdicionarDatas 
            navigation={navigation} 
            tabelaSQL={"Datas"} 
            navegarPara={"Digitação"}>
        </AdicionarDatas>
    )
}
