// ===== সব content এখানে। নতুন project/ছবি যোগ করতে শুধু এই file edit করো =====
window.SITE = {
  name: "Md. Shoadul Islam Niloy", short: "Niloy",
  title: "Software Engineer · Full-Stack Developer · Digital Solutions Builder",
  tagline: "Turning Ideas into Digital Experiences and Practical Software Solutions.",
  portrait: "images/portrait.jpg", profilePhoto: "images/profile-suit.jpg",
  email: "soadulniloy@gmail.com",
  links: { linkedin: "https://www.linkedin.com/in/soadulniloy", website: "https://www.soadulniloy.me",
    alumni: "https://csepms.diu.edu.bd/alumni/card/tFwMpYlUJ7GvV6q0Qx2ZRfg5Z2f1LGOkIxqVPndo",
    github: "", resume: "" /* resume: "cv/niloy-cv.pdf" দিলে Download CV button আসবে */ },
  about: [
    "My journey in technology is driven by curiosity, continuous learning and a desire to build practical solutions through computer science.",
    "I completed my B.Sc. in Computer Science and Engineering at Daffodil International University in June 2026 with a CGPA of 3.58 / 4.00. I explored programming, web technologies, mobile development, databases, AI/ML and IoT.",
    "In Autumn 2024 I joined IIT Bombay as a visiting / exchange student. My research includes FlashViT, published in IEEE Access, and my Final Year Design Project on neuro-symbolic intrusion detection for IoT networks.",
    "Beyond software I compete in karate, lead a university club, ride mountain bikes, teach and travel."],
  stats: [["3.58","CGPA / 4.00"],["IEEE Access","Published research"],["IIT Bombay","Exchange, Autumn 2024"],["10","Projects"]],
  education: [
    { title:"B.Sc. in Computer Science and Engineering", org:"Daffodil International University", when:"Graduated June 2026", note:"CGPA 3.58 / 4.00 · Bangladesh", image:"images/diu-campus.jpg", link:["Official DIU Alumni Card","alumni"] },
    { title:"Visiting / Exchange Student", org:"Indian Institute of Technology Bombay", when:"Autumn 2024", note:"Powai, Mumbai, India. International academic exchange (not a full degree).", image:"images/iit-bombay.jpg",
      courses:[["CS317","Database and Information Systems (DBIS)"],["CS348","Networks"],["CS626","NLP and Web"],["CS378","Networks Lab"],["EE353","Introduction to Data Science and Machine Learning"]] },
    { title:"Higher Secondary Certificate", org:"BCIC College, Dhaka", when:"2020", note:"GPA 5.00" },
    { title:"Secondary School Certificate", org:"Shaheed Police Smrity College", when:"2018", note:"GPA 5.00" } ],
  experience: [{ role:"Software Testing Intern (QA)", org:"Reclaim Protocol Limited", when:"2 months",
    points:["Tested application features and checked expected behaviour","Identified bugs and inconsistencies, prepared bug reports","Reported issues to team members and validated fixes","Collaborated with distributed teams in QA workflows"],
    skills:["Software testing","Bug reporting","Troubleshooting","Technical communication"] }],
  skills: {
    "Languages":["C","Java","PHP","Python","Dart"], "Frontend":["HTML","CSS","React","TypeScript","Vite"],
    "Backend":["Node.js","Express.js","PHP"], "Database":["MySQL","MongoDB Atlas"], "Auth":["Firebase Authentication"],
    "Mobile":["Flutter","Dart","CRUD apps","PHP/MySQL backend"],
    "AI / ML":["PyTorch","Scikit-learn","NumPy","Pandas","Deep Learning","Computer Vision","Vision Transformers","Explainable AI","Neuro-Symbolic AI"],
    "IoT":["Arduino","Soil Moisture Sensor","Sensor monitoring"], "UI/UX":["Adobe XD","Interface design"],
    "Other":["Software testing","Troubleshooting","Hosting","Problem solving","Computer hardware"],
    "Currently learning":["MERN Stack","Laravel MVC"] },
  projects: [
    { id:"flashvit", title:"FlashViT", cat:"AI / Research", tags:["Python","PyTorch","Scikit-learn","Vision Transformer"], featured:true, image:"images/author-profile.png",
      summary:"A memory-efficient and explainable Vision Transformer for multi-class sweet orange disease classification.",
      body:"Research on applying Vision Transformer-based deep learning to agricultural image classification, with emphasis on model efficiency and explainability. Published in IEEE Access.",
      links:[["Read the paper (DOI)","https://doi.org/10.1109/ACCESS.2026.3738311"]] },
    { id:"fydp", title:"Neuro-Symbolic Intrusion Detection (FYDP)", cat:"AI / IoT Security Research", tags:["Python","PyTorch","MLP","Symbolic reasoning","Explainable AI"], featured:true,
      summary:"Explainable intrusion detection for IoT networks combining an MLP with symbolic rule-based reasoning.",
      body:"The neural MLP learns complex patterns from traffic data while a symbolic rule engine analyses raw features and explains decisions, for example unusual port activity and abnormal traffic. Evaluated on NF-BoT-IoT (imbalanced) and NSL-KDD (balanced) with accuracy, F1-score, AUC-ROC and 5-fold cross-validation, plus simulated zero-day attacks." },
    { id:"ghotokderbari", title:"GhotokderBari", cat:"Full-Stack Startup", tags:["React","TypeScript","Vite","Node.js","Express","MongoDB Atlas","Firebase Auth","ImgBB"],
      summary:"Bilingual Bengali-English matrimonial platform for Bangladesh and the Bangladeshi diaspora.",
      body:"Planned features: Bengali/English support, profile creation and management, matchmaking, paid matchmaking packages, authentication and image handling. Business plan: online platform plus matchmaking services (planning assumptions, not revenue)." },
    { id:"game-shop", title:"NILOY'S Game Shop", cat:"Web / Database", tags:["PHP","HTML","CSS","MySQL"], summary:"A game-shop web application built with PHP, HTML, CSS and MySQL." },
    { id:"tourist", title:"Tourist Management System", cat:"Web Application", tags:["PHP","HTML","CSS"], summary:"A web-based tourist management system built with PHP, HTML and CSS." },
    { id:"todo", title:"To-Do List App", cat:"Mobile", tags:["Flutter","Dart","PHP","MySQL"], summary:"Cross-platform task manager with create, view, update and delete, backed by PHP and MySQL." },
    { id:"parking", title:"Parking Management System", cat:"Programming", tags:["C"], summary:"A C program for parking management logic and optimisation." },
    { id:"irrigation", title:"Smart Irrigation System", cat:"IoT / Hardware", tags:["Arduino","Soil Moisture Sensor"], summary:"Arduino-based irrigation that reads soil moisture and controls watering with programmed logic." },
    { id:"bank", title:"Bank Management System", cat:"Java / OOP", tags:["Java","OOP"], summary:"Java application demonstrating object-oriented design with account and transaction operations." },
    { id:"brainberry", title:"Brainberry", cat:"UI/UX Design", tags:["Adobe XD"], summary:"An all-in-one application interface concept designed in Adobe XD." } ],
  research: [
    { title:"FlashViT: A Memory-Efficient and Explainable Vision Transformer for Multi-Class Sweet Orange Disease Classification", venue:"IEEE Access · Published", doi:"https://doi.org/10.1109/ACCESS.2026.3738311", domain:"Computer Vision · Deep Learning", image:"images/author-profile.png" },
    { title:"Neuro-Symbolic Framework for Explainable Intrusion Detection in IoT Networks", venue:"Final Year Design Project", domain:"MLP + symbolic reasoning · NF-BoT-IoT & NSL-KDD · Accuracy, F1, AUC-ROC, 5-fold CV",
      abstract:"This research proposes a Neuro-Symbolic Framework for Explainable Intrusion Detection in IoT Networks, combining a Multi-Layer Perceptron (MLP) with a symbolic rule-based reasoning engine to improve detection performance and interpretability. The neural component learns complex patterns from network traffic data, while the symbolic component analyses raw network features and applies interpretable logical rules to explain decisions. The framework is evaluated on NF-BoT-IoT, an imbalanced dataset of real-world IoT traffic, and NSL-KDD, a balanced benchmark, using accuracy, F1-score, AUC-ROC and five-fold cross-validation. It improves over traditional neural models while its symbolic explanations identify suspicious traffic such as unusual port activity and abnormal network patterns. Simulated zero-day attack scenarios examine its ability to detect unseen attacks. The work aims at more trustworthy, explainable and practical intrusion detection for resource-constrained IoT environments." } ],
  achievements: [
    { t:"Bronze Medalist", d:"BKO Cup, 6th International Open Karate Championship 2025, Male Kumite", image:"images/karate-bko-team.jpg" },
    { t:"3rd Place", d:"Prothom Alo Biggan Joyotsob 2015 (Science Olympiad), Junior Segment" },
    { t:"100+ problems solved", d:"URI Online Judge (beecrowd)" },
    { t:"Unlock The Algorithm 2024", d:"Preliminary rank 28 · Main rank 96" },
    { t:"DIU Takeoff 2022", d:"Preliminary rank 76 · Main rank 117" } ],
  leadership: [
    { role:"President", org:"DIU Karate-Do Club", when:"2026–2027" },
    { role:"Former Program Secretary", org:"DIU Karate-Do Club", when:"2025–2026" },
    { role:"Former Core Member", org:"DIU Robotics Club", when:"" } ],
  business: { name:"Niloy's Digital Solutions", services:["Custom software solutions","Digital transformation for businesses","Business website development","IoT projects","Digital solutions"] },
  beyond: [["Karate","Competition, international championship experience and club leadership."],["Cycling","Mountain biking and cycling adventures."],["Travel","Mumbai: Gateway of India, Atal Setu, Elephanta Caves, Juhu and Versova Beach, Ratangad Trek, midnight cycling, local train journey."],["Learning","Software, research and AI/ML experiments."]],
  // নতুন segment (section) যোগ করতে এখানে object দাও, nav এ নিজে থেকেই আসবে। মুছে দিলে section থাকবে না।
  extraSections: [
    // { id:"certificates", title:"Certificates", intro:"Short text (optional)", cards:[ {t:"Certificate name", d:"Details", image:"images/cert-1.jpg", link:["View","https://..."]} ] }
  ],
  // ছবি যোগ: images/ folder এ ফেলে এখানে এক লাইন
  gallery: [
    ["images/karate-bko-team.jpg","DIU team at the BKO Cup 6th International Open Karate Championship 2025","Karate"],
    ["images/karate-trophy.jpg","Best Performance Team trophy, BKO Cup 2025","Karate"],
    ["images/karate-medal.jpg","Medal at the DIU CSE department","Karate"],
    ["images/karate-1.jpg","Karate competition","Karate"],["images/karate-2.jpg","Karate competition","Karate"],["images/karate-cse-dept.jpg","Karate, DIU campus","Karate"],
    ["images/diu-sign.jpg","At the DIU sign","DIU"],["images/diu-campus-life.jpg","DIU campus life","DIU"],["images/diu-campus.jpg","Daffodil International University campus","DIU"],
    ["images/iit-bombay.jpg","IIT Bombay entrance","IIT Bombay"],
    ["images/cycling-helmet.jpg","Mountain biking","Cycling"],["images/cycling-street.jpg","Cycling in the city","Cycling"],
    ["images/profile-suit.jpg","Portrait on campus","Portrait"],["images/portrait.jpg","Portrait","Portrait"] ]
};
