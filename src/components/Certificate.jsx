import React, { useRef } from 'react';
import { Award, Download, Briefcase, X, Calendar, Star } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Certificate.css';

const CertificateComponent = ({
  isVisible,
  onClose,
  studentName,
  courseTitle,
  completionDate,
  score
}) => {
  const certificateRef = useRef(null);

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;

    try {
      // Create a temporary container for the certificate
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '800px';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.padding = '40px';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      
      tempContainer.innerHTML = `
        <div style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 60px;
          border-radius: 20px;
          text-align: center;
          color: white;
          position: relative;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <!-- Decorative border -->
          <div style="
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 12px;
          "></div>
          
          <!-- Content -->
          <div style="position: relative; z-index: 10;">
            <!-- Header -->
            <div style="margin-bottom: 40px;">
              <div style="
                width: 80px;
                height: 80px;
                background: rgba(255,255,255,0.2);
                border-radius: 50%;
                margin: 0 auto 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 40px;
              ">🏆</div>
              <h1 style="
                font-size: 48px;
                font-weight: bold;
                margin: 0 0 10px 0;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
              ">Certificate of Completion</h1>
              <p style="font-size: 18px; margin: 0; opacity: 0.9;">This is to certify that</p>
            </div>

            <!-- Student Name -->
            <div style="margin: 40px 0;">
              <h2 style="
                font-size: 36px;
                font-weight: bold;
                margin: 0 0 20px 0;
                text-decoration: underline;
                text-decoration-color: rgba(255,255,255,0.5);
              ">${studentName}</h2>
              <p style="font-size: 16px; margin: 0 0 20px 0; opacity: 0.9;">
                has successfully completed the comprehensive course
              </p>
              <h3 style="
                font-size: 24px;
                font-weight: 600;
                margin: 0 0 20px 0;
                font-style: italic;
                opacity: 0.95;
              ">"${courseTitle}"</h3>
              <p style="font-size: 14px; margin: 0 0 20px 0; opacity: 0.8; line-height: 1.5;">
                demonstrating proficiency in full-stack web development including HTML, CSS, JavaScript, React, and Node.js
              </p>
              
              <!-- Score and Date -->
              <div style="
                display: flex;
                justify-content: center;
                gap: 40px;
                margin: 30px 0;
                flex-wrap: wrap;
              ">
                <div style="
                  background: rgba(255,255,255,0.2);
                  padding: 15px 25px;
                  border-radius: 25px;
                  font-weight: bold;
                ">
                  ⭐ Score: ${score}%
                </div>
                <div style="
                  background: rgba(255,255,255,0.2);
                  padding: 15px 25px;
                  border-radius: 25px;
                  font-weight: bold;
                ">
                  📅 ${completionDate}
                </div>
              </div>
            </div>

            <!-- Signatures -->
            <div style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 60px;
              padding: 0 40px;
            ">
              <div style="text-align: center; flex: 1;">
                <div style="
                  width: 150px;
                  height: 2px;
                  background: rgba(255,255,255,0.5);
                  margin: 0 auto 10px;
                "></div>
                <p style="font-size: 14px; margin: 0; opacity: 0.8;">Course Instructor</p>
              </div>
              
              <div style="
                width: 80px;
                height: 80px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                margin: 0 40px;
              ">🎓</div>
              
              <div style="text-align: center; flex: 1;">
                <div style="
                  width: 150px;
                  height: 2px;
                  background: rgba(255,255,255,0.5);
                  margin: 0 auto 10px;
                "></div>
                <p style="font-size: 14px; margin: 0; opacity: 0.8;">EdTech Platform</p>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(tempContainer);

      // Generate canvas from the temporary container
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 800,
        height: 600
      });

      // Remove temporary container
      document.body.removeChild(tempContainer);

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        (210 - imgHeight) / 2, // Center vertically
        imgWidth,
        imgHeight
      );

      // Save the PDF
      pdf.save(`${studentName.replace(/\s+/g, '_')}_Certificate_${courseTitle.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to print dialog
      handlePrintCertificate();
    }
  };

  const handlePrintCertificate = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Certificate - ${courseTitle}</title>
          <style>
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
            body {
              font-family: 'Georgia', serif;
              margin: 0;
              padding: 20px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .certificate {
              background: white;
              padding: 60px;
              border-radius: 20px;
              box-shadow: 0 20px 40px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 800px;
              width: 100%;
              border: 8px solid #f8f9fa;
              position: relative;
            }
            .certificate::before {
              content: '';
              position: absolute;
              top: 20px;
              left: 20px;
              right: 20px;
              bottom: 20px;
              border: 3px solid #667eea;
              border-radius: 12px;
            }
            .header {
              margin-bottom: 40px;
            }
            .title {
              font-size: 48px;
              font-weight: bold;
              color: #667eea;
              margin-bottom: 10px;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
            }
            .subtitle {
              font-size: 18px;
              color: #6b7280;
              margin-bottom: 40px;
            }
            .student-name {
              font-size: 36px;
              font-weight: bold;
              color: #1f2937;
              margin: 30px 0;
              text-decoration: underline;
              text-decoration-color: #667eea;
            }
            .course-title {
              font-size: 24px;
              color: #374151;
              margin: 20px 0;
              font-style: italic;
            }
            .completion-text {
              font-size: 16px;
              color: #6b7280;
              margin: 20px 0;
              line-height: 1.6;
            }
            .score {
              font-size: 20px;
              font-weight: bold;
              color: #059669;
              margin: 20px 0;
            }
            .date {
              font-size: 16px;
              color: #6b7280;
              margin-top: 40px;
            }
            .signature-section {
              margin-top: 60px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .signature {
              text-align: center;
              flex: 1;
            }
            .signature-line {
              border-top: 2px solid #374151;
              width: 200px;
              margin: 0 auto 10px;
            }
            .signature-text {
              font-size: 14px;
              color: #6b7280;
            }
            .seal {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 24px;
              font-weight: bold;
              margin: 0 40px;
            }
          </style>
        </head>
        <body>
          <div class="certificate">
            <div class="header">
              <div class="title">Certificate of Completion</div>
              <div class="subtitle">This is to certify that</div>
            </div>
            
            <div class="student-name">${studentName}</div>
            
            <div class="completion-text">
              has successfully completed the comprehensive course
            </div>
            
            <div class="course-title">"${courseTitle}"</div>
            
            <div class="completion-text">
              demonstrating proficiency in full-stack web development including HTML, CSS, JavaScript, React, and Node.js
            </div>
            
            <div class="score">Final Assessment Score: ${score}%</div>
            
            <div class="signature-section">
              <div class="signature">
                <div class="signature-line"></div>
                <div class="signature-text">Course Instructor</div>
              </div>
              
              <div class="seal">★</div>
              
              <div class="signature">
                <div class="signature-line"></div>
                <div class="signature-text">EdTech Platform</div>
              </div>
            </div>
            
            <div class="date">Completed on ${completionDate}</div>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 20px;">
            <button onclick="window.print()" style="
              background: #3b82f6;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 16px;
            ">Print Certificate</button>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleFindJobs = () => {
    window.open('https://www.linkedin.com/jobs/search/?keywords=full%20stack%20developer&location=Worldwide', '_blank');
  };

  const handleClose = () => {
    // Call the onClose function passed from parent
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="certificate-modal">
      <div className="certificate-modal__content">
        {/* Header */}
        <div className="certificate-modal__header">
          <div className="certificate-modal__header-content">
            <Award className="certificate-modal__header-icon" />
            <div>
              <h2 className="certificate-modal__title">Course Completed!</h2>
              <p className="certificate-modal__subtitle">Congratulations on your achievement</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="certificate-modal__close"
            type="button"
          >
            <X className="icon" />
          </button>
        </div>

        {/* Certificate Display */}
        <div className="certificate-modal__body">
          <div 
            ref={certificateRef}
            className="certificate-display"
          >
            {/* Decorative elements */}
            <div className="certificate-display__decoration certificate-display__decoration--1"></div>
            <div className="certificate-display__decoration certificate-display__decoration--2"></div>
            <div className="certificate-display__decoration certificate-display__decoration--3"></div>
            
            <div className="certificate-content">
              <div className="certificate-content__header">
                <Award className="certificate-content__icon" />
                <h1 className="certificate-content__title">Certificate of Completion</h1>
                <p className="certificate-content__subtitle">This is to certify that</p>
              </div>

              <div className="certificate-content__body">
                <h2 className="certificate-content__name">
                  {studentName}
                </h2>
                <p className="certificate-content__text">
                  has successfully completed the comprehensive course
                </p>
                <h3 className="certificate-content__course">
                  "{courseTitle}"
                </h3>
                <p className="certificate-content__description">
                  demonstrating proficiency in full-stack web development including HTML, CSS, JavaScript, React, and Node.js
                </p>
                
                <div className="certificate-content__badges">
                  <div className="certificate-badge certificate-badge--score">
                    <Star className="certificate-badge__icon" />
                    <span>Score: {score}%</span>
                  </div>
                  <div className="certificate-badge certificate-badge--date">
                    <Calendar className="certificate-badge__icon" />
                    <span>{completionDate}</span>
                  </div>
                </div>
              </div>

              <div className="certificate-content__signatures">
                <div className="certificate-signature">
                  <div className="certificate-signature__line"></div>
                  <p className="certificate-signature__text">Course Instructor</p>
                </div>
                
                <div className="certificate-content__seal">
                  <Award className="certificate-seal__icon" />
                </div>
                
                <div className="certificate-signature">
                  <div className="certificate-signature__line"></div>
                  <p className="certificate-signature__text">EdTech Platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="certificate-actions">
            <button
              onClick={handleDownloadPDF}
              className="certificate-action certificate-action--primary"
              type="button"
            >
              <Download className="icon" />
              <span>Download Certificate (PDF)</span>
            </button>
            
            <button
              onClick={handlePrintCertificate}
              className="certificate-action certificate-action--secondary"
              type="button"
            >
              <Download className="icon" />
              <span>Print Certificate</span>
            </button>
            
            <button
              onClick={handleFindJobs}
              className="certificate-action certificate-action--success"
              type="button"
            >
              <Briefcase className="icon" />
              <span>Find Jobs</span>
            </button>
          </div>

          {/* Achievement Summary */}
          <div className="achievement-summary">
            <h3 className="achievement-summary__title">Your Learning Journey</h3>
            <div className="achievement-stats">
              <div className="achievement-stat">
                <div className="achievement-stat__value">20</div>
                <div className="achievement-stat__label">Questions Mastered</div>
              </div>
              <div className="achievement-stat">
                <div className="achievement-stat__value">{score}%</div>
                <div className="achievement-stat__label">Final Score</div>
              </div>
              <div className="achievement-stat">
                <div className="achievement-stat__value">7</div>
                <div className="achievement-stat__label">Lessons Completed</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="next-steps">
            <h4 className="next-steps__title">What's Next?</h4>
            <p className="next-steps__description">
              You're now ready to start your career as a Full Stack Developer! Use your certificate to showcase your skills to potential employers.
            </p>
            <div className="skill-badges">
              <span className="skill-badge skill-badge--html">HTML/CSS</span>
              <span className="skill-badge skill-badge--js">JavaScript</span>
              <span className="skill-badge skill-badge--react">React</span>
              <span className="skill-badge skill-badge--node">Node.js</span>
              <span className="skill-badge skill-badge--fullstack">Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateComponent;