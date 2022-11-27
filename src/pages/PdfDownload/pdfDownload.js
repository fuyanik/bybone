import React from 'react'
import { useEffect } from 'react'


const PdfDownload = () => {

    useEffect(() => {
        console.log("PdfDownload");
        window.location.replace("https://drive.google.com/file/d/1Rn3VCJg0hXIOqvZ1q_vNS5O0_heGuWz1/view?usp=sharing");
    }, [])


  return (

    <div></div>

  )
}

export default PdfDownload