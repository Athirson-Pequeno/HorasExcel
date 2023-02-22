import React, { useEffect, useState, useRef, useContext } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View, TextInput } from "react-native";
import estilos from "../estilos";
import { Picker } from "@react-native-picker/picker";
import paradasJson from "../../../dados/paradas.json"
import { atualizarParada, deletarParada } from "../../../servicos/database";
import { ModalVisivelContext } from "../../../contexts/ModalVisivelContext";

export default function FormularioEdicaoModal({paradaSelecionada}){

    const { setModalVisivel } = useContext(ModalVisivelContext)

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    
    const [tamanhoFonte, setTamanhoFonte] = useState(10)
    const [parada, setParada] = useState(paradaSelecionada)
    
    const alteraDados = (variavel, valor, parada, setParada) =>{
        setParada({
            ...parada,
            [variavel]:valor
        })
        
     }

    async function atualizar(){
        const paradaEditada = JSON.stringify(parada)
        await atualizarParada(paradaEditada, parada.id)
    }

    async function deletar(){
        await deletarParada(parada.id)
    }


    return(
    <View style={{flex:1, width:400}}>
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

    <View style={{flexDirection:"row", height:"35%"}}>
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
                        ref1.current.focus()
                    }}
            />
        </View>
        </View>
        <View style={{alignItems: 'center', margin: 10}}>
        <View style={{flexDirection:"row"}}>

              <TouchableOpacity 
              style={{backgroundColor:"#0f0", padding:6, margin:3, borderRadius:6}}
              onPress={()=>{
                atualizar()
                setModalVisivel(false)
                }}>
                <Text>
                    Atualizar
                </Text>
              </TouchableOpacity>


              <TouchableOpacity 
              style={{backgroundColor:"#d00", padding:6, margin:3, borderRadius:6}}
              onPress={()=>{
                deletar()
                setModalVisivel(false)}}>
                <Text>
                    Deletar
                </Text>
              </TouchableOpacity>

              
              <TouchableOpacity 
              style={{backgroundColor:"#c6c6c6", padding:6, margin:3, borderRadius:6}}
              onPress={()=>{setModalVisivel(false)}}>
                <Text>
                    Cancelar
                </Text>
              </TouchableOpacity>

              

              </View>
              </View>
    </View>
    
    )
}