'use client'
import useSWR from "swr";
import Card from "./Card";
export default function CardsContainer() {
  const {stays,isLoading} = useStays();
  console.log(stays);
  return (
    <div className="flex flex-col p-3">
        {isLoading ? "Cargando" : stays.map((stay,index) => <Card key={index} stay={stay}></Card>)}
    </div>
  )
}
function useStays(){
    const fetcher = (...args)=>fetch(...args).then(res => res.json())
    const {data, error, isLoading} = useSWR("./stays.json", fetcher );
    return {
      stays: data,
      isLoading,
      isError: error
  }
}