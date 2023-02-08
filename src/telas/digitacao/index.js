import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import EntradaDeTexto from "../../componentes/EntradaDeTexto";
import RenderFlatList from "./componentes/RenderFlatList";
import TopoTabela from "./componentes/TopoTabela";
import estilos from "./estilos";


export default function Digitacao(){

    const [data, setData] = useState([])
    const [aleracao, setAlteracao] = useState(false)

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

    function AdicionarParada(){

    const paradaPush = {
            ...parada,
            id:data.length + 1
        }

    data.unshift(paradaPush)

    setData([...data])
    

    
    
    }

    const Cabecalho =   
    (<View>
    <View style={estilos.containerCabecalho}>
    <View style={estilos.containerCabecalhoRow}>
        <EntradaDeTexto
            label="celula"
            value={parada.celula}
            onChangeText={text => alteraDados("celula", text, parada, setParada)}
        />
        <EntradaDeTexto
            label="Hora inicio"
            value={parada.horaInicio}
            onChangeText={text => alteraDados("horaInicio", text, parada, setParada)}
        />
        <EntradaDeTexto
            label="Hora fim"
            value={parada.horaFim}
            onChangeText={text => alteraDados("horaFim", text, parada, setParada)}
        />
        <EntradaDeTexto
            label="Código"
            value={parada.codParada}
            onChangeText={text => alteraDados("codParada", text,  parada, setParada)}
        />
    </View>
        <View style={{flexDirection:"row"}}>
            <EntradaDeTexto
                    label="Obs."
                    value={parada.obs}
                    onChangeText={text => alteraDados("obs", text,  parada, setParada)}
                    flex={3}
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
    <View >
        <FlatList
            ListHeaderComponent={Cabecalho}
            data={data}
            extraData={aleracao}
            renderItem={({item}) => (<RenderFlatList item={{...item}}/>)}
            keyExtractor={(item)=>item.id}
        />
    </View>
)}