import { PDFDownloadLink } from 'react-pdf';
import React from "react"
import GeneratePdf from "./GeneratePdf";

const DownloadPDf =()=>{
    <div>
        <button>
    <PDFDownloadLink document={<GeneratePdf />} fileName="resume.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
    </button>
  </div>
}

export default DownloadPDf;