import { buscarInutilizado } from "./database";
import horarios from "../dados/horarios.json"


export async function testeacumulado(dia){

    const valorTotal = []
    const valorCorte = []

    console.log(dia)
    horarios.dados.map((horario)=>{
        async function busca(){
        const dadosHorarios = await buscarInutilizado(dia+horario.descricao)
        if(dadosHorarios != false && horario.descricao != "Acumulado"){
            const valoresJSON =  JSON.parse( dadosHorarios[0].valores )
            
            valoresJSON.map((infoCel)=>{
                
                valorTotal.push(infoCel)
        
            })
            let to;
            
            
        }
        valorTotal.map((i)=>{
                
            i.defeitos.map((z)=>{
                if((z.descricao).toString() == "Corte" && (z.quantidade) !== "0"){
                    valorCorte.push(z.quantidade)
                }
                    
            })
        })
        console.log(valorCorte)
    }
    busca()

})


    
}