export default function SearchBar() {
  return (
    <div className="grid grid-cols-3 w-full p-3">
        <input type = "text" placeholder="Add location" className=""></input>
        <input type = "text" placeholder="Add guests" className="col-span-2"></input>
    </div>
  )
}
