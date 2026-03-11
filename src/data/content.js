import campus from '../assets/images/campus.jpg';
import deptCse from '../assets/images/dept-cse.jpg';
import deptIt from '../assets/images/dept-it.jpg';
import deptEce from '../assets/images/dept-ece.jpg';
import deptEee from '../assets/images/dept-eee.jpg';
import deptMech from '../assets/images/dept-mech.jpg';
import deptCivil from '../assets/images/dept-civil.jpg';
import facilityLibrary from '../assets/images/facility-library.jpg';
import facilityComputerLab from '../assets/images/facility-computer-lab.jpg';
import facilityResearchLab from '../assets/images/facility-research-lab.jpg';
import facilityHostel from '../assets/images/facility-hostel.jpg';
import facilitySports from '../assets/images/facility-sports.jpg';
import facilityTransport from '../assets/images/facility-transport.jpg';
import facilityAuditorium from '../assets/images/facility-auditorium.jpg';
import facilitySmartClassroom from '../assets/images/facility-smart-classroom.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import gallery7 from '../assets/images/gallery-7.jpg';
import gallery8 from '../assets/images/gallery-8.jpg';
import { deptData } from './deptData';

const stripHtml = (value = '') => value.replace(/<br\s*\/?>/gi, ' • ').replace(/<[^>]*>/g, '');

export const announcement = 'Admissions open for 2026 intake. Applications are invited for UG engineering programmes and Data Science specialization.';

export const topQuickLinks = [
  { title: 'Admissions', link: '/contact', external: false },
  { title: 'Student Portal', link: 'https://gcee.ac.in/webmail', external: true },
  { title: 'Alumni', link: '/events', external: false }
];

export const heroSlides = [
  {
    image: campus,
    title: 'Government College of Engineering, Erode',
    subtitle: 'Global-standard engineering education with strong academics, research innovation, and vibrant student life.'
  },
  {
    image: gallery2,
    title: 'Empowering Future Engineers',
    subtitle: 'A 200+ acre green campus that blends modern learning spaces, advanced laboratories, and collaborative culture.'
  },
  {
    image: gallery3,
    title: 'Innovation, Impact, and Career Success',
    subtitle: 'Industry-ready curriculum, project-based learning, and high-impact placements with leading recruiters.'
  }
];

export const departmentList = [
  { id: 'cse', name: 'Computer Science Engineering', icon: '💻', image: deptCse },
  { id: 'it', name: 'Information Technology', icon: '🌐', image: deptIt },
  { id: 'ece', name: 'Electronics and Communication Engineering', icon: '📡', image: deptEce },
  { id: 'eee', name: 'Electrical and Electronics Engineering', icon: '⚡', image: deptEee },
  { id: 'mech', name: 'Mechanical Engineering', icon: '⚙️', image: deptMech },
  { id: 'civil', name: 'Civil Engineering', icon: '🏗️', image: deptCivil },
  { id: 'auto', name: 'Automobile Engineering', icon: '🚘', image: deptData.auto.img },
  { id: 'ds', name: 'Data Science', icon: '📊', image: gallery4 }
].map((item) => ({
  ...item,
  description: deptData[item.id].desc,
  shortDescription: `${deptData[item.id].desc.slice(0, 155).trim()}...`
}));

export const facultyHighlights = [
  { ...deptData.cse.hod, department: 'Computer Science Engineering' },
  { ...deptData.it.staff[0], department: 'Information Technology' },
  { ...deptData.ece.staff[0], department: 'Electronics and Communication Engineering' },
  { ...deptData.eee.hod, department: 'Electrical and Electronics Engineering' },
  { ...deptData.mech.staff[0], department: 'Mechanical Engineering' },
  { ...deptData.civil.staff[0], department: 'Civil Engineering' },
  { ...deptData.auto.staff[0], department: 'Automobile Engineering' },
  { ...deptData.ds.hod, department: 'Data Science' }
].map((item) => ({ ...item, plainDetails: stripHtml(item.details || '') }));

