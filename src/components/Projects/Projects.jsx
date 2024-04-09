import React from "react";
import { projects, getColSpan } from "../../data/projects";
import { RxVercelLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  const projectsCopy = [...projects];
  const projectClass = `h-auto flex flex-col text-center justify-center items-center w-[100%]`;
  const projectsButton =
    "min-w-20 flex items-center gap-2 border-[1px] p-1 px-2 rounded-full text-xs border-green-900 hover:bg-green-50 hover:text-black font-semibold active:scale-[90%] transition-all duration-300 easy-in-out";
  return (
    <main className="sm:w-[90%] w-[100%] min-h-screen p-4  flex justify-center items-center text-white/70">
      <section className="h-[100%] grid grid-cols-1 sm:grid-cols-8 gap-y-8 gap-x-3 w-[100%] p-4">
        {projectsCopy.map((project, index) => {
          if(project.img !==''){
            return(
            <section
            key={index}
            className={`${projectClass} ${getColSpan(
              index
            )}  `}
          >
            <div className="h-auto flex flex-col p-2 justify-center">
              {" "}
              <NavLink to={project.vercel} target="_blank">
                <img
                  className="h-[120px] sm:h-auto min-h-20 max-w-90 rounded-2xl border-2 border-green-900"
                  src={project.img}
                  alt={project.title}
                />
              </NavLink>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <h2 className="max-w-[90%] min-w-[50%]  sm:text-md text-sm">{project.title}</h2>
              {/* <p className="max-w-[90%] min-w-[50%]">{project.description}</p> */}
              <div className="flex gap-2 mt-3 flex-wrap justify-center">
                <NavLink to={project.github} target="_blank">
                  <button className={projectsButton}>
                    <FaGithub />
                    GitHub 
                  </button>
                </NavLink>
                <NavLink to={project.vercel} target="_blank">
                  <button className={projectsButton}>
                    <RxVercelLogo /> Vercel
                  </button>
                </NavLink>
              </div>
              <p className="my-2 flex flex-wrap items-center justify-center select-none">
                {project.technologies.map((technologies, index) => (
                  <span
                    className="max-mx-8 m-1  text-xs border-[1px] p-1 border-gray-100/70 rounded-md"
                    key={index}
                  >
                    {" "}
                    #{technologies.toUpperCase()}
                  </span>
                ))}
              </p>
            </div>
          </section>)
          }
        })}
      </section>
    </main>
  );
};
