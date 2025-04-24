import React from 'react'
import TitleSection from './TitleSection'
import DATA_CATEGORIE_PRODUCTS from '../services/dataCategorie'
import DATA_LIST_PRODUCTS from '../services/dataProduit'
import AOSProvider from './AOSProvider'

export default function AllCategorie() {

    // satate 
    const titleSection = "All Catégories"
    // comportement 

    // affichage 
  return (
      <div className='py-5 flex flex-col items-center'>
            {/* boite contenant tous les cards  */}
          <TitleSection titleSection ={titleSection}/>
        <div className=' w-full max-w-7xl  p-2 mt-12 grid grid-cols-2  justify-center items-center gap-3'>
        {
            DATA_CATEGORIE_PRODUCTS.map(item => {
              // Calculer le nombre de produits dans la catégorie
              const countProductCategorie = item.id === 1 ? DATA_LIST_PRODUCTS.length : DATA_LIST_PRODUCTS.filter(
                product => product.categorie_id === item.id
              ).length;

              // Retourner la carte
              return (
                <AOSProvider options={{duration: 3000, once:true}}>
                <div data-aos="fade-up" data-aos-delay="400"
                  className="shadow-lg w-full max-w-lg rounded-md h-40 overflow-hidden flex gap-x-2 items-center"
                  key={item.id}
                >
                  <div className="w-32 h-48 bg-lime-600 flex flex-col items-center justify-center">
                    <img className="w-32" src="/logo512.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl">{item.categorie}</h3>
                    <span className="text-lg">
                      <strong>{countProductCategorie}</strong> Produits
                    </span>
                  </div>
                </div>
                </AOSProvider>
              
              );
            })
          }
            
        </div>
    </div>
  )
}
