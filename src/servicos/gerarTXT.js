import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export  async function gerarTXT(data){

let docFim = "Celula,Hora Inicio,Hora Fim,Codigo Parada,Obs,Horario"+"\n"

    data.forEach(elemento => {
        const linha = `${elemento.celula},${elemento.horaInicio},${elemento.horaFim},${elemento.codParada},${elemento.obs},${elemento.horario}${"\n"}`
        docFim = docFim + linha
    });

        var dia = new Date().getDate(); 
        var mes = new Date().getMonth() + 1; 
        var hora = new Date().getHours(); 
        var min = new Date().getMinutes(); 
        const datamesm = dia + '-' + mes + ' ' + hora + ':' + min
        
            
        let fileUri = FileSystem.documentDirectory + "dados "+ datamesm +".txt";
        await FileSystem.writeAsStringAsync(fileUri, docFim, { encoding: FileSystem.EncodingType.UTF8 });
        const asset = await MediaLibrary.createAssetAsync(fileUri)
        await MediaLibrary.createAlbumAsync("Download", asset, false)   
    }