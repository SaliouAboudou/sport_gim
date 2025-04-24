import React from 'react'
import AOSProvider from './AOSProvider'

export default function TitleSection({titleSection}) {

  // state

  // comportement

  // affichage
  return (
    <div className=' w-full flex justify-center items-center flex-col transform translate-y-10 duration-700'>
      <AOSProvider options={{duration: 3000, once: true}} >
        <span className='p-1 rounded-lg bg-lime-200'></span>
        <h1 data-aos="flip-up" data-aos-deplay="zoom-up" className=' text-3xl font-bold font-poppins text-lime-800' key={titleSection}>{titleSection}</h1>
        <span className='p-1 rounded-lg bg-lime-200'></span>
      </AOSProvider>
    </div>
  )
}
