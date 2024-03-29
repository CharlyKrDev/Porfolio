import { NavBar } from "/src/components/NavBar/NavBar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Certification } from "../Certification/Certification";
import { Proyects } from "../Proyects/Proyects";


export const Layout = () => {
  return (
    <main className="grid grid-cols-10 w-[100%]">
      <nav className=" w-[150px] z-10 h-auto bg-teal-400 row-span-6  "><NavBar/></nav>
      <section className="min-h-screen ml-12  col-star-2 col-span-9 "><AboutMe/></section>
      <section className="min-h-screen ml-12 bg-yellow-400 col-star-2 col-span-9"><Proyects/></section>
      <section className="min-h-screen ml-12  col-star-2 col-span-9"><Certification/></section>
      <section className="min-h-screen ml-12 bg-blue-400 col-star-2 col-span-9 ">Experiencia</section>
      <section className="min-h-screen ml-12 bg-sky-400 col-star-2 col-span-9">Sobre mi</section>
      <section className="min-h-screen ml-12 bg-pink-400 col-star-2 col-span-9">Contacto</section>
    </main>
  );
};
