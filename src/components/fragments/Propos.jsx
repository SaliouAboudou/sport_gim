import React from 'react'
import TitleSection from './TitleSection'
import a_propos from '../images/a_propos.webp'
import AOSProvider from './AOSProvider'
import Button from './Button'

export default function Propos() {

    // state 
    const titleSection = "A Propos"
    const titleButton = "Lire Plus"

    // comportement 

    // affichage 
  return (
    <div className='w-full  flex flex-col  p-4 items-center gap-10'>
        {/* title de la section a propos  */}
        <TitleSection titleSection={titleSection} />
        {/* boite regrouper la zone contexte a propos & image  */}
        <div className=' bg-white w-full max-w-7xl  flex  justify-between p-4 items-center mt-3'>
            {/* div context a propos  */}
            <div className=' bg-lime-50 max-w-3xl flex flex-col gap-4 py-20 px-5 rounded-xl shadow-lg'>
            <AOSProvider options={{duration: 3000, once: true}}>
                <p data-aos="zoom-in" data-aos-deplay='400' className=' text-lg text-justify' >Chez sport.<span className=' text-lime-700 font-semibold'>Gim</span>, nous croyons que la santé et le bien-être sont à la portée de tous. Notre mission est de vous accompagner à chaque étape de votre parcours fitness, que vous soyez débutant ou athlète confirmé.</p>
                <p data-aos="zoom-in" data-aos-deplay='400' className=' text-lg'>Nous offrons :</p>
                <ul data-aos="zoom-in" data-aos-deplay='400' className=' px-3'>
                    <li className='text-justify'><strong>Des plans d'entraînement personnalisés adaptés à vos objectifs :</strong> perte de poids, gain musculaire, endurance ou remise en forme.</li>
                    <li className='text-justify'><strong>Des conseils nutritionnels :</strong>  pour vous aider à adopter une alimentation équilibrée et performante.</li>
                    <li className='text-justify'><strong>Des suivis en temps réel :</strong> pour mesurer vos progrès et rester motivé.</li>
                </ul>
                {/* button a propos  */}
                    <Button data-aos="zoom-in" data-aos-deplay='400' className=" text-white"  title={titleButton }/>                 
            </AOSProvider>  
            </div>
            {/* div image  */}
            <div className=''>
            <AOSProvider options={{duration: 3000, once: true}}>
                <img data-aos="fade-left" data-aos-deplay='400' className='w-100' src={a_propos} alt={a_propos} srcset="" />
            </AOSProvider>
            </div>
        </div>
    </div>
  )
}
