import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Database, TrendingUp, Code, Mail, Linkedin, Github, 
  Award, Briefcase, GraduationCap, ChevronRight, Users, Trophy, 
  ExternalLink, FileText, X, ChevronLeft, Calendar, MapPin, Grid, Eye
} from 'lucide-react';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openCertImage = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertImage = () => {
    setSelectedCert(null);
    if (!showAllCerts) {
      document.body.style.overflow = 'unset';
    }
  };

  const openCertModal = () => {
    setShowAllCerts(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeCertModal = () => {
    setShowAllCerts(false);
    document.body.style.overflow = 'unset'; 
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; 
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; 
  };

  const contactInfo = {
    email: "jihannabilah624@gmail.com",
    linkedin: "https://www.linkedin.com/in/jihan-nabilah-057318357/",
    github: "https://github.com/Jihanablh",
  };

  const skills = [
    { category: "Programming Languages", icon: <Code size={32} />, items: ["Python", "SQL", "R", "C++", "JavaScript", "Bash Scripting"], gradient: "from-blue-500 via-cyan-500 to-teal-500", iconColor: "text-blue-400" },
    { category: "Business & Data Analytics", icon: <Database size={32} />, items: ["Data Analysis, Business Intelligence, Statistical Analysis, Customer & Market Analysis , Data-driven Decision Making"], gradient: "from-purple-500 via-pink-500 to-rose-500", iconColor: "text-purple-400" },
    { category: "Data Visualization", icon: <BarChart3 size={32} />, items: ["Tableau", "Power BI", "Google Looker Studio", "Matplotlib", "Seaborn", "Plotly"], gradient: "from-emerald-500 via-green-500 to-lime-500", iconColor: "text-emerald-400" },
    { category: "Tools & Platforms", icon: <Trophy size={32} />, items: ["Git & GitHub", "Docker", "Jupyter Lab", "PostgreSQL", "Google Cloud", "VS Code"], gradient: "from-orange-500 via-amber-500 to-yellow-500", iconColor: "text-orange-400" },
    { category: "Soft Skills", icon: <Users size={32} />, items: ["Data Storytelling", "Critical Thinking", "Problem Solving", "Project Management", "Team Collaboration"], gradient: "from-indigo-500 via-violet-500 to-fuchsia-500", iconColor: "text-indigo-400" }
  ];

  const projects = [
    {
      title: 'GoFood Marketing Analytics & Strategy',
      category: 'Business Analysis',
      shortDesc: 'Analisis performa kampanye marketing GoFood untuk optimasi budget dan konversi.',
      description: 'Proyek analisis bisnis yang bertujuan mengevaluasi efektivitas strategi pemasaran GoFood dan mendukung pengambilan keputusan tim marketing. Analisis difokuskan pada Customer Acquisition Cost (CAC) dan Customer Lifetime Value (CLV) untuk menyusun rekomendasi alokasi budget iklan yang lebih efisien dan berdampak pada peningkatan konversi.',
      challenges: ['Menggabungkan data transaksi organik dan paid-marketing yang terfragmentasi.', 'Mengidentifikasi segmentasi pelanggan berdasarkan perilaku pemesanan makanan.', 'Memvisualisasikan funnel konversi dari impresi hingga transaksi selesai.'],
      outcomes: ['Memberikan roadmap penghematan budget marketing sebesar 15% melalui penargetan ulang (retargeting).', 'Dashboard interaktif untuk memantau performa merchant mitra GoFood.', 'Rekomendasi promosi spesifik berdasarkan jam sibuk (peak hours).'],
      tech: ['SQL', 'Tableau', 'Marketing Analytics', 'Excel'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project01_GoFood_Marketing_Analysis', demo: '#',
      images: ['/images_projects/Dashboard_BI_Gojek.png', '/images_projects/Data_BI_Gojek.png']
    },
    {
      title: 'Global Superstore Executive Dashboard',
      category: 'Business Analysis',
      shortDesc: 'Dashboard strategis untuk memantau profitabilitas ritel global.',
      description: 'Membangun dashboard eksekutif untuk jaringan ritel global "Superstore". Proyek ini berfokus pada visualisasi profitabilitas lintas negara, kategori produk, dan segmen pelanggan. Tujuannya adalah membantu C-Level mengidentifikasi pasar yang merugi (loss-making markets) dan produk unggulan.',
      challenges: ['Menangani dataset berskala besar dengan multi-currency dan data geografis.', 'Merancang hierarki visual yang memudahkan user melakukan drill-down dari level benua ke kota.', 'Menghitung metrik profitabilitas yang kompleks dengan penyesuaian biaya pengiriman.'],
      outcomes: ['Identifikasi 3 negara dengan performa terburuk untuk evaluasi strategi pasar.', 'Peningkatan visibilitas terhadap tren penjualan musiman.', 'Dashboard interaktif yang menjadi standar pelaporan bulanan.'],
      tech: ['Power BI', 'Data Modeling', 'DAX', 'SQL'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project4_Global_Superstore_Analytics', demo: '#',
      images: ['/images_projects/Dashboard_BI_Global.png', '/images_projects/Data_BI_Global.png']
    },
    {
      title: 'E-Commerce Sales Performance Analysis',
      category: 'Data Analysis',
      shortDesc: 'Analisis tren penjualan e-commerce untuk perencanaan stok dan promosi.',
      description: 'Analisis komprehensif terhadap data transaksi e-commerce untuk memahami perilaku belanja konsumen. Proyek ini menggali pola pembelian (basket analysis), churn rate pelanggan, dan efektivitas metode pembayaran. Hasil analisis digunakan untuk strategi inventory planning.',
      challenges: ['Membersihkan data transaksi yang mengandung anomali dan duplikasi.', 'Menganalisis retensi pelanggan menggunakan teknik Cohort Analysis.', 'Menghubungkan data logistik pengiriman dengan kepuasan pelanggan.'],
      outcomes: ['Menemukan korelasi kuat antara keterlambatan pengiriman dan penurunan rating toko.', 'Rekomendasi bundling produk yang meningkatkan rata-rata nilai transaksi (AOV).', 'Laporan tren kategori produk terlaris per kuartal.'],
      tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project5_Ecommerce_Sales_Analysis', demo: '#',
      images: ['/images_projects/Dashboard_BI_Ecommerce.png', '/images_projects/Data_BI_Ecommerce.png', '/images_projects/Star_Schema_BI_Ecommerce.png']
    },
    {
      title: 'HR Analytics: Workforce Architecture',
      category: 'People Analytics',
      shortDesc: 'Analisis struktur demografi dan kinerja karyawan untuk perencanaan SDM.',
      description: 'Proyek arsitektur data untuk departemen HR yang bertujuan memetakan distribusi talenta dalam perusahaan. Menganalisis keberagaman (diversity), kesenjangan gaji (pay gap), dan distribusi kinerja antar departemen untuk mendukung pengambilan keputusan yang adil dan berbasis data.',
      challenges: ['Menjaga kerahasiaan data karyawan (PII) saat melakukan analisis.', 'Membuat model data yang menghubungkan kinerja individu dengan tujuan bisnis.', 'Visualisasi struktur organisasi yang dinamis.'],
      outcomes: ['Dashboard Diversity & Inclusion untuk memantau target kesetaraan perusahaan.', 'Identifikasi departemen dengan tingkat promosi internal tertinggi.', 'Analisis kompensasi untuk memastikan keadilan gaji internal.'],
      tech: ['Looker Studio', 'SQL', 'HR Metrics', 'Spreadsheet'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project2_HR_Analytics_Architecture', demo: '#',
      images: ['/images_projects/Dashboard_BI_HR.png', '/images_projects/Data_BI_HR.png', '/images_projects/Star_Schema_BI_HR.png']
    },
    {
    title: 'Global Layoffs Analysis: Business Analysis & Trends',
    category: 'Data Science',
    shortDesc: 'Analisis mendalam tren PHK global menggunakan Python (IBM x Hacktiv8 Final Project).',
    description: 'Proyek Final IBM x Hacktiv8 yang menganalisis dataset PHK global untuk mengungkap pola ekonomi dan dampak sektoral. Mengintegrasikan pembersihan data (data cleaning), analisis eksploratif (EDA), dan visualisasi untuk memberikan wawasan strategis bagi industri dan pencari kerja.',
    challenges: ['Menangani missing values yang signifikan pada data jumlah PHK dan dana perusahaan.', 'Standardisasi nama industri dan lokasi yang tidak konsisten untuk akurasi kategori.', 'Analisis tren time-series untuk memetakan puncak gelombang PHK tahunan.'],
    outcomes: ['Identifikasi sektor teknologi sebagai industri dengan dampak PHK terbesar.', 'Visualisasi tren puncak PHK global pada periode 2023-2024.', 'Wawasan strategis mengenai stabilitas perusahaan berdasarkan tahapan pendanaan (Startup vs IPO).'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Jihanablh/Bootcamp_IBM_X_Hacktiv8/tree/main/Project1_Layoffs_Analysis', demo: '#', 
    images: ['/images_projects/Py_Layoffs.png', '/images_projects/Py_Layoffs2.png', '/images_projects/Py_Layoffs3.png', '/images_projects/Py_Layoffs4.png', '/images_projects/Py_Layoffs5.png']
    },
    {
      title: 'AI Job Market Trends Analysis',
      category: 'Market Research',
      shortDesc: 'Analisis tren kebutuhan skill dan gaji di pasar kerja Artificial Intelligence.',
      description: 'Menganalisis dataset lowongan pekerjaan untuk memahami lanskap karir di bidang AI dan Data Science. Fokus pada identifikasi skill yang paling banyak diminta (in-demand skills), persebaran lokasi pekerjaan, dan standar gaji berdasarkan tingkat pengalaman.',
      challenges: ['Natural Language Processing (NLP) sederhana untuk mengekstrak keyword skill dari deskripsi kerja.', 'Normalisasi data gaji yang memiliki format berbeda-beda.', 'Kategorisasi role pekerjaan yang ambigu.'],
      outcomes: ['Peta persebaran lowongan kerja AI/Data di berbagai industri.', 'Daftar 10 top technical skills yang wajib dikuasai pelamar.', 'Insight mengenai kesenjangan supply dan demand talenta data.'],
      tech: ['Python', 'NLP', 'Data Visualization', 'Pandas'],
      github: 'https://github.com/Jihanablh/Bootcamp_DibimbingID/tree/main/Project2_Ai_Job_Market_Analysis', demo: '#',
      images: ['/images_projects/Py_Job.png', '/images_projects/Py_Job2.png', '/images_projects/Py_Job3.png', '/images_projects/Py_Job4.png', '/images_projects/Py_Job5.png']
    },
    {
      title: 'Retail Sales Trend Analysis',
      category: 'Business Analysis',
      shortDesc: 'Identifikasi pola penjualan ritel untuk forecasting sederhana.',
      description: 'Analisis historis data penjualan ritel untuk melihat tren tahunan, bulanan, dan mingguan. Bertujuan untuk membantu manajer toko dalam mempersiapkan stok barang menjelang periode ramai (high season).',
      challenges: ['Mengidentifikasi pola musiman (seasonality) dari data mentah.', 'Memisahkan tren jangka panjang dari fluktuasi jangka pendek.'],
      outcomes: ['Visualisasi tren penjualan yang jelas dan mudah dipahami.', 'Identifikasi hari-hari dengan penjualan terendah untuk strategi promosi.'],
      tech: ['Excel', 'Tableau', 'Descriptive Analytics'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project3_Retail_Sales_Trend_Analysis', demo: '#',
      images: ['/images_projects/Dashboard_BI_Retail.png', '/images_projects/Data_BI_Retail.png']
    },
    {
      title: 'Marketing Customer Segmentation',
      category: 'Data Analysis',
      shortDesc: 'Segmentasi pelanggan (DQLab) untuk strategi pemasaran yang personal.',
      description: 'Menggunakan data pelanggan untuk melakukan segmentasi (clustering) sederhana. Tujuannya adalah memahami profil pelanggan yang berbeda-beda agar tim marketing dapat mengirimkan pesan yang lebih relevan (personalized marketing).',
      challenges: ['Menentukan variabel yang paling berpengaruh untuk segmentasi.', 'Menginterpretasikan karakteristik tiap cluster yang terbentuk.'],
      outcomes: ['Terbentuknya profil persona pelanggan (misal: Loyal, New, Churn Risk).', 'Strategi komunikasi yang berbeda untuk setiap segmen.'],
      tech: ['R Language', 'Data Analysis', 'Statistics'],
      github: 'https://github.com/Jihanablh/Bootcamp_DQLab/tree/main/project2_marketing_customer', demo: '#',
      images: ['/images_projects/Py_Marketing.png', '/images_projects/Py_Marketing2.png', '/images_projects/Py_Marketing3.png']
    },
    {
      title: 'Business Decision Research',
      category: 'Business Analytics',
      shortDesc: 'Riset berbasis data untuk mendukung pengambilan keputusan bisnis (DQLab).',
      description: 'Penerapan metode statistik dasar untuk memvalidasi hipotesis bisnis. Proyek ini menggunakan data historis perusahaan untuk menjawab pertanyaan bisnis spesifik terkait efisiensi operasional.',
      challenges: ['Memilih metode uji statistik yang tepat.', 'Menerjemahkan hasil statistik menjadi bahasa bisnis.'],
      outcomes: ['Laporan rekomendasi keputusan berbasis fakta.', 'Validasi asumsi manajemen dengan data riil.'],
      tech: ['R Language', 'Statistics', 'Data Cleaning'],
      github: 'https://github.com/Jihanablh/Bootcamp_DQLab/tree/main/project1__business_decision', demo: '#',
      images: ['/images_projects/Py_Business.png', '/images_projects/Py_Marketing2.png', '/images_projects/Py_Marketing3.png']
    }
  ];

  const experience = [
    {
      role: 'Junior Data Scientist (Studi Independen)',
      company: 'PT Vinix Seven Aurum (MSIB Batch 3)',
      period: 'Aug 2025 - Dec 2025',
      type: 'Professional',
      summary: 'Terpilih dalam program MSIB Kampus Merdeka "Junior Data Scientist" dengan kurikulum industri intensif. Bertanggung jawab menyelesaikan siklus penuh data sains (End-to-End Data Science Lifecycle) mulai dari akuisisi data, pembersihan (cleansing), eksplorasi (EDA), hingga penyajian insight bisnis. Fokus pada penerapan teknis Python dan SQL untuk memecahkan studi kasus di berbagai sektor industri.',
      achievements: [
        'Melakukan Data Acquisition & Cleansing pada dataset mentah (Raw Data) menggunakan Python (Pandas) di Google Colab, memastikan integritas data siap olah.',
        'Mengimplementasikan Exploratory Data Analysis (EDA) dan teknik Cluster Analysis untuk menemukan pola tersembunyi serta segmentasi data yang mendukung strategi bisnis.',
        'Menyelesaikan Final Capstone Project yang mengintegrasikan analisis statistik dan pemodelan data, serta mempresentasikan temuan (Actionable Insights) menggunakan teknik Data Storytelling & Infografis.',
        'Menguasai penggunaan AI Tools untuk efisiensi pengolahan data dan pembuatan laporan kinerja berbasis data yang akurat.'
      ],
      tech: ['Python', 'SQL', 'Google Colab', 'Pandas', 'Data Storytelling', 'Cluster Analysis']
    },
    {
      role: 'Asisten Dosen Sistem Operasi',
      company: 'Universitas Bakrie',
      period: 'Feb 2025 - Mei 2025',
      type: 'Academic',
      summary: 'Dipercaya oleh fakultas untuk mendampingi Dosen Utama dalam memfasilitasi pembelajaran teknis mata kuliah Sistem Operasi. Berperan strategis dalam menjembatani pemahaman konseptual mahasiswa dengan implementasi praktis di laboratorium, serta memastikan standar kompetensi teknis mahasiswa terpenuhi.',
      achievements: [
        'Mengkoordinasikan sesi praktikum mingguan untuk 60+ mahasiswa, mencakup materi teknis mendalam seperti Manajemen Memori, Process Scheduling, dan File Systems.',
        'Melakukan instalasi, konfigurasi, dan troubleshooting lingkungan praktikum berbasis Linux (Debian) dan Windows pada Virtual Machine, memastikan kelancaran sesi lab.',
        'Mengembangkan modul pembelajaran interaktif dan skenario troubleshooting untuk ujian praktikum, meningkatkan pemahaman hands-on mahasiswa.',
        'Melakukan evaluasi objektif terhadap tugas dan proyek akhir, serta memberikan umpan balik teknis yang konstruktif untuk pengembangan skill mahasiswa.'
      ],
      tech: ['Linux (Debian)', 'Bash Scripting', 'VMware', 'C++', 'System Administration']
    },
    {
      role: 'Staff HRN (Human Resource Nomination)',
      company: 'IEEE Student Branch Universitas Bakrie',
      period: 'Mar 2025 - Present',
      type: 'Organization',
      summary: 'Memegang peran kunci dalam manajemen talenta organisasi global cabang universitas. Mengimplementasikan strategi "People Development" untuk merekrut, melatih, dan mempertahankan anggota berkualitas tinggi. Fokus pada penciptaan budaya organisasi yang produktif dan kolaboratif melalui pendekatan yang terstruktur.',
      achievements: [
        'Memimpin proses rekrutmen end-to-end (screening hingga onboarding), berhasil menyaring talenta terbaik yang sesuai dengan nilai dan kebutuhan organisasi.',
        'Merancang dan mengeksekusi program pengembangan kapasitas (Up-skilling) dan pelatihan soft-skills yang meningkatkan retensi dan keterlibatan anggota.',
        'Menginisiasi sistem administrasi HR yang terstruktur untuk memantau KPI anggota dan mempermudah kolaborasi lintas divisi.',
        'Bertindak sebagai jembatan komunikasi strategis antar-divisi untuk memastikan penyelarasan tujuan organisasi dan kesejahteraan anggota.'
      ],
      tech: ['Talent Acquisition', 'People Development', 'HR Administration', 'Organizational Development', 'Leadership']
    },
    {
      role: 'Humas (Public Relations)',
      company: 'Karang Taruna Cikoko',
      period: 'Jan 2025 - Present',
      type: 'Community',
      summary: 'Bertanggung jawab sebagai wajah organisasi dalam membangun citra positif dan hubungan strategis dengan pemangku kepentingan eksternal. Mengelola strategi komunikasi terintegrasi untuk memperluas jangkauan program sosial dan meningkatkan partisipasi aktif masyarakat.',
      achievements: [
        'Merancang strategi komunikasi digital dan branding visual yang konsisten di media sosial, meningkatkan awareness masyarakat terhadap program kerja organisasi.',
        'Mengelola hubungan eksternal (External Relations) dan negosiasi kemitraan dengan pihak sponsor serta pemerintah lokal untuk dukungan event.',
        'Mengkoordinasikan publikasi acara dan manajemen krisis komunikasi untuk memastikan kelancaran berbagai kegiatan skala menengah-besar.',
        'Sukses meningkatkan engagement digital dan partisipasi warga dalam kegiatan sosial melalui kampanye informasi yang efektif.'
      ],
      tech: ['Public Relations', 'Social Media Branding', 'Stakeholder Management', 'Crisis Communication', 'Event Marketing']
    }
  ];

  const allAchievements = [
        {
      id: 1,
      title: "Data Analyst Project: Business Decision Research",
      issuer: "DQLab",
      date: "2024",
      type: "Project Cert",
      desc: "Menyelesaikan capstone project analisis data ritel menggunakan SQL dan Python. Fokus pada pengambilan keputusan bisnis berbasis data.",
      icon: <BarChart3 />,
      link: "https://drive.google.com/open?id=1Lt4AfbTUrkcTd9A32kpnta7tlNTP0rjT&usp=drive_copy" // Cek Link: Business Decision
    },
    {
      id: 2,
      title: "Customer Segmentation with Python",
      issuer: "DQLab",
      date: "2024",
      type: "Data Science",
      desc: "Studi kasus nyata melakukan segmentasi pelanggan (Clustering) menggunakan algoritma Machine Learning dengan Python.",
      icon: <Users />,
      link: "https://drive.google.com/open?id=15gfcV1SfiwaOfCnlWRGCV5TaAqrjZoRL&usp=drive_copy" // Cek Link: Customer Segmentation
    },
    {
      id: 3,
      title: "Samsung Innovation Campus (SIC) - Batch 5",
      issuer: "Samsung & Skilvul",
      date: "2024",
      type: "Bootcamp",
      desc: "Program intensif dan selektif dari Samsung. Mempelajari Python Programming, Logic, dan penyelesaian masalah teknis.",
      icon: <Trophy />,
      link: "https://drive.google.com/open?id=1y2i5I_Fb8FTjq6WVADKdfD_ihwwcDOLg&usp=drive_copy" // Cek Link: SIC Samsung
    },
    {
      id: 4,
      title: "Big Data Integration and Processing",
      issuer: "UC San Diego (Coursera)",
      date: "2024",
      type: "Certification",
      desc: "Sertifikasi internasional mengenai penanganan Big Data, integrasi sistem, dan pemrosesan data skala besar (Hadoop/Spark).",
      icon: <Database />,
      link: "https://drive.google.com/open?id=1JKtGZJ1RHA51mfzqjLXJFZ_WOgm-5QXO&usp=drive_copy" // Cek Link: Big Data Coursera
    },
    {
      id: 5,
      title: "Pemrograman Dengan Python",
      issuer: "Dicoding Indonesia",
      date: "2024",
      type: "Programming",
      desc: "Menguasai sintaks dasar hingga lanjut bahasa Python, termasuk manipulasi data dan Object-Oriented Programming (OOP).",
      icon: <Code />,
      link: "https://drive.google.com/open?id=1s4b0kJedEElbYCxDYB3Str_UTtmZfrqR&usp=drive_copy" // Cek Link: Python Dicoding
    },
    {
      id: 6,
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding Indonesia",
      date: "2024",
      type: "Data Viz",
      desc: "Validasi kemampuan membuat dashboard dan grafik yang efektif untuk menyampaikan insight data kepada stakeholder.",
      icon: <TrendingUp />,
      link: "https://drive.google.com/open?id=1VdVcSq99wKfEzSNr9mZ6HhVaL4dh6mD5&usp=drive_copy" // Cek Link: Visualisasi Data
    },
    {
      id: 7,
      title: "Data Analytics Mini Course",
      issuer: "RevoU",
      date: "2024",
      type: "Course",
      desc: "Pemahaman kurikulum industri terkini mengenai Data Analytics, SQL, dan strategi pengolahan data.",
      icon: <BarChart3 />,
      link: "https://drive.google.com/open?id=1cmNSBtonzSY3evvl8PzHbvMTGB7KJekq&usp=drive_copy" // Cek Link: RevoU
    },
    {
      id: 8,
      title: "Data Science Bootcamp",
      issuer: "Dibimbing.id",
      date: "2024",
      type: "Bootcamp",
      desc: "Program pembelajaran intensif mencakup statistik, eksplorasi data, hingga pemodelan prediktif.",
      icon: <Database />,
      link: "https://drive.google.com/open?id=159DXk1-SvGMZKnhlQaMUDxXNhpGUaxyW&usp=drive_copy" // Cek Link: Data Science Dibimbing
    },
    {
      id: 9,
      title: "Design Thinking for Business",
      issuer: "Universitas Bakrie",
      date: "2024",
      type: "Methodology",
      desc: "Penerapan mindset Design Thinking untuk memahami kebutuhan pengguna dan merancang solusi bisnis yang tepat guna.",
      icon: <Users />,
      link: "https://drive.google.com/open?id=1a6Ha-ixQX_-gZEereaFQsORETaY-o8Pi&usp=drive_copy" // Cek Link: Design Thinking
    },
    {
      id: 10,
      title: "Figma Tools for UI/UX",
      issuer: "MySkill",
      date: "2024",
      type: "Design",
      desc: "Keahlian membuat wireframe dan mockup dashboard/aplikasi sebelum tahap pengembangan (Skill vital Business Analyst).",
      icon: <Award />,
      link: "https://drive.google.com/open?id=1Zfxq6Ea1Igo92VThDIYR6LLWInn6RdHB&usp=drive_copy" // Cek Link: Figma
    },
    {
      id: 11,
      title: "Business English & Soft Skill",
      issuer: "Professional Dev",
      date: "2024",
      type: "Soft Skill",
      desc: "Kemampuan komunikasi profesional dalam bahasa Inggris, krusial untuk lingkungan kerja multinasional.",
      icon: <ShieldCheck />,
      link: "https://drive.google.com/open?id=18VxEEHlX50ajjQJbYks7_gk_QDRsJNJM&usp=drive_copy" // Cek Link: Business English
    },
    {
      id: 12,
      title: "Machine Learning Fundamentals",
      issuer: "Udemy",
      date: "2024",
      type: "Machine Learning",
      desc: "Pemahaman fundamental algoritma Machine Learning sebagai pendukung skill teknis Python.",
      icon: <Code />,
      link: "https://drive.google.com/open?id=13W_d__oi5xDOhswTORAb8u5wqQoGgeHY&usp=drive_copy" // Cek Link: ML Udemy
    },
    {
      id: 13,
      title: "AI Training & Electives",
      issuer: "Batch 4 Student Class",
      date: "2024",
      type: "Artificial Intelligence",
      desc: "Mengikuti perkembangan teknologi AI terkini dan penerapannya dalam kasus nyata.",
      icon: <Trophy />,
      link: "https://drive.google.com/open?id=1lzGdlFK24H8U6-s5NwekMmuyqORLpb7X&usp=drive_copy" // Cek Link: AI Training
    },
    {
      id: 14,
      title: "SkillsBuild Completion",
      issuer: "IBM",
      date: "2024",
      type: "Certification",
      desc: "Penyelesaian modul kompetensi teknis dan profesional dari IBM SkillsBuild.",
      icon: <ShieldCheck />,
      link: "https://drive.google.com/open?id=1zKQsbjD03J2snXoU7X6hQILPkDCjvrTs&usp=drive_copy" // Cek Link: IBM/Lainnya
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative">
      <Navbar activeTab={activeTab} scrollToSection={scrollToSection} />
      <HeroSection contactInfo={contactInfo} scrollToSection={scrollToSection} />
      <div className="container mx-auto px-4 sm:px-6 space-y-16">
        <AboutSection />
        <ExperienceSection experience={experience} />
        <ProjectsSection 
          projects={projects} 
          openProjectDetail={openProjectDetail} 
          selectedProject={selectedProject} 
          closeProjectDetail={closeProjectDetail} 
          currentImageIndex={currentImageIndex} 
          nextImage={nextImage} 
          prevImage={prevImage} 
        />
        <SkillsSection skills={skills} />
        <CertificationsSection 
          allAchievements={allAchievements}
          openCertImage={openCertImage} 
          openCertModal={openCertModal} 
          showAllCerts={showAllCerts} 
          closeCertModal={closeCertModal} 
          selectedCert={selectedCert} 
          closeCertImage={closeCertImage} 
        />
      </div>
      <ContactSection contactInfo={contactInfo} scrollToSection={scrollToSection} />
    </div>
  );
}