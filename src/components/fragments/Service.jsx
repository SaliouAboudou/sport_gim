import React from 'react'
import salleSport from '../images/salle_sport.webp'
import DATA_LIST_SERVICE from '../services/dataListService'
import TitleSection from './TitleSection'
import AOSProvider from './AOSProvider'

export default function Service() {
    // state 

    const titlesection = "Services"

    // comportement 

    // resultat 

  return (
    <div className="p-2 w-full flex flex-wrap justify-center items-center"> 
      <TitleSection titleSection={titlesection}/>
    
    {DATA_LIST_SERVICE.map((service) => (
    /* boite des cards */
    <AOSProvider options={{duration: 3000, once: true}}>
         <div
            className="bg-white w-full max-w-xs m-2 p-4 mt-24" data-aos="zoom-left" data-aos-deplay='700'
            key={`${service.id}-${service.titre}`}
        >
            {/* item card  */}
            <div className="w-80 h-96 border shadow rounded-lg overflow-hidden flex flex-col">
                <div className="w-full">
                    <img
                        src={salleSport}
                        alt="Salle de sport"
                        className="w-full h-52 object-cover"
                    />
                </div>
                <div className="flex flex-col px-3">
                    <h1 className="text-lg font-bold">{service.titre}</h1>
                    <p className="text-md text-gray-600">{service.description}</p>
                </div>
            </div>
        </div>
    </AOSProvider>
    ))}
</div>

  )
}
