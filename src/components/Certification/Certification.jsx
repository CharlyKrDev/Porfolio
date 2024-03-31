import React from 'react'
import { certificadoIt } from '../../data/certification'
import { CertificationLine } from './CertificationLine'
import { PiStudentBold } from "react-icons/pi";

export const Certification = () => {

    const certificados = [...certificadoIt];

  return (
    <main  id="certification" className="sm:w-[90%] w-[100%] h-auto p-2 flex flex-col">
                <h2 className='sm:text-4xl text-3xl flex gap-2'>  <PiStudentBold /> Certificados</h2>
        {certificados.map((certificado, id) =>(<CertificationLine certificado ={certificado} key={id}/>))}

        </main>
    )
}
