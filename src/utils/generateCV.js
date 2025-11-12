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
  location: 'Yogyakarta, Indonesia (available to work from anywhere)',
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

// Helper function to add new page with modern design
const addNewPage = (doc, pageWidth, pageHeight, margin, goldRgb) => {
  doc.addPage();
  
  // Add subtle gold line at top
  doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.setLineWidth(0.3);
  doc.line(margin, margin, pageWidth - margin, margin);
  
  return margin + 5;
};

// Helper function to draw rounded rectangle (simulated)
const drawRoundedBox = (doc, x, y, width, height, goldRgb, fill = false) => {
  doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.setLineWidth(0.3);
  if (fill) {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(x, y, width, height, 1, 1, 'FD');
  } else {
    doc.roundedRect(x, y, width, height, 1, 1, 'D');
  }
};

// Helper function to add section header with modern design (full width gold background)
const addSectionHeader = (doc, text, x, y, goldRgb, pageHeight, margin, pageWidth, isLeftColumn = false) => {
  // Check if we need new page
  if (checkPageBreak(doc, y, 15, pageHeight, margin)) {
    y = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
    // Redraw divider on new page
    if (!isLeftColumn) {
      const leftColWidth = 68;
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(x - 68 + leftColWidth + (margin / 2), margin, x - 68 + leftColWidth + (margin / 2), pageHeight - margin);
    }
  }
  
  // Full width gold background for section header
  const colWidth = isLeftColumn ? 68 : (pageWidth - 68 - margin * 3);
  doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.roundedRect(x - 2, y - 6, colWidth + 4, 8, 1, 1, 'F');
  
  // Text
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(text, x, y);
  
  return y + 10;
};

