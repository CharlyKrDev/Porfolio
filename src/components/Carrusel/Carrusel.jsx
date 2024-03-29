import React from "react";
import { CardCarrusel } from "./CardCarrusel";
import { logosApps } from "../../data/carrusel";


export const Carrusel = () => {
  const logos = [...logosApps, ...logosApps];

  return (
    <>
      <main className="container max-w-[70%] flex justify-end items-center mt-2 text-white">
        <section className="w-full overflow-hidden">
          <div className="flex whitespace-nowrap animateScroll">
            {logos.map((logo, index) => (
              <CardCarrusel logo={logo} key={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
