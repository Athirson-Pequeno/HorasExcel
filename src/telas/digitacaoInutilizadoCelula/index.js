import { useRoute } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { Alert ,FlatList, Text, TouchableOpacity, View } from "react-native";
import celulasEDefeitos from "../../dados/celulasEDefeitos.json"
import { atualizarInutilizado, buscarInutilizado, criarTabelaInutilizado, salvarInutilizado } from "../../servicos/database";
import { gerarTXTInutilizado } from "../../servicos/gerarTXT";
import estilos from "../digitacao/estilos";
import RenderFlatlistInutilizado from "./componentes/RenderFlatlistInutilizado";
import * as Clipboard from 'expo-clipboard';
import { testeacumulado } from "../../servicos/acumulado";

export default function DigitacaoInutilizadoCelula(){


    const rota = useRoute()
    const rotuloSQL = rota.params.data + rota.params.item.descricao
    const [dataFlatList, setDataFlatList] = useState()

    

     useEffect(()=>{
         async function iniciar(){

             criarTabelaInutilizado()
             const inutilizadoBuscado = await buscarInutilizado(rotuloSQL)
             if(inutilizadoBuscado == false){

                 await salvarInutilizado(rotuloSQL, JSON.stringify(celulasEDefeitos.celulas))
                 const inutilizado = await buscarInutilizado(rotuloSQL)
                 setDataFlatList(JSON.parse( inutilizado[0].valores ))

             } else{

                 const inutilizado = await buscarInutilizado(rotuloSQL)
                 setDataFlatList(JSON.parse( inutilizado[0].valores ))
             }

         }
         iniciar()
     },[])

    async function salvarInutilizadoNaTabela(dados){

        const listaP = [];
        dataFlatList.map((i)=>{
            if(i.id === dados.id){
                i=dados
            }
            listaP.push(i)
        })
        
        const listPString = JSON.stringify(listaP)
        await atualizarInutilizado(listPString, rotuloSQL)
        const inutilizadoBuscado = await buscarInutilizado(rotuloSQL)
        const inutilizadoBuscadoJSON = JSON.parse( inutilizadoBuscado[0].valores )
        setDataFlatList(inutilizadoBuscadoJSON)


    }


    async function gerarArquivo(){
        await Clipboard.setStringAsync( gerarTXTInutilizado(dataFlatList) )
        Alert.alert("Copiado para area de transferencia")
    }

    return (<View style={{flex:1}}>
        <View style={{width:"95%", borderBottomColor:"#000", borderBottomWidth:2, alignSelf:"center", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:30, alignSelf:"center", margin:7}}>{rota.params.data} {rota.params.item.descricao}</Text>
        <TouchableOpacity style={estilos.botaoGerar} onPress={()=>{testeacumulado(rota.params.data)}}>
            <Text style={estilos.textoBotaoGerar}>
                Gerar TXT
            </Text>
        </TouchableOpacity>
        </View>
        <FlatList
            data={dataFlatList}
            keyExtractor={(item)=>{item.id}}
            renderItem={({item})=>(<RenderFlatlistInutilizado item={{...item}} salvarInutilizadoNaTabela={salvarInutilizadoNaTabela}/>)}
        />
        </View>
    )
}