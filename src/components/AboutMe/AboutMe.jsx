import React from "react";
import "../../styles/AboutMe.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import FotoPerfil from "../../assets/img/PerfilLinkedin.png";
import { Carrusel } from "../Carrusel/Carrusel";

export const AboutMe = () => {
  return (
    <>
      <main className="max-w-[70%] m-auto h-screen  flex flex-col justify-center items-center sm:relative sm:left-32 absolute right-2">
        <section className="min-w-[50vw] flex  h-[70%]  flex-col">
          <div className="w-full  h-auto flex ml-2">
            <article className="w-[60%]  h-auto flex flex-col">
              <h1 className="text-4xl mt-10 m-2 font-bold">
                ¡Hola!{" "}
                <span className="text-[#7FDBFF]/70">
                  Soy Carlos Alberto Kaar
                </span>
              </h1>
              <p className="text-wrap mb-20 text-2xl m-2 mt-10">
                <strong className="text-[#33fd2c]/70">
                  Un apasionado desarrollador de aplicaciones web. <br />
                </strong>
                Actualmente resido en <span>Piacenza, Italia,</span> donde me
                encuentro inmerso en el mundo del desarrollo web. Mi enfoque
                principal es el <span>Front-End,</span> aunque también estoy
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
          <nav className="w-[60%] ">
            <ul className="flex gap-2 sm:gap-8  justify-center text-[10px] sm:text-[14px]">
              <li>
                <button className="socialIcon flex justify-center items-center gap-2">
                  <FaLinkedin />
                  Linkedin
                </button>
              </li>
              <li>
                <button className="socialIcon flex justify-center items-center gap-2">
                  {" "}
                  <FaGithub />
                  GitHub
                </button>
              </li>
              <li>
                <button className="socialIcon flex justify-center items-center gap-2">
                  <IoDocumentTextOutline />
                  Curriculum
                </button>
              </li>
            </ul>
          </nav>
          <footer className="h-auto max-w-[44vw] mt-4">
            <div className="my-12 flex justify-center items-center ">
              <Carrusel />
            </div>
          </footer>
        </section>
      </main>
    </>
  );
};
