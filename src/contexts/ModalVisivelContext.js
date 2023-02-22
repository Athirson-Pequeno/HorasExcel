import { createContext, useState } from "react";

export const ModalVisivelContext = createContext({})

export function ModalVisivelProvider( {children} ){

    const [modalVisivel, setModalVisivel] = useState(false)
    const [paradaSelecionada, setParadaSelecionada] = useState({})

    return (
        <ModalVisivelContext.Provider value={{
            modalVisivel,
            setModalVisivel,
            paradaSelecionada,
            setParadaSelecionada
        }}>
            {children}
        </ModalVisivelContext.Provider>
    )
}