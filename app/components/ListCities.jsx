import { MdPlace } from "react-icons/md"
export default function ListCities() {
  return (
    <ul className="mt-8 flex flex-col gap-6">
        <li className="font-semibold text-neutral-700"><span className="inline-block"><MdPlace></MdPlace></span>Helsinki, Finland</li>
        <li className="font-semibold text-neutral-700"><span className="inline-block"><MdPlace></MdPlace></span>Turku, Finland</li>
        <li className="font-semibold text-neutral-700"><span className="inline-block"><MdPlace></MdPlace></span>Oulu, Finland</li>
        <li className="font-semibold text-neutral-700"><span className="inline-block"><MdPlace></MdPlace></span>Vaasa, Finland</li>
    </ul>
  )
}

