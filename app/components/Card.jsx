import { Montserrat } from "next/font/google";
import SuperHost from "./SuperHost";

const montserrat = Montserrat({subsets:["latin"], weight: "600"})
export default function Card({stay}) {
   
    return (
        <article className={"rounded-lg font-thin"+ montserrat.className}>
            <div className="w-100 h-fit">
                <img src={stay.photo} className="rounded-lg aspect-[6/4] object-cover w-full "></img>
            </div>
            <div className="mt-3">
                <div className="mb-2">
                    {stay.superHost && <SuperHost></SuperHost>}
                    <span className="text-neutral-500">{stay.type}. {stay.type == 'Entire apartment' && stay.beds != null ? stay.beds + ' beds' : ''}</span><span></span>
                </div>
                <div>
                    <h1 className={montserrat.className}>{stay.title}</h1>
                </div>
            </div>
        </article>
    )
}
