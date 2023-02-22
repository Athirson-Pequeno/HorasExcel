import React, { useEffect, useState, useRef, useContext } from "react";
import { useRoute } from "@react-navigation/core";
import { Alert, FlatList, Text, TouchableOpacity, View, TextInput } from "react-native";
import { adicionarParadasDB, buscarParadasPorData, criarTabelaParadas } from "../../servicos/database";
import * as Clipboard from 'expo-clipboard';
import { ModalVisivelContext } from "../../contexts/ModalVisivelContext";

import RenderFlatList from "./componentes/RenderFlatList";
import TopoTabela from "./componentes/TopoTabela";
import estilos from "./estilos";
import { gerarTXT } from "../../servicos/gerarTXT";
import { Picker } from "@react-native-picker/picker";
import paradasJson from "../../dados/paradas.json"
import ModalEdicao from "./componentes/ModalEdicao";



export default function Digitacao(){

    const { modalVisivel } = useContext(ModalVisivelContext)

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    
    const [tamanhoFonte, setTamanhoFonte] = useState(10)


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
    },[modalVisivel])

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

    let horario = parseInt( parada.horaInicio.slice(0,-2) ) - 5  
    
    if (!horario){
        horario=""
    }

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
    
    setParada({
        celula:"",
        horaInicio:"",
        horaFim:"",
        codParada:"",
        obs:""
    })}

    async function gerarArquivo(){
       await Clipboard.setStringAsync( gerarTXT(data))
       Alert.alert("Copiado para area de transferencia")
        
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



    <View style={estilos.containerTextInput}>
        <Text style={estilos.label}>Cél.</Text>
        <TextInput
            value={parada.celula}
            style={estilos.textInput}
            onChangeText={text => alteraDados("celula", text, parada, setParada)}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            ref={ref1}
            onSubmitEditing={()=>{ref2.current.focus()}}
        />
    </View>

    <View style={[estilos.containerTextInput,{flex:2}]}>
        <Text style={estilos.label}>Hora Inicío</Text>
        <TextInput
            value={parada.horaInicio}
            style={estilos.textInput}
            onChangeText={text => alteraDados("horaInicio", text, parada, setParada)}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            ref={ref2}
            onSubmitEditing={()=>{ref3.current.focus()}}
        />
    </View>

    <View style={[estilos.containerTextInput,{flex:2}]}>
        <Text style={estilos.label}>Hora Fim</Text>
        <TextInput
            value={parada.horaFim}
            style={estilos.textInput}
            onChangeText={text => alteraDados("horaFim", text, parada, setParada)}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            ref={ref3}
            onSubmitEditing={()=>{ref4.current.focus()}}
        />
    </View>

    <View style={[estilos.containerTextInput,{flex:3, padding:0}]}>
    <Text style={[estilos.label, {margin:5}]}>Cód.</Text>
    <View>
        <Picker 
        onFocus={()=>setTamanhoFonte(16)}
        onBlur={()=>setTamanhoFonte(10)}
        selectedValue={parada.codParada}
        onValueChange={(itemSelecionado)=>{
                alteraDados("codParada", itemSelecionado, parada, setParada)
                
                ref5.current.focus()
            
        }}
        ref={ref4}>

       
        {paradasJson.dados.map((item)=>{return <Picker.Item  style={{fontSize:tamanhoFonte}} label={item.codigo+" - "+item.descricao} value={item.codigo} key={item.id}/>})}
        </Picker>
    </View>
    </View>



    </View>
        <View style={{flexDirection:"row"}}>
        <View style={[estilos.containerTextInput,{flex:3}]}>
            <Text style={estilos.label}>Obs</Text>
                <TextInput
                    value={parada.obs}
                    style={estilos.textInput}
                    onChangeText={text => alteraDados("obs", text, parada, setParada)}
                    keyboardType={"default"}
                    returnKeyType={"send"}
                    ref={ref5}
                    onSubmitEditing={()=>{
                        AdicionarParada()
                        ref1.current.focus()
                    }}
            />
        </View>
            <TouchableOpacity 
                style={estilos.botaoOk}
                onPress={()=>{
                    AdicionarParada()
                    ref1.current.focus()}
                }
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
        <ModalEdicao/>
    </View>
)}