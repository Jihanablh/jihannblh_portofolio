import React, { useRef, useState } from 'react';
import { 
  BarChart3, Database, TrendingUp, Code, Mail, Linkedin, Github, 
  Award, Briefcase, GraduationCap, ChevronRight, Users, Trophy, 
  ExternalLink, FileText, X, ChevronLeft, Calendar, MapPin, Grid, 
  Eye, ChevronDown, ChevronUp, ShieldCheck, Layout, Server, Smartphone, Globe, Cpu, Terminal 
} from 'lucide-react';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import CaseStudiesSection from './CaseStudiesSection';
import GallerySection from './GallerySection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const projectScrollPositionRef = useRef(0);

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
    projectScrollPositionRef.current = window.scrollY || window.pageYOffset || 0;
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${projectScrollPositionRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    const restoreY = projectScrollPositionRef.current;
    setSelectedProject(null);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = 'unset';
    window.scrollTo({ top: restoreY, behavior: 'auto' });
  };

  const contactInfo = {
    email: "jihannabilah624@gmail.com",
    linkedin: "https://www.linkedin.com/in/jihan-nabilah-057318357/",
    github: "https://github.com/Jihanablh",
  };

  const experience = [
    {
      role: 'Data Analyst Intern',
      company: 'PT Vinix Seven Aurum (MSIB Kampus Merdeka)',
      period: 'Jan 2026 - Apr 2026',
      type: 'Professional',
      summary: 'Bertanggung jawab dalam siklus data analytics secara end-to-end dalam program MSIB Kampus Merdeka. Mengelola pembersihan data kompleks, Exploratory Data Analysis (EDA) mendalam, hingga rekayasa dashboard Business Intelligence (BI) interaktif. Fokus pada penerjemahan data menjadi visualisasi dan insight strategis untuk mendukung keputusan manajemen perusahaan.',
      achievements: [
        'Mengeksekusi alur kerja pembersihan dan manipulasi data menggunakan formula Advanced Excel (Pivot, Lookup) dan teknik AI prompting.',
        'Melakukan Exploratory Data Analysis (EDA) dan pengujian statistik (hipotesis, regresi) menggunakan Python (Matplotlib, Seaborn) untuk mengungkap tren dan korelasi data.',
        'Membangun dashboard Business Intelligence (BI) interaktif menggunakan Tableau dan Google Data Studio untuk memantau metrik performa bulanan secara terpusat.',
        'Menerjemahkan temuan analitis yang kompleks menjadi infografis dan narasi visual menggunakan prinsip Data Storytelling untuk manajemen strategis.',
        'Menyelesaikan Final Capstone Project analitik data secara end-to-end dan mempresentasikan rekomendasi strategis kepada mentor teknis dan evaluator.'
      ],
      tech: ['Excel', 'Python', 'Tableau', 'Google Data Studio', 'Matplotlib', 'Seaborn', 'Data Storytelling', 'BI Dashboards']
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

  const projects = [
    {
      title: 'WebGIS Yogyakarta',
      category: 'WebGIS / GIS / Mapping / Spatial Data',
      projectGroup: 'WebGIS & GIS',
      shortDesc: 'WebGIS interaktif untuk informasi spasial dan visualisasi data wilayah Yogyakarta.',
      description: 'WebGIS Yogyakarta adalah project berbasis peta digital yang menampilkan informasi spasial dan visualisasi data wilayah Yogyakarta. Project ini berkaitan dengan WebGIS, pemetaan, analisis spasial, dan penyajian data geografis secara interaktif.',
      challenges: ['Menyajikan data spasial agar mudah dibaca oleh pengguna umum.', 'Menghubungkan tampilan peta, statistik, dan informasi wilayah dalam satu pengalaman interaktif.', 'Menjaga performa dan keterbacaan visual pada data geografis yang kompleks.'],
      outcomes: ['WebGIS publik yang membantu pengguna membaca informasi wilayah Yogyakarta secara visual.', 'Peta interaktif dengan dukungan tampilan statistik dan dashboard.', 'Penyajian data geografis yang lebih informatif untuk kebutuhan analisis wilayah.'],
      tech: ['WebGIS', 'GIS', 'Mapping', 'Spatial Data'],
      github: '',
      demo: 'https://webgisyogyakarta.vercel.app/',
      images: ['/images_projects_gis_analyst/webgisyogya_dashboard.png', '/images_projects_gis_analyst/webgisyogya_peta.png', '/images_projects_gis_analyst/webgisyogya_statistik.png']
    },
    {
      title: 'BarangBareng',
      category: 'Marketplace / Web App / UI/UX / Sistem Informasi',
      projectGroup: 'Digital Product',
      shortDesc: 'Marketplace rental barang yang mempertemukan penyewa dan penyedia barang dalam satu platform digital.',
      description: 'BarangBareng adalah project marketplace rental barang yang mempertemukan penyewa dan penyedia barang. Project ini memiliki konsep platform digital untuk sewa barang dengan fitur seperti listing barang, detail barang, checkout, pembayaran simulasi, dan pengalaman pengguna yang modern.',
      challenges: ['Menyusun alur rental yang jelas dari discovery hingga checkout.', 'Membuat konsep marketplace yang mudah dipahami oleh penyewa dan pemilik barang.', 'Menerjemahkan kebutuhan sistem informasi rental ke dalam pengalaman web yang modern.'],
      outcomes: ['Platform rental barang dengan flow listing, detail produk, checkout, dan simulasi pembayaran.', 'Pengalaman pengguna yang lebih jelas untuk transaksi rental barang.', 'Konsep sistem informasi marketplace yang mendukung kebutuhan penyewa dan penyedia barang.'],
      tech: ['React', 'Web App', 'UI/UX', 'Marketplace'],
      github: '',
      demo: 'https://barangbareng-barengintech.vercel.app/',
      images: ['/images_project_digital_product/barangbareng.png']
    },
    {
      title: 'Proyek GIS',
      category: 'GIS / Spatial Analysis / Mapping / QGIS',
      projectGroup: 'WebGIS & GIS',
      shortDesc: 'Project GIS untuk pengolahan data spasial, analisis buffer, visualisasi peta, dan analisis wilayah.',
      description: 'Proyek GIS adalah project yang berkaitan dengan pengolahan data spasial, pemetaan, analisis buffer, visualisasi peta, dan pemanfaatan data geografis untuk kebutuhan analisis wilayah.',
      challenges: ['Mengolah data spasial menjadi peta analitis yang mudah dipahami.', 'Menerapkan analisis buffer dan service area untuk membaca cakupan wilayah.', 'Menyusun layout peta yang informatif untuk kebutuhan presentasi dan analisis.'],
      outcomes: ['Visualisasi peta kerawanan dan service area yang mendukung analisis wilayah.', 'Dokumentasi spasial berbasis QGIS untuk kebutuhan pengambilan keputusan.', 'Output peta yang rapi dan mudah digunakan sebagai bahan komunikasi analitis.'],
      tech: ['QGIS', 'Spatial Analysis', 'Mapping', 'Buffer Analysis'],
      github: '',
      demo: '',
      images: ['/images_projects_gis_analyst/layout_servicesarea_umbulharjo.png', '/images_projects_gis_analyst/layout_kerawananlongsor_bandung.png']
    },
    {
      title: 'GoFood Marketing Analytics & Strategy',
      category: 'Business Analysis',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Analisis performa kampanye marketing GoFood untuk optimasi budget dan konversi.',
      description: 'Proyek analisis bisnis yang bertujuan mengevaluasi efektivitas strategi pemasaran GoFood dan mendukung pengambilan keputusan tim marketing. Analisis difokuskan pada Customer Acquisition Cost (CAC) dan Customer Lifetime Value (CLV) untuk menyusun rekomendasi alokasi budget iklan yang lebih efisien dan berdampak pada peningkatan konversi.',
      challenges: ['Menggabungkan data transaksi organik dan paid-marketing yang terfragmentasi.', 'Mengidentifikasi segmentasi pelanggan berdasarkan perilaku pemesanan makanan.', 'Memvisualisasikan funnel konversi dari impresi hingga transaksi selesai.'],
      outcomes: ['Memberikan roadmap penghematan budget marketing sebesar 15% melalui penargetan ulang (retargeting).', 'Dashboard interaktif untuk memantau performa merchant mitra GoFood.', 'Rekomendasi promosi spesifik berdasarkan jam sibuk (peak hours).'],
      tech: ['SQL', 'Tableau', 'Marketing Analytics', 'Excel'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project01_GoFood_Marketing_Analysis', demo: '',
      images: ['/images_projects_data_analyst/BI_Gojek/Dashboard_BI_Gojek.png', '/images_projects_data_analyst/BI_Gojek/Data_BI_Gojek.png']
    },
    {
      title: 'Global Superstore Executive Dashboard',
      category: 'Business Analysis',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Dashboard strategis untuk memantau profitabilitas ritel global.',
      description: 'Membangun dashboard eksekutif untuk jaringan ritel global "Superstore". Proyek ini berfokus pada visualisasi profitabilitas lintas negara, kategori produk, dan segmen pelanggan. Tujuannya adalah membantu C-Level mengidentifikasi pasar yang merugi (loss-making markets) dan produk unggulan.',
      challenges: ['Menangani dataset berskala besar dengan multi-currency dan data geografis.', 'Merancang hierarki visual yang memudahkan user melakukan drill-down dari level benua ke kota.', 'Menghitung metrik profitabilitas yang kompleks dengan penyesuaian biaya pengiriman.'],
      outcomes: ['Identifikasi 3 negara dengan performa terburuk untuk evaluasi strategi pasar.', 'Peningkatan visibilitas terhadap tren penjualan musiman.', 'Dashboard interaktif yang menjadi standar pelaporan bulanan.'],
      tech: ['Power BI', 'Data Modeling', 'DAX', 'SQL'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project4_Global_Superstore_Analytics', demo: '',
      images: ['/images_projects_data_analyst/BI_Global/Dashboard_BI_Global.png', '/images_projects_data_analyst/BI_Global/Data_BI_Global.png']
    },
    {
      title: 'E-Commerce Sales Performance Analysis',
      category: 'Data Analysis',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Analisis tren penjualan e-commerce untuk perencanaan stok dan promosi.',
      description: 'Analisis komprehensif terhadap data transaksi e-commerce untuk memahami perilaku belanja konsumen. Proyek ini menggali pola pembelian (basket analysis), churn rate pelanggan, dan efektivitas metode pembayaran. Hasil analisis digunakan untuk strategi inventory planning.',
      challenges: ['Membersihkan data transaksi yang mengandung anomali dan duplikasi.', 'Menganalisis retensi pelanggan menggunakan teknik Cohort Analysis.', 'Menghubungkan data logistik pengiriman dengan kepuasan pelanggan.'],
      outcomes: ['Menemukan korelasi kuat antara keterlambatan pengiriman dan penurunan rating toko.', 'Rekomendasi bundling produk yang meningkatkan rata-rata nilai transaksi (AOV).', 'Laporan tren kategori produk terlaris per kuartal.'],
      tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project5_Ecommerce_Sales_Analysis', demo: '',
      images: ['/images_projects_data_analyst/BI_Ecommerce/Dashboard_BI_Ecommerce.png', '/images_projects_data_analyst/BI_Ecommerce/Data_BI_Ecommerce.png', '/images_projects_data_analyst/BI_Ecommerce/Star_Schema_BI_Ecommerce.png']
    },
    {
      title: 'HR Analytics: Workforce Architecture',
      category: 'People Analytics',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Analisis struktur demografi dan kinerja karyawan untuk perencanaan SDM.',
      description: 'Proyek arsitektur data untuk departemen HR yang bertujuan memetakan distribusi talenta dalam perusahaan. Menganalisis keberagaman (diversity), kesenjangan gaji (pay gap), dan distribusi kinerja antar departemen untuk mendukung pengambilan keputusan yang adil dan berbasis data.',
      challenges: ['Menjaga kerahasiaan data karyawan (PII) saat melakukan analisis.', 'Membuat model data yang menghubungkan kinerja individu dengan tujuan bisnis.', 'Visualisasi struktur organisasi yang dinamis.'],
      outcomes: ['Dashboard Diversity & Inclusion untuk memantau target kesetaraan perusahaan.', 'Identifikasi departemen dengan tingkat promosi internal tertinggi.', 'Analisis kompensasi untuk memastikan keadilan gaji internal.'],
      tech: ['Looker Studio', 'SQL', 'HR Metrics', 'Spreadsheet'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project2_HR_Analytics_Architecture', demo: '',
      images: ['/images_projects_data_analyst/BI_HR/Dashboard_BI_HR.png', '/images_projects_data_analyst/BI_HR/Data_BI_HR.png', '/images_projects_data_analyst/BI_HR/Star_Schema_BI_HR.png']
    },
    {
    title: 'Global Layoffs Analysis: Business Analysis & Trends',
    category: 'Data Science',
    projectGroup: 'Data Analytics & BI',
    shortDesc: 'Analisis mendalam tren PHK global menggunakan Python (IBM x Hacktiv8 Final Project).',
    description: 'Proyek Final IBM x Hacktiv8 yang menganalisis dataset PHK global untuk mengungkap pola ekonomi dan dampak sektoral. Mengintegrasikan pembersihan data (data cleaning), analisis eksploratif (EDA), dan visualisasi untuk memberikan wawasan strategis bagi industri dan pencari kerja.',
    challenges: ['Menangani missing values yang signifikan pada data jumlah PHK dan dana perusahaan.', 'Standardisasi nama industri dan lokasi yang tidak konsisten untuk akurasi kategori.', 'Analisis tren time-series untuk memetakan puncak gelombang PHK tahunan.'],
    outcomes: ['Identifikasi sektor teknologi sebagai industri dengan dampak PHK terbesar.', 'Visualisasi tren puncak PHK global pada periode 2023-2024.', 'Wawasan strategis mengenai stabilitas perusahaan berdasarkan tahapan pendanaan (Startup vs IPO).'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Jihanablh/Bootcamp_IBM_X_Hacktiv8/tree/main/Project1_Layoffs_Analysis', demo: '', 
    images: ['/images_projects_data_analyst/Py_Layoffs/Py_Layoffs.png', '/images_projects_data_analyst/Py_Layoffs/Py_Layoffs2.png', '/images_projects_data_analyst/Py_Layoffs/Py_Layoffs3.png', '/images_projects_data_analyst/Py_Layoffs/Py_Layoffs4.png', '/images_projects_data_analyst/Py_Layoffs/Py_Layoffs5.png']
    },
    {
      title: 'AI Job Market Trends Analysis',
      category: 'Market Research',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Analisis tren kebutuhan skill dan gaji di pasar kerja Artificial Intelligence.',
      description: 'Menganalisis dataset lowongan pekerjaan untuk memahami lanskap karir di bidang AI dan Data Science. Fokus pada identifikasi skill yang paling banyak diminta (in-demand skills), persebaran lokasi pekerjaan, dan standar gaji berdasarkan tingkat pengalaman.',
      challenges: ['Natural Language Processing (NLP) sederhana untuk mengekstrak keyword skill dari deskripsi kerja.', 'Normalisasi data gaji yang memiliki format berbeda-beda.', 'Kategorisasi role pekerjaan yang ambigu.'],
      outcomes: ['Peta persebaran lowongan kerja AI/Data di berbagai industri.', 'Daftar 10 top technical skills yang wajib dikuasai pelamar.', 'Insight mengenai kesenjangan supply dan demand talenta data.'],
      tech: ['Python', 'NLP', 'Data Visualization', 'Pandas'],
      github: 'https://github.com/Jihanablh/Bootcamp_DibimbingID/tree/main/Project2_Ai_Job_Market_Analysis', demo: '',
      images: ['/images_projects_data_analyst/Py_Job/Py_Job.png', '/images_projects_data_analyst/Py_Job/Py_Job2.png', '/images_projects_data_analyst/Py_Job/Py_Job3.png', '/images_projects_data_analyst/Py_Job/Py_Job4.png', '/images_projects_data_analyst/Py_Job/Py_Job5.png']
    },
    {
      title: 'Retail Sales Trend Analysis',
      category: 'Business Analysis',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Identifikasi pola penjualan ritel untuk forecasting sederhana.',
      description: 'Analisis historis data penjualan ritel untuk melihat tren tahunan, bulanan, dan mingguan. Bertujuan untuk membantu manajer toko dalam mempersiapkan stok barang menjelang periode ramai (high season).',
      challenges: ['Mengidentifikasi pola musiman (seasonality) dari data mentah.', 'Memisahkan tren jangka panjang dari fluktuasi jangka pendek.'],
      outcomes: ['Visualisasi tren penjualan yang jelas dan mudah dipahami.', 'Identifikasi hari-hari dengan penjualan terendah untuk strategi promosi.'],
      tech: ['Excel', 'Tableau', 'Descriptive Analytics'],
      github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project3_Retail_Sales_Trend_Analysis', demo: '',
      images: ['/images_projects_data_analyst/BI_Retail/Dashboard_BI_Retail.png', '/images_projects_data_analyst/BI_Retail/Data_BI_Retail.png']
    },
    {
      title: 'Marketing Customer Segmentation',
      category: 'Data Analysis',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Segmentasi pelanggan (DQLab) untuk strategi pemasaran yang personal.',
      description: 'Menggunakan data pelanggan untuk melakukan segmentasi (clustering) sederhana. Tujuannya adalah memahami profil pelanggan yang berbeda-beda agar tim marketing dapat mengirimkan pesan yang lebih relevan (personalized marketing).',
      challenges: ['Menentukan variabel yang paling berpengaruh untuk segmentasi.', 'Menginterpretasikan karakteristik tiap cluster yang terbentuk.'],
      outcomes: ['Terbentuknya profil persona pelanggan (misal: Loyal, New, Churn Risk).', 'Strategi komunikasi yang berbeda untuk setiap segmen.'],
      tech: ['R Language', 'Data Analysis', 'Statistics'],
      github: 'https://github.com/Jihanablh/Bootcamp_DQLab/tree/main/project2_marketing_customer', demo: '',
      images: ['/images_projects_data_analyst/Py_Marketing/Py_Marketing.png', '/images_projects_data_analyst/Py_Marketing/Py_Marketing2.png', '/images_projects_data_analyst/Py_Marketing/Py_Marketing3.png']
    },
    {
      title: 'Business Decision Research',
      category: 'Business Analytics',
      projectGroup: 'Data Analytics & BI',
      shortDesc: 'Riset berbasis data untuk mendukung pengambilan keputusan bisnis (DQLab).',
      description: 'Penerapan metode statistik dasar untuk memvalidasi hipotesis bisnis. Proyek ini menggunakan data historis perusahaan untuk menjawab pertanyaan bisnis spesifik terkait efisiensi operasional.',
      challenges: ['Memilih metode uji statistik yang tepat.', 'Menerjemahkan hasil statistik menjadi bahasa bisnis.'],
      outcomes: ['Laporan rekomendasi keputusan berbasis fakta.', 'Validasi asumsi manajemen dengan data riil.'],
      tech: ['R Language', 'Statistics', 'Data Cleaning'],
      github: 'https://github.com/Jihanablh/Bootcamp_DQLab/tree/main/project1__business_decision', demo: '',
      images: ['/images_projects_data_analyst/Py_Business/Py_Business.png', '/images_projects_data_analyst/Py_Business/Py_Business2.png', '/images_projects_data_analyst/Py_Business/Py_Business3.png']
    },
    {
      title: '3 Lots Business Diagram',
      category: 'Business Analysis',
      projectGroup: 'Business & System Analysis',
      shortDesc: 'Diagram alur bisnis untuk analisis sistem dengan pendekatan 3 lots menggunakan draw.io.',
      description: 'Diagram alur bisnis untuk analisis sistem dengan pendekatan 3 lots (swimlane/pool diagram) menggunakan draw.io.',
      challenges: ['Memisahkan tanggung jawab proses antar lane agar alur lebih jelas.', 'Menyusun proses bisnis dalam format swimlane yang ringkas dan informatif.'],
      outcomes: ['Swimlane diagram yang memperjelas peran dan alur proses bisnis.', 'Dokumentasi visual untuk mendukung analisis kebutuhan sistem.'],
      tech: ['draw.io', 'Swimlane Diagram', 'Business Analysis'],
      github: '',
      demo: 'https://drive.google.com/file/d/1H6ns4wqD6cMomXW3Cl8gZJ7V2jUc1HTm/view?usp=sharing',
      images: ['/images_projects_business_analyst/project_placeholders/3lots.drawio.png']
    },
    {
      title: 'Aplikasi Bank All-in-One',
      category: 'UI/UX Design',
      projectGroup: 'UI/UX Design',
      shortDesc: 'Desain UI/UX aplikasi perbankan all-in-one dengan user flow, wireframe, dan prototype interaktif.',
      description: 'Desain UI/UX aplikasi perbankan all-in-one menggunakan Figma. Mencakup alur pengguna, wireframe, dan prototype interaktif untuk pengalaman perbankan yang seamless dan user-friendly.',
      challenges: ['Merancang pengalaman mobile banking yang mudah dipahami dan efisien.', 'Menyusun flow pengguna yang mendukung kebutuhan transaksi dalam satu aplikasi.'],
      outcomes: ['Prototype Figma interaktif untuk pengalaman perbankan all-in-one.', 'Rancangan wireframe dan user flow sebagai dasar pengembangan produk.'],
      tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Mobile App'],
      github: '',
      demo: 'https://www.figma.com/design/6Vw12eUHW8SkkMDmfOdtlI/Aplikasi-Bank-All-in-One',
      images: ['/images_projects_business_analyst/project_placeholders/banking_app.png']
    },
    {
      title: 'Enterprise Blueprint',
      category: 'System Analysis',
      projectGroup: 'Business & System Analysis',
      shortDesc: 'Enterprise blueprint diagram untuk memetakan arsitektur, proses bisnis, alur informasi, dan relasi komponen organisasi.',
      description: 'Pembuatan enterprise blueprint diagram yang memetakan arsitektur dan proses bisnis organisasi secara menyeluruh, mencakup struktur sistem, alur informasi, dan hubungan antar komponen bisnis.',
      challenges: ['Menghubungkan struktur bisnis, sistem, dan alur informasi ke dalam satu blueprint yang konsisten.', 'Menjaga diagram tetap mudah dibaca meskipun mencakup banyak komponen organisasi.'],
      outcomes: ['Blueprint enterprise yang membantu memahami arsitektur organisasi secara menyeluruh.', 'Dokumentasi visual untuk mendukung analisis sistem dan proses bisnis.'],
      tech: ['draw.io', 'Enterprise Architecture', 'Business Process Modeling', 'System Analysis'],
      github: '',
      demo: '',
      images: ['/images_projects_business_analyst/project_placeholders/enterpriseblueprint.png', '/images_projects_business_analyst/project_placeholders/enterpriseblueprint2.png']
    },
    {
      title: 'Event Hub Platform',
      category: 'UI/UX Design',
      projectGroup: 'UI/UX Design',
      shortDesc: 'Desain platform manajemen event digital untuk pengelolaan, pendaftaran, dan pelaksanaan acara online.',
      description: 'Desain platform manajemen event digital yang memudahkan pengelolaan, pendaftaran, dan pelaksanaan acara secara online.',
      challenges: ['Menyusun pengalaman pengguna untuk organizer dan peserta event dalam satu platform.', 'Membuat flow pendaftaran dan pengelolaan event tetap jelas dan efisien.'],
      outcomes: ['Rancangan platform event digital dengan alur penggunaan yang lebih terstruktur.', 'Desain antarmuka yang mendukung manajemen acara online.'],
      tech: ['Figma', 'UI/UX Design', 'Platform Design', 'Event Management'],
      github: '',
      demo: '',
      images: ['/images_projects_business_analyst/project_placeholders/eventhubplatform.png']
    },
    {
      title: 'UML Bank All-in-One',
      category: 'UML',
      projectGroup: 'UML & Diagrams',
      shortDesc: 'Diagram UML untuk sistem perbankan all-in-one, mencakup class diagram dan swimlane diagram proses bisnis.',
      description: 'Pembuatan diagram UML lengkap untuk sistem perbankan all-in-one, mencakup class diagram untuk struktur sistem dan swimlane diagram untuk alur proses bisnis perbankan.',
      challenges: ['Memetakan struktur sistem perbankan ke class diagram yang jelas.', 'Menyelaraskan alur proses bisnis perbankan ke swimlane diagram yang mudah dipahami.'],
      outcomes: ['Dokumentasi UML yang mencakup struktur dan proses sistem perbankan.', 'Referensi visual untuk analisis dan pengembangan sistem bank all-in-one.'],
      tech: ['draw.io', 'UML', 'Class Diagram', 'Swimlane Diagram', 'Systems Analysis'],
      github: '',
      demo: '',
      images: ['/images_projects_business_analyst/uml_bankallinone/bankallinone_classdiagram.png', '/images_projects_business_analyst/uml_bankallinone/bankallinone_swimlanediagram.png']
    },
    {
      title: 'Web GoFun',
      category: 'Web Development / System Design',
      projectGroup: 'Web & Data Flow',
      shortDesc: 'Perancangan sistem dan diagram level platform web GoFun dari level 0 hingga level 2 menggunakan DFD.',
      description: 'Perancangan sistem dan diagram level untuk platform web GoFun, mencakup arsitektur sistem dari level 0 hingga level 2 yang menggambarkan alur data dan proses secara detail menggunakan Data Flow Diagram (DFD).',
      challenges: ['Memecah proses web GoFun ke beberapa level DFD tanpa kehilangan konteks utama.', 'Menjaga konsistensi alur data antar level diagram.'],
      outcomes: ['Dokumentasi DFD level 0 hingga level 2 untuk platform Web GoFun.', 'Gambaran sistem yang lebih detail untuk kebutuhan analisis dan pengembangan web.'],
      tech: ['draw.io', 'DFD', 'System Design', 'Web Development'],
      github: '',
      demo: '',
      images: [
        '/images_projects_business_analyst/web_gofun/webgofun.png',
        '/images_projects_business_analyst/web_gofun/gofun_level 0.drawio.png',
        '/images_projects_business_analyst/web_gofun/gofun_level1.drawio.png',
        '/images_projects_business_analyst/web_gofun/gofun_level2_p1.drawio.png',
        '/images_projects_business_analyst/web_gofun/gofun_level2_p2.drawio.png',
        '/images_projects_business_analyst/web_gofun/gofun_level2_p9.drawio.png'
      ]
    }
  ];

  const skills = [
    { 
      category: "Programming", 
      icon: <Code />, 
      items: ["Python", "SQL", "R", "C++", "JavaScript", "Bash Scripting", "HTML/CSS"], 
      iconColor: "text-blue-400" 
    },
    { 
      category: "Data Analysis", 
      icon: <Database />, 
      items: ["Data Cleaning", "Business Intelligence", "Statistical Analysis", "A/B Testing", "ETL Pipelines", "Data Warehousing"], 
      iconColor: "text-purple-400" 
    },
    { 
      category: "Visualization", 
      icon: <BarChart3 />, 
      items: ["Tableau", "Power BI", "Looker Studio", "Matplotlib", "Seaborn", "Plotly", "Streamlit"], 
      iconColor: "text-pink-400" 
    },
    { 
      category: "Machine Learning", 
      icon: <Cpu />, 
      items: ["Scikit-Learn", "TensorFlow", "K-Means Clustering", "Regression", "Random Forest", "Neural Networks"], 
      iconColor: "text-emerald-400" 
    },
    { 
      category: "Tools", 
      icon: <Terminal />, 
      items: ["Git", "GitHub", "Docker", "Jupyter", "VS Code", "PostgreSQL", "Google Cloud Platform"], 
      iconColor: "text-orange-400" 
    },
    { 
      category: "Soft Skills", 
      icon: <Users />, 
      items: ["Data Storytelling", "Critical Thinking", "Problem Solving", "Agile/Scrum", "Team Collaboration", "Public Speaking"], 
      iconColor: "text-yellow-400" 
    }
  ];

  const allAchievements = [ 
    {
      id: 1,
      title: "Data Analyst Project: Business Decision Research",
      issuer: "DQLab",
      date: "13 Februari 2025",
      type: "Project Cert",
      desc: "Menyelesaikan capstone project analisis data ritel menggunakan SQL dan Python. Fokus pada pengambilan keputusan bisnis berbasis data.",
      icon: <BarChart3 />,
      link: "https://drive.google.com/open?id=1VdVcSq99wKfEzSNr9mZ6HhVaL4dh6mD5&usp=drive_copy" 
    },
    {
      id: 2,
      title: "Customer Segmentation with Python",
      issuer: "DQLab",
      date: "12 Maret 2025",
      type: "Data Science",
      desc: "Studi kasus nyata melakukan segmentasi pelanggan (Clustering) menggunakan algoritma Machine Learning dengan Python.",
      icon: <Users />,
      link: "https://drive.google.com/open?id=1Z2ux4WqLNUC0wA9je4rKaB0k9Td856dx&usp=drive_copy"
    },
    {
      id: 3,
      title: "Samsung Innovation Campus (SIC) - Batch 7",
      issuer: "Samsung & Skilvul",
      date: "2025/2026",
      type: "Bootcamp",
      desc: "Program intensif dan selektif dari Samsung. Mempelajari Python Programming, Logic, dan penyelesaian masalah teknis.",
      icon: <Trophy />,
      link: "https://drive.google.com/open?id=1gaedYptbK1oZPSQnL9RzzJQ60JVW3LC8&usp=drive_copy"
    },
    {
      id: 4,
      title: "Big Data Integration and Processing",
      issuer: "UC San Diego (Coursera)",
      date: "6 April 2025",
      type: "Certification",
      desc: "Sertifikasi internasional mengenai penanganan Big Data, integrasi sistem, dan pemrosesan data skala besar (Hadoop/Spark).",
      icon: <Database />,
      link: "https://drive.google.com/open?id=1i8qEj73Uy0Q1dNtQyZySsz3gnXC9-yX8&usp=drive_copy"
    },
    {
      id: 5,
      title: "Pemrograman Dengan Python",
      issuer: "Dicoding Indonesia",
      date: "17 November 2024",
      type: "Programming",
      desc: "Menguasai sintaks dasar hingga lanjut bahasa Python, termasuk manipulasi data dan Object-Oriented Programming (OOP).",
      icon: <Code />,
      link: "https://drive.google.com/open?id=1NWJqIDo0A3gDamRTSMc7yVrSoQS2DW4c&usp=drive_copy"
    },
    {
      id: 6,
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding Indonesia",
      date: "01 Juli 2025",
      type: "Data Viz",
      desc: "Validasi kemampuan membuat dashboard dan grafik yang efektif untuk menyampaikan insight data kepada stakeholder.",
      icon: <TrendingUp />,
      link: "https://drive.google.com/open?id=1tA90zMwk_0klXY4Myy-wi-HPzSXlsgoi&usp=drive_copy"
    },
    {
      id: 7,
      title: "Intro to Data Analytics",
      issuer: "RevoU",
      date: "31 January 2025",
      type: "Course",
      desc: "Pemahaman kurikulum industri terkini mengenai Data Analytics, SQL, dan strategi pengolahan data.",
      icon: <BarChart3 />,
      link: "https://drive.google.com/open?id=13W_d__oi5xDOhswTORAb8u5wqQoGgeHY&usp=drive_copy"
    },
    {
      id: 8,
      title: "Data Science Bootcamp",
      issuer: "Dibimbing.id",
      date: "2025",
      type: "Bootcamp",
      desc: "Program pembelajaran intensif mencakup statistik, eksplorasi data, hingga pemodelan prediktif.",
      icon: <Database />,
      link: "https://drive.google.com/open?id=1XML0Gmv6jaxjxyVkcoytO7WNjqtu3-Cg&usp=drive_copy"
    },
    {
      id: 9,
      title: "Design Thinking for Business",
      issuer: "Universitas Bakrie",
      date: "12 Maret 2025",
      type: "Methodology",
      desc: "Penerapan mindset Design Thinking untuk memahami kebutuhan pengguna dan merancang solusi bisnis yang tepat guna.",
      icon: <Users />,
      link: "https://drive.google.com/open?id=1nYzgJfsUelUnz0QWtPlJn7eOxll6gP1Y&usp=drive_copy"
    },
    {
      id: 10,
      title: "Figma Tools for UI/UX",
      issuer: "MySkill",
      date: "9 November 2024",
      type: "Design",
      desc: "Keahlian membuat wireframe dan mockup dashboard/aplikasi sebelum tahap pengembangan (Skill vital Business Analyst).",
      icon: <Award />,
      link: "https://drive.google.com/open?id=1gLcXewHl71oj4AfpgTfWdtYzsX00lT0O&usp=drive_copy"
    },
    {
      id: 11,
      title: "Business English Soft Skills",
      issuer: "Universitas Bakrie",
      date: "13 Maret 2025",
      type: "Soft Skill",
      desc: "Kemampuan komunikasi profesional dalam bahasa Inggris, krusial untuk lingkungan kerja multinasional.",
      icon: <ShieldCheck />,
      link: "https://drive.google.com/open?id=17rIOGcup0tJmwgpnzlHKEAGaHDNiDbHD&usp=drive_copy"
    },
    {
      id: 12,
      title: "Machine Learning Fundamentals",
      issuer: "Udemy",
      date: "24 Januari 2025",
      type: "Machine Learning",
      desc: "Pemahaman fundamental algoritma Machine Learning sebagai pendukung skill teknis Python.",
      icon: <Code />,
      link: "https://drive.google.com/open?id=1a6Ha-ixQX_-gZEereaFQsORETaY-o8Pi&usp=drive_copy"
    },
    {
      id: 13,
      title: "AI Training & Electives",
      issuer: "Generation Girl",
      date: "30 Agustus 2025",
      type: "Artificial Intelligence",
      desc: "Mengikuti perkembangan teknologi AI terkini dan penerapannya dalam kasus nyata.",
      icon: <Trophy />,
      link: "https://drive.google.com/open?id=1Zfxq6Ea1Igo92VThDIYR6LLWInn6RdHB&usp=drive_copy"
    },
    {
      id: 14,
      title: "Data Classification (IBM Granite)",
      issuer: "IBM SkillsBuild",
      date: "10 Juni 2025",
      type: "Certification",
      desc: "Penyelesaian modul kompetensi teknis mengenai klasifikasi data menggunakan teknologi IBM.",
      icon: <ShieldCheck />,
      link: "https://drive.google.com/open?id=1s4b0kJedEElbYCxDYB3Str_UTtmZfrqR&usp=drive_copy"
    }
  ];

return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[-7rem] top-1/3 h-96 w-96 rounded-full bg-pink-500/10 blur-[130px]" />
        <div className="absolute bottom-12 left-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>
      {!selectedProject && <Navbar activeTab={activeTab} scrollToSection={scrollToSection} />}
      <HeroSection contactInfo={contactInfo} scrollToSection={scrollToSection} />
      
      <div className="relative z-10 space-y-16">
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
        <CaseStudiesSection projects={projects} openProjectDetail={openProjectDetail} />
        <GallerySection projects={projects} />
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
