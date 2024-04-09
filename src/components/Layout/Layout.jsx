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
    "sm:text-4xl text-3xl text-left flex gap-2 items-center mb-20";
  return (
    <main className="grid grid-cols-10">
      <nav className=" w-[100px] sm:w-[120px] z-10 h-auto row-span-6  ">
        <NavBar />
      </nav>
      <section className="min-h-screen ml-12  col-star-2 col-span-9 m-auto w-[90%] ">
        <Home />
      </section>
      <section
        id="Projects"
        className="min-h-screen ml-12  col-star-2 col-span-9 p-2 m-auto w-[90%]">{" "}<h2 className={`${h2Layout} ml-2`}>
          {" "}
          <FaCode /> {t('layout.projects')}
        </h2>
        <Projects />
      </section>
      <section id="certification" className="min-h-screen col-star-2 col-span-9 m-auto w-[90%] ">
        <h2 className={`${h2Layout} ml-14 sm:ml-0`}><i className="sm:text-4xl text-3xl"><PiStudentBold /></i> {t('layout.certification')}
        </h2>

        <Certification />
      </section>
      <section
        id="aboutMe"
        className="min-h-screen ml-12 col-star-2 col-span-9 m-auto w-[90%] mb-8"
      >
        <h2 className={`${h2Layout} ml-5 sm:ml-2`}>
          {" "}
          <BsPersonCircle />
          {t('layout.aboutme')}
        </h2>
        <AboutMe />
      </section>
      <section
        className="h-auto pb-2 sm:ml-12 ml-16  col-star-2 col-span-9 flex flex-col justify-center m-auto w-[80%] sm:w-[90%] "
        id="contact"
      >
        <h2 className={`${h2Layout} sm:ml-2`}>
          <IoMailOpenOutline />
          {t('layout.contact')}
        </h2>
        <FormContact />
        <Footer />

      </section>
    </main>
  );
};
