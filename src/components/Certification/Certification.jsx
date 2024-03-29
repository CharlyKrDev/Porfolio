import React from 'react'
import { certificadoIt } from '../../data/certification'
import { CertificationLine } from './CertificationLine'

export const Certification = () => {

    const certificados = [...certificadoIt];

  return (
    <main className="w-[80%] h-screen flex justify-center items-center m-auto bg-pink-400 ">
        {certificados.map((certificado, id) =>(<CertificationLine certificado ={certificado} key={id}/>))}
        </main>
    )
}
