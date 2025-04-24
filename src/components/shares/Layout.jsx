import React from 'react'
import Home from '../fragments/Home'
import Footer from './Footer'
import Product from '../fragments/Product'
import AllCategorie from '../fragments/AllCategorie'
import Propos from '../fragments/Propos'
import Service from '../fragments/Service'
// import Header from './Header'


// function d acces au component Layout 
export default function Layout() { 
    // contenu retourn dans la vue 
  return (
    // la boite div qui wrappe l ensemble composants jsx dans la page 
    <div>
        {/* la zone entête home accueil de notre page fournir par le composant jsx <Home/> */}
        <Home/>

        {/* zone all categorie  */}
          <AllCategorie/>

        {/* zone liste des categories & produits  */}
        <Product/>

        {/* zone a propos  */}
        <Propos/>

        {/* zone services  */}
        <Service/>

        {/* la zone pied de page footer de notre page fournir par le composant jsx <Footer/> */}
        <Footer/>
    </div>
  )
}
