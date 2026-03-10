document.addEventListener('DOMContentLoaded', () => {

  // --- Hero Slider Logic ---
  const sliderImages = ["https://www.gcee.ac.in/assets/img/main/img1-1.jpg","https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg","https://www.gcee.ac.in/assets/img/sliders/layer/NammaGCEE2.jpeg","https://www.gcee.ac.in/assets/img/sliders/layer/bg1.jpg","https://www.gcee.ac.in/assets/img/sliders/layer/Auditorium1.jpeg","https://www.gcee.ac.in/assets/img/sliders/layer/ForeignLanLab.jpeg","https://www.gcee.ac.in/assets/img/sliders/layer/IndoorStadiumInnerView.jpeg","https://www.gcee.ac.in/assets/img/sliders/layer/bg8.jpg","https://www.gcee.ac.in/assets/img/main/new.gif"];
  const heroSlider = document.getElementById('hero-slider');
  
  if (heroSlider && sliderImages.length > 0) {
    sliderImages.forEach((src, idx) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (idx === 0 ? ' active' : '');
      slide.style.backgroundImage = `url('${src}')`;
      heroSlider.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = heroSlider.querySelectorAll('.slide');
    if (slides.length > 1) {
      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 4000);
    }
  }

  // --- About Section Slider Logic ---
  const aboutSliderImages = [
    "https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg",
    "https://www.gcee.ac.in/assets/img/sliders/layer/NammaGCEE2.jpeg",
    "https://www.gcee.ac.in/assets/img/sliders/layer/Auditorium1.jpeg",
    "https://www.gcee.ac.in/assets/img/main/img1-1.jpg",
    "https://www.gcee.ac.in/assets/img/sliders/layer/bg1.jpg",
    "https://www.gcee.ac.in/assets/img/sliders/layer/IndoorStadiumInnerView.jpeg"
  ];
  
  const aboutSlider = document.getElementById('about-slider');
  if (aboutSlider && aboutSliderImages.length > 0) {
    aboutSliderImages.forEach((src, idx) => {
      const slide = document.createElement('div');
      slide.className = 'about-slide' + (idx === 0 ? ' active' : '');
      slide.style.backgroundImage = `url('${src}')`;
      aboutSlider.appendChild(slide);
    });

    let currentAboutSlide = 0;
    const aboutSlides = aboutSlider.querySelectorAll('.about-slide');
    if (aboutSlides.length > 1) {
      setInterval(() => {
        aboutSlides[currentAboutSlide].classList.remove('active');
        currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;
        aboutSlides[currentAboutSlide].classList.add('active');
      }, 5000); // 5 seconds interval
    }
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (mobileMenuBtn.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(element => {
    revealOnScroll.observe(element);
  });

  // Tabs Functionality for Academics
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active to current
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Placements Marquee Population
  const recruiters = [
    "ZOHO", "TCS", "CTS", "Tech Mahindra", "TAFE", "Polaris", "NOKIA", 
    "Infoview", "Infosys", "IBM", "HCL", "CSS Corp", "Capgemini", "CADENCE", "Hexaware"
  ];

  const marquee = document.getElementById('marquee');
  if (marquee) {
    // Determine the content to append to marquee
    // We duplicate the array to ensure smooth infinite scrolling
    const fillMarquee = [...recruiters, ...recruiters, ...recruiters, ...recruiters];
    
    fillMarquee.forEach(company => {
      const span = document.createElement('span');
      span.classList.add('marquee-item');
      span.textContent = company;
      marquee.appendChild(span);
    });
  }

  // --- Department Data & Modal Logic ---
  const deptData = {
  "cse": {
    "title": "Computer Science and Engineering",
    "desc": "Information Technology has thrown open limitless possibilities .The whole world is now just a click away. What we have seen as a result of the IT revolution is just a tip of the iceburg.Needless to say the demand for quality computer science and engineering professionals will always be on the rise. Our students have access to some of the best learning tools that include 24x7 access to computing, digital library, internet resources and information services. Our students are programmed to be in sync with the evolving needs of the industry. They regularly visit leading IT Organisations in India and keep themselves updated with latest in the field.",
    "img": "https://www.gcee.ac.in/assets/img/main/cse01.jpg",
    "staff": [
      {
        "name": "Mr.R.Sivasubramanian",
        "role": "Associate Professor, Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/associate_professor1.jpg",
        "details": "Qualification: M.S<br>Experience : 30 Years<br>Area of Specialization : Datastructure, Software Project Management, Software Engineering<br>Conference : 2<br>Journals : 2<br>Contact Number :+91 9443971304<br>E-Mail ID :sivasubramanian@irttech.ac.in,usharss@gmail.com"
      },
      {
        "name": "Dr.G.Venkatachalam",
        "role": "Associate Professor, Dept. of CSE, GCE,Erode",
        "img": "https://www.gcee.ac.in/include/ajax/cse/associate_professor2.jpg",
        "details": "Qualification: M.E., Ph.D<br>Experience : 30 Years<br>Area of Specialization : Computer Networks, Microprocessor and Microcontrolers, Database<br>Conference : 2<br>Journal Publications : 10<br>Contact Number :9842794127<br>E-Mail ID :venkatachalam@irttech.ac.in"
      },
      {
        "name": "Mrs.M.Annapoorani",
        "role": "Assistant Professor(SR), Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor1.jpg",
        "details": "Qualification: M.E<br>Experience : 21 Years<br>Area of Specialization : Operating Systems, Data Structures<br>Conferences : 2<br>Contact Number :+91-9894513301<br>E-Mail ID :annapoorani@irttech.ac.in"
      },
      {
        "name": "Dr.S.Palanisamy",
        "role": "Assistant Professor(SR), Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor2.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 21 Years<br>Area of Specialization : XML Data Management<br>Conference & Journals : 5 & 2<br>Contact Number :+91-424-2533279-113, +91-424-2533279-117<br>E-Mail ID :palanisamy@irttech.ac.in"
      },
      {
        "name": "Dr.N.Magesh",
        "role": "Assistant Professor(SR), Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor3.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 24 Years<br>Area of Specialization : Machine Learning, Ontology, Image Processing, Analysis of Algorithms, Data analytics<br>Conference: 14<br>Journals: 16<br>Contact Number :+91-424-2533279-143,9442837703<br>E-Mail ID :magesh@irttech.ac.in,nallasamymagesh@gmail.com"
      },
      {
        "name": "Dr.M.Marikkannan",
        "role": "Assistant Professor(SR), Dept. of CSE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor4.jpg",
        "details": "Qualification: M.E.,Ph.D.,<br>Experience : 26 Years<br>Area of Specialization : Databases with secuirty, Wireless sensor networks, Software Engineering<br>Conference & Journals : 6 & 35<br>Contact Number :9443851839<br>E-Mail ID :marikkannanm@gcee.ac.in"
      },
      {
        "name": "Mr.N.Thirugnasambandan",
        "role": "Assistant Professor(SR), Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mca/assistant_professor2.jpg",
        "details": "Qualification: M.E<br>Experience : 15 Years<br>Contact Number :+91-97899 89940"
      },
      {
        "name": "Dr.D.S.Thenmozhi",
        "role": "Assistant Professor(SR), Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mca/assistant_professor3.jpg",
        "details": "Qualification: M.E,Ph.D<br>Experience : 18+ Years<br>Conference & Journals : 4 & 4<br>Contact Number :+91-98429 81158"
      },
      {
        "name": "Dr.V.Thilagavathe",
        "role": "Assistant Professor(SR), Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mca/assistant_professor4.jpg",
        "details": "Qualification: M.E,Ph.D<br>Experience : 17+ Years<br>Conference & Journals : 3 & 3<br>Book : 2<br>Contact Number :+91-99427 65072"
      },
      {
        "name": "Dr. R.Kalaivani",
        "role": "Assistant Professor, Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mca/assistant_professor6.jpg",
        "details": "Qualification: M.E,Ph.D<br>Experience : 17+ Years<br>Conference & Journals : 2 & 2<br>Contact Number :+91-99429 11433"
      },
      {
        "name": "Mrs.N.Vasuki",
        "role": "Assistant Professor, Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor5.jpg",
        "details": "Qualification: M.E<br>Experience : 15 Years<br>Area of Specialization : Operating System, System Software, Computer Networks<br>Conference : 2<br>Contact Number :+91-424-2533279-113, +91-424-2533279-117<br>E-Mail ID :vasuki@irttech.ac.in"
      },
      {
        "name": "Dr.S.Kalaivani",
        "role": "Assistant Professor, Dept. Of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor6.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 18 Years<br>Area of Specialization :Compiler Design, Semantic web, Data mining<br>Conference & Journals :6 & 5<br>Contact Number : +91-424-2533279-143<br>E-Mail ID : kalaivanis@irttech.ac.in"
      },
      {
        "name": "Mr.S.P.Vijayanand",
        "role": "Assistant Professor, Dept. of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor7.jpg",
        "details": "Qualification: M.E<br>Experience : 15+ Years<br>Contact Number :+91-96886 88866"
      },
      {
        "name": "Mr.K.NARAYANAN",
        "role": "Assistant Professor, Dept. of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor8.jpg",
        "details": "Qualification: M.E<br>Experience : 15+ Years<br>Contact Number :+91-9944439800"
      },
      {
        "name": "Mrs.S.VIJAYALAKSHMI",
        "role": "Assistant Professor, Dept. of CSE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/cse/assistant_professor9.jpg",
        "details": "Qualification: M.E<br>Experience : 16 Years<br>Contact Number :+91-94438 19811"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/include/ajax/cse/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/cse/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/cse/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/cse/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/cse/lab/img5.jpg",
      "https://www.gcee.ac.in/include/ajax/cse/lab/img6.jpg"
    ],
    "hod": {
      "name": "Dr. A. Kavitha",
      "role": "Professor & Head of the Department",
      "img": "https://www.gcee.ac.in/include/ajax/cse/associate_professor3.jpg",
      "details": "Qualification: M.E.,Ph.D<br>Experience : 32 Years<br>Area of Specialization : Semantic Web<br>Conferences & Journals: 3 & 6<br>Contact Number :9442513055<br>E-Mail ID :kavitha@gcee.ac.in,kavitha.irtt@gmail.com"
    },
    "activities": [
      "Special Talk on \"Role of Cyber Security in IT Industries\" By Dr.P.G.Om Prakash.",
      "A Guest Lecture arranged on \"Software Testing\" by Mr.V.J.Chandresh.",
      "A Seminar on \"Agile Software Methodology\" on 22.09.2015 by Mr.Thirumurugan Srinivasan.",
      "One Day FDP on \"Free and Open Source Software\" by Mrs.S.Kavitha.",
      "Two Days Workshop on \"Free and Open Source Software\" for Non Teaching staff member of our institition.",
      "FDP on Python Programming."
    ]
  },
  "it": {
    "title": "Information Technology",
    "desc": "Information Technology (IT) is the application of technology to solve organizational and business problems. Information Technology is essential for a company to ensure the efficiency and security of information systems. Demand for professionals in Information Technology field is high and growing, and people entering the field have a range of career paths to choose from.",
    "img": "https://www.gcee.ac.in/assets/img/main/itlab/it4.jpg",
    "staff": [
      {
        "name": "Dr.I.Bhuvaneshwarri",
        "role": "Assistant Professor(SR), Dept. of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor1.jpg",
        "details": "Qualification: M.E., Ph.D.,<br>Experience : 23 Years<br>Area of Specialization :Big Data Analytics, Data Mining, Web Technology and Network Security<br>Conference & Journals : 10 & 12<br>Book : 1<br>Patent : 1<br>Contact Number :+91-9442689006<br>E-Mail ID :pbw.irtt@gmail.com, ibw@gcee.ac.in"
      },
      {
        "name": "Dr.K.G.Maheswari",
        "role": "Assistant Professor, Dept. Of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mca/assistant_professor1.jpg",
        "details": "Qualification:M.Tech.,Ph.D<br>Experience : 21 Years<br>Conference & Journals : 10 & 24<br>Patents : 3<br>Books : 1<br>Contact Number :+91-98943 53799<br>E-Mail ID :kgmaheswari@gmail.com"
      },
      {
        "name": "Dr.M.Poongothai",
        "role": "Assistant Professor(SR), Dept. of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor2.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 16 Years<br>Area of Specialization : Data Mining<br>Conference & Journals : 2 & 1<br>Contact Number :+91-97502 30003<br>E-Mail ID :poongothai@irttech.ac.in"
      },
      {
        "name": "Mrs.R.Sathyavani",
        "role": "Assistant Professor(SR), Dept. Of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor3.jpg",
        "details": "Qualification: M.Tech<br>Experience : 19 Years<br>Area of Specialization :Advanced computing<br>Conference : 1<br>Contact Number :+91-9443831800<br>E-Mail ID :sathyavani@irttech.ac.in,sathyavanikarthikeyan@gmail.com"
      },
      {
        "name": "Dr.S.Thilagavathi",
        "role": "Assistant Professor(SR), Dept. Of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor4.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 21 Years<br>Area of Specialization : Wireless Networks<br>Conference & Journal : 3 & 3<br>Contact Number :+91-94439 07577<br>E-Mail ID :thilagavathi@irttech.ac.in"
      },
      {
        "name": "Dr.S.Mohanasundaram",
        "role": "Assistant Professor(SR), Dept. Of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor5.jpg",
        "details": "Qualification: M.Tech.,Ph.D<br>Experience : 26 Years<br>Area of Specialization : Embedded Systems with IoT<br>Patents : 1<br>Conference & Journal : 7 & 25<br>Contact Number :+91-96986 12555<br>E-Mail ID :smohanirtt@gmail.com"
      },
      {
        "name": "Dr.P.Thangavel",
        "role": "Assistant Professor(SR), Dept. of IT, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor6.jpg",
        "details": "Qualification:M.E.,Ph.D<br>Experience : 26 Years<br>Area of Specialization : Computer Networks<br>Conference & Journal : 7 & 25<br>Patents : 1<br>Contact Number :+91-9698622666<br>E-Mail ID :thangsirtt@gmail.com"
      },
      {
        "name": "Dr.M.Sathyakala",
        "role": "Assistant Professor, Dept. Of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor7.jpg",
        "details": "Qualification: M.Tech., Ph.D.<br>Experience : 15 Years<br>Area of Specialization : Data Mining<br>Conference & Journal : 2 & 1<br>Contact Number :+91-99427 98628<br>E-Mail ID :sathyakala@irttech.ac.in"
      },
      {
        "name": "Dr.M.N.Sudha",
        "role": "Assistant Professor, Dept. of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor8.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 17+ Years<br>Conference & Journals : 3 & 2<br>Contact Number :+91-94434 45334"
      },
      {
        "name": "Mr.B.V.Prakash",
        "role": "Assistant Professor, Dept. Of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor9.jpg",
        "details": "Qualification: M.E<br>Experience : 15 Years<br>Area of Specialization : Software Engineering<br>Conference & Journal : 3 & 1<br>Contact Number :+91-98652 33933<br>E-Mail ID :prakash@irttech.ac.in"
      },
      {
        "name": "Dr.R.Anurekha",
        "role": "Assistant Professor, Dept. of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor10.jpg",
        "details": "Qualification: M.E.Ph.D<br>Experience : 19 Years<br>Area of Specialization : Network Security<br>Conference & Journal : 17 & 7<br>Contact Number :+91-98429 18929<br>E-Mail ID :dranurekha@gmail.com"
      },
      {
        "name": "Dr.K.Murugan",
        "role": "Assistant Professor, Dept. of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor11_new.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 14 Years<br>Area of Specialization : Software Engineering<br>Conference & Journals : 3 & 1<br>Contact Number :+91-99430 05801<br>E-Mail ID :murugan@irttech.ac.in"
      },
      {
        "name": "Dr.T.SUMATHI",
        "role": "Assistant Professor, Dept. of IT, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/it/assistant_professor12_new.jpg",
        "details": "Qualification: M.E,Ph.D<br>Experience : 15+ Years<br>Journals : 4<br>Contact Number :+91-9976020109<br>E-Mail ID :@irttech.ac.in"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/assets/img/main/itlab/it1.jpg",
      "https://www.gcee.ac.in/assets/img/main/itlab/it2.jpg",
      "https://www.gcee.ac.in/assets/img/main/itlab/it3.jpg",
      "https://www.gcee.ac.in/assets/img/main/itlab/it4.jpg",
      "https://www.gcee.ac.in/include/ajax/it/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/it/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/it/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/it/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/it/lab/img5.jpg",
      "https://www.gcee.ac.in/include/ajax/it/lab/img6.jpg"
    ],
    "hod": null
  },
  "ece": {
    "title": "Electronics & Communication Engineering",
    "desc": "Communication Technology is driving our lives like never before. With IT improving system efficiencies, the demand for quality electrical and communication engineers continues to soar. Major IT and corporations are forever on the look out for qualitative talent. A talent that continues to imbibe new technologies and still develop newer ones. A talent that is comfortable with the latest hardware and software. Finally, a talent that has the creative ability to invent and innovate.",
    "img": "https://www.gcee.ac.in/assets/img/main/img1-1.jpg",
    "staff": [
      {
        "name": "Mr.M.Raja",
        "role": "Associate Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/associate_professor1.jpg",
        "details": "Qualification: M.E<br>Experience : 27 Years<br>Area of Specialization : Micowave Engineering<br>Conferences & Journals : 2 & 2<br>Contact Number :+91-9842765554<br>E-Mail ID :raja@irttech.ac.in"
      },
      {
        "name": "Dr.G.Gowrison",
        "role": "Assistant Professor(SR), Dept. of ECE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor1.jpg",
        "details": "Qualification: M.E., Ph.D<br>Experience : 36 Years<br>Conference & Journals : 4 & 21<br>Book Chapter: 1<br>Contact Number :9486614404<br>E-Mail ID :gowrisonirtt@gmail.com"
      },
      {
        "name": "Mrs.S.Barathi",
        "role": "Assistant Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor2.jpg",
        "details": "Qualification: M.Tech<br>Experience : 21 Years<br>Area of Specialization : VLSI Design<br>Contact Number :+91-424-2533279-113, +91-424-2533279-148,149,150<br>E-Mail ID :bharathi@irttech.ac.in"
      },
      {
        "name": "Dr.R.Senthil Kumar",
        "role": "Assistant Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor3.jpg",
        "details": "Qualification:Ph.D<br>Experience : 18 Years<br>Area of Specialization :Image Processing,Pattern Recoginition,Data Science,Deep Learning, Machine Learning<br>Conference & Journals:9 & 4<br>Detail Profile<br>Contact Number :+91-424-2533279-148,149,150<br>E-Mail ID :senthilkumar@irttech.ac.in"
      },
      {
        "name": "Mrs.S.K.Fairoze Banu",
        "role": "Assistant Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor4.jpg",
        "details": "Qualification: M.E<br>Experience : 14 Years<br>Area of Specialization : Applied Electronics<br>Conference : 2<br>Contact Number :+91-424-2533279-151,152,153<br>E-Mail ID :fairozebanu@irttech.ac.in"
      },
      {
        "name": "Mrs.N.Madhavi",
        "role": "Assistant Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor5.jpg",
        "details": "Qualification: M.E<br>Experience : 14 Years<br>Area of Specialization : Applied Electronics<br>Contact Number :+91-424-2533279-151,152,153<br>E-Mail ID :madhavi@irttech.ac.in"
      },
      {
        "name": "Mr.P.Kaliram",
        "role": "Assistant Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor6.jpg",
        "details": "Qualification: M.E<br>Experience : 14 Years<br>Conference & Journals 2 & 3<br>Area of Specialization : Communication systems<br>Contact Number : +91-9944846466<br>E-Mail ID : kaliram@irttech.ac.in"
      },
      {
        "name": "Dr.P.K.Kowsalya",
        "role": "Assistant Professor, Dept. Of ECE, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/ece/assistant_professor7.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 12 Years<br>Area of Specialization : Applied Electronics<br>Contact Number :+91-424-2533279-151,152,153<br>E-Mail ID :kowsalya@irttech.ac.in"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/include/ajax/ece/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/ece/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/ece/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/ece/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/ece/lab/img5.jpg",
      "https://www.gcee.ac.in/include/ajax/ece/lab/img6.jpg"
    ],
    "hod": null
  },
  "eee": {
    "title": "Electrical & Electronics Engineering",
    "desc": "In the e-world the role of electrical & electronics engineers has come into sharp focus. In fact the advances made in the field have redefined the way we live and work. To cope with the rapid changes, modern day engineers need to constantly program themselves to stay relevant and updated. At IRT Tech, E&E engineers keep themselves wired to the world by attending seminars and by conducting mini projects. They also become members of the IEEE to keep themselves abreast with the latest in the field. As part of the curriculum our engineers are trained in software like C, C++, Java, Assembly Language Programming, microprocessors, micro controllers and networking.",
    "img": "https://www.gcee.ac.in/assets/img/main/img1-1.jpg",
    "staff": [
      {
        "name": "Dr.M.Mohammadha Hussaini",
        "role": "Assocate Professor and Head of the Department, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/professor&hod.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 25 Years<br>Area of Specialization : Power Systems<br>Conference & Journals : 20 & 9<br>Contact Number :+91-9443406070<br>E-Mail ID :hussaini1008@gmail.com"
      },
      {
        "name": "Dr.B.Baby Priya",
        "role": "Associate Professor, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/associate_professor2.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 22 Years<br>Area of Specialization : Electical Machines<br>Conference & Journals : 9 & 4<br>Contact Number :+91-94869 37393<br>E-Mail ID :babypriya@irttech.ac.in"
      },
      {
        "name": "Dr.A.Vetrivel",
        "role": "Associate Professor, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/associate_professor3.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 22 Years<br>Area of Specialization : Power Systems<br>Conferences & Journals: 6 & 4<br>Contact Number :+91-9367771401<br>E-Mail ID :vetrivel@irttech.ac.in"
      },
      {
        "name": "Dr.S.Dhanapal",
        "role": "Assistant Professor(SR), Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/assistant_professor1.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 14 Years<br>Area of Specialization : Power Electronics<br>Journals: 3<br>Contact Number :+91-9994039996<br>E-Mail ID :sdhanapalirtt@gmail.com"
      },
      {
        "name": "Mrs.S.Gomathi",
        "role": "Assistant Professor, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/assistant_professor2.jpg",
        "details": "Qualification: M.E<br>Experience : 12 Years<br>Area of Specialization : Control Systems,Renewable Energy<br>Conference & Journals: 6 & 2<br>Contact Number :+91-99949 68455<br>E-Mail ID :gomathi@irttech.ac.in"
      },
      {
        "name": "Dr.K.TamilSelvan",
        "role": "Assistant Professor, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/assistant_professor3.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 12 Years<br>Area of Specialization : Process Control & Instrumentation<br>Conference: 4<br>Contact Number :+91-98650 15550<br>E-Mail ID :ktstamil@gmail.com"
      },
      {
        "name": "Dr.A.Gowthaman",
        "role": "Assistant Professor, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/assistant_professor4.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 19 Years<br>Area of Specialization : Applied Electronics<br>Conference : 4<br>Contact Number :+91-94423 34682<br>E-Mail ID :gowthaman@irttech.ac.in"
      },
      {
        "name": "Dr.P.Govindasamy",
        "role": "Assistant Professor, Dept. Of EEE, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/eee/assistant_professor6.jpg",
        "details": "Qualification:M.E.,Ph.D<br>Experience : 18 Years<br>Area of Specialization : Power Electronics<br>Conference : 2<br>Journals : 2<br>Contact Number : +91-94436 18383<br>E-Mail ID : govindasamy@irttech.ac.in,govindkalai236@gmail.com"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/include/ajax/eee/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/eee/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/eee/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/eee/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/eee/lab/img5.jpg",
      "https://www.gcee.ac.in/include/ajax/eee/lab/img6.jpg"
    ],
    "hod": {
      "name": "Dr.M.Mohammadha Hussaini",
      "role": "Assocate Professor and Head of the Department, Dept. Of EEE, GCEE",
      "img": "https://www.gcee.ac.in/include/ajax/eee/professor&hod.jpg",
      "details": "Qualification: M.E.,Ph.D<br>Experience : 25 Years<br>Area of Specialization : Power Systems<br>Conference & Journals : 20 & 9<br>Contact Number :+91-9443406070<br>E-Mail ID :hussaini1008@gmail.com"
    }
  },
  "mech": {
    "title": "Mechanical Engineering",
    "desc": "Globalization has forced the manufacturing sector to adopt innovative production processes. The shop floors of modern day industries have become a highly automated. There is tremendous pressure to deliver products matching world-class quality. Therefore it has become mandatory for engineers to arm themselves with the necessary cutting-edge technologies.",
    "img": "https://www.gcee.ac.in/assets/img/main/img1-1.jpg",
    "staff": [
      {
        "name": "Dr.K.Balamurugan",
        "role": "Associate Professor, Dept. Of Mechanical Engineering, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/mech/associate_professor5.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 23 Years<br>Area of Specialization : Manufacturing Engineering<br>Conferences & Journals : 25 & 80<br>Books : 05, Book Chapter: 02<br>Awards : Young Scientist Award from DST,New Delhi,Best Faculty Award<br>R & D Projects : 06<br>Ph.D Supervision : 11<br>MODROBS : 02<br>FDP conducted : 32<br>Contact Number : +91 424 2533279 Ext. 186<br>Mobile Number : +91 9150166322<br>E-Mail ID : drkbalamurugan@gmail.com, hodmechgcee@gmail.com"
      },
      {
        "name": "Dr.R.Senthilraja",
        "role": "Assistant Professor, Dept. Of Mechanical Engineering, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mech/assistant_professor1.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 12 Years<br>Area of Specialization : Thermal Engineering<br>Conference & Journals : 1 & 7<br>Contact Number : +91-94432 78504<br>E-Mail ID : senthilraja@irttech.ac.in"
      },
      {
        "name": "Mr.N.S.Nandakumar",
        "role": "Assistant Professor, Dept. Of Mechanical Engineering, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/mech/assistant_professor2.jpg",
        "details": "Qualification: M.E<br>Experience : 17 Years<br>Area of Specialization : Engineering Design<br>Conference & Journals : 8 & 2<br>Contact Number : +91-98427 97980<br>E-Mail ID : nandukongu97@gmail.com"
      },
      {
        "name": "Dr. N. Vadivel",
        "role": "Assistant Professor, Dept. of Mechanical Engineering, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/mech/assistant_professor5.jpeg",
        "details": "Qualification:Ph.D<br>Experience :22 Years<br>Area of Specialization : Thermal Engineering<br>Conference & Journals : 3 & 8<br>Contact Number : +91-9489891187<br>E-Mail ID : vadivel_n@gcee.ac.in"
      },
      {
        "name": "Mrs.K. Uma",
        "role": "Assistant Professor, Dept. Of Mechanical Engineering, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/mech/assistant_professor4.jpg",
        "details": "Qualification: M.E<br>Experience : 14.5 Years<br>Area of Specialization : Manufacturing Engineering<br>Conference & Journals : 3 & 2<br>Contact Number : +91-9952800483<br>E-Mail ID : uma_nithen@yahoo.com"
      },
      {
        "name": "Mr.P. Gowtham",
        "role": "Assistant Professor, Dept. Of Mechanical Engineering, GCEE",
        "img": "https://www.gcee.ac.in/include/ajax/mech/assistant_professor3.jpg",
        "details": "Qualification: M.E<br>Experience : 8 Years<br>Area of Specialization : Thermal Engineering<br>Conference & Journals : 0 & 4<br>Contact Number : +91-9629742301<br>E-Mail ID : gowthamvortex@gmail.com"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/include/ajax/mech/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/mech/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/mech/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/mech/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/mech/lab/img5.jpg",
      "https://www.gcee.ac.in/include/ajax/mech/lab/img7.jpg",
      "https://www.gcee.ac.in/include/ajax/mech/lab/img16.jpg"
    ],
    "hod": null
  },
  "auto": {
    "title": "Automobile Engineering",
    "desc": "Automotive engineering is a branch of mechanical engineering that concerns the design, development and manufacture of cars, trucks, motorcycles and other motor vehicles. Automotive engineers also design and test the many subsystems or components that comprise a motorized vehicle.Very few universities offer a bachelor's degree in automotive engineering. Consequently, many prospective automotive engineers earn a bachelor's degree in mechanical engineering from a university that also offers specialized courses in automotive engineering. However, there are plenty of universities offer master's degrees in automotive engineering.",
    "img": "https://www.gcee.ac.in/assets/img/main/auto05.jpg",
    "staff": [
      {
        "name": "Dr.R.Senthilraja",
        "role": "Assistant Professor, Dept. Of Mechanical Engineering, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/mech/assistant_professor1.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 12 Years<br>Area of Specialization : Thermal Engineering<br>Conference & Journals : 1 & 7<br>Contact Number : +91-94432 78504<br>E-Mail ID : senthilraja@irttech.ac.in"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/include/ajax/auto/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/auto/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/auto/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/auto/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/auto/lab/img5.jpg"
    ],
    "hod": null
  },
  "civil": {
    "title": "Civil Engineering",
    "desc": "Designing and executing structural works requires a great amount of analyzing, understanding and planning. A Skilled civil engineer plays a crucial role in infrastructure development. He or She has to be a construction and environment specialist besides being a versatile systems integrator. Modern day hi-tech construction management systems require a thorough knowledge in information technology. Keeping this in mind, IRT Tech imparts training to civil engineering students with the latest curriculum besides offering them an opportunity to gain hands-on experience though visits to industries and project sites. The budding architects of the future also gain from the guest lectures organized by the institutions.",
    "img": "https://www.gcee.ac.in/assets/img/main/civil05.JPG",
    "staff": [
      {
        "name": "Dr.P.Saravanakumar",
        "role": "Assistante Professor(Sr), Dept. Of Civil Engineering, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/civil/assistant_professor1.jpg",
        "details": "Qualification: M.E,.Ph.D<br>Experience : 20 Years<br>Area of Specialization : Structural Engineering<br>Conference & Journals : 10 & 6<br>Contact Number :+91-94436 67806<br>E-Mail ID :grpsaravanan@gmail.com"
      },
      {
        "name": "Dr.G.M.Gowthama kumar",
        "role": "Assistant Professor, Dept. Of Civil Engineering, IRTT",
        "img": "https://www.gcee.ac.in/include/ajax/civil/assistant_professor2.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 16 Years<br>Area of Specialization : Structural Engineering<br>Journals : 4<br>Contact Number :+91-97505 15559<br>E-Mail ID :gowthamakumar@irttech.ac.in"
      },
      {
        "name": "Dr.D.Sathies Kumar",
        "role": "Assistant Professor, Dept. Of Civil Engineering, IRTT.",
        "img": "https://www.gcee.ac.in/include/ajax/civil/assistant_professor4.jpg",
        "details": "Qualification: M.E.,Ph.D<br>Experience : 14 Years<br>Area of Specialization : Structual Engineering<br>Conference & Journals: 6 & 4<br>Contact Number :+91-94884 73460<br>E-Mail ID :sathieskumaar2004@gmail.com,sathieskumar@irttech.ac.in"
      }
    ],
    "labs": [
      "https://www.gcee.ac.in/include/ajax/civil/lab/img1.jpg",
      "https://www.gcee.ac.in/include/ajax/civil/lab/img2.jpg",
      "https://www.gcee.ac.in/include/ajax/civil/lab/img3.jpg",
      "https://www.gcee.ac.in/include/ajax/civil/lab/img4.jpg",
      "https://www.gcee.ac.in/include/ajax/civil/lab/img5.jpg",
      "https://www.gcee.ac.in/include/ajax/civil/lab/img6.jpg"
    ],
    "hod": null
  }
};

  // Provide a fallback for other departments
  const defaultDept = {
    title: "Engineering Department",
    desc: "A premier department offering high quality technical education and research opportunities.",
    img: "https://www.gcee.ac.in/assets/img/sliders/layer/NammaGCEE2.jpeg",
    staff: [
      { name: "Dr. Staff Member", role: "Professor", img: "https://www.gcee.ac.in/assets/img/blog/img2.jpg", details: "Qualification: M.E., Ph.D" }
    ]
  };

  const courseCards = document.querySelectorAll('.course-card');
  const modalOverlay = document.getElementById('dept-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      const deptKey = card.getAttribute('data-dept');
      const data = deptData[deptKey] || { ...defaultDept, title: card.querySelector('h3').innerText };
      
      // Inject HTML
      
      let filterHtml = '';
      if (data.staff && data.staff.length > 0) {
        filterHtml = `
          <div class="staff-filter-controls" style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
            <button class="btn btn-outline filter-btn active" data-filter="all" style="padding: 0.5rem 1rem; border-radius: 8px;">All</button>
            <button class="btn btn-outline filter-btn" data-filter="professor" style="padding: 0.5rem 1rem; border-radius: 8px;">Professors</button>
            <button class="btn btn-outline filter-btn" data-filter="associate" style="padding: 0.5rem 1rem; border-radius: 8px;">Associate Prof.</button>
            <button class="btn btn-outline filter-btn" data-filter="assistant" style="padding: 0.5rem 1rem; border-radius: 8px;">Assistant Prof.</button>
            <button class="btn btn-outline filter-btn" data-filter="staff" style="padding: 0.5rem 1rem; border-radius: 8px;">Staff</button>
          </div>
        `;
      }

      let hodHtml = '';
      if (data.hod) {
         hodHtml = `
           <h3 style="margin-top: 2rem; margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Head of the Department</h3>
           <div class="staff-card hod-card" style="max-width: 400px; margin: 0 auto 3rem; background: rgba(99, 102, 241, 0.05); border-color: rgba(99, 102, 241, 0.3);">
            <img src="${data.hod.img}" alt="${data.hod.name}" class="staff-img" onerror="this.src='https://via.placeholder.com/120x120?text=HOD'">
            <h4 style="font-size: 1.3rem;">${data.hod.name}</h4>
            <p style="color: var(--primary-color); font-weight: bold;">${data.hod.role}</p>
            <div class="details" style="font-size: 0.9rem; word-wrap: break-word;">${data.hod.details}</div>
          </div>
         `;
      }

      let staffHtml = '';
      if (data.staff) {
          data.staff.forEach(s => {
            let roleCat = 'staff';
            if(s.role.toLowerCase().includes('assistant professor')) roleCat = 'assistant';
            else if(s.role.toLowerCase().includes('associate professor')) roleCat = 'associate';
            else if(s.role.toLowerCase().includes('professor')) roleCat = 'professor';

            staffHtml += `
              <div class="staff-card filter-item" data-role="${roleCat}">
                <img src="${s.img}" alt="${s.name}" class="staff-img" onerror="this.src='https://via.placeholder.com/120x120?text=Staff'">
                <h4>${s.name}</h4>
                <p>${s.role}</p>
                <div class="details" style="word-wrap: break-word;">${s.details}</div>
              </div>
            `;
          });
      }

      let actHtml = '';
      if (data.activities && data.activities.length > 0) {
        actHtml = '<br><h3 style="margin-top: 3rem; margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Activities</h3>' +
          '<ul style="text-align: left; background: var(--surface-color); padding: 2rem 2rem 2rem 3rem; border-radius: 15px; border: 1px solid var(--surface-border); color: var(--text-secondary);">' + 
          data.activities.map(act => `<li style="margin-bottom: 0.8rem;">${act}</li>`).join('') +
          '</ul>';
      }

      let labHtml = '';
      if (data.labs && data.labs.length > 0) {
        labHtml = '<br><h3 style="margin-top: 3rem; margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Lab Facilities</h3>' +
          '<div class="staff-grid" style="margin-bottom: 2rem;">' + 
          data.labs.map(img => `<img src="${img}" style="width:100%; height:200px; object-fit:cover; border-radius:15px; border: 1px solid var(--surface-border);">`).join('') +
          '</div>';
      }
      
      modalBody.innerHTML = `
        <div class="dept-header">
          <img src="${data.img}" alt="${data.title}" class="dept-hero-img" onerror="this.src='https://via.placeholder.com/600x250?text=Department'">
          <div class="dept-info">
            <h2 class="text-gradient" style="margin-bottom: 1rem; font-size: 2.2rem;">${data.title}</h2>
            <p style="color: var(--text-secondary); line-height: 1.8;">${data.desc}</p>
          </div>
        </div>
        ${hodHtml}
        ${filterHtml ? '<h3 style="margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Staff Directory</h3>' : ''}
        ${filterHtml}
        <div class="staff-grid" id="modal-staff-grid">
          ${staffHtml.length > 0 ? staffHtml : (filterHtml ? '<p>No staff directory records found.</p>' : '')}
        </div>
        ${actHtml}
        ${labHtml}
      `;

      // Filter Logic
      const filterBtns = modalBody.querySelectorAll('.filter-btn');
      const filterItems = Array.from(modalBody.querySelectorAll('.filter-item'));
      
      if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
              b.classList.remove('active');
              b.style.background = 'transparent';
              b.style.color = 'var(--text-primary)';
            });
            btn.classList.add('active');
            btn.style.background = 'linear-gradient(135deg, var(--primary-color), #8b5cf6)';
            btn.style.color = 'white';
            
            const category = btn.getAttribute('data-filter');
            filterItems.forEach(item => {
              if (category === 'all' || item.getAttribute('data-role') === category) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });
          });
        });
        
        // Initial state styled as active button
        filterBtns[0].style.background = 'linear-gradient(135deg, var(--primary-color), #8b5cf6)';
        filterBtns[0].style.color = 'white';
      }

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close when clicking outside of modal container
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
