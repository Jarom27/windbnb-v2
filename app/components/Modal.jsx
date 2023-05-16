import React from 'react'

export default function Modal({children}) {
  return (
    <div className='w-screen h-4/6 fixed bg-white px-5 lg:px-36 pt-10'>
       {children}
    </div>
  )
}
