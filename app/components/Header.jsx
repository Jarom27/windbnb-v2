'use client'
import SearchContext from "../context/SearchContext";
import Modal from "./Modal";
import ModalSearchBar from "./ModalSearchBar";
import SearchBar from "./SearchBar"
import { useContext, useState } from "react";

export default function Header() {
  const {modal,setModal} =useContext(SearchContext)
  function handlerLocationInput(e){
      setModal(true);
  }
  function handleGuessInput(e){
      setModal(true)
  }
  return (
    <>
      {modal && <Modal>
          <ModalSearchBar></ModalSearchBar>
          
      </Modal>}
      <header className="flex flex-col justify-center container p-4 lg:flex-row lg:align-middle lg:justify-between">
          <div className="flex flex-col justify-center">
              <img src="./images/logo.png"></img>
          </div>
          <SearchBar locationEvent = {handlerLocationInput} guessEvent = {handleGuessInput}></SearchBar>
      </header>
    </>
  )
}
