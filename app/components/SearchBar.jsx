'use client'
import '../stylesheets/searchbar.css'
import { MdSearch } from "react-icons/md";
export default function SearchBar({locationEvent,guessEvent}) {
  
  return (
    <>
      <div className="grid grid-cols-12 lg:w-2/5 w-full p-3 shadow-sm rounded-md">
        <input type = "text" placeholder="Add location" className="col-span-6" onClick={locationEvent}></input>
        <input type = "text" placeholder="Add guests" className="col-span-5 lg:col-span-5" onClick={guessEvent}></input>
        <div className='col-span-1 text-rose-600 w-1'><MdSearch className='w-10 h-6'></MdSearch></div>
      </div>
    </>
    
  )
}

