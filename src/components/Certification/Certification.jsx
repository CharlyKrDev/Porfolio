import React from 'react'
import { certificadoIt } from '../../data/certification'
import { CertificationLine } from './CertificationLine'

export const Certification = () => {

    const certificados = [...certificadoIt];

  return (
    <>
            {certificados.map((certificado, id) =>(<CertificationLine certificado ={certificado} key={id}/>))}

    </>

    )
}
