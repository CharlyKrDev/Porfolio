import React, { useState } from "react";
import "../../styles/NavBar.css";
import Logo from "../../assets/img/layout/LogoWeb2.png";
import {
  IoHomeOutline,
  IoDocumentTextOutline,
  IoMailOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setTimeout(() => {
      setShowMenu(false);
    }, 3000);
  };

  return (
    <nav className="fixed top-0 left-0 h-[100%] w-[100px] sm:w-[120px] bg-[#24242466] transition-all duration-300 borderRight">
      <img className="h-auto size-50 m-auto opacity-90" src={Logo} alt="logo" />
      <main className="h-[47%]">
        <ul className="gap-4">
          <li className="listNav" title="About me" onClick={()=>{window.scroll(0, 0)}}>
            <a className="groupLink" href="#AboutMe">
            <i className="navIcon mr-10">
                <IoHomeOutline />
              </i>
            </a>
          </li>
          <li className="listNav outline-0" title="Projects">
            <a className="groupLink" href="#Projects">
              <i className="navIcon mr-10">
                <FaCode />
              </i>
            </a>
          </li>
          <li className="listNav outline-0" title="Certification">
            <a className="groupLink" href="#certification">
            <i className="navIcon mr-10">
              <PiStudentBold />
              </i>
            </a>
          </li>
          <li className="listNav outline-0" title="Work Experience">
            <a className="groupLink" href="">
            <i className="navIcon mr-10">
                <IoDocumentTextOutline />
              </i>
            </a>
          </li>
          <li className="listNav outline-0" title="Work Together">
            <a className="groupLink" href="">
            <i className="navIcon mr-10">
                <IoMailOpenOutline />
              </i>
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
              <i className="navIcon mr-10" title="Language">
                <IoSettingsOutline />
              </i>
            </a>
            <ul
              className={`absolute bottom-full mb-4 bg-[black]  rounded-md ${
                showMenu ? "" : "hidden"
              } ml-6`}
            >
              <li>
                <a
                  href="#"
                  className="flags"
                >
                  <span role="img" aria-label="English"  title="English">
                  🇺🇸
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flags"
                >
                  <span role="img" aria-label="Spanish"  title="Spanish">
                    &#x1F1EA;&#x1F1F8;
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flags"
                >
                  <span role="img" aria-label="Italian"  title="Italian">
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
