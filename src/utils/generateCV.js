import jsPDF from 'jspdf';
import QRCode from 'qrcode';

// Color constants
const GOLD = '#FFD700';
const DARK_GOLD = '#D4AF37';
const BLACK = '#0D0D0D';
const DARK_GRAY = '#1a1a1a';
const LIGHT_GRAY = '#E5E5E5';
const WHITE = '#FFFFFF';

// Data from portfolio
const profileData = {
  name: 'Dimal Karim Ahmad',
  position: 'Undergraduate Software Engineering Student, Universitas Gadjah Mada (UGM)',
  tagline: 'Tech & Data Enthusiast — Bridging data, design, and decisions',
  email: 'dimalkarimahmad01@gmail.com',
  location: 'Yogyakarta, Indonesia',
  linkedin: 'www.linkedin.com/in/dimal-karim-ahmad',
  github: 'https://github.com/dimalahmad',
  portfolio: 'https://dimal-profile.vercel.app/',
  whatsapp: 'https://wa.me/085727232706',
  instagram: 'https://www.instagram.com/dimalkrm/',
  status: 'Open to Opportunities',
  statusDesc: 'Product Analyst, Product Management, or Data-related roles',
  responseTime: '24/7',
  responseDesc: 'Usually respond within a few hours',
  birthDate: 'January 29, 2006',
  quote: 'I believe that great technology is built on empathy, clarity, and purpose. My goal is to bridge the gap between data, design, and decisions—creating products that not only solve problems but also inspire meaningful impact.',
  coreValues: [
    'Goal-Oriented',
    'Analytical',
    'Growth-Minded',
    'Creative-Driven',
    'Collaborative',
    'Adaptable'
  ],
  about: [
    'A Software Engineering undergraduate at Universitas Gadjah Mada (UGM) passionate about connecting technology, data, and human-centered design.',
    'I believe that great innovation starts from curiosity and empathy. My experiences in ASSETS, KOMATIK, and SENOPATI have taught me how collaboration, analysis, and creativity come together to build meaningful products.',
    'Whether leading strategic studies, coordinating competitive programming events, or designing visual narratives, I thrive at the intersection where data meets design—turning insights into stories that drive decisions.'
  ]
};

const educationData = [
  {
    institution: 'Universitas Gadjah Mada (UGM)',
    location: 'Yogyakarta, Indonesia',
    degree: 'Bachelor of Applied Computer — Software Engineering',
    gpa: '3.71/4.00',
    period: 'Aug 2023 – Nov 2027 (Expected)',
    description: 'Currently pursuing an applied bachelor\'s degree in Software Engineering at Universitas Gadjah Mada, focusing on product development, data analysis, and user-centered design. Actively involved in organizations such as ASSETS and KOMATIK, combining analytical and creative skills to drive impactful digital innovation.'
  },
  {
    institution: 'SMA Negeri 1 Pati',
    location: 'Pati, Indonesia',
    degree: 'Senior High School, Mathematics and Science',
    gpa: null,
    period: 'Jul 2020 – Jun 2023',
    description: 'Focused on mathematics and science track, strengthening analytical and logical thinking foundations. Participated in various academic and extracurricular activities that enhanced teamwork, communication, and leadership skills.'
  },
  {
    institution: 'SMP Negeri 3 Pati',
    location: 'Pati, Indonesia',
    degree: 'Accelerated Program',
    gpa: null,
    period: 'Jul 2018 – Jun 2020',
    description: 'Completed the accelerated program with distinction, emphasizing academic excellence and self-discipline. Built early interest in technology and computing through self-learning and creative digital exploration.'
  }
];

