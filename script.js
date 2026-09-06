const kcnAI = document.getElementById("kcnAI");


let kcnTimer;


if(kcnAI){


kcnAI.addEventListener("dblclick", function(){


    kcnAI.src="images/KCN_real.jpg";


    clearTimeout(kcnTimer);


    kcnTimer=setTimeout(()=>{


        kcnAI.src="images/KCN_ai.jpg";


    },120000);


});


}







/* =========================
   LANGUAGE DATA
========================= */


const translations = {



en:{



/* =========================
   HOME
========================= */


heroTitle:
"Electrical & Automation Engineer",


heroDescription:
"D4 Electronic Systems Engineering Technology graduate with practical experience in electrical maintenance, automation systems, PLC, IoT, and power generation environments.",






/* =========================
   ABOUT
========================= */


aboutTitle:
"About Me",


aboutText1:
"I am a D4 Electronic Systems Engineering Technology graduate from Universitas Negeri Malang with practical experience in electrical maintenance, automation systems, PLC, IoT, and power generation environments.",


aboutText2:
"My engineering journey started from Electrical Installation Engineering at SMK Negeri 2 Meulaboh and continued through industrial experiences in electrical installation, hydro power plant systems, and embedded technology development.",


aboutText3:
"I am interested in developing reliable engineering solutions by combining electrical systems, automation technology, and embedded systems.",






/* =========================
   EXPERIENCE UM
========================= */


experienceTitle:
"Experience",


umPosition:
"Electrical Maintenance Technician",


umDescription:
"Responsible for supporting electrical maintenance activities at Gedung Kuliah Bersama Universitas Negeri Malang. The role involved monitoring, maintaining, and troubleshooting building electrical systems.",


umLi1:
"Performed inspection and maintenance of building electrical installations.",


umLi2:
"Assisted electrical troubleshooting and repair activities.",


umLi3:
"Supported electrical panel inspection and distribution system monitoring.",


umLi4:
"Maintained electrical reliability for classrooms and building facilities.",


umLi5:
"Supported daily technical operations within campus facilities.",


/* =========================
   EXPERIENCE PLTA
========================= */


pltaTitle:
"PT PLN Nusantara Power - PLTA Mendalan",

pltaCompany:
"PT PLN Nusantara Power",


pltaPosition:
"Electrical Engineering Intern",


pltaDescription:
"Completed an internship at PT PLN Nusantara Power – Mendalan Hydropower Plant with practical experience in hydro power generation operations, electrical maintenance, control systems, PLC monitoring, and equipment inspection.",

pltaLi1:
"Supported inspection and maintenance activities for hydro power plant electrical equipment.",

pltaLi2:
"Supported monitoring and maintenance activities for motors, generators, and electrical systems.",


pltaLi3:
"Supported PLC monitoring, control system analysis, and automation-related activities.",

pltaLi4:
"Supported electrical panel inspection, troubleshooting, and maintenance documentation.",

pltaLi5:
"Supported cleaning and maintenance activities on electrical conductor components during maintenance processes.",


pltaLi6:
"Participated in unit overhaul activities and general equipment maintenance processes.",


/* =========================
   EXPERIENCE KCN
========================= */


kcnTitle:
"PT Karya Cipta Neonusa",


kcnCompany:
"PT Karya Cipta Neonusa",


kcnPosition:
"Electrical Installation Technician Intern",


kcnDescription:
"Completed a field work practice program at PT Karya Cipta Neonusa in electrical installation activities, including electrical systems, street lighting installation, and low voltage electrical works.",


kcnLi1:
"Performed electrical installation and street lighting installation activities.",


kcnLi2:
"Assisted installation and inspection of electrical panels and wiring systems.",


kcnLi3:
"Supported electrical survey activities and identification of electrical materials.",


kcnLi4:
"Assisted installation activities related to electrical services and distribution systems.",


/* =========================
   EXPERIENCE ROBOEDU
========================= */


roboeduTitle:
"CV RoboEdu",


roboeduCompany:
"CV RoboEdu",


roboeduPosition:
"Robotics & Embedded System Intern",


roboeduDescription:
"Completed practical experience at CV RoboEdu focusing on robotics development, embedded systems, and educational robot technology. Activities involved robot assembly, troubleshooting, control system testing, and technical project development.",


roboeduLi1:
"Assisted robotic vehicle assembly and troubleshooting activities.",


roboeduLi2:
"Performed assembly, testing, and debugging of educational robot systems.",


roboeduLi3:
"Supported robot control system testing using wireless controllers.",


roboeduLi4:
"Participated in technical discussions related to new robotic project development.",

/* =========================
   PROJECTS
========================= */


projectsTitle:
"Projects",


projectsHeading:
"Engineering Projects",


projectsText1:
"A collection of engineering projects developed through academic, industrial, and personal engineering activities. These projects cover embedded systems, robotics development, automation, Internet of Things (IoT), hardware design, PCB development, and prototype implementation.",


projectsText2:
"The portfolio represents practical experience in designing, building, testing, and integrating electrical and electronic systems, from initial concepts to functional prototypes.",


projectsText3:
"Each project demonstrates the application of engineering principles, including circuit design, microcontroller programming, sensor integration, control systems, and system troubleshooting.",

/* =========================
   FINAL THESIS
========================= */


thesisTitle:
"Final Thesis Project",


thesisDescription:
"Autonomous Smart Waste Bin Prototype<br>Deep Learning-Based Waste Classification System",

/* =========================
   CONTACT
========================= */


contactTitle:
"Contact",


contactHeading:
"Let's Connect",


contactDescription:
"Driven to create reliable engineering solutions through electrical systems, automation, embedded technology, and innovative development.",

},







id:{



/* =========================
   HOME
========================= */


heroTitle:
"Engineer Elektrikal & Otomasi",


heroDescription:
"Lulusan Teknologi Rekayasa Sistem Elektronik D4 dengan pengalaman praktis dalam pemeliharaan kelistrikan, sistem otomasi, PLC, IoT, dan lingkungan pembangkitan energi.",






/* =========================
   ABOUT
========================= */


aboutTitle:
"Tentang Saya",


aboutText1:
"Saya merupakan lulusan D4 Teknologi Rekayasa Sistem Elektronik Universitas Negeri Malang dengan pengalaman praktis dalam pemeliharaan kelistrikan, sistem otomasi, PLC, IoT, dan lingkungan pembangkitan energi.",


aboutText2:
"Perjalanan teknik saya dimulai dari bidang Teknik Instalasi Tenaga Listrik di SMK Negeri 2 Meulaboh dan dilanjutkan melalui pengalaman industri dalam instalasi listrik, sistem pembangkit listrik tenaga air, serta pengembangan teknologi embedded.",


aboutText3:
"Saya tertarik mengembangkan solusi engineering yang andal dengan menggabungkan sistem kelistrikan, teknologi otomasi, dan embedded system.",




/* =========================
   EXPERIENCE UM
========================= */


experienceTitle:
"Pengalaman",


umPosition:
"Teknisi Pemeliharaan Kelistrikan",


umDescription:
"Bertanggung jawab mendukung kegiatan pemeliharaan kelistrikan di Gedung Kuliah Bersama Universitas Negeri Malang. Kegiatan meliputi pemantauan, pemeliharaan, dan troubleshooting sistem kelistrikan gedung.",


umLi1:
"Melakukan inspeksi dan pemeliharaan instalasi listrik gedung.",


umLi2:
"Membantu proses troubleshooting dan perbaikan sistem kelistrikan.",


umLi3:
"Mendukung pemeriksaan panel listrik dan pemantauan sistem distribusi.",


umLi4:
"Menjaga keandalan sistem kelistrikan ruang kelas dan fasilitas gedung.",


umLi5:
"Mendukung kegiatan operasional teknis harian di lingkungan kampus.",



/* =========================
   EXPERIENCE PLTA
========================= */


pltaTitle:
"PT PLN Nusantara Power - PLTA Mendalan",

pltaCompany:
"PT PLN Nusantara Power",


pltaPosition:
"Magang Teknik Elektro",


pltaDescription:
"Melaksanakan program magang di PT PLN Nusantara Power – PLTA Mendalan dengan fokus pada operasi pembangkit listrik tenaga air, pemeliharaan sistem kelistrikan, sistem kontrol, PLC, dan inspeksi peralatan pembangkit.",

pltaLi1:
"Mendukung kegiatan inspeksi dan pemeliharaan peralatan listrik pada pembangkit tenaga air.",

pltaLi2:
"Mendukung kegiatan monitoring dan pemeliharaan motor, generator, dan sistem kelistrikan.",


pltaLi3:
"Mendukung monitoring PLC, sistem kontrol, dan aktivitas otomasi pada sistem pembangkit.",

pltaLi4:
"Mendukung inspeksi panel listrik, troubleshooting, serta dokumentasi kegiatan pemeliharaan.",

pltaLi5:
"Mendukung kegiatan pembersihan dan pemeliharaan komponen konduktor listrik saat proses maintenance.",


pltaLi6:
"Mengikuti kegiatan overhaul unit dan proses pemeliharaan peralatan pembangkit.",

/* =========================
   EXPERIENCE KCN
========================= */


kcnTitle:
"PT Karya Cipta Neonusa",


kcnCompany:
"PT Karya Cipta Neonusa",


kcnPosition:
"Magang Teknisi Instalasi Kelistrikan",


kcnDescription:
"Melaksanakan program praktik kerja lapangan di PT Karya Cipta Neonusa pada kegiatan instalasi kelistrikan, meliputi sistem listrik, instalasi penerangan jalan, dan pekerjaan listrik tegangan rendah.",


kcnLi1:
"Melaksanakan kegiatan instalasi listrik dan pemasangan penerangan jalan.",


kcnLi2:
"Membantu instalasi dan inspeksi panel listrik serta sistem pengkabelan.",


kcnLi3:
"Mendukung kegiatan survei kelistrikan dan identifikasi material listrik.",


kcnLi4:
"Membantu kegiatan instalasi layanan kelistrikan dan sistem distribusi.",

/* =========================
   EXPERIENCE ROBOEDU
========================= */


roboeduTitle:
"CV RoboEdu",


roboeduCompany:
"CV RoboEdu",


roboeduPosition:
"Magang Robotics & Embedded System",


roboeduDescription:
"Melaksanakan kegiatan praktik di CV RoboEdu dengan fokus pada pengembangan robotika, embedded system, dan teknologi robot edukasi. Kegiatan meliputi perakitan robot, troubleshooting, pengujian sistem kontrol, dan pengembangan proyek teknis.",


roboeduLi1:
"Membantu proses perakitan dan troubleshooting kendaraan robot.",


roboeduLi2:
"Melakukan perakitan, pengujian, dan debugging sistem robot edukasi.",


roboeduLi3:
"Mendukung pengujian sistem kontrol robot menggunakan wireless controller.",


roboeduLi4:
"Berpartisipasi dalam diskusi teknis terkait pengembangan proyek robot baru.",

/* =========================
   PROJECTS
========================= */


projectsTitle:
"Proyek",


projectsHeading:
"Proyek Engineering",


projectsText1:
"Kumpulan proyek engineering yang dikembangkan melalui kegiatan akademik, industri, dan pengembangan pribadi. Proyek ini mencakup embedded system, robotika, otomasi, Internet of Things (IoT), desain perangkat keras, pengembangan PCB, dan implementasi prototipe.",


projectsText2:
"Portofolio ini menunjukkan pengalaman praktis dalam merancang, membangun, menguji, dan mengintegrasikan sistem kelistrikan serta elektronik dari konsep awal hingga menjadi prototipe yang berfungsi.",


projectsText3:
"Setiap proyek menunjukkan penerapan prinsip engineering meliputi desain rangkaian, pemrograman mikrokontroler, integrasi sensor, sistem kontrol, dan troubleshooting sistem.",

/* =========================
   FINAL THESIS
========================= */


thesisTitle:
"Proyek Tugas Akhir",


thesisDescription:
"Autonomous Smart Waste Bin Prototype<br>Deep Learning-Based Waste Classification System",

/* =========================
   CONTACT
========================= */


contactTitle:
"Kontak",


contactHeading:
"Mari Terhubung",


contactDescription:
"Berkomitmen menciptakan solusi engineering yang andal melalui sistem kelistrikan, otomasi, teknologi embedded, dan pengembangan inovatif.",

}


};










