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
import { FaFlagUsa } from "react-icons/fa";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setTimeout(() => {
      setShowMenu(false);
    }, 2500);
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-[100px] overflow-hidden bg-[#242424] hover:w-[200px] hover:overflow-visible transition-all duration-300 borderRight">
      <img className="sm:h-auto h-28 m-auto" src={Logo} alt="logo" />
      <main className="h-[50%]">
        <ul>
          <li className="listNav outline-0">
            <a className="groupLink" href="">
              <i className="navIcon justify-center">
                <IoHomeOutline />
              </i>
              <span className="navText">About me</span>
            </a>
          </li>
          <li className="listNav outline-0">
            <a className="groupLink" href="">
              <i className="navIcon">
                <FaCode />
              </i>
              <span className="navText">Proyects</span>
            </a>
          </li>
          <li className="listNav outline-0">
            <a className="groupLink" href="">
              <i className="navIcon">
                <SiHtmlacademy />
              </i>
              <span className="navText">Certification</span>
            </a>
          </li>
          <li className="listNav outline-0">
            <a className="groupLink" href="">
              <i className="navIcon mt-4">
                <IoDocumentTextOutline />
              </i>
              <span className="navText">Work experience</span>
            </a>
          </li>
          <li className="listNav outline-0">
            <a className="groupLink" href="">
              <i className="navIcon">
                <IoMailOpenOutline />
              </i>
              <span className="navText">Contact</span>
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <ul>
          <li className="listNav outline-0 relative">
            <a
              className="groupLink cursor-pointer"
              href="#"
              onClick={toggleMenu}
            >
              <i className="navIcon">
                <IoSettingsOutline />
              </i>
              <span className="navText">Idioms</span>
            </a>
            <ul
              className={`absolute top-full left-0 mt-2 bg-gray-400 shadow-md rounded-md ${
                showMenu ? "" : "hidden"
              } ml-6`}
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-md"
                >
                  <FaFlagUsa />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-md"
                >
                  <FaFlagUsa />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-md"
                >
                  <FaFlagUsa />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </nav>
  );
};
