import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiDiploma } from "react-icons/gi";
import { RiMedalLine } from "react-icons/ri";
import {useTranslation} from 'react-i18next'



export const CertificationLine = ({ certificado, id }) => {
  const backColor = certificado.id % 2 === 0 ? "rgba(255, 255, 255)" : "rgba(0, 0, 0, 0.9)";
  const backColorIcon = certificado.id % 2 === 0 ? "rgba(0, 0, 0, 0.9)"  : "rgba(255, 255, 255)";
  const topClass =`${certificado.top ? "flex items-center gap-2 text-[#FFD700] font-bold mb-1": "hidden"}`
  
  const {t} = useTranslation()



  return (
    <VerticalTimeline  lineColor={"rgba(255, 255, 255, 0.8)"} className="w-[100%] sm:w-[50%]">
      <VerticalTimelineElement
        key={id}
        className={
          certificado.id % 2 === 0
            ? "vertical-timeline-element--work vertical-timeline-element--left"
            : "vertical-timeline-element--work vertical-timeline-element--right"
        }
        contentStyle={{
          background: "rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 0.8)",
          minWidth: "200px",
        }}
        contentArrowStyle={{ borderRight: "" }}
        date={<span style={{ margin: "10px 10px 10px 0" }}>{t(certificado.date)}</span>}
        iconStyle={{
          background: `${backColor}`,
          color: `${backColorIcon}`,
          
          
        }}
        icon={<GiDiploma/>}
        >
        <div className="z-10 relative">
        <img
          className="h-200px cursor-pointer transition-all ease-in-out duration-500 transform active:scale-[150%] border-2"
          src={`${certificado.img}`}
          alt={t(certificado.title)}
        />
        <h3 className="my-2  text-xl sm:text-2xl font-semibold vertical-timeline-element-title">{t(certificado.title)}</h3><span className={topClass}> <RiMedalLine />TOP 10</span>
        <h4 className="vertical-timeline-element-subtitle text-lg sm:text-xl">{`${certificado.institution}`}</h4>
        <p>
        {t(certificado.description)}
        </p>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
