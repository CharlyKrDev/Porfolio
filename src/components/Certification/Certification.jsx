import React from 'react'
import { certificadoIt } from '../../data/certification'
import { CertificationLine } from './CertificationLine'

export const Certification = () => {

    const certificados = [...certificadoIt];

  return (
    <main  className="w-[100%] h-auto p-2 flex flex-col">
        {certificados.map((certificado, id) =>(<CertificationLine certificado ={certificado} key={id}/>))}

        </main>
    )
}