const organizationsData = [
  {
    position: 'Head of Strategic Studies & Advocacy Division',
    organization: 'ASSETS UGM',
    period: 'Feb 2025 - Present · 10 mos',
    description: 'Leading initiatives to analyze and advocate for academic policies, conducting in-depth research on campus policies, formulating strategic recommendations, and organizing discussions to raise student awareness.',
    skills: ['Strategic Analysis', 'Research Skills', 'Advocacy', 'Public Speaking', 'Negotiation', 'Leadership']
  },
  {
    position: 'Vice Head of Competitive Programming Division',
    organization: 'KOMATIK UGM',
    period: 'Jan 2025 - Present · 11 mos',
    description: 'Managing and coordinating training programs and competitions at national/international levels, analyzing algorithm trends, organizing workshops and coding contests.',
    skills: ['Competitive Programming', 'Data Structures', 'Problem Solving', 'Event Management', 'Teamwork']
  },
  {
    position: 'Sub-Coordinator of Design, Documentation & Decoration',
    organization: 'SENOPATI UGM',
    period: 'Nov 2024 - Feb 2025 · 4 mos',
    description: 'Leading creative team in producing digital/print promotional materials, managing event visual identity, ensuring high-quality photo/video documentation.',
    skills: ['Graphic Design', 'Creative Direction', 'Team Coordination', 'Event Documentation', 'Leadership']
  },
  {
    position: 'Staff of Strategic Studies Division',
    organization: 'ASSETS UGM',
    period: 'Mar 2024 - Feb 2025 · 1 yr',
    description: 'Serving as staff of KASTRAD division, accommodating TRPL student aspirations, communicating research findings, and assisting in welcoming new students.',
    skills: ['Problem Analysis', 'Public Speaking', 'Research Skills', 'Communication', 'Time Management']
  },
  {
    position: 'Member of ASGAMA',
    organization: 'KOMATIK UGM',
    period: 'Feb 2024 - Feb 2025 · 1 yr 1 mo',
    description: 'Building foundation in networking concepts through hands-on learning with Cisco tools, developing skills for network management and cybersecurity.',
    skills: ['Cybersecurity', 'Network Security', 'Cisco Networking', 'Problem Solving', 'Technical Learning']
  },
  {
    position: 'Staff of Medinfo',
    organization: 'KMPP YOGYAKARTA',
    period: 'Apr 2024 - Present · 1 yr 8 mos',
    description: 'Contributing to content creation and publication on Instagram, managing posting schedules, editing engaging content, interacting with audience.',
    skills: ['Public Relations', 'Editing', 'Social Media', 'Communication', 'Content Creation']
  },
  {
    position: 'Staff of HUMPUB',
    organization: 'TECH ENTHUSIAST DAY',
    period: 'Sep 2024 - Nov 2024 · 3 mos',
    description: 'Served in the HUMPUB (Public Relations & Publications) division, responsible for building the organization\'s public image through communication strategies, content creation, and audience engagement.',
    skills: ['Public Relations', 'Public Speaking', 'Communication', 'Teamwork', 'Creative Strategy']
  },
  {
    position: 'Liaison between the committee and new students',
    organization: 'SERIES UGM - Software Engineering Oriented Study',
    period: 'Aug 2024 - Dec 2024 · 5 mos',
    description: 'Acted as the liaison between the committee and new students in the Software Engineering Oriented Study program at the Vocational School of Universitas Gadjah Mada, focusing on communication and coordination.',
    skills: ['Communication', 'Coordination', 'Mentoring', 'Public Relations', 'Team Management']
  }
];

const competitionsData = [
  {
    name: 'GEMASTIK XVII',
    division: 'Product Development Division',
    organization: 'Kontingen UGM',
    period: 'Juni 2024 · 1 month',
    description: 'Selected as a delegate for GEMASTIK XVII representing UGM in the Product Development Division, focusing on data-driven innovation and human-centered solutions.',
    skills: ['Product Development', 'Innovation', 'Design Thinking', 'Team Collaboration', 'UX/UI']
  },
  {
    name: 'GEMASTIK XVIII',
    division: 'Product Development Division',
    organization: 'Kontingen UGM',
    period: 'Agustus 2025 · 1 month',
    description: 'Selected as a delegate for GEMASTIK XVIII representing UGM in the Product Development Division, focusing on data-driven innovation and human-centered solutions.',
    skills: ['Product Development', 'Innovation', 'Design Thinking', 'Team Collaboration', 'UX/UI']
  },
  {
    name: 'LIDM 2025',
    division: 'Educational Digital Technology Innovation Division',
    organization: 'Kontingen UGM',
    period: 'September 2025 · 1 month',
    description: 'Representing Universitas Gadjah Mada in LIDM 2025, emphasizing technology-driven innovation, entrepreneurship, and digital learning transformation.',
    skills: ['Innovation', 'Entrepreneurship', 'Education Technology', 'Research', 'Presentation']
  },
  {
    name: 'CODE 2024 Competition',
    division: 'Software Development',
    organization: 'Finalist',
    period: 'Agustus 2024 · 1 month',
    description: 'Achieved finalist position in the Code 2024 competition, showcasing programming and problem-solving capabilities through analytical and creative solutions.',
    skills: ['Programming', 'Problem Solving', 'Data Analysis', 'Competition', 'Creativity']
  }
];

