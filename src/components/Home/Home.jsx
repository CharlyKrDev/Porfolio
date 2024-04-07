import React from "react";
import "../../styles/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import FotoPerfil from "../../assets/img/layout/PerfilLinkedin.png";
import { Carrusel } from "../Carrusel/Carrusel";
import { NavLink } from "react-router-dom";
import CV from '../../data/CV/CV_Carlos_Kaar_ES.pdf'

export const Home = () => {
  return (
    <>
      <main className="w-[80%] h-auto flex justify-center items-center m-auto mt-20 ">
        <section className=" flex justify-center items-center max-[90%]  h-[70%]  flex-col">
          <div className="w-full  h-auto flex ml-4">
            <article className="w-[60%] ml-2 h-auto flex flex-col">
              <h1 className="text-4xl mt-10 m-2 font-bold">
                ¡Hola! Soy {" "} 
                <span className="text-[#4661f8]/70">
                  Carlos Alberto Kaaar
                </span>
              </h1>
              <p className="text-wrap mb-20 text-2xl m-2 mt-10">
                <strong className="text-[#33fd2c]/70">
                  Un apasionado por el desarrollado de aplicaciones web. <br />
                </strong>
                 Mi enfoque principal es el <span>Front-End,</span> aunque también estoy
                profundizando mis conocimientos en el <span>Back-End. </span>
                <strong className="text-[#d38aff]/70">
                  Siempre en busca de nuevos desafíos y oportunidades para
                  seguir innovando.
                </strong>
              </p>
            </article>
            <div className="w-[40%]  h-[70%] max-h-[30vh]">
              <img
                className="mt-14 aspect-square flex m-auto rounded-full border-2 border-[#00fcfc]/70 opacity-95 sm:h-auto h-20 max-h-60 ml-8"
                src={FotoPerfil}
                alt="FotoPerfil"
              />
            </div>
          </div>
          <nav className="w-[95%] mr-4 ">
            <ul className="flex gap-2 sm:gap-8 text-[12px] sm:text-[14px]">
            <NavLink to={'https://www.linkedin.com/in/carlos-alberto-kaar/'} target="blank">
            <li>
                <button className="socialIcon flex justify-center items-center gap-2">
                  <FaLinkedin />
                  Linkedin
                </button>
              </li>
            </NavLink>

        <NavLink to={'https://github.com/CharlyKrDev'} target="blank">

        <li>
                <button className="socialIcon flex justify-center items-center gap-2">
                  {" "}
                  <FaGithub />
                  GitHub
                </button>
              </li>

        </NavLink>

        
        <li>
          <a className="socialIcon flex justify-center items-center gap-2" href={CV} download="CV_Carlos_Kaar_ES.pdf" target="_blank">
                  <IoDocumentTextOutline />
                  Curriculum
          </a>
        </li>
          


            </ul>
          </nav>
          <footer className="h-auto max-w-[60vw] mt-4">
            <div className="my-12 flex justify-center items-center ">
              <Carrusel />
            </div>
          </footer>
        </section>
      </main>
    </>
  );
};
