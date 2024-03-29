import React from 'react'
import { certificadoIt } from '../../data/certification'
import { CertificationLine } from './CertificationLine'
import { PiStudentBold } from "react-icons/pi";

export const Certification = () => {

    const certificados = [...certificadoIt];

  return (
    <main  id="certification" className="w-[80%] h-auto flex flex-col justify-center items-center m-auto">
                <h2 className='text-4xl text-left w-full flex gap-2 items-center'>  <PiStudentBold /> Certificados</h2>
        {certificados.map((certificado, id) =>(<CertificationLine certificado ={certificado} key={id}/>))}

        </main>
    )
}
