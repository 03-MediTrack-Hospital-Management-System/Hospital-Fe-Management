/**
 * Generates and downloads a dummy PDF file for a medical report.
 * @param {Object} report - The report object containing details.
 */
export const downloadReportPDF = (report) => {
    if (!report) return;

    const reportContent = `
    MEDITRACK HOSPITAL - MEDICAL REPORT
    -----------------------------------
    Report ID: #REP-2024-${report.id.toString().padStart(4, '0')}
    Date: ${new Date(report.date).toLocaleDateString()}
    
    Patient Name: John Doe
    Referring Physician: ${report.doctor}
    
    Report Type: ${report.type}
    Status: ${report.status}
    
    Findings:
    ${report.description}
    
    Clinical Analysis:
    The prescribed examination indicates stable biological parameters within 
    the reference range for the cardiovascular and metabolic indices. 
    All cellular counts and enzymatic markers appear consistent with 
    optimal physiological state.
    
    Recommendations:
    - Continue current hydration and nutritional protocols.
    - Maintain moderate physical activity.
    - Schedule periodic screening as advised.
    
    Electronically Signed by ${report.doctor}
    -----------------------------------
    This is a dummy computer-generated report for demonstration purposes.
  `;

    const blob = new Blob([reportContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `MedicalReport_${report.id}_${report.type.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