export const administrationItems = [
  { title: 'Principal', value: '9280091825', description: 'Academic leadership, administration, and institutional development.' },
  { title: 'Help Desk', value: '9280091826, +91 0424 2533579', description: 'Official help desk for general enquiries and support.' },
  { title: 'Students Admission', value: '9280091827', description: 'Admissions support for prospective students and parents.' },
  { title: 'Accounts Office', value: '9280091828', description: 'Fee payments, financial documents, and office support.' },
  { title: 'Exam Cell', value: '9280091829', description: 'Examination schedules, results, and academic records.' },
  { title: 'Placement Cell', value: '9280091830', description: 'Training, internship, and campus placement coordination.' }
];

export const facilities = [
  { id: 'library', title: 'Library', image: facilityLibrary, description: 'Extensive collection of technical books, journals, standards, and digital resources.' },
  { id: 'computer-labs', title: 'Computer Labs', image: facilityComputerLab, description: 'High-performance systems for coding, AI experimentation, and software development.' },
  { id: 'research-labs', title: 'Research Labs', image: facilityResearchLab, description: 'Domain-specific labs supporting funded projects, R&D, and innovation activities.' },
  { id: 'hostel', title: 'Hostel', image: facilityHostel, description: 'Comfortable accommodation with secure and student-friendly living facilities.' },
  { id: 'sports', title: 'Sports Facilities', image: facilitySports, description: 'Indoor and outdoor sports ecosystems that support wellness and leadership.' },
  { id: 'transport', title: 'Transportation', image: facilityTransport, description: 'Well-connected transport access for students, staff, and visitors.' },
  { id: 'auditorium', title: 'Auditorium', image: facilityAuditorium, description: 'A modern venue for conferences, symposiums, cultural programmes, and events.' },
  { id: 'smart-classrooms', title: 'Smart Classrooms', image: facilitySmartClassroom, description: 'Technology-enabled classrooms for immersive and outcome-driven learning.' }
];

export const placementStats = [
  { label: 'Students Enrolled', value: 3200, suffix: '+' },
  { label: 'Departments', value: 8, suffix: '' },
  { label: 'Faculty Members', value: 240, suffix: '+' },
  { label: 'Placement Rate', value: 92, suffix: '%' }
];

export const recruiters = ['TCS', 'Infosys', 'Cognizant', 'Zoho', 'HCL', 'Capgemini', 'Tech Mahindra', 'L&T', 'Nokia', 'Cadence', 'IBM', 'Hexaware', 'Bosch', 'TAFE'];

