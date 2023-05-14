import { Montserrat } from "next/font/google";
import SuperHost from "./SuperHost";

const montserrat = Montserrat({subsets:["latin"]})
export default function Card({stay}) {
   
    return (
        <article className={"rounded-lg font-thin"+ montserrat.className}>
            <div className="">
                <img src={stay.photo} className="rounded-lg"></img>
            </div>
            <div className="mt-3">
                <div>
                    {stay.superHost && <SuperHost></SuperHost>}
                    <span>{stay.type} {stay.beds} beds</span><span></span>
                </div>
                <div>
                    <h1>{stay.title}</h1>
                </div>
            </div>
        </article>
    )
}
