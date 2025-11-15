import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';

const Download: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const generatePDF = () => {
    setDownloading(true);

    setTimeout(() => {
      const doc = new jsPDF();

      // Header
      doc.setFillColor(15, 23, 42); // Navy
      doc.rect(0, 0, 210, 40, 'F');

      doc.setTextColor(251, 191, 36); // Gold
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text('ALEX TURNER', 105, 20, { align: 'center' });

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.text('Creative Director | London, UK', 105, 30, { align: 'center' });

      // Contact Info
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.text('hello@alexturner.co.uk | +44 20 1234 5678 | London, UK', 105, 50, { align: 'center' });

      // Professional Summary
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('PROFESSIONAL SUMMARY', 20, 65);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const summary = 'Creative Director with 12+ years of experience in brand identity, digital design, and visual storytelling. Proven track record of delivering award-winning campaigns for premium brands across various industries.';
      const splitSummary = doc.splitTextToSize(summary, 170);
      doc.text(splitSummary, 20, 75);

      // Experience
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('EXPERIENCE', 20, 95);

      let yPos = 105;

      const experiences = [
        {
          title: 'Creative Director',
          company: 'Independent',
          period: '2024 - Present',
          description: 'Leading creative direction for premium brands across digital and print mediums.',
        },
        {
          title: 'Senior Art Director',
          company: 'Creative Studio London',
          period: '2020 - 2024',
          description: 'Managed team of designers, overseeing brand campaigns for major international clients.',
        },
        {
          title: 'Art Director',
          company: 'Digital Agency Co.',
          period: '2017 - 2020',
          description: 'Developed visual strategies for tech startups and established brands.',
        },
      ];

      experiences.forEach((exp, index) => {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(exp.title, 20, yPos);

        doc.setFont('helvetica', 'normal');
        doc.text(exp.company, 20, yPos + 5);

        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(exp.period, 20, yPos + 10);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        const descLines = doc.splitTextToSize(exp.description, 170);
        doc.text(descLines, 20, yPos + 16);

        yPos += 28;
      });

      // Skills
      doc.addPage();

      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, 210, 40, 'F');

      doc.setTextColor(251, 191, 36);
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text('ALEX TURNER', 105, 20, { align: 'center' });

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.text('Creative Director | London, UK', 105, 30, { align: 'center' });

      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('SKILLS & EXPERTISE', 20, 55);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const skills = [
        'Brand Strategy & Identity',
        'Creative Direction',
        'UI/UX Design',
        'Motion Graphics',
        'Art Direction',
        'Photography',
        'Adobe Creative Suite',
        'Figma & Sketch',
      ];

      let skillY = 65;
      skills.forEach((skill) => {
        doc.setTextColor(251, 191, 36);
        doc.text('•', 20, skillY);
        doc.setTextColor(0, 0, 0);
        doc.text(skill, 27, skillY);
        skillY += 7;
      });

      // Awards
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('AWARDS & RECOGNITION', 20, 120);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const awards = [
        'Design Excellence Award 2023',
        'Best Brand Identity - Creative Awards 2022',
        'Digital Campaign of the Year 2021',
        'Featured in Design Magazine 2020',
      ];

      let awardY = 130;
      awards.forEach((award) => {
        doc.setTextColor(251, 191, 36);
        doc.text('★', 20, awardY);
        doc.setTextColor(0, 0, 0);
        doc.text(award, 27, awardY);
        awardY += 7;
      });

      // Education
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('EDUCATION', 20, 165);

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('BA (Hons) Graphic Design', 20, 175);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Central Saint Martins, University of the Arts London', 20, 181);
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(9);
      doc.text('2008 - 2012', 20, 187);

      // Footer
      doc.setFillColor(251, 191, 36);
      doc.rect(0, 277, 210, 20, 'F');

      doc.setTextColor(15, 23, 42);
      doc.setFontSize(8);
      doc.text('Portfolio: www.alexturner.co.uk | LinkedIn: linkedin.com/in/alexturner | Behance: behance.net/alexturner', 105, 287, { align: 'center' });

      // Save PDF
      doc.save('Alex_Turner_CV.pdf');
      setDownloading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-navy-900 via-navy-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <svg className="w-32 h-32 mx-auto text-gold-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Download My CV
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements
            in a professionally formatted PDF document.
          </p>

          <motion.button
            onClick={generatePDF}
            disabled={downloading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-8 py-4 ${
              downloading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gold-400 hover:bg-gold-500'
            } text-navy-900 font-semibold rounded-full transition-all shadow-xl`}
          >
            {downloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy-900" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating PDF...
              </>
            ) : (
              <>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV (PDF)
              </>
            )}
          </motion.button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-semibold text-lg mb-2">Complete CV</h3>
              <p className="text-gray-300 text-sm">
                Full professional history, skills, and achievements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg mb-2">Portfolio Highlights</h3>
              <p className="text-gray-300 text-sm">
                Featured projects and case studies included
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
              <p className="text-gray-300 text-sm">
                All the ways to get in touch with me
              </p>
            </motion.div>
          </div>

          <div className="mt-16 p-6 bg-gold-400/10 border border-gold-400/30 rounded-lg">
            <p className="text-gray-300">
              <span className="text-gold-400 font-semibold">Note:</span> This is a demo portfolio.
              The CV is generated in your browser using jsPDF and contains fictional but realistic information
              showcasing the £599 Premium Portfolio service by{' '}
              <a
                href="https://webrise-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:underline font-semibold"
              >
                WebRise Development
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Download;
