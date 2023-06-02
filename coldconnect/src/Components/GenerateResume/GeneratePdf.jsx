import React, { useRef } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet  } from '@react-pdf/renderer';


const GeneratePdf = ({ formData }) => {

  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      marginBottom: 5,
    },
    content: {
      fontSize: 12,
      marginBottom: 3,
    },
  });

  const downloadPdf = () => {
    const formDataBlob = new Blob([JSON.stringify(formData)], { type: 'application/json' });
    const url = URL.createObjectURL(formDataBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated_pdf.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };
  
    
  return (
    <div>
      <button onClick={downloadPdf}>Download PDF</button>
      <PDFViewer >
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.heading}>Personal Information</Text>
              <Text style={styles.content}>Name: {formData.name}</Text>
              <Text style={styles.content}>Email: {formData.email}</Text>
              <Text style={styles.content}>Phone: {formData.phone}</Text>
              <Text style={styles.content}>Country: {formData.country}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>Employment Information</Text>
              <Text style={styles.content}>Employer: {formData.employer}</Text>
              <Text style={styles.content}>Job Title: {formData.jobTitle}</Text>
              <Text style={styles.content}>Job Location: {formData.jobplace}</Text>
              <Text style={styles.content}>Start Date: {formData.start}</Text>
              <Text style={styles.content}>End Date: {formData.end}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>Skills</Text>
              {formData.skills.map((skill, index) => (
                <Text key={index} style={styles.content}>{skill}</Text>
              ))}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default GeneratePdf;
