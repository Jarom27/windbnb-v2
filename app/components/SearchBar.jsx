'use client'
import '../stylesheets/searchbar.css'
import { MdSearch } from "react-icons/md";
export default function SearchBar({locationEvent,guessEvent}) {
  
  return (
    <>
      <div className="flex lg:w-2/5 w-full p-3 shadow-sm rounded-md">
        <input type = "text" placeholder="Add location" className="col-span-2" onClick={locationEvent}></input>
        <input type = "text" placeholder="Add guests" className="col-span-1 lg:col-span-2" onClick={guessEvent}></input>
        <div className='col-span-1'><MdSearch></MdSearch></div>
      </div>
    </>
    
  )
}

