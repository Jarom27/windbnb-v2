import Image from "next/image"
import SearchBar from "./SearchBar"


export default function Header() {
  return (
    <header className="flex flex-col justify-center container p-4">
        <div>
            <img src="./images/logo.png"></img>
        </div>
        <SearchBar></SearchBar>
    </header>
  )
}
