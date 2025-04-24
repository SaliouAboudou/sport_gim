import React from 'react'
import { useSwiper } from 'swiper/react'


export default function BouttonSwiperSlide() {
    // state 
    const swiper = useSwiper()

  return (
    <div className="swiper-next-btn flex justify-end mx-5">
      <button className=" bg-lime-800 rounded-full border border-lime-200 px-4 m-1 text-white hover:bg-lime-700 " onClick={() => swiper.slidePrev()}>Prev</button>
      <button className=" bg-lime-800 rounded-full border border-lime-200 px-4 m-1 text-white hover:bg-lime-700 " onClick={() => swiper.slideNext()}>Next</button>
    </div>
  )
}
