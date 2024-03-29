import { NavBar } from "/src/components/NavBar/NavBar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Certification } from "../Certification/Certification";
import { Proyects } from "../Proyects/Proyects";


export const LandingPage = () => {
  return (
    <main className="grid grid-cols-10 w-[100%]">
      <nav className="min-w-[100px] h-auto bg-teal-400 row-span-6  "><NavBar/></nav>
      <section className="min-h-screen  col-star-2 col-span-9 "><AboutMe/></section>
      <section className="min-w-[50px] bg-yellow-400 col-star-2 col-span-9"><Proyects/></section>
      <section className="min-h-screen bg-red-400 col-star-2 col-span-9"><Certification/></section>
      <section className="min-w-[50px] bg-blue-400 col-star-2 col-span-9 ">Experiencia</section>
      <section className="min-w-[50px] bg-sky-400 col-star-2 col-span-9">Sobre mi</section>
      <section className="min-w-[50px] bg-pink-400 col-star-2 col-span-9">Contacto</section>
    </main>
  );
};
