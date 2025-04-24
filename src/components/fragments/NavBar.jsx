import React from 'react'
import CardLogo from './CardLogo'
import Menu from './Menu'
import Button from './Button'

export default function NavBar() {

  // state 

  const titleButton = "Connxeion"

  // comportement 

  // affichage 
  return (
    // la zone navbar qui contient l ensemble Logo & Menu 
    <div className='w-full px-10 py-5 flex justify-between items-center'>
     {/* zone de la boite du logo  */}
    <CardLogo/>
    {/* zone de la boite du menu  */}
    <Menu/>
    <Button title={titleButton} />
    </div>
  )
}
