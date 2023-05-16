import React, {useContext, useState} from 'react'
import '../stylesheets/modalsearch.css'
import SearchContext from '../context/SearchContext'
import ListCities from './ListCities';
import { MdSearch } from 'react-icons/md';

export default function ModalSearchBar() {
    const [location,setLocation] = useState("");
    const [guess,setGuess] = useState(99)
    const {setFiltro,setMaxGuess,setModal,setFiltered} = useContext(SearchContext);
    function handleLocation(e){
        setLocation(e.target.value)
    }
    function handleGuess(e){
        if(parseInt(e.target.value != NaN)){
            setGuess(parseInt(e.target.value))
        }
        
    }
    function handleClick(){
        setFiltro(location)
        setMaxGuess(guess)
        setModal(false)
        setFiltered(true)
    }
    return (
        <>
            {/*Vista movil */}
            <div className='w-full h-full lg:hidden'>
                <div className='flex flex-col  justify-between' >
                    <div>
                        <p>Edit your search</p>
                        <div className='shadow-md rounded-2xl p-2'>
                            <input type = "text" placeholder="Add location" className="outline-black focus:ring-black w-full p-3 mb-1" onKeyUp={handleLocation}></input>
                            <input type = "text" placeholder="Add guests" className="focus:ring-black w-full p-3" onKeyUp={handleGuess}></input>
                        </div>
                    </div>
                    <ListCities></ListCities>
                    <div className='flex justify-center'>
                        <button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl flex align-middle' onClick={handleClick}><span className='inline-block'><MdSearch className='w-10 h-6'></MdSearch></span>Submit</button>
                    </div>
                </div>
            </div>
            
            {/*Vista Desktop */}
            <div className='hidden lg:flex flex-col'>
                <div className=" lg:grid grid-cols-3 w-full p-3 shadow-sm rounded-md">
                    <input type = "text" placeholder="Add location" className="ring-black me-1" onKeyUp={handleLocation}></input>
                    <input type = "text" placeholder="Add guests" className="ring-black" onKeyUp={handleGuess}></input>
                    <div className='flex justify-center'><button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl flex align-middle' onClick={handleClick}><span className='inline-block'><MdSearch className='w-10 h-6'></MdSearch></span>Submit</button></div>
                </div>
                <ListCities></ListCities>
            </div>
        </>
        
    )
}