export const recruiterLogos = [
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
  { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com' },
  { name: 'Zoho', logo: 'https://logo.clearbit.com/zoho.com' },
  { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com' },
  { name: 'Capgemini', logo: 'https://logo.clearbit.com/capgemini.com' },
  { name: 'Tech Mahindra', logo: 'https://logo.clearbit.com/techmahindra.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' }
];

export const placementStories = [
  {
    name: 'S. Harshini',
    company: 'Sierra Support Centre',
    package: '38.5 LPA',
    quote: 'Campus mentoring and project reviews at GCEE helped me build confidence for global interviews.'
  },
  {
    name: 'M. Vishnu Prakash',
    company: 'Zoho Corporation',
    package: '19.2 LPA',
    quote: 'Hands-on coding culture and placement training played a major role in my recruitment journey.'
  },
  {
    name: 'K. Janani',
    company: 'Cognizant',
    package: '11.6 LPA',
    quote: 'Industry interaction sessions and communication workshops prepared me for career success.'
  }
];

export const eventItems = [
  {
    id: 'silver-jubilee-meet',
    title: '2000 Batch Silver Jubilee Meet',
    date: 'Jul 12, 2025',
    type: 'Alumni Event',
    image: gallery8,
    description: 'A vibrant alumni engagement programme with mentoring sessions and campus celebrations.',
    fullDescription: 'The Silver Jubilee Meet brings together alumni of the 2000 batch for a day of networking, mentorship, and institutional celebration. Sessions include student mentoring circles, alumni-industry talks, and collaborative initiatives for research and scholarships.',
    highlights: ['Alumni-student mentorship circles', 'Department reunions and networking', 'Career talks with industry leaders']
  },
  {
    id: 'hostel-foundation',
    title: 'Foundation Stone Laying Ceremony - Boys Hostel',
    date: '2025',
    type: 'Campus Infrastructure',
    image: gallery7,
    description: 'Major infrastructure expansion initiative to improve student accommodation facilities.',
    fullDescription: 'The campus inaugurated a major hostel expansion programme designed to provide additional accommodation capacity, upgraded amenities, and improved learning-support spaces for resident students.',
    highlights: ['Improved residential capacity', 'Student wellness amenities', 'Future-ready campus infrastructure']
  },
  {
    id: 'creative-thinking-workshop',
    title: 'Creative Thinking Training by Alumni',
    date: '2025',
    type: 'Workshop',
    image: gallery5,
    description: 'An interactive training workshop focused on design thinking and professional growth.',
    fullDescription: 'This workshop focused on idea generation, problem-solving frameworks, and innovation mindset practices. Alumni facilitators conducted team activities that linked design thinking to engineering applications.',
    highlights: ['Hands-on innovation exercises', 'Problem-solving case studies', 'Career readiness guidance']
  },
  {
    id: 'kalaikuyil-2025',
    title: 'கலைக்குயில் தமிழ்ப்பேரவை 2025',
    date: '2025',
    type: 'Cultural Program',
    image: gallery6,
    description: 'Cultural programme celebrating student talent, language heritage, and creativity.',
    fullDescription: 'கலைக்குயில் தமிழ்ப்பேரவை 2025 celebrated literature, theatre, music, and student-led performance arts. The event strengthened campus cultural life while encouraging interdisciplinary participation.',
    highlights: ['Music, drama, and literary showcases', 'Large student participation', 'Inclusive celebration of campus culture']
  }
];

export const recentNews = [
  {
    title: 'Pre-Incubation Centre at GCE Erode',
    date: '2025',
    description: 'StartupTN sanctioned a pre-incubation centre at GCEE to strengthen innovation and entrepreneurship.',
    link: '/events/creative-thinking-workshop',
    image: gallery5
  },
  {
    title: 'LABMAN Probe Sonicator in Mechanical Department',
    date: '2025',
    description: 'Mechanical Engineering department enhanced R&D capabilities through CMRG supported equipment.',
    link: '/events/hostel-foundation',
    image: deptMech
  },
  {
    title: 'Student Secures 38.5 LPA Offer',
    date: '2024',
    description: 'A proud placement milestone reflecting strong career training and technical excellence at GCEE.',
    link: '/events/silver-jubilee-meet',
    image: gallery6
  }
];

export const achievements = [
  {
    id: 'roll-of-honour',
    title: 'Roll of Honor',
    description: 'Recognizing top academic performers and distinction holders across programmes.',
    link: '/achievements/roll-of-honour'
  },
  {
    id: 'special-achievements',
    title: 'Special Achievements',
    description: 'Student accomplishments in placements, competitions, innovation, and technical events.',
    link: '/achievements/special-achievements'
  },
  {
    id: 'student-achievements',
    title: 'Student Achievements',
    description: 'Highlights of student achievements in academics, leadership, sports, and research impact.',
    link: '/achievements/student-achievements'
  },
  {
    id: 'industrial-collaborations',
    title: 'Industrial Collaborations',
    description: 'Partnerships with industries for training, internships, projects, and placement outcomes.',
    link: '/achievements/industrial-collaborations'
  }
];

export const achievementDetails = {
  'roll-of-honour': {
    title: 'Roll of Honor',
    summary: 'Academic rank holders and distinction achievers across all departments.',
    highlights: [
      'University rank achievements in core engineering disciplines',
      'Consistent high CGPA performers recognized every semester',
      'Merit scholarships awarded to outstanding students'
    ]
  },
  'special-achievements': {
    title: 'Special Achievements',
    summary: 'Exceptional accomplishments in technical competitions and innovation initiatives.',
    highlights: [
      'National-level hackathon wins and coding challenge rankings',
      'Patent filings and prototype demonstrations by student teams',
      'Multi-disciplinary project awards in smart infrastructure'
    ]
  },
  'student-achievements': {
    title: 'Student Achievements',
    summary: 'Achievements that reflect balanced excellence in academics, leadership, and extracurricular impact.',
    highlights: [
      'Leadership in student chapters, clubs, and technical societies',
      'Sports and cultural achievements at inter-college level',
      'Research paper publications by undergraduate teams'
    ]
  },
  'industrial-collaborations': {
    title: 'Industrial Collaborations',
    summary: 'Institution-industry linkages that improve employability, applied learning, and research relevance.',
    highlights: [
      'Industry-led workshops and certification initiatives',
      'Internship pipelines with regional and national recruiters',
      'Collaborative mini-projects and sponsored lab activities'
    ]
  }
};

export const galleryCategories = {
  campus: {
    label: 'Campus',
    images: [campus, gallery1, gallery2, gallery4, facilityHostel, facilitySports]
  },
  laboratories: {
    label: 'Laboratories',
    images: [facilityComputerLab, facilityResearchLab, facilitySmartClassroom, facilityLibrary, deptCse, deptEce]
  },
  events: {
    label: 'Events',
    images: [gallery5, gallery6, gallery7, gallery8, gallery2, gallery4]
  },
  students: {
    label: 'Students',
    images: [gallery3, gallery5, gallery6, gallery1, gallery7, gallery8]
  },
  'cultural-programs': {
    label: 'Cultural Programs',
    images: [gallery6, gallery5, gallery8, gallery2, gallery3, gallery7]
  }
};

export const contactInfo = {
  address: 'Government College of Engineering (IRTT), Erode - 638 316, Tamil Nadu, India.',
  email: 'gceeprincipal@gmail.com',
  phones: {
    principal: '9280091825',
    helpDesk: '9280091826, +91 0424 2533579',
    studentsAdmission: '9280091827',
    accountsOffice: '9280091828',
    examCell: '9280091829',
    placementCell: '9280091830'
  },
  mapLink: 'https://www.gcee.ac.in/Google_Map.php',
  howToReach: 'https://www.gcee.ac.in/HowToReach.jpg',
  antiRagging: '1800-180-5522 (Toll Free)'
};

export const quickLinks = [
  { title: 'Mandatory Disclosure', link: 'https://www.gcee.ac.in/AICTE/MandatoryDisclosure2025-26.pdf' },
  { title: 'Help Desk', link: 'https://www.gcee.ac.in/HelpDesk.php' },
  { title: 'EDC', link: 'https://www.gcee.ac.in/edp.php' },
  { title: 'IPDC', link: 'https://www.gcee.ac.in/IPDC.php' },
  { title: 'GCEE Mail', link: 'https://gcee.ac.in/webmail' },
  { title: 'NPTEL', link: 'https://sites.google.com/view/nptel-gce-erode/home' }
];

export const downloads = [
  { title: 'Academic Schedule', link: 'https://www.gcee.ac.in/' },
  { title: 'Staff Forms', link: 'https://www.gcee.ac.in/MQApplication.php' }
];

export const socialLinks = [
  { title: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61551298765616' },
  { title: 'Twitter', link: 'https://twitter.com/GceErode' },
  { title: 'Youtube', link: 'https://www.youtube.com/channel/UCDOtasTYkBrmuZTSNCuo6jg' }
];
