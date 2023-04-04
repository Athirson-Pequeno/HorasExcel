import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function RenderFlatlistInutilizado({item, salvarInutilizadoNaTabela}){
    

    const [defeitoValores, setDefeitoValores] = useState({
        Pinça:item.defeitos[0].quantidade,
        Furação:item.defeitos[1].quantidade,
        Corte:item.defeitos[2].quantidade,
        Total:item.defeitos[3].quantidade
    })    

    function alteraValor(id, novoValor, descricaoDefeito){

        if(novoValor){

        item.defeitos[id].quantidade = novoValor
        item.defeitos[3].quantidade = parseFloat(item.defeitos[0].quantidade) + 
                                      parseFloat(item.defeitos[1].quantidade) +
                                      parseFloat(item.defeitos[2].quantidade)
        setDefeitoValores({
            ...defeitoValores,
            [descricaoDefeito]:item.defeitos[id].quantidade,
            Total:(item.defeitos[3].quantidade).toString()
        })

    }else{
        item.defeitos[id].quantidade = "0"
        item.defeitos[3].quantidade = parseFloat(item.defeitos[0].quantidade) + 
                                      parseFloat(item.defeitos[1].quantidade) +
                                      parseFloat(item.defeitos[2].quantidade)
        setDefeitoValores({
            ...defeitoValores,
            [descricaoDefeito]:"0",
            Total:(item.defeitos[3].quantidade).toString()
        })
    }
    
        salvarInutilizadoNaTabela(item)
    }



    return (<View style={{flexDirection:"row", borderRadius:6, borderColor:"#000", borderWidth:2, margin:3, padding:6, flex:1}}>
            <Text style={{fontSize:40, marginRight:10, flex:1}}>{item.numeroCelula}</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between", flex:4, marginRight:30}}>
            {item.defeitos.map((defeito)=>{return <>
                <View key={defeito.id} style={{backgroundColor:"#c6c6c6", borderRadius:6, flex:1, marginHorizontal:5, paddingVertical:5 , alignItems:"center"}}>
                    <Text style={{fontSize:16}}>{defeito.descricao}</Text>
                    <TextInput
                    style={{fontSize:18, borderColor:"grey", borderWidth:0.5, width:"85%",borderRadius:6, textAlign:"center"}}
                    value={(defeitoValores[defeito.descricao]).toString()}
                    onChangeText={(text) => {

                        if(text.length > 0 && text[0] == "0"){
                            const novo = text.slice(1,text.length)
                            text=novo
                            
                        }

                        alteraValor(defeito.id, text, defeito.descricao)
                    
                    }}
                        
                    >
                    </TextInput>
                </View>
            </>})}
            </View>
        </View>)


}