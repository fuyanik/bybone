import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'

const PdfDownload = () => {

    useEffect(() => {

        console.log("PdfDownload");

       window.location.replace("https://files.fm/down.php?i=au7nwv24c");
    }, [])


  return (

    <div></div>

  )
}

export default PdfDownload