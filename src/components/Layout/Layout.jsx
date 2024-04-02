import { NavBar } from "/src/components/NavBar/NavBar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Certification } from "../Certification/Certification";
import { Projects } from "../Projects/Projects";
import { FaCode } from "react-icons/fa6";


export const Layout = () => {
  return (
    <main className="grid grid-cols-10">
      <nav className=" w-[100px] sm:w-[120px] z-10 h-auto row-span-6  ">
        <NavBar />
      </nav>
      <section className="min-h-screen ml-12  col-star-2 col-span-9 ">
        <AboutMe />
      </section>
      <section id='Projects' className="min-h-screen ml-12  col-star-2 col-span-9 p-2">
        {" "}
        <h2 className="sm:text-4xl text-3xl text-left flex gap-2 items-center mb-2 ml-2 ">
          {" "}
          <FaCode /> Proyectos
        </h2>

        <Projects />
      </section>
      <section className="min-h-screen ml-12  col-star-2 col-span-9">
        <Certification />
      </section>
      <section className="min-h-screen ml-12 bg-blue-400 col-star-2 col-span-9 ">
        {" "}
        <main className="sm:w-[80%] w-[100%] h-screen bg-sky-200 flex justify-center items-center">
          Experiencia
        </main>
      </section>
      <section className="min-h-screen ml-12 bg-sky-400 col-star-2 col-span-9">
        Sobre mi
      </section>
      <section className="min-h-screen ml-12 bg-pink-400 col-star-2 col-span-9">
        Contacto
      </section>
    </main>
  );
};
