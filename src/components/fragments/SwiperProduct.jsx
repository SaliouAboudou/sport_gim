import React from 'react'
import BouttonSwiperSlide from './BouttonSwiperSlide'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";
import AOSProvider from './AOSProvider';

export default function SwiperProduct({produitsFiltres}) {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
    spaceBetween={50}
    slidesPerView={4}
    loop={true}
    autoplay={{ delay: 2500, disableOnInteraction: true }}
    >
        {produitsFiltres.length > 0 ? (
          produitsFiltres.map((produit) => (
            <AOSProvider options={{duration:3000, once:true}}>
                  <SwiperSlide key={`${produit.id}-${produit.nom}`}>
                    <div data-aos="flip-left" data-aos-delay="400" className="bg-white w-72 min-h-100 max-h-100 gap-3 m-2 overflow-hidden rounded-md shadow-md flex flex-col px-4 py-2 hover:translate-x-0 hover:translate-y-10 hover:duration-500">
                      <div className="w-52 min-h-52 max-h-52 overflow-hidden">
                        <Link to="/a_propos">
                          <img
                            className="p-8 rounded-t-lg overflow-hidden"
                            src={`${produit.imageProduit}`}
                            alt={`${produit.nom}`}
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <h5 className="text-font-semibold text-neutral-800">
                          {produit.description}
                        </h5>
                        <div className="flex gap-2 items-center justify-center">
                          <span className="bg-lime-100 text-lime-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {produit.etoile}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900">
                          ${produit.price}
                        </span>
                        <Link
                          to=""
                          className="text-white bg-lime-700 hover:bg-lime-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
            </AOSProvider>
           
          ))
        ) : (
          <p className="text-center py-4">Aucun produit dans cette catégorie</p>
        )}

        {/* Boutons de navigation */}
        <BouttonSwiperSlide />
      </Swiper>
  )
}
