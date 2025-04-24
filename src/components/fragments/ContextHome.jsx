import React from 'react'
import AOSProvider from './AOSProvider'
import Button from './Button'

export default function ContextHome() {
// state 
const titleButton = "En Savoir Plus"
// comportement 


  // affichage 
  return (
    <AOSProvider options={{duration:1500, once:true}}>
        <div className=' text-white pt-24 flex flex-col justify-center gap-5 px-20 h-full absolute w-full max-w-5xl '>
          {/* titre Bienvenue  */}
           <h1 data-aos="fade-top" className=' text-7xl font-bold'>Bienvenue sur <span className=' text-white'>sport.<strong className=' text-lime-600'>Gim</strong></span></h1>
                   <h3 className=' text-2xl font-semibold'> Votre Destination pour le Matériel de Musculation de Qualité</h3>
                   <p className=' text-justify font-extralight'>Chez <span>sport.<strong className=' text-lime-500'>Gim</strong></span>, nous comprenons l'importance d'avoir le bon équipement pour atteindre vos objectifs de remise en forme. Que vous soyez un athlète professionnel ou un amateur passionné de fitness, nous vous proposons une large gamme de matériels de musculation adaptés à tous les niveaux</p>
                {/* button en savoir plus  */}
                <Button title={titleButton }/>
        </div>
    </AOSProvider>
    
  )
}
