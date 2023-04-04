import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        marginTop:5,
        paddingHorizontal:6
    },
    containerCabecalhoFlat:{
        flexDirection:"row"
    },
    botao:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:"grey",
        borderRadius:6,
        margin:3
    },
    textoBotao:{
        color:"#fff"
    },
    botaoFlat:{
        backgroundColor:"#c0c0c0",
        margin:2,
        borderColor:"#545454",
        borderWidth:2,
        padding:6,
        borderRadius:6
    },
    textoBotaoFlat:{
        fontSize:22,
        color:"#1d1d1d"
    }
})

export default estilos