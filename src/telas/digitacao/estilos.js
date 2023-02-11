import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    containerCabecalhoRow:{
        flexDirection:"row",
        flex:1
    },
    containerCabecalho:{
        paddingHorizontal:8,
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
    },
    textoDia:{
        fontSize:18,
        marginLeft:3,
        marginBottom:5
    },
    containerMenu:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    botaoGerar:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"grey",
        borderRadius:6,
        padding:10,
        marginBottom:4
    },
    textoBotaoGerar:{
        color:"#fff"
    }
    
})

export default estilos