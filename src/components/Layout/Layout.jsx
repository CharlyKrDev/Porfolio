import { NavBar } from "/src/components/NavBar/NavBar";
import { Home } from "../Home/Home";
import { Certification } from "../Certification/Certification";
import { Projects } from "../Projects/Projects";
import { FaCode } from "react-icons/fa6";
import { FormContact } from "../FormContact/FormContact";
import { IoMailOpenOutline } from "react-icons/io5";
import { Footer } from "../Footer/Footer";
import { AboutMe } from "../AboutMe/AboutMe";
import { BsPersonCircle } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import {useTranslation} from 'react-i18next'


export const Layout = () => {
  const {t} = useTranslation()

  const h2Layout =
    "sm:text-4xl text-xl text-left flex gap-2 items-center mb-20 ml-5 sm:ml-0 mt-4";
  return (
    <main className="grid grid-cols-10 ">
      <nav className=" w-[50px] sm:w-[120px] z-10 h-auto row-span-6  ">
        <NavBar />
      </nav>
      <section className="min-h-screen ml-12 sm:ml-40  col-star-2 col-span-9 m-auto w-[80%]">
        <Home />
      </section>
      <section
        id="Projects"
        className="min-h-screen ml-12 sm:ml-40  col-star-2 col-span-9 sm:mt-8 mt-0 m-auto w-[80%]">{" "}<h2 className={`${h2Layout}`}>
          {" "}
          <FaCode /> {t('layout.projects')}
        </h2>
        <Projects />
      </section>
      <section id="certification"         className="min-h-screen ml-12 sm:ml-40  col-star-2 col-span-9 mt-8 m-auto w-[80%]"
>
        <h2 className={`${h2Layout}`}><i className="sm:text-4xl text-2xl"><PiStudentBold /></i> {t('layout.certification')}
        </h2>

        <Certification />
      </section>
      <section
        id="aboutMe"
        className="min-h-screen ml-12 sm:ml-40  col-star-2 col-span-9 mt-8 m-auto w-[80%]"
      >
        <h2 className={`${h2Layout}`}>
          {" "}
          <BsPersonCircle />
          {t('layout.aboutme')}
        </h2>
        <AboutMe />
      </section>
      <section
        className="h-auto ml-12 sm:ml-40 col-star-2 col-span-9 mt-8 m-auto w-[80%]"
        id="contact"
      >
        <h2 className={`${h2Layout}`}>
          <IoMailOpenOutline />
          {t('layout.contact')}
        </h2>
        <FormContact />
        <Footer />

      </section>
    </main>
  );
};