const skillsData = {
  programming: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Laravel', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  design: ['Figma', 'Adobe XD', 'Canva', 'Photoshop', 'Illustrator'],
  data: ['Excel', 'Google Sheets', 'SQL', 'Python (pandas, numpy)', 'Google Colab'],
  tools: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'GitHub Actions', 'Vercel Deployment'],
  product: ['User Metrics', 'Funnel Analysis', 'Retention Metrics', 'User Research', 'Data Interpretation', 'Competitive Analysis', 'Technical Writing', 'Product Specs', 'Reporting'],
  other: ['Blender', 'CapCut', 'Lightroom']
};

const projectsData = [
  {
    title: 'Website Sistem Manajemen Obat – Klinik Hewan dr. Hendrik',
    role: 'System Analyst & QA Developer',
    type: 'Mitra Project',
    period: 'Agustus 2024 – Juni 2025',
    description: 'Responsible for requirement analysis, data flow design, and testing documentation for a web-based medicine management system at Klinik Hewan dr. Hendrik.',
    skills: ['System Analysis', 'Product Documentation', 'Testing', 'Team Collaboration']
  },
  {
    title: 'Website Company Profile and Store – PT INVIRO',
    role: 'Product Manager',
    type: 'Mitra Project',
    period: 'Agustus 2025 – Present',
    description: 'Managed the product development roadmap, coordinated developer and design teams, and ensured timely delivery of the integrated company profile and store website for PT INVIRO.',
    skills: ['Product Management', 'Planning', 'Communication', 'UI/UX Strategy', 'Team Coordination']
  },
  {
    title: 'GaiaEcho – Carbon Calculator & Waste Bank Map',
    role: 'QA & Documentation Supervisor',
    type: 'Non-Mitra Project',
    period: 'Juli – Agustus 2024',
    description: 'Led quality testing and user experience evaluation for the GaiaEcho web app — a green-tech initiative that calculates personal carbon footprints and locates nearby waste banks.',
    skills: ['QA Testing', 'Research', 'Documentation', 'UX Validation']
  },
  {
    title: 'EduKita – Education Database for Indonesia',
    role: 'System Analyst',
    type: 'Non-Mitra Project',
    period: 'Februari – Juni 2025',
    description: 'Conducted analysis, structured data flow, and collaborated with the frontend team to ensure smooth data visualization in the EduKita education database website.',
    skills: ['System Design', 'API Integration', 'Data Analysis', 'Collaboration']
  },
  {
    title: 'Blangkis – E-commerce Store Platform',
    role: 'Fullstack Developer',
    type: 'Development',
    period: '5–7 Juli 2025',
    description: 'Built an e-commerce web application with store management, cart, checkout, RajaOngkir API integration, real-time order tracking, admin dashboard, and invoice management.',
    skills: ['React', 'Node.js', 'Express', 'MySQL', 'RajaOngkir API', 'Payment Gateway', 'Tailwind CSS']
  },
  {
    title: 'PAD Autotesting Suite',
    role: 'QA Developer',
    type: 'Development',
    period: 'Juni 2025',
    description: 'Developed an automated testing framework for the PAD project (Klinik Hewan dr. Hendrik) using Jest and Cypress. The system automates UI, API, and data validation testing pipelines to ensure software stability and data integrity across all modules.',
    skills: ['Cypress', 'Jest', 'Node.js', 'CI/CD', 'GitHub Actions', 'Automation Testing']
  },
  {
    title: 'Android Development Projects',
    role: 'Mobile Developer',
    type: 'Development',
    period: '1 Semester 2025',
    description: 'A collection of Android-based projects built during one semester, covering CRUD operations, UI design, API integration, and Firebase authentication.',
    skills: ['Kotlin', 'Android Studio', 'Firebase', 'Retrofit']
  },
  {
    title: 'Web Development Projects',
    role: 'Frontend Developer',
    type: 'Development',
    period: 'Perkuliahan 2024–2025',
    description: 'A portfolio of various frontend projects developed during coursework, focusing on interactivity, API usage, and responsive web design.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  }
];

const certificatesData = [
  {
    name: 'HCIA-AI V3.5',
    issuer: 'Huawei ICT Academy',
    year: 2025,
    credentialId: 'EBG20250625016286',
    description: 'Telah berhasil menyelesaikan studi dan ujian HCIA-AI V3.5 (Indonesian).',
    skills: ['AI', 'Machine Learning', 'Huawei ICT']
  },
  {
    name: 'DP Database Programming with SQL Learner',
    issuer: 'Oracle',
    year: 2024,
    credentialId: '-',
    description: 'Pemahaman database, SQL, problem analysis, data modeling, dan Oracle Database.',
    skills: ['SQL', 'Oracle Database', 'Data Analysis', 'Problem Solving', 'Data Modeling']
  },
  {
    name: 'Intro Data Analytics',
    issuer: 'RevoU',
    year: 2023,
    credentialId: '-',
    description: 'Dasar-dasar problem solving, data analysis, data entry, dan visualisasi data.',
    skills: ['Data Analysis', 'Problem Solving', 'Data Visualization', 'Data Entry']
  },
  {
    name: 'Getting Started Programming with Python',
    issuer: 'Dicoding Indonesia',
    year: 2024,
    credentialId: '4EXGKQDN9ZRL',
    description: 'Sertifikat untuk pemula Python, problem solving, algoritma, dan analisis data.',
    skills: ['Python', 'Problem Solving', 'Algorithms', 'Data Analysis']
  },
  {
    name: 'Learning Basic Data Visualization',
    issuer: 'Dicoding Indonesia',
    year: 2023,
    credentialId: '07Z682QLRXQR',
    description: 'Dasar-dasar visualisasi data dan manajemen waktu dalam analisis data.',
    skills: ['Data Visualization', 'Time Management', 'Data Entry']
  },
  {
    name: 'Seminar Nasional AMCC 2024',
    issuer: 'Universitas AMIKOM Yogyakarta',
    year: 2024,
    credentialId: '75/C/PES-SEMNAS/AMCC-AMIKOM/IX/2024',
    description: 'Seminar nasional yang mengembangkan keahlian di Public Relations, Global Thinking, dan Analytics.',
    skills: ['Public Relations', 'Global Thinking', 'Analytics']
  }
];

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Helper function to check if we need a new page
const checkPageBreak = (doc, currentY, requiredHeight, pageHeight, margin) => {
  if (currentY + requiredHeight > pageHeight - margin) {
    return true;
  }
  return false;
};

// Helper function to add subtle shadow effect
const addShadow = (doc, x, y, width, height, radius = 1) => {
  // Subtle shadow layer using very light gray (simulating 5% opacity)
  doc.setFillColor(242, 242, 242); // Very light gray instead of alpha
  doc.roundedRect(x + 0.5, y + 0.5, width, height, radius, radius, 'F');
};

// Helper function to add gold divider line
const addDivider = (doc, x, y, width, goldRgb) => {
  doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.setLineWidth(0.2);
  doc.line(x, y, x + width, y);
};

// Helper function to add badge/tag
const addBadge = (doc, text, x, y, goldRgb, fontSize = 6.5) => {
  doc.setFontSize(fontSize);
  doc.setFont('helvetica', 'bold');
  const textWidth = doc.getTextWidth(text);
  const padding = 2;
  const badgeHeight = fontSize * 0.6;
  
  // Badge background
  doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.roundedRect(x - padding, y - badgeHeight, textWidth + (padding * 2), badgeHeight + 1, 1, 1, 'F');
  
  // Badge text
  doc.setTextColor(0, 0, 0);
  doc.text(text, x, y);
  
  return textWidth + (padding * 2);
};

// Helper function to add footer with page numbers and date
const addFooter = (doc, pageNum, totalPages, pageWidth, pageHeight, margin, goldRgb) => {
  const footerY = pageHeight - margin + 2;
  
  // Date stamp
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  doc.setFontSize(6);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Last Updated: ${currentDate}`, margin, footerY);
  
  // Page number - black bold
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, footerY, { align: 'right' });
};

// Helper function to add new page with modern design
const addNewPage = (doc, pageWidth, pageHeight, margin, goldRgb) => {
  doc.addPage();
  
  // Add subtle gold line at top
  doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.setLineWidth(0.3);
  doc.line(margin, margin, pageWidth - margin, margin);
  
  return margin + 5;
};

// Helper function to add section header with modern design (full width gold background + shadow)
const addSectionHeader = (doc, text, x, y, goldRgb, pageHeight, margin, pageWidth, contentWidth, skipPageCheck = false) => {
  // Check if we need new page
  if (!skipPageCheck && checkPageBreak(doc, y, 20, pageHeight, margin)) {
    y = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
  }
  
  // Shadow effect
  addShadow(doc, x - 2, y - 6, contentWidth + 4, 8, 1);
  
  // Full width gold background for section header
  doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.roundedRect(x - 2, y - 6, contentWidth + 4, 8, 1, 1, 'F');
  
  // Text with letter spacing effect (simulated with font size)
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(text, x, y);
  
  return y + 10;
};

// Generate QR Code as data URL
const generateQRCode = async (url) => {
  try {
    const qrDataUrl = await QRCode.toDataURL(url, {
      width: 60,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    return qrDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
};

// Main function to generate CV PDF with modern design
export const generateCVPDF = async () => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    // Set PDF metadata
    doc.setProperties({
      title: 'Dimal Karim Ahmad - CV',
      subject: 'Curriculum Vitae',
      author: 'Dimal Karim Ahmad',
      keywords: 'CV, Resume, Software Engineering, Product Management, Data Analytics',
      creator: 'Portfolio Website'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    const contentX = margin;
    let currentY = margin;
    const goldRgb = hexToRgb(GOLD);
    const darkGoldRgb = hexToRgb(DARK_GOLD);

    // Set default font
    doc.setFont('helvetica');

    // ========== ELEGANT HEADER SECTION ==========
    // Calculate header height based on content
    const headerPadding = 8;
    const nameHeight = 16;
    const positionHeight = 22;
    const taglineHeight = 28;
    const contactStartY = 34;
    const contactLineHeight = 3.8;
    const maxContactLines = 3; // Max lines in either column
    const headerBottomPadding = 5;
    const calculatedHeaderHeight = contactStartY + (maxContactLines * contactLineHeight) + headerBottomPadding;
    
    // Gold gradient background - compact height
    doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.rect(0, 0, pageWidth, calculatedHeaderHeight, 'F');
    
    // Dark gold accent line at bottom
    doc.setFillColor(darkGoldRgb.r, darkGoldRgb.g, darkGoldRgb.b);
    doc.rect(0, calculatedHeaderHeight - 2, pageWidth, 2, 'F');

    // Left column for name and contact
    const leftColX = margin;
    
    // Name - larger and more prominent
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(30);
    doc.setFont('helvetica', 'bold');
    doc.text(profileData.name, leftColX, nameHeight);

    // Position - elegant spacing
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(profileData.position, leftColX, positionHeight);

    // Tagline - italic with better spacing
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text(profileData.tagline, leftColX, taglineHeight);

    // Contact Information - compact two columns layout with text labels
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    let contactY = contactStartY;
    const contactLabelWidth = 18;
    const contactCol1X = leftColX;
    const contactCol2X = leftColX + 80; // Second column for contact
    
    // Helper function to draw contact item with text label
    const drawContactItem = (label, value, x, y) => {
      // Label in bold
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(0, 0, 0);
      doc.text(label, x, y);
      // Value
      doc.setFont('helvetica', 'normal');
      doc.text(value, x + contactLabelWidth, y);
    };
    
    // Column 1: Email, Location, LinkedIn
    // Email
    drawContactItem('Email:', profileData.email, contactCol1X, contactY);
    contactY += contactLineHeight;
    
    // Location
    const locationText = profileData.location.length > 40 ? profileData.location.substring(0, 37) + '...' : profileData.location;
    drawContactItem('Location:', locationText, contactCol1X, contactY);
    contactY += contactLineHeight;
    
    // LinkedIn
    drawContactItem('LinkedIn:', profileData.linkedin, contactCol1X, contactY);
    
    // Column 2: GitHub, Portfolio, Status
    contactY = contactStartY;
    
    // GitHub
    drawContactItem('GitHub:', profileData.github.replace('https://', ''), contactCol2X, contactY);
    contactY += contactLineHeight;
    
    // Portfolio
    const portfolioText = profileData.portfolio.replace('https://', '').replace('/', '');
    drawContactItem('Portfolio:', portfolioText, contactCol2X, contactY);
    contactY += contactLineHeight;
    
    // Status
    drawContactItem('Status:', profileData.status, contactCol2X, contactY);

    // QR Code with elegant border (right side)
    const qrCode = await generateQRCode(profileData.portfolio);
    if (qrCode) {
      const qrSize = 28;
      const qrX = pageWidth - margin - qrSize;
      const qrY = 10;
      
      // Simple white background with border
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(qrX - 1.5, qrY - 1.5, qrSize + 3, qrSize + 3, 1.5, 1.5, 'F');
      
      // Border
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.roundedRect(qrX - 1.5, qrY - 1.5, qrSize + 3, qrSize + 3, 1.5, 1.5, 'D');
      
      // QR code
      doc.addImage(qrCode, 'PNG', qrX, qrY, qrSize, qrSize);
      
      // Label
      doc.setFontSize(6.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Portfolio', qrX + qrSize / 2, qrY + qrSize + 3.5, { align: 'center' });
    }

    currentY = calculatedHeaderHeight + 8;

    // ========== SINGLE COLUMN LAYOUT (matching website order) ==========
    
    // 1. PROFILE (About) Section
    currentY = addSectionHeader(doc, 'PROFILE', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth, true);
    
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    const lineHeight = 4.5; // Improved line height for readability
    profileData.about.forEach((para, idx) => {
      if (idx > 0) currentY += 4; // Better spacing between paragraphs
      // Check page break
      if (checkPageBreak(doc, currentY, 15, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      const lines = doc.splitTextToSize(para, contentWidth - 5);
      doc.text(lines, contentX, currentY);
      currentY += lines.length * lineHeight;
    });

    currentY += 8;

    // 2. EDUCATION Section
    currentY = addSectionHeader(doc, 'EDUCATION', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth);
    
    educationData.forEach((edu, index) => {
      if (index > 0) {
        // Add divider between education entries
        currentY += 2;
        addDivider(doc, contentX, currentY, contentWidth, goldRgb);
        currentY += 4;
      }
      
      // Check page break
      if (checkPageBreak(doc, currentY, 35, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      
      // Institution name with gold background (only text width) + shadow
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      const instTextWidth = doc.getTextWidth(edu.institution);
      addShadow(doc, contentX - 1, currentY - 4, instTextWidth + 2, 5, 0.5);
      doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.roundedRect(contentX - 1, currentY - 4, instTextWidth + 2, 5, 0.5, 0.5, 'F');
      
      doc.setTextColor(0, 0, 0);
      doc.text(edu.institution, contentX, currentY);
      
      currentY += 6;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      const degreeLines = doc.splitTextToSize(edu.degree, contentWidth - 5);
      doc.text(degreeLines, contentX, currentY);
      currentY += degreeLines.length * 4.5; // Better line height
      
      doc.setFontSize(8);
      if (edu.gpa) {
        // Highlight GPA with emphasis - black bold
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text(`GPA: ${edu.gpa}`, contentX, currentY);
        currentY += 4.5;
        doc.setTextColor(40, 40, 40);
        doc.setFont('helvetica', 'normal');
      }
      doc.text(edu.period, contentX, currentY);
      doc.text(edu.location, contentX + 50, currentY);
      currentY += 4.5;
      
      // Description
      doc.setFontSize(7.5);
      const descLines = doc.splitTextToSize(edu.description, contentWidth - 5);
      doc.text(descLines, contentX, currentY);
      currentY += descLines.length * 4; // Better line height
    });

    currentY += 8;

    // 3. ORGANIZATIONS Section
    currentY = addSectionHeader(doc, 'ORGANIZATIONS', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth);
    
    organizationsData.forEach((org, index) => {
      if (index > 0) {
        // Add divider between organization entries
        currentY += 2;
        addDivider(doc, contentX, currentY, contentWidth, goldRgb);
        currentY += 4;
      }
      
      // Check page break
      if (checkPageBreak(doc, currentY, 30, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      
      // Position with gold background (only text width) + shadow
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      const posLines = doc.splitTextToSize(org.position, contentWidth - 5);
      const firstLineText = posLines[0];
      const posTextWidth = doc.getTextWidth(firstLineText);
      addShadow(doc, contentX - 1, currentY - 3.5, posTextWidth + 2, 4, 0.5);
      doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.roundedRect(contentX - 1, currentY - 3.5, posTextWidth + 2, 4, 0.5, 0.5, 'F');
      
      doc.setTextColor(0, 0, 0);
      doc.text(posLines, contentX, currentY);
      currentY += posLines.length * 4.5;
      
      currentY += 2;
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      doc.text(org.organization, contentX, currentY);
      currentY += 4.5;
      
      doc.setFontSize(7.5);
      doc.text(org.period, contentX, currentY);
      currentY += 4.5;
      
      // Description
      doc.setFontSize(7.5);
      const descLines = doc.splitTextToSize(org.description, contentWidth - 5);
      doc.text(descLines, contentX, currentY);
      currentY += descLines.length * 4; // Better line height
      
      // Skills
      if (org.skills && org.skills.length > 0) {
        doc.setFontSize(7);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        const skillText = org.skills.slice(0, 5).join(' • ');
        const skillLines = doc.splitTextToSize(skillText, contentWidth - 5);
        doc.text(skillLines, contentX, currentY);
        currentY += skillLines.length * 3.5;
      }
    });

    currentY += 8;

    // 4. COMPETITIONS Section
    currentY = addSectionHeader(doc, 'COMPETITIONS', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth);
    
    competitionsData.forEach((comp, index) => {
      if (index > 0) {
        // Add divider between competition entries
        currentY += 2;
        addDivider(doc, contentX, currentY, contentWidth, goldRgb);
        currentY += 4;
      }
      
      // Check page break
      if (checkPageBreak(doc, currentY, 30, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      
      // Competition name with gold background (only text width) + shadow
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      const compNameLines = doc.splitTextToSize(comp.name, contentWidth - 5);
      const firstLineText = compNameLines[0];
      const compNameTextWidth = doc.getTextWidth(firstLineText);
      addShadow(doc, contentX - 1, currentY - 3.5, compNameTextWidth + 2, 4, 0.5);
      doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.roundedRect(contentX - 1, currentY - 3.5, compNameTextWidth + 2, 4, 0.5, 0.5, 'F');
      
      doc.setTextColor(0, 0, 0);
      doc.text(compNameLines, contentX, currentY);
      currentY += compNameLines.length * 4.5;
      
      currentY += 2;
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      doc.text(comp.division, contentX, currentY);
      currentY += 4.5;
      
      doc.setFontSize(7.5);
      doc.text(`${comp.organization} • ${comp.period}`, contentX, currentY);
      currentY += 4.5;
      
      // Description
      doc.setFontSize(7.5);
      const descLines = doc.splitTextToSize(comp.description, contentWidth - 5);
      doc.text(descLines, contentX, currentY);
      currentY += descLines.length * 4; // Better line height
      
      // Skills
      if (comp.skills && comp.skills.length > 0) {
        doc.setFontSize(7);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        const skillText = comp.skills.slice(0, 5).join(' • ');
        const skillLines = doc.splitTextToSize(skillText, contentWidth - 5);
        doc.text(skillLines, contentX, currentY);
        currentY += skillLines.length * 3.5;
      }
    });

    currentY += 8;

    // 5. SKILLS Section
    currentY = addSectionHeader(doc, 'SKILLS', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth);
    
    const skillCategories = [
      { name: 'Programming', skills: skillsData.programming },
      { name: 'Frameworks', skills: skillsData.frameworks },
      { name: 'Design', skills: skillsData.design },
      { name: 'Data & Analytics', skills: skillsData.data },
      { name: 'Tools', skills: skillsData.tools },
      { name: 'Product & Research', skills: skillsData.product }
    ];
    
    skillCategories.forEach((category, idx) => {
      if (idx > 0) {
        currentY += 2;
        addDivider(doc, contentX, currentY, contentWidth, goldRgb);
        currentY += 4;
      }
      
      // Check page break
      if (checkPageBreak(doc, currentY, 10, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      
      // Category name with gold bullet
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.text('•', contentX, currentY);
      
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(40, 40, 40);
      doc.text(`${category.name}:`, contentX + 4, currentY);
      
      currentY += 4.5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      const skillText = category.skills.join(', ');
      const skillLines = doc.splitTextToSize(skillText, contentWidth - 5);
      doc.text(skillLines, contentX, currentY);
      currentY += skillLines.length * 4.5; // Better line height
    });

    currentY += 8;

    // 6. FEATURED PROJECTS Section
    currentY = addSectionHeader(doc, 'FEATURED PROJECTS', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth);
    
    projectsData.forEach((project, index) => {
      if (index > 0) {
        // Add divider between project entries
        currentY += 2;
        addDivider(doc, contentX, currentY, contentWidth, goldRgb);
        currentY += 4;
      }
      
      // Check page break
      if (checkPageBreak(doc, currentY, 35, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      
      // Project title with gold background (only text width) + shadow
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      const titleLines = doc.splitTextToSize(project.title, contentWidth - 5);
      const firstLineText = titleLines[0];
      const titleTextWidth = doc.getTextWidth(firstLineText);
      addShadow(doc, contentX - 1, currentY - 4, titleTextWidth + 2, 5, 0.5);
      doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.roundedRect(contentX - 1, currentY - 4, titleTextWidth + 2, 5, 0.5, 0.5, 'F');
      
      doc.setTextColor(0, 0, 0);
      doc.text(titleLines, contentX, currentY);
      currentY += titleLines.length * 4.5;
      
      currentY += 2;
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      doc.text(`${project.role} • ${project.period}`, contentX, currentY);
      currentY += 4.5;
      
      // Enhanced type badge with better styling
      const badgeX = contentX;
      const badgeY = currentY;
      addBadge(doc, project.type, badgeX, badgeY, goldRgb, 6.5);
      currentY += 5;
      
      // Description
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      const descLines = doc.splitTextToSize(project.description, contentWidth - 5);
      doc.text(descLines, contentX, currentY);
      currentY += descLines.length * 4; // Better line height
      
      // Skills
      if (project.skills && project.skills.length > 0) {
        doc.setFontSize(7);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        const skillText = project.skills.slice(0, 6).join(' • ');
        const skillLines = doc.splitTextToSize(skillText, contentWidth - 5);
        doc.text(skillLines, contentX, currentY);
        currentY += skillLines.length * 3.5;
      }
    });

    currentY += 8;

    // 7. CERTIFICATES Section
    currentY = addSectionHeader(doc, 'CERTIFICATES', contentX, currentY, goldRgb, pageHeight, margin, pageWidth, contentWidth);
    
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    certificatesData.forEach((cert, idx) => {
      if (idx > 0) {
        currentY += 2;
        addDivider(doc, contentX, currentY, contentWidth, goldRgb);
        currentY += 4;
      }
      
      // Check page break
      if (checkPageBreak(doc, currentY, 8, pageHeight, margin)) {
        currentY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      }
      
      // Gold bullet point
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.text('•', contentX, currentY);
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(40, 40, 40);
      doc.text(`${cert.name}`, contentX + 4, currentY);
      currentY += 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(80, 80, 80);
      doc.text(`${cert.issuer} (${cert.year})`, contentX + 6, currentY);
      currentY += 4.5;
    });

    // Calculate total pages and add footer to last page
    const totalPages = doc.internal.getNumberOfPages();
    
    // Add footer to all pages
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      addFooter(doc, i, totalPages, pageWidth, pageHeight, margin, goldRgb);
    }

    // Save PDF
    doc.save('Dimal_Karim_Ahmad_CV.pdf');
  } catch (error) {
    console.error('Error generating CV PDF:', error);
    throw error; // Re-throw to be caught by caller
  }
};
