import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
// import { Configuration, OpenAIApi } from openai;

const Testing = () => {
    const generateMail = async () => {
       let pdfText="Mern stack";
       let manuallyEnteredData="Mernstack"
        const API_KEY = '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';
        const profile = 'Software_Engineer';
        const prompt = `Write a cold mail for a job post of ${profile}.\n\nPDF Text:\n${pdfText}\n\nManually Entered Data:\n${manuallyEnteredData}`;
    
       try{
        
        let payload = {
            prompt: prompt,
            temperature: 0,
            model: "text-davinci-003"
          }
          // setLoading(true);
          console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY)
          axios({
            method: "POST",
            url: "https://api.openai.com/v1/completions",
            data: payload,
            headers: {
              "Content-Type": "application/json",
              Authorization:
                `Bearer ${API_KEY}`
            }
          })
            .then((res) => {
            //   setLoading(false)
            //   scrollToBottom();
              console.log(res);
            //   responseHandler(res);
            })
            .catch((e) => {
              // setLoading(false);
              // console.log(e.message, e);
            });

        } catch (error) {
          console.error('Error generating mail:', error);
          return '';
        }
      };

      useEffect(() => {
        generateMail()
      }
      , [])
      

  return (
    <>Testing</>
  )
}

export default Testing