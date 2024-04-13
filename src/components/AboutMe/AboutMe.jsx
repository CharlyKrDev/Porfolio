import Arg from "../../assets/img/icons/Flag_of_Argentina.svg";
import Ita from "../../assets/img/icons/Flag_of_Italy.svg.png";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();

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
          <h2 className={h2AboutMe}>{t("aboutme.cupmH2")}</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              <img className="size-8 m-2 opacity-70" src={Arg} alt="" />
              <p> {t("aboutme.cupmP1")} </p>
            </li>
            <li className={liAboutMe}>
              <img className="size-8 m-2 opacity-70" src={Ita} alt="" />
              <p> {t("aboutme.cupmP2")}</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F4BB;</span>
              <p>{t("aboutme.cupmP3")}</p>
            </li>
            <li className={liAboutMe}>
              <span className={`${spanAboutMe}`}>&#x1F355;</span>
              <p>{t("aboutme.cupmP4")} </p>
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
              <p>{t("hobbies.hobP1")}</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}> &#x1F6B4;</span>
              <p>{t("hobbies.hobP2")}</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F4D6;</span>{" "}
              <p> {t("hobbies.hobP3")}</p>
            </li>
            <li className={liAboutMe}></li>
          </ul>
        </section>
        <section className={sectionAboutMe}>
          <h2 className={h2AboutMe}>{t("skills.skillsH2")}</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F5FA; </span>{" "}
              <p>{t("skills.skillsP2")}</p>{" "}
            </li>
            <li className={liAboutMe}>
              <span className={`${spanAboutMe}`}>&#x23F3;</span>{" "}
              <p>{t("skills.skillsP3")}</p>
            </li>
            <li className={liAboutMe}>
              {" "}
              <span className={`${spanAboutMe}`}>&#x1F91D;</span>{" "}
              <p className="">{t("skills.skillsP4")}</p>{" "}
            </li>
            <li className={liAboutMe}></li>
          </ul>
        </section>
        <section className={sectionAboutMe}>
          <h2 className={h2AboutMe}>{t("objectives.objH2")}</h2>
          <ul className={ulAboutMe}>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x2328;</span>
              <p className=''>{t("objectives.objP1")}</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x2705;</span>
              <p>{t("objectives.objP2")}</p>

            </li>
            <li className={liAboutMe}>
              <span className="text-4xl">&#x1F4A1;</span>
              <p>{t("objectives.objP3")}</p>
            </li>
            <li className={liAboutMe}>
              <span className={spanAboutMe}>&#x1F601;</span>
              <p className="mb-1">{t("objectives.objP4")}</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