// Helper function to add text with gold background (only text width)
const addTextWithGoldBg = (doc, text, x, y, goldRgb, fontSize = 9, fontStyle = 'bold') => {
  doc.setFontSize(fontSize);
  doc.setFont('helvetica', fontStyle);
  const textWidth = doc.getTextWidth(text);
  
  // Gold background only for text width
  doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.roundedRect(x - 1, y - 3.5, textWidth + 2, 4, 0.5, 0.5, 'F');
  
  // Text
  doc.setTextColor(0, 0, 0);
  doc.text(text, x, y);
  
  return y + 4.5;
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
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 12;
  const leftColWidth = 68;
  const rightColWidth = pageWidth - leftColWidth - (margin * 3);
  const leftColX = margin;
  const rightColX = leftColX + leftColWidth + margin;
  let currentY = margin;
  const goldRgb = hexToRgb(GOLD);
  const darkGoldRgb = hexToRgb(DARK_GOLD);

  // Set default font
  doc.setFont('helvetica');

  // ========== MODERN HEADER SECTION ==========
  // Gold gradient background
  doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
  doc.rect(0, 0, pageWidth, 42, 'F');
  
  // Dark gold accent line
  doc.setFillColor(darkGoldRgb.r, darkGoldRgb.g, darkGoldRgb.b);
  doc.rect(0, 40, pageWidth, 2, 'F');

  // Name with shadow effect
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(profileData.name, margin, 20);

  // Position
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text(profileData.position, margin, 26);

  // Tagline
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'italic');
  doc.text(profileData.tagline, margin, 32);

  // QR Code with border
  const qrCode = await generateQRCode(profileData.portfolio);
  if (qrCode) {
    const qrSize = 28;
    const qrX = pageWidth - margin - qrSize;
    const qrY = 8;
    
    // White background for QR
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(qrX - 1, qrY - 1, qrSize + 2, qrSize + 2, 1, 1, 'F');
    
    doc.addImage(qrCode, 'PNG', qrX, qrY, qrSize, qrSize);
    
    // Label
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text('Portfolio', qrX + qrSize / 2, qrY + qrSize + 3, { align: 'center' });
  }

  currentY = 50;

  // ========== LEFT COLUMN ==========
  let leftY = currentY;

  // Profile Section with box
  const profileStartY = leftY;
  leftY = addSectionHeader(doc, 'PROFILE', leftColX, leftY, goldRgb, pageHeight, margin, pageWidth, true);
  
  // Add subtle background for profile content
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(leftColX - 1, leftY - 2, leftColWidth + 2, 1, 0.5, 0.5, 'F');
  
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);
  profileData.about.forEach((para, idx) => {
    if (idx > 0) leftY += 3;
    // Check page break
    if (checkPageBreak(doc, leftY, 15, pageHeight, margin)) {
      leftY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    const lines = doc.splitTextToSize(para, leftColWidth - 5);
    doc.text(lines, leftColX, leftY);
    leftY += lines.length * 3.5;
  });

  // Add border around profile section
  const profileEndY = leftY;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.roundedRect(leftColX - 1, profileStartY - 1, leftColWidth + 2, profileEndY - profileStartY + 2, 1, 1, 'D');

  leftY += 8;

  // Contact Section with box
  const contactStartY = leftY;
  leftY = addSectionHeader(doc, 'CONTACT', leftColX, leftY, goldRgb, pageHeight, margin, pageWidth, true);
  
  // Add subtle background for contact content
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(leftColX - 1, leftY - 2, leftColWidth + 2, 1, 0.5, 0.5, 'F');
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);
  
  const contactItems = [
    { label: 'Email:', value: profileData.email, icon: '✉' },
    { label: 'Location:', value: profileData.location, icon: '📍' },
    { label: 'LinkedIn:', value: profileData.linkedin, icon: '💼' },
    { label: 'GitHub:', value: profileData.github.replace('https://', ''), icon: '💻' },
    { label: 'Portfolio:', value: profileData.portfolio.replace('https://', '').replace('/', ''), icon: '🌐' },
    { label: 'Status:', value: profileData.status, icon: '✅' }
  ];
  
  contactItems.forEach((item, idx) => {
    if (idx > 0) leftY += 3;
    
    // Check page break
    if (checkPageBreak(doc, leftY, 10, pageHeight, margin)) {
      leftY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Icon
    doc.setFontSize(7);
    doc.text(item.icon, leftColX, leftY);
    
    doc.setFont('helvetica', 'bold');
    doc.text(item.label, leftColX + 4, leftY);
    doc.setFont('helvetica', 'normal');
    const labelWidth = doc.getTextWidth(item.label) + 4;
    const valueX = leftColX + labelWidth + 2;
    const valueWidth = leftColWidth - labelWidth - 2;
    const valueLines = doc.splitTextToSize(item.value, valueWidth);
    doc.text(valueLines, valueX, leftY);
    leftY += valueLines.length * 3.5;
  });
  
  // Status description
  leftY += 2;
  if (checkPageBreak(doc, leftY, 5, pageHeight, margin)) {
    leftY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
    doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.setLineWidth(0.2);
    doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
  }
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(80, 80, 80);
  const statusLines = doc.splitTextToSize(profileData.statusDesc, leftColWidth - 5);
  doc.text(statusLines, leftColX, leftY);
  leftY += statusLines.length * 3.5;
  
  // Add border around contact section
  const contactEndY = leftY;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.roundedRect(leftColX - 1, contactStartY - 1, leftColWidth + 2, contactEndY - contactStartY + 2, 1, 1, 'D');

  leftY += 8;

  // Core Values Section
  const valuesStartY = leftY;
  leftY = addSectionHeader(doc, 'CORE VALUES', leftColX, leftY, goldRgb, pageHeight, margin, pageWidth, true);
  
  // Add subtle background for values content
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(leftColX - 1, leftY - 2, leftColWidth + 2, 1, 0.5, 0.5, 'F');
  
  // Check page break before values
  if (checkPageBreak(doc, leftY, 25, pageHeight, margin)) {
    leftY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
    doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.setLineWidth(0.2);
    doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
  }
  
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);
  const valueIcons = ['🎯', '📊', '🚀', '🎨', '🤝', '🔄'];
  profileData.coreValues.forEach((value, idx) => {
    if (idx > 0 && idx % 2 === 0) leftY += 2;
    const xPos = idx % 2 === 0 ? leftColX : leftColX + leftColWidth / 2 + 2;
    if (idx % 2 === 0 && idx > 0) leftY += 3.5;
    
    // Icon
    doc.setFontSize(7);
    doc.text(valueIcons[idx] || '•', xPos, leftY);
    doc.text(value, xPos + 4, leftY);
    
    if (idx % 2 === 1) leftY += 3.5;
  });
  if (profileData.coreValues.length % 2 === 1) leftY += 3.5;
  
  // Add border around core values section
  const valuesEndY = leftY;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.roundedRect(leftColX - 1, valuesStartY - 1, leftColWidth + 2, valuesEndY - valuesStartY + 2, 1, 1, 'D');

  leftY += 8;

  // Skills Section
  const skillsStartY = leftY;
  leftY = addSectionHeader(doc, 'SKILLS', leftColX, leftY, goldRgb, pageHeight, margin, pageWidth, true);
  
  // Add subtle background for skills content
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(leftColX - 1, leftY - 2, leftColWidth + 2, 1, 0.5, 0.5, 'F');
  
  const skillCategories = [
    { name: 'Programming', skills: skillsData.programming, icon: '💻' },
    { name: 'Frameworks', skills: skillsData.frameworks, icon: '⚛️' },
    { name: 'Design', skills: skillsData.design, icon: '🎨' },
    { name: 'Data & Analytics', skills: skillsData.data, icon: '📈' },
    { name: 'Tools', skills: skillsData.tools, icon: '🛠️' },
    { name: 'Product & Research', skills: skillsData.product.slice(0, 5), icon: '🔬' }
  ];
  
  skillCategories.forEach((category, idx) => {
    if (idx > 0) leftY += 3;
    
    // Check page break
    if (checkPageBreak(doc, leftY, 10, pageHeight, margin)) {
      leftY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Category name with icon and gold accent
    doc.setFontSize(6.5);
    doc.text(category.icon, leftColX, leftY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(40, 40, 40);
    doc.text(`${category.name}:`, leftColX + 4, leftY);
    
    // Gold accent line
    doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.setLineWidth(0.2);
    doc.line(leftColX, leftY + 1.5, leftColX + 15, leftY + 1.5);
    
    leftY += 3.5;
    doc.setFont('helvetica', 'normal');
    const skillText = category.skills.join(', ');
    const skillLines = doc.splitTextToSize(skillText, leftColWidth - 5);
    doc.text(skillLines, leftColX, leftY);
    leftY += skillLines.length * 3;
  });
  
  // Add border around skills section
  const skillsEndY = leftY;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.roundedRect(leftColX - 1, skillsStartY - 1, leftColWidth + 2, skillsEndY - skillsStartY + 2, 1, 1, 'D');

  leftY += 8;

  // Certificates Section
  const certsStartY = leftY;
  leftY = addSectionHeader(doc, 'CERTIFICATES', leftColX, leftY, goldRgb, pageHeight, margin, pageWidth, true);
  
  // Add subtle background for certificates content
  doc.setFillColor(250, 250, 250);
  doc.roundedRect(leftColX - 1, leftY - 2, leftColWidth + 2, 1, 0.5, 0.5, 'F');
  
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);
  certificatesData.slice(0, 6).forEach((cert, idx) => {
    if (idx > 0) leftY += 2;
    
    // Check page break
    if (checkPageBreak(doc, leftY, 8, pageHeight, margin)) {
      leftY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Certificate icon
    doc.setFontSize(7);
    doc.text('🏆', leftColX, leftY);
    
    doc.setFont('helvetica', 'bold');
    doc.text(`${cert.name}`, leftColX + 4, leftY);
    leftY += 3;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(80, 80, 80);
    doc.text(`${cert.issuer} (${cert.year})`, leftColX + 6, leftY);
    leftY += 4;
  });
  
  // Add border around certificates section
  const certsEndY = leftY;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.roundedRect(leftColX - 1, certsStartY - 1, leftColWidth + 2, certsEndY - certsStartY + 2, 1, 1, 'D');

  // ========== RIGHT COLUMN ==========
  // Start right column at the same Y as left column to avoid gap
  let rightY = currentY;

  // Education Section
  rightY = addSectionHeader(doc, 'EDUCATION', rightColX, rightY, goldRgb, pageHeight, margin, pageWidth, false);
  
  educationData.forEach((edu, index) => {
    if (index > 0) {
      rightY += 3;
    }
    
    // Check page break
    if (checkPageBreak(doc, rightY, 30, pageHeight, margin)) {
      rightY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      // Redraw divider
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Institution name with gold background (only text width)
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    const instTextWidth = doc.getTextWidth(edu.institution);
    doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.roundedRect(rightColX - 1, rightY - 4, instTextWidth + 2, 5, 0.5, 0.5, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.text(edu.institution, rightColX, rightY);
    
    rightY += 6;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    const degreeLines = doc.splitTextToSize(edu.degree, rightColWidth - 5);
    doc.text(degreeLines, rightColX, rightY);
    rightY += degreeLines.length * 3.5;
    
    doc.setFontSize(7);
    if (edu.gpa) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.text(`GPA: ${edu.gpa}`, rightColX, rightY);
      rightY += 3.5;
      doc.setTextColor(40, 40, 40);
      doc.setFont('helvetica', 'normal');
    }
    doc.text(edu.period, rightColX, rightY);
    doc.text(edu.location, rightColX + 40, rightY);
    rightY += 3.5;
    
    // Description
    doc.setFontSize(6.5);
    const descLines = doc.splitTextToSize(edu.description, rightColWidth - 5);
    doc.text(descLines, rightColX, rightY);
    rightY += descLines.length * 3 + 2;
  });

  rightY += 3;

  // Organizations Section
  rightY = addSectionHeader(doc, 'ORGANIZATIONS', rightColX, rightY, goldRgb, pageHeight, margin, pageWidth, false);
  
  organizationsData.forEach((org, index) => {
    if (index > 0) {
      rightY += 2;
    }
    
    // Check page break
    if (checkPageBreak(doc, rightY, 25, pageHeight, margin)) {
      rightY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      // Redraw divider
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Position with gold background (only text width)
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    const posLines = doc.splitTextToSize(org.position, rightColWidth - 5);
    const firstLineText = posLines[0];
    const posTextWidth = doc.getTextWidth(firstLineText);
    doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.roundedRect(rightColX - 1, rightY - 3.5, posTextWidth + 2, 4, 0.5, 0.5, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.text(posLines, rightColX, rightY);
    rightY += posLines.length * 3.5;
    
    rightY += 2;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    doc.text(org.organization, rightColX, rightY);
    rightY += 3.5;
    
    doc.setFontSize(7);
    doc.text(org.period, rightColX, rightY);
    rightY += 3.5;
    
    // Description
    doc.setFontSize(6.5);
    const descLines = doc.splitTextToSize(org.description, rightColWidth - 5);
    doc.text(descLines, rightColX, rightY);
    rightY += descLines.length * 3 + 2;
    
    // Skills
    if (org.skills && org.skills.length > 0) {
      doc.setFontSize(6);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      const skillText = org.skills.slice(0, 4).join(' • ');
      const skillLines = doc.splitTextToSize(skillText, rightColWidth - 5);
      doc.text(skillLines, rightColX, rightY);
      rightY += skillLines.length * 2.5 + 1;
    }
  });

  rightY += 3;

  // Competitions Section
  rightY = addSectionHeader(doc, 'COMPETITIONS', rightColX, rightY, goldRgb, pageHeight, margin, pageWidth, false);
  
  competitionsData.forEach((comp, index) => {
    if (index > 0) {
      rightY += 2;
    }
    
    // Check page break
    if (checkPageBreak(doc, rightY, 20, pageHeight, margin)) {
      rightY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      // Redraw divider
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Competition name with gold background (only text width)
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    const compTextWidth = doc.getTextWidth(comp.name);
    doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.roundedRect(rightColX - 1, rightY - 3.5, compTextWidth + 2, 4, 0.5, 0.5, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.text(comp.name, rightColX, rightY);
    rightY += 3.5;
    
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    doc.text(`${comp.division} • ${comp.organization}`, rightColX, rightY);
    rightY += 3.5;
    
    doc.setFontSize(7);
    doc.text(comp.period, rightColX, rightY);
    rightY += 3.5;
    
    // Description
    doc.setFontSize(6.5);
    const descLines = doc.splitTextToSize(comp.description, rightColWidth - 5);
    doc.text(descLines, rightColX, rightY);
    rightY += descLines.length * 3 + 2;
  });

  rightY += 3;

  // Projects Section
  rightY = addSectionHeader(doc, 'FEATURED PROJECTS', rightColX, rightY, goldRgb, pageHeight, margin, pageWidth, false);
  
  projectsData.forEach((project, index) => {
    if (index > 0) {
      rightY += 2;
    }
    
    // Check page break
    if (checkPageBreak(doc, rightY, 30, pageHeight, margin)) {
      rightY = addNewPage(doc, pageWidth, pageHeight, margin, goldRgb);
      // Redraw divider
      doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
      doc.setLineWidth(0.2);
      doc.line(leftColX + leftColWidth + (margin / 2), margin, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
    }
    
    // Project title with gold background (only text width)
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(project.title, rightColWidth - 5);
    const firstLineText = titleLines[0];
    const titleTextWidth = doc.getTextWidth(firstLineText);
    doc.setFillColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.roundedRect(rightColX - 1, rightY - 4, titleTextWidth + 2, 5, 0.5, 0.5, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.text(titleLines, rightColX, rightY);
    rightY += titleLines.length * 3.5;
    
    rightY += 2;
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    doc.text(`${project.role} • ${project.period}`, rightColX, rightY);
    rightY += 3.5;
    
    // Type badge
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.text(`[${project.type}]`, rightColX, rightY);
    rightY += 3.5;
    
    // Description
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    const descLines = doc.splitTextToSize(project.description, rightColWidth - 5);
    doc.text(descLines, rightColX, rightY);
    rightY += descLines.length * 3 + 2;
    
    // Skills
    if (project.skills && project.skills.length > 0) {
      doc.setFontSize(6);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      const skillText = project.skills.slice(0, 5).join(' • ');
      const skillLines = doc.splitTextToSize(skillText, rightColWidth - 5);
      doc.text(skillLines, rightColX, rightY);
      rightY += skillLines.length * 2.5 + 1;
    }
  });

  // Add gold divider line between columns on all pages
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setDrawColor(goldRgb.r, goldRgb.g, goldRgb.b);
    doc.setLineWidth(0.2);
    const startY = i === 1 ? currentY - 5 : margin;
    doc.line(leftColX + leftColWidth + (margin / 2), startY, leftColX + leftColWidth + (margin / 2), pageHeight - margin);
  }
  
  // Set back to last page
  doc.setPage(totalPages);

  // Save PDF
  doc.save('Dimal_Karim_Ahmad_CV.pdf');
};
