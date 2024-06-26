import React from "react";
import "../../styles/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import FotoPerfil from "../../assets/img/layout/PerfilLinkedin.png";
import { Carrusel } from "../Carrusel/Carrusel";
import { NavLink } from "react-router-dom";
import CV from "../../data/CV/Carlos_Kaar_CV_ES-EN-IT.pdf";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="w-[100%] h-auto flex justify-center items-center m-auto mt-10 sm:mt-20">
        <section className=" flex justify-center items-center max-w-[90%]  h-[70%]  flex-col">
          <div className="w-full h-auto flex  ml-0  sm:ml-64">
            <article className="w-[60%] h-auto flex flex-col">
              <h1 className="text-xl sm:text-4xl mt-10 m-2 font-bold">
                {t("home.h1")}{" "}
                <span className="text-blue-500">Carlos Alberto Kaar</span>
              </h1>
              <p className="text-wrap mb:4 sm:mb-20 text-sm sm:text-2xl m-2 mt-10">
                <strong className="text-[#33fd2c]/70">
                  {t("home.pStrong")} <br />
                </strong>
                {t("home.p")} <span>Front-End,</span> {t("home.p2")}
                <span>Back-End. </span>
                <strong className="text-[#b458eef8]">
                  {t("home.pStrong2")}
                </strong>
              </p>
            </article>
            <div className="w-[40%]  h-[70%] max-h-[30vh]">
              <img
                className="mt-14 aspect-square flex m-auto rounded-full border-2 border-[#00fcfc]/70 opacity-95 sm:h-auto h-20 max-h-60 ml-4"
                src={FotoPerfil}
                alt="FotoPerfil"
              />
            </div>
          </div>
          <nav className="w-[95%] sm:ml-64">
            <section className="flex gap-2 sm:gap-8 text-[10px] sm:text-[14px] flex-wrap">
              <NavLink
                to={"https://www.linkedin.com/in/carlos-alberto-kaar/"}
                target="blank"
              >
                <div>
                  <button className="socialIcon flex justify-center items-center gap-2">
                    <FaLinkedin />
                    Linkedin
                  </button>
                </div>
              </NavLink>

              <NavLink to={"https://github.com/CharlyKrDev"} target="blank">
                <div>
                  <button className="socialIcon flex justify-center items-center gap-2">
                    {" "}
                    <FaGithub />
                    GitHub
                  </button>
                </div>
              </NavLink>

              <div>
                <a
                  className="socialIcon flex justify-center items-center gap-2"
                  href={CV}
                  download="Carlos_Kaar_CV_ES-EN-IT.pdf"
                  target="_blank"
                >
                  <FaFileDownload /> Curriculum
                </a>
              </div>
            </section>
          </nav>
          <section className="h-auto max-w-[70vw]">
            <div className="sm:my-12 flex justify-center items-center ">
              <Carrusel />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
