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
    { category: "Data Science & ML", icon: <Database size={32} />, items: ["Machine Learning", "Deep Learning", "NLP", "Data Mining", "Statistical Analysis", "Predictive Modeling"], gradient: "from-purple-500 via-pink-500 to-rose-500", iconColor: "text-purple-400" },
    { category: "Data Visualization", icon: <BarChart3 size={32} />, items: ["Tableau", "Power BI", "Google Looker Studio", "Matplotlib", "Seaborn", "Plotly"], gradient: "from-emerald-500 via-green-500 to-lime-500", iconColor: "text-emerald-400" },
    { category: "Tools & Platforms", icon: <Trophy size={32} />, items: ["Git & GitHub", "Docker", "Jupyter Lab", "PostgreSQL", "Google Cloud", "VS Code"], gradient: "from-orange-500 via-amber-500 to-yellow-500", iconColor: "text-orange-400" },
    { category: "Soft Skills", icon: <Users size={32} />, items: ["Data Storytelling", "Critical Thinking", "Problem Solving", "Project Management", "Team Collaboration"], gradient: "from-indigo-500 via-violet-500 to-fuchsia-500", iconColor: "text-indigo-400" }
  ];

const projects = [
    {
      title: 'GoFood Marketing Analytics & Strategy',
      category: 'Business Intelligence',
      shortDesc: 'Analisis performa kampanye marketing GoFood untuk optimasi budget dan konversi.',
      description: 'Proyek Business Intelligence mendalam yang menganalisis efektivitas strategi pemasaran pada platform GoFood. Fokus utama adalah mengevaluasi Customer Acquisition Cost (CAC) dan Customer Lifetime Value (CLV) untuk memberikan rekomendasi berbasis data kepada tim marketing dalam mengalokasikan budget iklan.',
      challenges: ['Menggabungkan data transaksi organik dan paid-marketing yang terfragmentasi.', 'Mengidentifikasi segmentasi pelanggan berdasarkan perilaku pemesanan makanan.', 'Memvisualisasikan funnel konversi dari impresi hingga transaksi selesai.'],
      outcomes: ['Memberikan roadmap penghematan budget marketing sebesar 15% melalui penargetan ulang (retargeting).', 'Dashboard interaktif untuk memantau performa merchant mitra GoFood.', 'Rekomendasi promosi spesifik berdasarkan jam sibuk (peak hours).'],
      tech: ['SQL', 'Tableau', 'Marketing Analytics', 'Excel'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project01_GoFood_Marketing_Analysis', demo: '#',
      images: ['public/images projects/Dashboard BI Gojek.png', 'public/images projects/Data BI Gojek.png']
    },
    {
      title: 'Global Superstore Executive Dashboard',
      category: 'Business Intelligence',
      shortDesc: 'Dashboard strategis untuk memantau profitabilitas ritel global.',
      description: 'Membangun dashboard eksekutif untuk jaringan ritel global "Superstore". Proyek ini berfokus pada visualisasi profitabilitas lintas negara, kategori produk, dan segmen pelanggan. Tujuannya adalah membantu C-Level mengidentifikasi pasar yang merugi (loss-making markets) dan produk unggulan.',
      challenges: ['Menangani dataset berskala besar dengan multi-currency dan data geografis.', 'Merancang hierarki visual yang memudahkan user melakukan drill-down dari level benua ke kota.', 'Menghitung metrik profitabilitas yang kompleks dengan penyesuaian biaya pengiriman.'],
      outcomes: ['Identifikasi 3 negara dengan performa terburuk untuk evaluasi strategi pasar.', 'Peningkatan visibilitas terhadap tren penjualan musiman.', 'Dashboard interaktif yang menjadi standar pelaporan bulanan.'],
      tech: ['Power BI', 'Data Modeling', 'DAX', 'SQL'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project4_Global_Superstore_Analytics', demo: '#',
      images: ['public/images projects/Dashboard BI Global.png', 'public/images projects/Data BI Global.png']
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
      images: ['public/images projects/Dashboard BI Ecommerce.png', 'public/images projects/Data BI Ecommerce.png', 'public/images projects/Star Schema BI Ecommerce.png']
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
      images: ['public/images projects/Dashboard BI HR.png', 'public/images projects/Data BI HR.png', 'public/images projects/Star Schema BI HR.png']
    },
    {
    title: 'Global Layoffs Analysis: Business Intelligence & Trends',
    category: 'Data Science',
    shortDesc: 'Analisis mendalam tren PHK global menggunakan Python (IBM x Hacktiv8 Final Project).',
    description: 'Proyek Final IBM x Hacktiv8 yang menganalisis dataset PHK global untuk mengungkap pola ekonomi dan dampak sektoral. Mengintegrasikan pembersihan data (data cleaning), analisis eksploratif (EDA), dan visualisasi untuk memberikan wawasan strategis bagi industri dan pencari kerja.',
    challenges: ['Menangani missing values yang signifikan pada data jumlah PHK dan dana perusahaan.', 'Standardisasi nama industri dan lokasi yang tidak konsisten untuk akurasi kategori.', 'Analisis tren time-series untuk memetakan puncak gelombang PHK tahunan.'],
    outcomes: ['Identifikasi sektor teknologi sebagai industri dengan dampak PHK terbesar.', 'Visualisasi tren puncak PHK global pada periode 2023-2024.', 'Wawasan strategis mengenai stabilitas perusahaan berdasarkan tahapan pendanaan (Startup vs IPO).'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Jihanablh/Bootcamp_IBM_X_Hacktiv8/tree/main/Project1_Layoffs_Analysis', demo: '#', 
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800']
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
      images: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800']
    },

    // --- SECONDARY PROJECTS (UNTUK "SEE ALL") ---
    {
      title: 'Retail Sales Trend Analysis',
      category: 'Business Intelligence',
      shortDesc: 'Identifikasi pola penjualan ritel untuk forecasting sederhana.',
      description: 'Analisis historis data penjualan ritel untuk melihat tren tahunan, bulanan, dan mingguan. Bertujuan untuk membantu manajer toko dalam mempersiapkan stok barang menjelang periode ramai (high season).',
      challenges: ['Mengidentifikasi pola musiman (seasonality) dari data mentah.', 'Memisahkan tren jangka panjang dari fluktuasi jangka pendek.'],
      outcomes: ['Visualisasi tren penjualan yang jelas dan mudah dipahami.', 'Identifikasi hari-hari dengan penjualan terendah untuk strategi promosi.'],
      tech: ['Excel', 'Tableau', 'Descriptive Analytics'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project3_Retail_Sales_Trend_Analysis', demo: '#',
      images: ['https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800']
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
      images: ['https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800']
    },
    {
      title: 'COVID-19 Impact Analysis',
      category: 'Data Science',
      shortDesc: 'Analisis dampak pandemi COVID-19 terhadap berbagai sektor.',
      description: 'Proyek eksplorasi data yang melihat korelasi antara penyebaran kasus COVID-19 dengan indikator mobilitas atau ekonomi. Menggunakan visualisasi data untuk menceritakan dampak pandemi secara kronologis.',
      challenges: ['Pembersihan data kesehatan publik yang masif dan sering berubah format.', 'Visualisasi data deret waktu (time-series) yang fluktuatif.'],
      outcomes: ['Timeline visual penyebaran kasus.', 'Insight mengenai efektivitas pembatasan sosial di berbagai wilayah.'],
      tech: ['Python', 'Pandas', 'Folium', 'Matplotlib'],
      github: 'https://github.com/Jihanablh/Bootcamp_IBM_X_Hacktiv8/tree/main/project1_covid_analysis', demo: '#',
      images: ['https://images.unsplash.com/photo-1584036561566-b93a901ebb85?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800']
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
      images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1553484771-371af272b958?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=800']
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
      title: "Preparation Course for Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft & Kominfo",
      date: "June 2025",
      type: "Certification",
      desc: "Sertifikasi persiapan resmi Azure AI Fundamentals. Mencakup AI, ML, dan Computer Vision di cloud Azure.",
      icon: <Award size={24} className="text-blue-400" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Samsung Innovation Campus - Python Programming",
      issuer: "Samsung & Dibimbing.id",
      date: "Oct 2025",
      type: "Bootcamp",
      desc: "Lulus program intensif Python Programming (Stage 1). Materi: Algoritma, Data Structure, AI Productivity.",
      icon: <Code size={24} className="text-indigo-400" />,
      color: "indigo",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Kickstart Data Science Journey",
      issuer: "Rakamin Academy",
      date: "Nov 2025",
      type: "Bootcamp",
      desc: "Menyelesaikan simulasi proyek Data Science end-to-end. Pembersihan data, pemodelan prediksi, presentasi bisnis.",
      icon: <Trophy size={24} className="text-yellow-400" />,
      color: "yellow",
      image: "https://images.unsplash.com/photo-1596496050827-8299e0220de0?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Get Started with Machine Learning in Azure",
      issuer: "Microsoft Learn",
      date: "June 2025",
      type: "Specialization",
      desc: "Menguasai implementasi model Machine Learning, pelatihan data, dan deployment menggunakan Azure ML Studio.",
      icon: <Database size={24} className="text-cyan-400" />,
      color: "cyan",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Analyst Project: Business Decision Research",
      issuer: "DQLab",
      date: "Feb 2025",
      type: "Project Cert",
      desc: "Menyelesaikan capstone project analisis data ritel menggunakan SQL dan Python untuk keputusan bisnis.",
      icon: <BarChart3 size={24} className="text-green-400" />,
      color: "green",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "IEEE Student Membership",
      issuer: "IEEE Indonesia Section",
      date: "2025",
      type: "Membership",
      desc: "Anggota aktif IEEE (Institute of Electrical and Electronics Engineers). Berpartisipasi dalam komunitas global.",
      icon: <Users size={24} className="text-blue-500" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Visualization Track",
      issuer: "DQLab",
      date: "2025",
      type: "Course",
      desc: "Menguasai teknik visualisasi data dan storytelling untuk menyajikan insight bisnis yang efektif.",
      icon: <TrendingUp size={24} className="text-emerald-400" />,
      color: "emerald",
      image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Big Data Integration and Processing",
      issuer: "UCSD (Coursera)",
      date: "Apr 2025",
      type: "Certification",
      desc: "Teknik integrasi Big Data dan pemrosesan skala besar untuk keputusan berbasis data.",
      icon: <Database size={24} className="text-purple-400" />,
      color: "purple",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800"
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