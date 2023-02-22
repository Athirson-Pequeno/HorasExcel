import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("db.db");


export function criarTabela(){
    db.transaction((transacao) =>{
        transacao.executeSql("CREATE TABLE IF NOT EXISTS " +
        "Datas " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT);")

        console.log("tabela criada")
    })
}

export async function adicionarDatas(data){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("INSERT INTO Datas (data) VALUES (?);",[data],() =>{
                resolve("Data adicionada")
            })
        })
    })
}

export async function buscarDatas(){
    return new Promise((resolve)=>{
        db.transaction((transacao)=>{
            transacao.executeSql("SELECT * FROM Datas;",[],(transacao, resultados)=>{
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

        console.log("tabela paradas criada")
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