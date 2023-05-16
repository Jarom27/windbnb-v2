'use client'
import useSWR from "swr";
import Card from "./Card";
import { useState,useContext, useEffect } from "react";
import SearchContext from "../context/SearchContext";

export default function CardsContainer() {
  const {stays,isLoading} = useStays();
  const {filtro,maxGuess,filtered,setFiltered} = useContext(SearchContext);
  const [datos,setDatos] = useState([]);
  
  useEffect(()=>{
    isLoading ? [] : setDatos(stays);
  },[stays])
  useEffect(()=>{
    setDatos(stays)
    setDatos(datos.filter(stay => stay.city.toLowerCase().includes(filtro.toLowerCase()) || stay.maxGuest <= maxGuess))
    // else{
    //   setDatos(stays)
    //   setFiltered(false)
    // }
    console.log(datos,filtered)
  },[filtered])
  
  return (
    <>
      <div className="p-3 flex justify-between">
        <h2 className="font-bold text-2xl ">Stays in Finland</h2>
        <h2 className="font-bold text-md">12+ stays</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-3">
        {isLoading ? "Cargando" : datos.map((stay,index) => <Card key={index} stay={stay}></Card>)}
      </div>
    </>
    
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
