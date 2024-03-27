import React from 'react'
import "../../styles/AboutMe.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import FotoPerfil from "../../assets/img/PerfilLinkedin.png";

export const AboutMe = () => {
  return (
    <>
    <main className='max-w-[70%] m-auto pt-28 h-screen  flex flex-col justify-center items-center sm:relative sm:left-20 absolute right-10'>
    <section className='min-w-[50vw] flex  h-[70%]  flex-col'>
       <div className='w-full  h-auto flex'>
        <article className='w-[60%]  h-auto flex flex-col'>
            <h1 className='text-4xl mt-10 m-2 font-bold'>Hola! <span>Soy Carlos Kaar</span></h1>
            <p className='text-wrap mb-20 text-2xl m-2 mt-10'><strong className='text-[#FFDC00]/70'>Un desarrollador de aplicaciones web.</strong> Estoy viviendo en <span>Piacenza, Italia.</span> Me especializo en <span>Front-End</span>, aunque actualmente estoy realizando la carrera de <span>Back-End.</span> <strong className='text-[#d38aff]/70'> En la búsqueda de nuevos desafíos y listo para seguir desarrollando ideas.</strong> </p>

        </article>
        <div className='w-[40%]  h-[70%]'>
        <img className='max-h-[30vh] aspect-square flex m-auto rounded-full border-2 border-[#00fcfc]/70 opacity-95' src={FotoPerfil} alt="" />
        </div>
  
       </div>
       <nav className='w-[60%] '>
        <ul className='flex gap-2 sm:gap-8  justify-center text-[9px] sm:text-[14px]' >
            <li>
                <button className='socialIcon flex justify-center items-center gap-2'><FaLinkedin />Linkedin</button>
            </li>
            <li>
            <button className='socialIcon flex justify-center items-center gap-2'> <FaGithub />GitHub</button>
                
            </li>
            <li>
            <button className='socialIcon flex justify-center items-center gap-2'><IoDocumentTextOutline />Curriculum</button>
            </li>
        </ul>
       </nav>
           <footer className='h-auto min-w-[50vw] bg-red-200 mt-2'>
            <div className='h-20 flex justify-center items-center text-black'>
            <h2>Carretel</h2>

            </div>
        
    </footer>


              
    </section>







    </main>

    </>
  )
}
