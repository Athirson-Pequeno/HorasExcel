import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import Clipboard from '@react-native-community/clipboard';
import { Alert } from 'react-native';


export function gerarTXT(data){


    let docFim = "Celula,Codigo Parada,Hora Inicio,Hora Fim,Obs,Horario"+"\n"

    data.forEach(elemento => {
        const linha = `${elemento.celula},${elemento.codParada},${elemento.horaInicio},${elemento.horaFim},${elemento.obs},${elemento.horario}${"\n"}`
        docFim = docFim + linha
    });
    


        // var dia = new Date().getDate(); 
        // var mes = new Date().getMonth() + 1; 
        // var hora = new Date().getHours(); 
        // var min = new Date().getMinutes(); 
        // const dataEHoraAtual = dia + '-' + mes + ' ' + hora + ':' + min
        
        
        
        //         const diretorioArquivo = FileSystem.documentDirectory + "dados/dados "+ dataEHoraAtual +".csv"
                                
        //         await FileSystem.writeAsStringAsync(diretorioArquivo, docFim, { encoding: FileSystem.EncodingType.UTF8 });

        //         const permisaoCompartilhar = await Sharing.isAvailableAsync()

        //         if (permisaoCompartilhar){
        //             try{
        //                 const res = await Sharing.shareAsync(diretorioArquivo)
        //                 console.log('ShareAsync', res)
        //                 return "Arquivo compartilhado"
        //             }catch{
        //                 return "Falha ao enviar arquivo"
        //             }
        //         }else{
        //             console.log("Sem permisao para compartilhar")
        //         }


            
               return docFim
        
    }