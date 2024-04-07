import Arg from "../../assets/img/icons/Flag_of_Argentina.svg";
import Ita from "../../assets/img/icons/Flag_of_Italy.svg.png";


export const AboutMe = () => {
  const sectionAboutMe =
    "flex  flex-col gap-2 border-2 border-[#33fd2c]/50 h-[100%] p-2 bg-[#ffffff0c] rounded-lg";
  const h2AboutMe = "text-xl text-[#b458eeb2] font-bold ml-2 my-4 min-h-[70px]";
  const ulAboutMe = "flex flex-col gap-4";
  const liAboutMe = "flex gap-2 items-center";
  const spanAboutMe = "text-4xl";
  return (
    <>
      <main className="w-[90%] text-[16px] h-auto p-2 m-auto justify-center items-center grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 gap-8">
        <section className={sectionAboutMe}>
          <h2 className={h2AboutMe}>Conóceme un poco mas</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              <img className="size-8 m-2 opacity-70" src={Arg} alt="" />
              <p>
                {" "}
                Soy argentino.
              </p>
            </li>
            <li className={liAboutMe}>
              <img className="size-8 m-2 opacity-70" src={Ita} alt="" />
              <p>
                {" "}
                Actualmente estoy viviendo en Piacenza, Italia.
              </p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F4BB;</span>
              <p>Soy Técnico orientado en telecomunicaciones.</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F355;</span>
              <p>Me gusta la pizza y pasar tiempo con mi familia.</p>
            </li>
            <li className={liAboutMe}></li>
          </ul>
        </section>
        <section className={sectionAboutMe}>
          <h2 className={h2AboutMe}>Hobbies</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              {" "}
              <span className={spanAboutMe}>&#x1F373;</span>{" "}
              <p>
                Me encanta cocinar, asi que estudie gastronomía como pasatiempo.
              </p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}> &#x1F6B4;</span>
              <p>
                Disfruto del aire libre, y me gusta realizar trekking y
                ciclismo.
              </p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F4D6;</span>{" "}
              <p>También me gusta leer y ver series.</p>
            </li>
            <li className={liAboutMe}></li>
          </ul>
        </section>
        <section className={sectionAboutMe}>
          <h2 className={h2AboutMe}>Habilidades</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F5FA; </span> Hablo español de
              forma nativa, ingles nivel B2 y estoy aprendiendo italiano A2-B1.{" "}
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x23F3;</span> Estoy familiarizado
              con las metodologías LEAN, AGILE y me estoy certificado en SCRUM.
            </li>
            <li className={liAboutMe}>
              {" "}
              <span className={spanAboutMe}>&#x1F91D;</span>{" "}
              <p>
                Me gusta, y estoy acostumbrado a trabajar en equipo. Soy
                proactivo. Y gracias a mi experiencia previa he desarrollado
                escucha activa, gestión de clientes y resolución de problemas.
              </p>{" "}
            </li>
            <li className={liAboutMe}></li>
          </ul>
        </section>
        <section className={sectionAboutMe}>
          <h2 className={h2AboutMe}>Objetivos</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x2328;</span>
              <p>
                Seguir desarrollándome como programador web FullStack, por tal motivo, actualmente estoy estudiando back-end no relacional.
              </p>
            </li>
            <li className={liAboutMe}>
            <span className={spanAboutMe} >&#x2705;</span>
              <p>
                Ser parte de un equipo de trabajo para y desarrollar proyectos
                de calidad que resuelvan una o varias necesidades.
              </p>
            </li>
            <li className={liAboutMe}>
            <span className='text-5xl' >&#x1F4A1;
              </span>
              <p>Seguir desarrollando mis ideas, y hacer posible las tuya.</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F601;</span>
              <p className="mb-1">Disfrutar de las posibilidades.</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
