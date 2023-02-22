import React, { useEffect, useState } from "react";

import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { adicionarDatas, buscarDatas,criarTabela } from "../../servicos/database";

import EntradaDeTexto from "../../componentes/EntradaDeTexto";
import RenderFlatList from "./componentes/RenderFlatList";
import estilos from "./estilos";


export default function Inicial({navigation}){
    
    const [data, setData] = useState("")
    const [listaDatas, setListaDatas] = useState([])
    
    useEffect(()=>{
        async function iniciar(){
            criarTabela()
            const lista = await buscarDatas()

            if (lista){
                setListaDatas(lista.slice(0).reverse())
            }
        }
    
        iniciar()
    },[])


    async function adicionarData(){

        if(data){
        
        const datasSemID = []

        listaDatas.forEach((item)=>{
            datasSemID.push(item.data)
        })
        if (datasSemID.indexOf(data) > -1){
            Alert.alert("A data que você está tentando adicionar já existe, digite outra data.")
            setData("")
        }else{
            await adicionarDatas(data)
            const lista = await buscarDatas()
            setListaDatas(lista.slice(0).reverse())
            setData("")
        }
    }else{
        Alert.alert("O campo data está vazio, digite uma data para continuar.")
    }
            
 
    }
    


    const Cabecalho = (<View style={estilos.containerCabecalhoFlat}>
        <EntradaDeTexto
            label={"Adicionar dia"}
            value={data}
            onChangeText={texto => setData(texto)}
            flex={4}
            keyboardType={"numbers-and-punctuation"}
        />
        <TouchableOpacity 
            style={estilos.botao}
            onPress={()=>adicionarData()}
        >
            <Text style={estilos.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
    </View>)

    return (
    <View style={estilos.container}>
        <FlatList
        ListHeaderComponent={Cabecalho}
        data={listaDatas}
        renderItem={({item})=>(<RenderFlatList item={{...item}}/>)}
        keyExtractor={(item)=>item.id}
        />
    </View>
    )
}

