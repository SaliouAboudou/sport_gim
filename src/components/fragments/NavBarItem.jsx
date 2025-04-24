import React from 'react'
import AOSProvider from './AOSProvider';

export default function NavBarItem({item}) {

  // affichage 
  return (
    // <AOSProvider options={{duration: 300, once:true}}>
        <li  className='font-semibold hover:text-white hover:bg-lime-800 hover:rounded-md hover:p-2 duration-300' key={item.id}>
            <a href={item.path}>{item.listName}</a>
        </li>
    // </AOSProvider>
  );
}
