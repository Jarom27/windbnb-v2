import React, { createContext, useState } from 'react'

const SearchContext = createContext()
export function SearchProvider({children}) {
    const [filtro,setFiltro] = useState("");
    const [modal, setModal] = useState(false);
    const [maxGuess,setMaxGuess] = useState(99)
    const [filtered,setFiltered] = useState(false)
    const info = {
        modal,
        filtro,
        maxGuess,
        filtered,
        setModal,
        setMaxGuess,
        setFiltro,
        setFiltered
    }
    return (
            <SearchContext.Provider value={info}>
                {children}
            </SearchContext.Provider>
    )
}
export default SearchContext;