import React, { useState } from "react";
// import "../../styles/NavBar.css";
import Logo from "../../assets/img/layout/LogoWeb2.png";
import {
  IoHomeOutline,
  IoMailOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const iconsStyle = `m-auto text-2xl hover:text-[#00fcfc] transition-all active:scale-90 ease-in-out duration-2`;
  const flagsStyle = `px-[10px] py-[8px] transition-all ease-in-out duration-2 active:scale-90 hover:text-white hover:scale-200`;
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav
      onMouseLeave={closeMenu}
      className="fixed top-0 left-0 h-[100%] w-[50px] sm:w-[120px] bg-[#24242466] transition-all duration-300 border-r-2 border-[#00fcfc72]"
    >
      <img
        onClick={() => {
          window.scroll(0, 0);
        }}
        className="h-auto size-50 m-auto opacity-90 cursor-pointer"
        src={Logo}
        alt="logo"
      />
      <main className="h-[47%] w-[100%] mb-20">
        <ul className="flex flex-col justify-center gap-8  w-[100%] mt-8">
          <li
            className={iconsStyle}
            title={t("navBar.home")}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <a  href="#home" >
              <i className="navIcon ">
                <IoHomeOutline />
              </i>
            </a>
          </li>
          <li className={iconsStyle} title={t("navBar.projects")}>
            <a  href="#Projects">
              <i className="navIcon ">
                <FaCode />
              </i>
            </a>
          </li>
          <li className={iconsStyle} title={t("navBar.certification")}>
            <a  href="#certification">
              <i className="navIcon ">
                <PiStudentBold />
              </i>
            </a>
          </li>
          <li className={iconsStyle} title={t("navBar.aboutme")}>
            <a  href="#aboutMe">
              <i className="navIcon ">
                <BsPersonCircle />
              </i>
            </a>
          </li>
          <li className={iconsStyle} title={t("navBar.contact")}>
            <a  href="#contact">
              <i className="m-auto ">
                <IoMailOpenOutline />
              </i>
            </a>
          </li>
        </ul>
      </main>
      <footer className="flex justify-center">
        <ul >
          <li className={`relative`}>
            <a
              onMouseEnter={toggleMenu}
              className={`cursor-pointer ${iconsStyle}`}
              title={t("navBar.language")}
            >
              <IoSettingsOutline />
            </a>
            <ul
              onMouseLeave={closeMenu}
              className={`absolute bottom-full mb-4 bg-[black]/70 rounded-md ${
                showMenu ? "" : "hidden"
              } ml-6`}
            >
              <li onClick={() => { changeLanguage("en"); toggleMenu(); }}>
                <button
                  className={flagsStyle}
                  role="img"
                  aria-label="English"
                  title={t("navBar.english")}
                >
                  🇺🇸
                </button>
              </li>
              <li onClick={() => { changeLanguage("es"); toggleMenu(); }}>
                <button
                  className={flagsStyle}
                  role="img"
                  aria-label="Spanish"
                  title={t("navBar.spanish")}
                >
                  &#x1F1EA;&#x1F1F8;
                </button>
              </li>
              <li onClick={() => { changeLanguage("it"); toggleMenu(); }}>
                <button
                  className={flagsStyle}
                  role="img"
                  aria-label="Italian"
                  title={t("navBar.italian")}
                >
                  &#x1F1EE;&#x1F1F9;
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </nav>
  );
};
