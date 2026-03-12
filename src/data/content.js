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
  { name: 'L&T', logo: 'https://logo.clearbit.com/larsentoubro.com' },
  { name: 'Nokia', logo: 'https://logo.clearbit.com/nokia.com' },
  { name: 'Cadence', logo: 'https://logo.clearbit.com/cadence.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
  { name: 'Hexaware', logo: 'https://logo.clearbit.com/hexaware.com' },
  { name: 'Bosch', logo: 'https://logo.clearbit.com/bosch.com' },
  { name: 'TAFE', logo: 'https://logo.clearbit.com/tafe.com' }
];

export const recruiterDetails = [
  {
    name: 'TCS',
    logo: 'https://logo.clearbit.com/tcs.com',
    about: 'Tata Consultancy Services is a global IT services and consulting organization supporting digital transformation across industries.',
    industry: 'IT Services & Consulting',
    visitWindow: 'Typically visits between August and November for pre-final and final year hiring drives.',
    rolesOffered: ['Assistant System Engineer', 'Developer', 'Digital Profile Engineer', 'Support Analyst'],
    skillsExpected: ['Data structures and algorithms', 'Programming fundamentals', 'Communication skills', 'Aptitude and reasoning'],
    packages: 'Typical packages range between 3.4 LPA and 7.2 LPA based on role track.',
    processSteps: ['Online aptitude assessment', 'Technical screening', 'Managerial discussion', 'HR interview and offer release'],
    placementStats: 'Strong repeat recruiter with consistent annual bulk hiring from core IT and circuit branches.'
  },
  {
    name: 'Infosys',
    logo: 'https://logo.clearbit.com/infosys.com',
    about: 'Infosys is a global leader in next-generation digital services and consulting with strong campus engagement programs.',
    industry: 'IT Services & Digital Transformation',
    visitWindow: 'Usually visits from July to October through campus drives and pooled hiring events.',
    rolesOffered: ['Systems Engineer', 'Specialist Programmer', 'Digital Specialist Engineer', 'Operations Executive'],
    skillsExpected: ['Object-oriented programming', 'Database basics', 'Problem solving', 'Verbal communication'],
    packages: 'Typical packages range between 3.6 LPA and 9.5 LPA depending on role.',
    processSteps: ['Online test', 'Coding challenge', 'Technical interview', 'HR discussion'],
    placementStats: 'High selection count from CSE, IT, ECE, and allied streams each placement cycle.'
  },
  {
    name: 'Cognizant',
    logo: 'https://logo.clearbit.com/cognizant.com',
    about: 'Cognizant provides technology, consulting, and business process services to enterprises worldwide.',
    industry: 'IT Services & Business Solutions',
    visitWindow: 'Generally visits during August to December with multiple role-based hiring rounds.',
    rolesOffered: ['Programmer Analyst Trainee', 'GenC Developer', 'QA Analyst', 'Infra Support Associate'],
    skillsExpected: ['Coding proficiency', 'Analytical thinking', 'Debugging fundamentals', 'Professional communication'],
    packages: 'Typical packages range between 4 LPA and 7 LPA.',
    processSteps: ['Aptitude and communication screening', 'Technical evaluation', 'HR interview', 'Offer rollout'],
    placementStats: 'Consistent mass recruiter with excellent conversion rates for trained candidates.'
  },
  {
    name: 'Zoho',
    logo: 'https://logo.clearbit.com/zoho.com',
    about: 'Zoho builds cloud-based business software products and is known for high-impact engineering roles from campus recruitment.',
    industry: 'Product Software',
    visitWindow: 'Visits mostly between September and January for software product development roles.',
    rolesOffered: ['Software Developer', 'Technical Support Engineer', 'QA Engineer', 'Content/Technical Writer'],
    skillsExpected: ['Strong coding skills', 'System design fundamentals', 'Problem solving', 'English communication'],
    packages: 'Typical packages range between 5 LPA and 12 LPA based on profile.',
    processSteps: ['Programming test', 'Advanced coding round', 'Technical panel interviews', 'Final HR round'],
    placementStats: 'Recognized premium recruiter with selective, high-value offers to top performers.'
  },
  {
    name: 'HCL',
    logo: 'https://logo.clearbit.com/hcltech.com',
    about: 'HCLTech is a global technology company delivering engineering, cloud, and digital services to major enterprises.',
    industry: 'IT Services, Engineering & R&D',
    visitWindow: 'Commonly conducts recruitment between August and December.',
    rolesOffered: ['Graduate Engineer Trainee', 'Software Engineer', 'Support Associate'],
    skillsExpected: ['Coding basics', 'Networking and OS basics', 'Aptitude', 'Team communication'],
    packages: 'Typical packages range between 3.5 LPA and 6.5 LPA.',
    processSteps: ['Aptitude and technical test', 'Group discussion or communication round', 'Technical and HR interview'],
    placementStats: 'Frequent recruiter with opportunities across IT and service delivery tracks.'
  },
  {
    name: 'Capgemini',
    logo: 'https://logo.clearbit.com/capgemini.com',
    about: 'Capgemini is a multinational consulting and technology services company with broad campus hiring programs.',
    industry: 'Technology Consulting & Services',
    visitWindow: 'Usually appears in major campus drives from August through November.',
    rolesOffered: ['Analyst', 'Software Engineer', 'Infrastructure Engineer', 'Consulting Associate'],
    skillsExpected: ['Programming logic', 'Analytical aptitude', 'Communication and collaboration', 'Adaptability'],
    packages: 'Typical packages range between 4 LPA and 7.5 LPA.',
    processSteps: ['Online assessment', 'Technical evaluation', 'Behavioral interview', 'HR finalization'],
    placementStats: 'Stable annual recruiter with strong opportunities for IT-focused graduates.'
  },
  {
    name: 'Tech Mahindra',
    logo: 'https://logo.clearbit.com/techmahindra.com',
    about: 'Tech Mahindra delivers digital transformation, consulting, and business re-engineering services globally.',
    industry: 'IT Services & Digital Engineering',
    visitWindow: 'Typically schedules drives during August to December.',
    rolesOffered: ['Associate Software Engineer', 'Network Engineer', 'Business Process Associate'],
    skillsExpected: ['Fundamental coding', 'Logical reasoning', 'Network concepts', 'Client communication'],
    packages: 'Typical packages range between 3.2 LPA and 6 LPA.',
    processSteps: ['Aptitude test', 'Technical test', 'Technical interview', 'HR interaction'],
    placementStats: 'Regular recruiter with opportunities in IT and telecom-oriented profiles.'
  },
  {
    name: 'L&T',
    logo: 'https://logo.clearbit.com/larsentoubro.com',
    about: 'Larsen & Toubro is a leading engineering and infrastructure conglomerate with strong graduate engineering intake.',
    industry: 'Engineering, Infrastructure & Manufacturing',
    visitWindow: 'Usually visits from September to January for engineering and project roles.',
    rolesOffered: ['Graduate Engineer Trainee', 'Design Engineer', 'Site Engineer', 'Project Planning Associate'],
    skillsExpected: ['Core engineering fundamentals', 'CAD and design basics', 'Project planning mindset', 'Professional communication'],
    packages: 'Typical packages range between 4 LPA and 8 LPA depending on domain and role.',
    processSteps: ['Aptitude and technical test', 'Domain technical interview', 'Managerial round', 'HR round'],
    placementStats: 'Preferred recruiter for civil, mechanical, EEE, and multidisciplinary engineering students.'
  },
  {
    name: 'Nokia',
    logo: 'https://logo.clearbit.com/nokia.com',
    about: 'Nokia builds telecom networks and advanced communications technology for global operators and enterprises.',
    industry: 'Telecommunications & Network Technology',
    visitWindow: 'Generally visits between September and February for telecom and software roles.',
    rolesOffered: ['R&D Engineer', 'Network Software Engineer', 'Testing Engineer', 'Operations Associate'],
    skillsExpected: ['Computer networks', 'Linux and scripting basics', 'Programming', 'Analytical skills'],
    packages: 'Typical packages range between 5 LPA and 11 LPA.',
    processSteps: ['Online technical test', 'Coding or domain round', 'Technical panel interview', 'HR final interview'],
    placementStats: 'Select recruiter for ECE, CSE, and IT students with strong domain preparation.'
  },
  {
    name: 'Cadence',
    logo: 'https://logo.clearbit.com/cadence.com',
    about: 'Cadence develops electronic design automation software and semiconductor design solutions.',
    industry: 'Semiconductor Design & EDA Software',
    visitWindow: 'Typically visits in the core placement season from August to December.',
    rolesOffered: ['Application Engineer', 'R&D Engineer', 'Verification Engineer', 'Software Engineer'],
    skillsExpected: ['VLSI concepts', 'Digital electronics', 'C/C++ programming', 'Problem solving and communication'],
    packages: 'Typical packages range between 8 LPA and 16 LPA for selected profiles.',
    processSteps: ['Online technical screening', 'Domain-specific technical interview', 'Final panel and HR'],
    placementStats: 'Premium recruiter with selective hiring for high-performing electronics and coding candidates.'
  },
  {
    name: 'IBM',
    logo: 'https://logo.clearbit.com/ibm.com',
    about: 'IBM is a global technology and consulting company focused on cloud, AI, enterprise software, and services.',
    industry: 'Cloud, AI & Enterprise Technology',
    visitWindow: 'Usually participates between July and December based on hiring demand.',
    rolesOffered: ['Associate System Engineer', 'Software Developer', 'Data Analyst', 'Technical Support Engineer'],
    skillsExpected: ['Programming basics', 'Cloud fundamentals', 'Data reasoning', 'Communication and adaptability'],
    packages: 'Typical packages range between 4.5 LPA and 10 LPA.',
    processSteps: ['Aptitude and coding test', 'Technical interviews', 'HR and offer formalities'],
    placementStats: 'Steady recruiter with diversified roles in software, support, and analytics tracks.'
  },
  {
    name: 'Hexaware',
    logo: 'https://logo.clearbit.com/hexaware.com',
    about: 'Hexaware is a global IT and digital solutions provider with strong entry-level recruitment initiatives.',
    industry: 'IT Services & Automation Solutions',
    visitWindow: 'Typically recruits from August to November during central placement drives.',
    rolesOffered: ['Trainee Engineer', 'Software Associate', 'Support Engineer'],
    skillsExpected: ['Logical aptitude', 'Programming fundamentals', 'Testing concepts', 'Communication'],
    packages: 'Typical packages range between 3.5 LPA and 6.5 LPA.',
    processSteps: ['Online aptitude test', 'Technical screening', 'Communication round', 'HR interview'],
    placementStats: 'Reliable recruiter for service and software delivery profiles.'
  },
  {
    name: 'Bosch',
    logo: 'https://logo.clearbit.com/bosch.com',
    about: 'Bosch is a global engineering and technology company spanning mobility, industrial, and consumer solutions.',
    industry: 'Engineering, Automotive & Industrial Technology',
    visitWindow: 'Usually visits during September to January for engineering and software profiles.',
    rolesOffered: ['Graduate Engineer Trainee', 'Embedded Engineer', 'Manufacturing Associate', 'Software Engineer'],
    skillsExpected: ['Core engineering concepts', 'Embedded/system basics', 'Problem solving', 'Team collaboration'],
    packages: 'Typical packages range between 4.2 LPA and 9 LPA.',
    processSteps: ['Aptitude and technical test', 'Domain interview', 'Managerial and HR rounds'],
    placementStats: 'Preferred recruiter for mechanical, automobile, EEE, and ECE focused roles.'
  },
  {
    name: 'TAFE',
    logo: 'https://logo.clearbit.com/tafe.com',
    about: 'TAFE is a major tractor and farm equipment manufacturer with strong opportunities for core engineering graduates.',
    industry: 'Automotive & Farm Equipment Manufacturing',
    visitWindow: 'Generally conducts recruitment between October and February for manufacturing and product roles.',
    rolesOffered: ['Graduate Engineer Trainee', 'Production Engineer', 'Quality Engineer', 'Design Engineer'],
    skillsExpected: ['Manufacturing fundamentals', 'Mechanical design basics', 'Quality tools', 'Communication and discipline'],
    packages: 'Typical packages range between 3.8 LPA and 7.5 LPA.',
    processSteps: ['Aptitude test', 'Core technical interview', 'Plant/process interaction', 'HR discussion'],
    placementStats: 'Strong recruiter for mechanical, automobile, and production-oriented student profiles.'
  }
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
