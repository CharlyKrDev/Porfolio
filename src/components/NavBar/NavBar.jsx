import React, { useState } from "react";
import "../../styles/NavBar.css";
import Logo from "../../assets/img/LogoWeb2.png";
import {
  IoHomeOutline,
  IoDocumentTextOutline,
  IoMailOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { SiHtmlacademy } from "react-icons/si";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setTimeout(() => {
      setShowMenu(false);
    }, 2500);
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-[100px] overflow-hidden bg-[#24242466] sm:hover:w-[190px]  sm:hover:overflow-visible md:hover:overflow-hidden md:overflow-hidden  transition-all duration-300 borderRight z-10">
      <img className="h-auto min-h-28 max-h-28 m-auto opacity-90" src={Logo} alt="logo" />
      <main className="h-[47%]">
        <ul className="gap-4">
          <li className="listNav outline-0" title="About me">
            <a className="groupLink" href="">
              <i className="navIcon justify-center">
                <IoHomeOutline />
              </i>
              <span className="navText">About me</span>
            </a>
          </li>
          <li className="listNav outline-0" title="Proyects">
            <a className="groupLink" href="#proyects">
              <i className="navIcon">
                <FaCode />
              </i>
              <span className="navText">Proyects</span>
            </a>
          </li>
          <li className="listNav outline-0" title="Certification">
            <a className="groupLink" href="#certification">
              <i className="navIcon">
                <SiHtmlacademy />
              </i>
              <span className="navText">Certification</span>
            </a>
          </li>
          <li className="listNav outline-0" title="Work Experience">
            <a className="groupLink" href="">
              <i className="navIcon mt-4">
                <IoDocumentTextOutline />
              </i>
              <span className="navText">Work Experience</span>
            </a>
          </li>
          <li className="listNav outline-0" title="Work Together">
            <a className="groupLink" href="">
            <i className="navIcon mt-4">
                <IoMailOpenOutline />
              </i>
              <span className="navText">Work Together!</span>
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <ul className="pt-20">
          <li className="listNav relative">
            <a
              className="groupLink cursor-pointer"
              href="#"
              onClick={toggleMenu}
            >
              <i className="navIcon" title="Language">
                <IoSettingsOutline />
              </i>
              <span className="navText">Language</span>
            </a>
            <ul
              className={`absolute bottom-full mb-4 bg-gray-400 shadow-md rounded-md ${
                showMenu ? "" : "hidden"
              } ml-6`}
            >
              <li>
                <a
                  href="#"
                  className="flags"
                >
                  <span role="img" aria-label="English">
                    &#x1F1EA;&#x1F1F3;
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flags"
                >
                  <span role="img" aria-label="Spanish">
                    &#x1F1EA;&#x1F1F8;
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flags"
                >
                  <span role="img" aria-label="Italian">
                    &#x1F1EE;&#x1F1F9;
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </nav>
  );
};
