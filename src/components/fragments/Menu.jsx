import React from 'react'
import  DATA_LIST_NAVBAR  from '../services/dataList';
import NavBarItem from './NavBarItem';

export default function Menu() {

  // affichage 
  return (
    <div className='px-4'>
        <ul className=' flex gap-3 uppercase'>
             {/* parcourir et afficher la liste des items  */}
            {DATA_LIST_NAVBAR.map(item => (
            // composant reusable de navbar item 
           <NavBarItem key={item.id} item={item} />
        ))}
        </ul>
    </div>
  )
}
