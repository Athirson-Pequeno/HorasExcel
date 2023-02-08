import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    containerCabecalhoRow:{
        flexDirection:"row",
        flex:1
    },
    containerCabecalho:{
        padding:12,
        flex:1
    },
    botaoOk:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:"grey",
        borderRadius:6,
        margin:3
    },
    textoBotao:{
        color:"white",
        fontSize:20,
        fontWeight:"900"
    },
    containerViewFlatlist:{
        paddingHorizontal:5,
        justifyContent:"center"
    }
    
})

export default estilos