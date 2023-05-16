import React, {useContext, useState} from 'react'
import '../stylesheets/modalsearch.css'
import SearchContext from '../context/SearchContext'

export default function ModalSearchBar() {
    const [location,setLocation] = useState("");
    const [guess,setGuess] = useState(0)
    const {setFiltro,setMaxGuess,setModal,setFiltered} = useContext(SearchContext);
    function handleLocation(e){
        setLocation(e.target.value)
    }
    function handleGuess(e){
        setGuess(parseInt(e.target.value))
    }
    function handleClick(){
        setFiltro(location)
        setMaxGuess(guess)
        setModal(false)
        setFiltered(true)
    }
    return (
        <>
            <div className='lg:hidden' >
            <input type = "text" placeholder="Add location" className="ring-black" onKeyUp={handleLocation}></input>
                <input type = "text" placeholder="Add guests" className="ring-black" onKeyUp={handleGuess}></input>
                <div className='flex justify-center'><button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl' onClick={handleClick}>Submit</button></div>
            </div>
            <div className='hidden lg:flex flex-col'>
                <div className=" lg:grid grid-cols-3 w-full p-3 shadow-sm rounded-md">
                    <input type = "text" placeholder="Add location" className="ring-black" onKeyUp={handleLocation}></input>
                    <input type = "text" placeholder="Add guests" className="ring-black" onKeyUp={handleGuess}></input>
                    <div className='flex justify-center'><button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl' onClick={handleClick}>Submit</button></div>
                </div>
                <ul className="mt-8 flex flex-col gap-6">
                    <li className="font-semibold text-neutral-700">Helsinki, Finland</li>
                    <li className="font-semibold text-neutral-700">Turku, Finland</li>
                    <li className="font-semibold text-neutral-700">Oulu, Finland</li>
                    <li className="font-semibold text-neutral-700">Vaasa, Finland</li>
                </ul>
            </div>
        </>
        
    )
}
