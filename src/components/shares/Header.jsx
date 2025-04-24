import React from 'react'
import NavBar from '../fragments/NavBar'

export default function Header() {
  return (
    <div className='flex w-full bg-white items-start px-10 py-2 fixed overflow-hidden z-20'>
        {/* les bulles d'animation header  */}
        <span className='rounded-full bg-lime-800/20 p-12 float-right top-16 -z-10 absolute'></span>
        <span className='rounded-full bg-lime-800/20 p-12 float-right -z-10 absolute  right-0 -top-16'></span>
        <span className='rounded-full bg-lime-800/20 p-12 float-right -z-10 absolute  right-80 top-16'></span>
        <span className='rounded-full bg-lime-800/20 p-40 float-right -z-10 absolute flex justify-center ms-96 overflow-auto animate-bounce duration-700' ></span>

        {/* inserer la nav bar component  */}
        <NavBar/>
    </div>
  )
}
