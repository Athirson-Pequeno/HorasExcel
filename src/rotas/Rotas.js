import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicial from "../telas/inicial";
import Digitacao from "../telas/digitacao";

const Stack = createNativeStackNavigator();


export default function Rotas(){
    
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Inicial" component={Inicial}/>        
            <Stack.Screen name="Digitação" component={Digitacao}/>    
        </Stack.Navigator>    
      </NavigationContainer>
    
)}