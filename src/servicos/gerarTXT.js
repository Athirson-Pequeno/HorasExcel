export function gerarTXT(data){

    let dataDesc = data.sort(function(itemA, itemB){

        return itemB.horaInicio - itemA.horaInicio
    })

    console.log(dataDesc)

    let docFim = "Criado por Athirson Pequeno." + "\n" + 
    "Github: https://github.com/Athirson-Pequeno" + "\n" + 
    "Email: sathirson@gmail.com" + "\n\n\n" + 
    "Celula,Codigo Parada,Hora Inicio,Hora Fim,Obs,Horario"+"\n"

    data.map(elemento => {
        const linha = `${elemento.celula};${elemento.codParada};${elemento.horaInicio};${elemento.horaFim};${elemento.obs};${elemento.horario}${"\n"}`
        docFim = docFim + linha
    });
       
    return docFim
        
    }

    export function gerarTXTInutilizado(data){

        let docFim = "Criado por Athirson Pequeno." + "\n" + 
        "Github: https://github.com/Athirson-Pequeno" + "\n" + 
        "Email: sathirson@gmail.com" + "\n\n\n" + 
        "Celula;Descricao;Quantidade"+"\n"
        
        data.map((c)=>{
            c.defeitos.map((cd)=>{
                if(cd.descricao != "Total"){
                    let quantidade = cd.quantidade
                    quantidade = quantidade.replace(".",",")
                    if(quantidade == "0"){
                        quantidade = ""
                    }
                    const linha =(`${c.numeroCelula};${cd.descricao};${quantidade}${"\n"}`)
                    docFim = docFim + linha
            
            }
            })

        })
        return docFim
    }