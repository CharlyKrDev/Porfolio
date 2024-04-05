import { NavBar } from "/src/components/NavBar/NavBar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Certification } from "../Certification/Certification";
import { Projects } from "../Projects/Projects";
import { FaCode } from "react-icons/fa6";
import { FormContact } from "../FormContact/FormContact";
import { IoMailOpenOutline } from "react-icons/io5";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <main className="grid grid-cols-10">
      <nav className=" w-[100px] sm:w-[120px] z-10 h-auto row-span-6  ">
        <NavBar />
      </nav>
      <section className="min-h-screen ml-12  col-star-2 col-span-9 m-auto w-[90%] ">
        <AboutMe />
      </section>
      <section
        id="Projects"
        className="min-h-screen ml-12  col-star-2 col-span-9 p-2 m-auto w-[90%] "
      >
        {" "}
        <h2 className="sm:text-4xl text-3xl text-left flex gap-2 items-center mb-2 ml-2 ">
          {" "}
          <FaCode /> Proyectos
        </h2>
        <Projects />
      </section>
      <section className="min-h-screen ml-12  col-star-2 col-span-9 m-auto w-[90%] ">
        <Certification />
      </section>
      <section className="min-h-screen ml-12 bg-sky-400 col-star-2 col-span-9 m-auto w-[90%]">
        Sobre mi
      </section>
      <section
        className="h-auto pb-2 ml-12  col-star-2 col-span-9 flex flex-col justify-center m-auto w-[90%] "
        id="contact"
      >
        <h2 className="sm:text-4xl text-3xl text-left flex gap-2 items-center mb-2 ml-2 ">
          <IoMailOpenOutline />
          Contacto
        </h2>
        <FormContact />
      </section>
      <section className=" h-auto pb-2 ml-12 min-h-[50px]  col-star-2 col-span-9 flex flex-col justify-center  m-auto w-[90%] ">
         <Footer/>
        </section>
    </main>
  );
};
