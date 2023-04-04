import React, { useEffect, useState } from "react";

import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { adicionarDatas, buscarDatas, criarTabela } from "../servicos/database";

import EntradaDeTexto from "./EntradaDeTexto";
import estilos from "./estilos";


export default function AdicionarDatas({navigation,tabelaSQL, navegarPara}){

    const nomeTabela = tabelaSQL;
    const [data, setData] = useState("")
    const [listaDatas, setListaDatas] = useState([])
    
    useEffect(()=>{
        async function iniciar(){
            criarTabela(nomeTabela)
            const lista = await buscarDatas(nomeTabela)

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
            await adicionarDatas(data, nomeTabela)
            console.log(nomeTabela)
            const lista = await buscarDatas(nomeTabela)
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
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <TouchableOpacity
                    style={estilos.botaoFlat}
                    onPress={()=> navigation.navigate(navegarPara, {item})}>
                        <Text style={estilos.textoBotaoFlat}>{item.data}</Text>
                </TouchableOpacity>)}
        />
    </View>
    )
}

