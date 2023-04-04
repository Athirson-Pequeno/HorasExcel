import { createContext, useState } from "react";

export const DataEHorarioContext = createContext({})

export function DataEHorarioProvider( {children} ){

    const [dataEHorario, setDataEHorario] = useState("TEste")

    return (
        <DataEHorarioContext.Provider value={{
            dataEHorario,
            setDataEHorario
            
        }}>
            {children}
        </DataEHorarioContext.Provider>
    )
}