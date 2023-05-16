'use client'
import React from 'react'
import Header from './Header'
import CardsContainer from './CardsContainer'
import { SearchProvider } from '../context/SearchContext'

export default function Content() {
    return (
        <>
            <SearchProvider>
                <Header></Header>
                <CardsContainer></CardsContainer>
            </SearchProvider>
        </>
    )
}
