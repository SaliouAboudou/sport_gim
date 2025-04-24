import React from 'react';
import 'aos/dist/aos.css';
import Header from '../shares/Header'

import ContextHome from './ContextHome'

import AOSProvider from './AOSProvider';
import ImageHome from './ImageHome';

export default function Home() {

// affichage 
  return (
    <AOSProvider options={{duration:1000, once:true}} >
        <div data-aos="fade-right" className=' w-ful h-screen bg-gray-950 overflow-hidden relative'>
            {/* la boite div qui wrappe l ensemble composants jsx dans la page  */}
            <Header/>
            {/* component du text accueil  */}
            <ContextHome />
            {/* zone image home  */}
            <ImageHome/>
            <span className='rounded-full bg-lime-800/20 p-40 absolute flex justify-center overflow-auto -bottom-10 -left-24 animate-bounce'></span>
            <span className='rounded-full bg-lime-800/20 p-40 absolute flex justify-center -top-10 -right-24 overflow-hidden animate-bounce'></span>
        </div>
    </AOSProvider>
    
  )
}