/* =========================
   LANGUAGE SWITCH
========================= */


function changeLanguage(lang){





if(lang === "en"){



/* HOME */


document.getElementById("hero-title").innerHTML =
translations.en.heroTitle;


document.getElementById("hero-description").innerHTML =
translations.en.heroDescription;




/* ABOUT */


document.getElementById("about-title").innerHTML =
translations.en.aboutTitle;


document.getElementById("about-text-1").innerHTML =
translations.en.aboutText1;


document.getElementById("about-text-2").innerHTML =
translations.en.aboutText2;


document.getElementById("about-text-3").innerHTML =
translations.en.aboutText3;




/* EXPERIENCE */


document.getElementById("experience-title").innerHTML =
translations.en.experienceTitle;


document.getElementById("um-position").innerHTML =
translations.en.umPosition;


document.getElementById("um-description").innerHTML =
translations.en.umDescription;


document.getElementById("um-li1").innerHTML =
translations.en.umLi1;


document.getElementById("um-li2").innerHTML =
translations.en.umLi2;


document.getElementById("um-li3").innerHTML =
translations.en.umLi3;


document.getElementById("um-li4").innerHTML =
translations.en.umLi4;


document.getElementById("um-li5").innerHTML =
translations.en.umLi5;



/* EXPERIENCE PLTA */


document.getElementById("plta-title").innerHTML =
translations.en.pltaTitle;


document.getElementById("plta-position").innerHTML =
translations.en.pltaPosition;


document.getElementById("plta-description").innerHTML =
translations.en.pltaDescription;


document.getElementById("plta-li1").innerHTML =
translations.en.pltaLi1;


document.getElementById("plta-li2").innerHTML =
translations.en.pltaLi2;


document.getElementById("plta-li3").innerHTML =
translations.en.pltaLi3;


document.getElementById("plta-li4").innerHTML =
translations.en.pltaLi4;


document.getElementById("plta-li5").innerHTML =
translations.en.pltaLi5;


document.getElementById("plta-li6").innerHTML =
translations.en.pltaLi6;

document.getElementById("plta-company").innerHTML =
translations.en.pltaCompany;


/* =========================
   EXPERIENCE KCN
========================= */


document.getElementById("kcn-title").innerHTML =
translations.en.kcnTitle;


document.getElementById("kcn-company").innerHTML =
translations.en.kcnCompany;


document.getElementById("kcn-position").innerHTML =
translations.en.kcnPosition;


document.getElementById("kcn-description").innerHTML =
translations.en.kcnDescription;


document.getElementById("kcn-li1").innerHTML =
translations.en.kcnLi1;


document.getElementById("kcn-li2").innerHTML =
translations.en.kcnLi2;


document.getElementById("kcn-li3").innerHTML =
translations.en.kcnLi3;


document.getElementById("kcn-li4").innerHTML =
translations.en.kcnLi4;

/* =========================
   EXPERIENCE ROBOEDU
========================= */


document.getElementById("roboedu-title").innerHTML =
translations.en.roboeduTitle;


document.getElementById("roboedu-company").innerHTML =
translations.en.roboeduCompany;


document.getElementById("roboedu-position").innerHTML =
translations.en.roboeduPosition;


document.getElementById("roboedu-description").innerHTML =
translations.en.roboeduDescription;


document.getElementById("roboedu-li1").innerHTML =
translations.en.roboeduLi1;


document.getElementById("roboedu-li2").innerHTML =
translations.en.roboeduLi2;


document.getElementById("roboedu-li3").innerHTML =
translations.en.roboeduLi3;


document.getElementById("roboedu-li4").innerHTML =
translations.en.roboeduLi4;

/* =========================
   PROJECTS
========================= */


document.getElementById("projects-title").innerHTML =
translations.en.projectsTitle;


document.getElementById("projects-heading").innerHTML =
translations.en.projectsHeading;


document.getElementById("projects-text-1").innerHTML =
translations.en.projectsText1;


document.getElementById("projects-text-2").innerHTML =
translations.en.projectsText2;


document.getElementById("projects-text-3").innerHTML =
translations.en.projectsText3;

/* =========================
   FINAL THESIS
========================= */


document.getElementById("thesis-title").innerHTML =
translations.en.thesisTitle;


document.getElementById("thesis-description").innerHTML =
translations.en.thesisDescription;

/* =========================
   CONTACT
========================= */


document.getElementById("contact-title").innerHTML =
translations.en.contactTitle;


document.getElementById("contact-heading").innerHTML =
translations.en.contactHeading;


document.getElementById("contact-description").innerHTML =
translations.en.contactDescription;

console.log("English selected");

}








if(lang === "id"){



/* HOME */


document.getElementById("hero-title").innerHTML =
translations.id.heroTitle;


document.getElementById("hero-description").innerHTML =
translations.id.heroDescription;




/* ABOUT */


document.getElementById("about-title").innerHTML =
translations.id.aboutTitle;


document.getElementById("about-text-1").innerHTML =
translations.id.aboutText1;


document.getElementById("about-text-2").innerHTML =
translations.id.aboutText2;


document.getElementById("about-text-3").innerHTML =
translations.id.aboutText3;




/* EXPERIENCE */


document.getElementById("experience-title").innerHTML =
translations.id.experienceTitle;


document.getElementById("um-position").innerHTML =
translations.id.umPosition;


document.getElementById("um-description").innerHTML =
translations.id.umDescription;


document.getElementById("um-li1").innerHTML =
translations.id.umLi1;


document.getElementById("um-li2").innerHTML =
translations.id.umLi2;


document.getElementById("um-li3").innerHTML =
translations.id.umLi3;


document.getElementById("um-li4").innerHTML =
translations.id.umLi4;


document.getElementById("um-li5").innerHTML =
translations.id.umLi5;

/* EXPERIENCE PLTA */


document.getElementById("plta-title").innerHTML =
translations.id.pltaTitle;


document.getElementById("plta-position").innerHTML =
translations.id.pltaPosition;


document.getElementById("plta-description").innerHTML =
translations.id.pltaDescription;


document.getElementById("plta-li1").innerHTML =
translations.id.pltaLi1;


document.getElementById("plta-li2").innerHTML =
translations.id.pltaLi2;


document.getElementById("plta-li3").innerHTML =
translations.id.pltaLi3;


document.getElementById("plta-li4").innerHTML =
translations.id.pltaLi4;


document.getElementById("plta-li5").innerHTML =
translations.id.pltaLi5;


document.getElementById("plta-li6").innerHTML =
translations.id.pltaLi6;

document.getElementById("plta-company").innerHTML =
translations.id.pltaCompany;

/* =========================
   EXPERIENCE KCN
========================= */


document.getElementById("kcn-title").innerHTML =
translations.id.kcnTitle;


document.getElementById("kcn-company").innerHTML =
translations.id.kcnCompany;


document.getElementById("kcn-position").innerHTML =
translations.id.kcnPosition;


document.getElementById("kcn-description").innerHTML =
translations.id.kcnDescription;


document.getElementById("kcn-li1").innerHTML =
translations.id.kcnLi1;


document.getElementById("kcn-li2").innerHTML =
translations.id.kcnLi2;


document.getElementById("kcn-li3").innerHTML =
translations.id.kcnLi3;


document.getElementById("kcn-li4").innerHTML =
translations.id.kcnLi4;

/* =========================
   EXPERIENCE ROBOEDU
========================= */


document.getElementById("roboedu-title").innerHTML =
translations.id.roboeduTitle;


document.getElementById("roboedu-company").innerHTML =
translations.id.roboeduCompany;


document.getElementById("roboedu-position").innerHTML =
translations.id.roboeduPosition;


document.getElementById("roboedu-description").innerHTML =
translations.id.roboeduDescription;


document.getElementById("roboedu-li1").innerHTML =
translations.id.roboeduLi1;


document.getElementById("roboedu-li2").innerHTML =
translations.id.roboeduLi2;


document.getElementById("roboedu-li3").innerHTML =
translations.id.roboeduLi3;


document.getElementById("roboedu-li4").innerHTML =
translations.id.roboeduLi4;

/* =========================
   PROJECTS
========================= */


document.getElementById("projects-title").innerHTML =
translations.id.projectsTitle;


document.getElementById("projects-heading").innerHTML =
translations.id.projectsHeading;


document.getElementById("projects-text-1").innerHTML =
translations.id.projectsText1;


document.getElementById("projects-text-2").innerHTML =
translations.id.projectsText2;


document.getElementById("projects-text-3").innerHTML =
translations.id.projectsText3;

/* =========================
   FINAL THESIS
========================= */


document.getElementById("thesis-title").innerHTML =
translations.id.thesisTitle;


document.getElementById("thesis-description").innerHTML =
translations.id.thesisDescription;

/* =========================
   CONTACT
========================= */


document.getElementById("contact-title").innerHTML =
translations.id.contactTitle;


document.getElementById("contact-heading").innerHTML =
translations.id.contactHeading;


document.getElementById("contact-description").innerHTML =
translations.id.contactDescription;

console.log("Indonesia selected");



}


}