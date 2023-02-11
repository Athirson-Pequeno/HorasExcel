import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/core";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { adicionarParadasDB, buscarParadasPorData, criarTabelaParadas } from "../../servicos/database";

import EntradaDeTexto from "../../componentes/EntradaDeTexto";
import RenderFlatList from "./componentes/RenderFlatList";
import TopoTabela from "./componentes/TopoTabela";
import estilos from "./estilos";
import { gerarTXT } from "../../servicos/gerarTXT";

export default function Digitacao(){


    useEffect(()=>{
        async function iniciar(){
            criarTabelaParadas()

            const paradasBuscadas = await buscarParadasPorData(dataParada)

            if(paradasBuscadas){
                const paradaPush = []
                    
                paradasBuscadas.forEach(elemento => {
                    const parada = (JSON.parse( elemento.infos ))
                    const paradaComId = {
                        ...parada,
                        id:elemento.id
                    }
                    paradaPush.unshift(paradaComId)
                });
                
            
                setData(paradaPush)
            
            }

        }
        iniciar()
    },[])

    const rota = useRoute()
    const {item} = rota.params
    const dataParada = item.data

    const [data, setData] = useState([])
    

    const [parada, setParada] = useState({
        celula:"",
        horaInicio:"",
        horaFim:"",
        codParada:"",
        obs:""
     })

     const alteraDados = (variavel, valor, parada, setParada) =>{
        setParada({
            ...parada,
            [variavel]:valor
        })
        
     }

    async function AdicionarParada(){

    const horario = parseInt( parada.horaInicio.slice(0,-2) ) - 5    

    const paradaDB = JSON.stringify({...parada, horario})
    await adicionarParadasDB(dataParada, paradaDB)

    const paradasBuscadas = await buscarParadasPorData(dataParada)

    const paradaPush = []
        
    paradasBuscadas.forEach(elemento => {
        const parada = (JSON.parse( elemento.infos ))
        const paradaComId = {
            ...parada,
            id:elemento.id,
        }
        paradaPush.unshift(paradaComId)
    });
    

    setData(paradaPush)
    
    }

    function gerarArquivo(){
        gerarTXT(data)
        Alert.alert("Arquivo gerado")
    }

    const Cabecalho =   
    (<View>
    <View style={estilos.containerCabecalho}>
        <View style={estilos.containerMenu}>
            <Text style={estilos.textoDia}>DIA: {dataParada}</Text>
            <TouchableOpacity 
            style={estilos.botaoGerar}
            onPress={()=>gerarArquivo()}>
                <Text style={estilos.textoBotaoGerar}>Gerar txt</Text>
            </TouchableOpacity>
        </View>
    <View style={estilos.containerCabecalhoRow}>
        <EntradaDeTexto
            label="celula"
            value={parada.celula}
            onChangeText={text => alteraDados("celula", text, parada, setParada)}
            inputMode={"numeric"}
        />
        <EntradaDeTexto
            label="Hora inicio"
            value={parada.horaInicio}
            onChangeText={text => alteraDados("horaInicio", text, parada, setParada)}
            inputMode={"numeric"}
        />
        <EntradaDeTexto
            label="Hora fim"
            value={parada.horaFim}
            onChangeText={text => alteraDados("horaFim", text, parada, setParada)}
            inputMode={"numeric"}
        />
        <EntradaDeTexto
            label="Código"
            value={parada.codParada}
            onChangeText={text => alteraDados("codParada", text,  parada, setParada)}
            inputMode={"numeric"}
        />
    </View>
        <View style={{flexDirection:"row"}}>
            <EntradaDeTexto
                    label="Obs."
                    value={parada.obs}
                    onChangeText={text => alteraDados("obs", text,  parada, setParada)}
                    flex={3}
                    inputMode={"text"}
                />
            <TouchableOpacity 
                style={estilos.botaoOk}
                onPress={()=>AdicionarParada()}
            >
                <Text style={estilos.textoBotao}>OK</Text>
            </TouchableOpacity>
        </View>

    </View>
        <TopoTabela/>
    </View>
    )

    return (
    <View style={{marginTop:20}}>
        <FlatList
            ListHeaderComponent={Cabecalho}
            data={data}
            renderItem={({item}) => (<RenderFlatList item={{...item}}/>)}
            keyExtractor={(item)=>item.id}  
        />
    </View>
)}