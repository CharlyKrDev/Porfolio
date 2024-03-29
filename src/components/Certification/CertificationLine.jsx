import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiDiploma } from "react-icons/gi";

export const CertificationLine = ({ certificado, id }) => {
  const backColor = certificado.id % 2 === 0 ? "rgba(255, 255, 255)" : "rgba(0, 0, 0, 0.9)";
  const backColorIcon = certificado.id % 2 === 0 ? "rgba(0, 0, 0, 0.9)"  : "rgba(255, 255, 255)";


  return (
    <VerticalTimeline lineColor={"rgba(255, 255, 255, 0.6)"} className="w-[50%]">
      <VerticalTimelineElement
        key={id}
        className={
          certificado.id % 2 === 0
            ? "vertical-timeline-element--work vertical-timeline-element--left"
            : "vertical-timeline-element--work vertical-timeline-element--right"
        }
        contentStyle={{
          background: "rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 0.6)",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={<span style={{ margin: "10px" }}>{certificado.date}</span>}
        iconStyle={{
          background: `${backColor}`,
          color: `${backColorIcon}`,
          
          
        }}
        icon={<GiDiploma/>}
        >
        <img
          className="bg-red-400  cursor-pointer transition-all ease-in-out duration-500 transform active:scale-[200%] border-2"
          src={`src/assets/img/certifications/${certificado.id}.png`}
          alt={`${certificado.title}`}
        />
        <h3 className="my-2 text-2xl font-semibold vertical-timeline-element-title">{`${certificado.title}`}</h3>
        <h4 className="vertical-timeline-element-subtitle">{`${certificado.institution}`}</h4>
        <p>
         {`${certificado.description}`}
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
