import React, { useContext, useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DataHorasParadas from "../telas/dataHorasParadas";
import Digitacao from "../telas/digitacao";
import Inicio from "../telas/inicio";
import TelaInutilizadoData from "../telas/telaInutilizadoData";
import SelecaoHorarioInutilizado from "../telas/selecaoHorarioInutilizado";
import DigitacaoInutilizadoCelula from "../telas/digitacaoInutilizadoCelula";
import { ModalVisivelProvider } from "../contexts/ModalVisivelContext";
import { DataEHorarioContext, DataEHorarioProvider } from "../contexts/DataEHorarioContext";

const Stack = createNativeStackNavigator();


export default function Rotas(){


    return (
    <DataEHorarioProvider>
        <ModalVisivelProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Inicio" component={Inicio}/>        
                    <Stack.Screen name="DataHorasParadas" component={DataHorasParadas}/>        
                    <Stack.Screen name="Digitação" component={Digitacao}/>    
                    <Stack.Screen name="DataInutilizado" component={TelaInutilizadoData}/>  
                    <Stack.Screen name="SelecaoHorarioInutilizado" component={SelecaoHorarioInutilizado}/>    
                    <Stack.Screen name="DigitacaoInutilizadoCelula" component={DigitacaoInutilizadoCelula} />    
                </Stack.Navigator>    
            </NavigationContainer>
        </ModalVisivelProvider>
    </DataEHorarioProvider>
    
)}