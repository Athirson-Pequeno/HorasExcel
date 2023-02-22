export function gerarTXT(data){

    let dataDesc = data.sort(function(itemA, itemB){

        return itemB.horaInicio - itemA.horaInicio
    })

    console.log(dataDesc)

    let docFim = "Criado por Athirson Pequeno." + "\n" + 
    "Github: https://github.com/Athirson-Pequeno" + "\n" + 
    "Email: sathirson@gmail.com" + "\n\n\n" + 
    "Celula,Codigo Parada,Hora Inicio,Hora Fim,Obs,Horario"+"\n"

    data.forEach(elemento => {
        const linha = `${elemento.celula},${elemento.codParada},${elemento.horaInicio},${elemento.horaFim},${elemento.obs},${elemento.horario}${"\n"}`
        docFim = docFim + linha
    });
       
    return docFim
        
    }