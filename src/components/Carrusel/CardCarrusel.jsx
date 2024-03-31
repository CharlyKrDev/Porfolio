import React from 'react'
import "../../styles/carruselStyles.css";




export const CardCarrusel = ({logo}) => 
{
  return (
    

    <main className='flex-shrink-0 opacity-70 hover:scale-[110%] transition-all ease-in-out duration-100'>
        <header><h2 className='text-center mb-2 font-bold text-xs'>{logo.title}</h2></header>
        <picture><img className='size-12 mx-6 my-2 object-contain ' src={`src/assets/img/carrusel/${logo.id}.png`} alt={`${logo.title}`} title={`${logo.title}`} />
        </picture>
        
    </main>
  )
}
