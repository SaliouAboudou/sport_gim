import React from 'react'
import imgHome from '../images/homme.png'

export default function ImageHome() {

  // affichage 
  return (
    <div className=' flex justify-end px-10 items-center gap-3'>
            <span className=' rounded-full bg-lime-800/20 p-12 mt-24 float-right animate-bounce'></span>
            <div className=' text-white h-screen'>
                <img className='w-[65rem] overflow-hidden z-10 ' src={imgHome} alt="imgHome" />
            </div>
    </div>
  )
}
