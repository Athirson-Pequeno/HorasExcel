import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("db.db");


export function criarTabela(nomeTabela){
    db.transaction((transacao) =>{
        transacao.executeSql(`CREATE TABLE IF NOT EXISTS ${nomeTabela} (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT);`)

       // console.log(`tabela ${nomeTabela} criada`)
    })
}

export async function adicionarDatas(data, nomeTabela){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql(`INSERT INTO ${nomeTabela} (data) VALUES (?);`,[data],() =>{
               // console.log(`itam salvo na ${nomeTabela}`)
                resolve(`Data adicionada na tabela ${nomeTabela}`)
            })
        })
    })
}

export async function buscarDatas(nomeTabela){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql(`SELECT * FROM ${nomeTabela};`,[],(transacao, resultados)=>{
              //  console.log(`buscando salvo na ${nomeTabela}`)
                resolve(resultados.rows._array)
            })
        })
    })
}


export function criarTabelaParadas(){
    db.transaction((transacao) =>{
        transacao.executeSql("CREATE TABLE IF NOT EXISTS " +
        "Paradas " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT, infos TEXT);")

        
    })
}


export async function adicionarParadasDB(dataParada ,parada){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("INSERT INTO Paradas (data, infos) VALUES (?,?);",
            [dataParada ,parada],() =>{
                resolve("Parada adicionada")
            })
        })
    })
}

export async function buscarParadasPorData(dataParada){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("SELECT * FROM Paradas WHERE data = ?;",
            [dataParada],(transacao, resultados)=>{
                resolve(resultados.rows._array)
            })
        })
    })
}

export async function atualizarParada(parada, id){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("UPDATE Paradas SET infos = ? WHERE id = ?;",[parada, id], () => {
                resolve("Parada atualizada com sucesso")
            })
        })
    })
}

export async function deletarParada(id){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("DELETE FROM Paradas WHERE id = ?",[id],()=>{
                resolve("Parada deletada com sucesso")
            })
        })
    })
}




export function criarTabelaInutilizado(){
    db.transaction((transacao) =>{
        transacao.executeSql(`CREATE TABLE IF NOT EXISTS Inutilizado (id INTEGER PRIMARY KEY AUTOINCREMENT, dataEHorario TEXT, valores TEXT);`)

    
    })
}

export async function salvarInutilizado(dataEHorario, dadosInutilizado){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("INSERT INTO Inutilizado (dataEHorario, valores) VALUES (?, ?)",
            [dataEHorario, dadosInutilizado],()=>{
               
                resolve("inutilizado salvo")
            })
        })
    })

}


export async function buscarInutilizado(dataEHorario){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("SELECT * FROM Inutilizado WHERE dataEHorario = ?;",
            [dataEHorario],(transacao, resultados)=>{
                
                resolve(resultados.rows._array)
            })
        })
    })
}


export async function atualizarInutilizado(valores, dataEHorario){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("UPDATE Inutilizado SET valores = ? WHERE dataEHorario = ?;",[valores, dataEHorario], () => {
               
                resolve("Inutilizado atualizado com sucesso")
            })
        })
    })
}