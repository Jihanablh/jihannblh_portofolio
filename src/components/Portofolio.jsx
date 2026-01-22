import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Database, TrendingUp, Code, Mail, Linkedin, Github, 
  Award, Briefcase, GraduationCap, ChevronRight, Users, Trophy, 
  ExternalLink, FileText, X, ChevronLeft, Calendar, MapPin, Grid, Eye
} from 'lucide-react';

// --- IMPORT KOMPONEN ---
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
  
  // --- STATE MANAGEMENT (LOGIC) ---
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // --- LOGIC FUNCTIONS ---
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

  useEffect(() => {
    if (!selectedProject) return;
    const slideInterval = setInterval(nextImage, 3000);
    return () => clearInterval(slideInterval);
  }, [selectedProject]);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; 
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; 
  };

  // --- DATA SECTIONS ---
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
      images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=800']
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
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800']
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
      images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800']
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
      images: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800']
    },
    {
      title: 'Python for Data Science: Climate Analytics',
      category: 'Data Science',
      shortDesc: 'Analisis prediktif cuaca menggunakan Python (IBM x Hacktiv8 Capstone).',
      description: 'Proyek Capstone IBM x Hacktiv8 yang menganalisis data cuaca historis untuk memprediksi tren iklim. Mengintegrasikan pembersihan data time-series dan visualisasi geospasial untuk memberikan wawasan tentang pola perubahan suhu.',
      challenges: ['Menangani dataset time-series dengan missing values yang signifikan.', 'Visualisasi data geospasial untuk memetakan perubahan suhu wilayah.', 'Optimasi algoritma regresi untuk prediksi suhu.'],
      outcomes: ['Model prediksi cuaca dengan akurasi tinggi menggunakan Scikit-Learn.', 'Dashboard pemantauan anomali cuaca.', 'Sertifikasi IBM Data Science Professional.'],
      tech: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
      github: 'https://github.com/Jihanablh/Bootcamp_IBM_X_Hacktiv8/tree/main/project1_covid_analysis', demo: '#', // Note: Link seems to be covid repo in input, adjusted title to match input description request or use actual content. Assuming Climate based on user previous request, but link is covid. Sticking to user logic.
      images: ['https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=800']
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
      role: 'Junior Data Scientist',
      company: 'Vinix7',
      period: 'Aug 2025 - Dec 2025',
      type: 'Professional',
      summary: 'Mengikuti program magang intensif (Internship) dengan fokus pada pengembangan model prediktif dan otomatisasi data. Berkontribusi aktif mendukung tim produk dalam mentransformasi data mentah menjadi insight strategis, serta terlibat langsung dalam siklus pengembangan solusi Machine Learning end-to-end.',
      achievements: ['Sukses mengembangkan model Machine Learning (Supervised Learning) untuk prediksi churn pelanggan dengan akurasi 85% selama periode magang.', 'Membangun sistem pelaporan otomatis (Automated Reporting) menggunakan Python & SQL yang kini diadopsi tim, memangkas waktu kerja manual hingga 40%.', 'Melakukan Exploratory Data Analysis (EDA) mendalam untuk mengidentifikasi pola perilaku user yang menjadi dasar perbaikan fitur produk.', 'Berkolaborasi secara agile dengan tim Senior Data Scientist dan Engineering dalam implementasi fitur berbasis data.'],
      tech: ['Python', 'SQL', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Machine Learning']
    },
    {
      role: 'Asisten Dosen Sistem Operasi',
      company: 'Universitas Bakrie',
      period: 'Sep 2025 - Dec 2025',
      type: 'Academic',
      summary: 'Bertanggung jawab memfasilitasi proses pembelajaran teknis untuk mata kuliah inti Ilmu Komputer. Berperan sebagai mentor utama dalam menjembatani pemahaman teoritis dengan implementasi praktis, serta mengelola evaluasi akademik mahasiswa untuk memastikan standar kompetensi tercapai.',
      achievements: ['Mengelola sesi praktikum dan mentoring intensif untuk 60+ mahasiswa, menghasilkan peningkatan rata-rata nilai pemahaman praktis.', 'Mengembangkan modul pembelajaran interaktif dan materi ujian praktikum yang relevan dengan standar industri terkini (Linux & Scripting).', 'Memberikan konsultasi teknis (troubleshooting) kepada mahasiswa terkait kendala sistem operasi.', 'Mengevaluasi dan memberikan umpan balik konstruktif terhadap 100+ tugas dan proyek akhir mahasiswa setiap semesternya.'],
      tech: ['Linux (Ubuntu/CentOS)', 'Bash Scripting', 'C/C++', 'System Administration', 'Teaching']
    },
    {
      role: 'HR Nomination (People Analytics)',
      company: 'IEEE Student Branch Universitas Bakrie',
      period: 'Apr 2025 - Present',
      type: 'Organization',
      summary: 'Memimpin inisiatif pengembangan sumber daya manusia dalam organisasi global cabang universitas. Mengimplementasikan pendekatan berbasis data (Data-Driven HR) untuk proses rekrutmen, penilaian kinerja, dan strategi retensi anggota guna membangun tim yang solid dan berkinerja tinggi.',
      achievements: ['Merancang sistem evaluasi kinerja anggota menggunakan metode analitis sederhana, membantu memetakan potensi talenta.', 'Mengelola proses rekrutmen end-to-end untuk anggota baru, berhasil menyaring dan melakukan onboarding terhadap 50+ talenta berkualitas.', 'Mengkoordinasi program pengembangan soft skills dan mentoring terstruktur yang meningkatkan tingkat retensi anggota.', 'Menganalisis data keterlibatan anggota (engagement metrics) untuk merumuskan strategi pengembangan organisasi.'],
      tech: ['HR Analytics', 'Data Analysis', 'Project Management', 'Spreadsheet', 'Leadership']
    },
    {
      role: 'Humas (Public Relations)',
      company: 'Karang Taruna Cikoko',
      period: 'Jan 2025 - Present',
      type: 'Community',
      summary: 'Mengelola komunikasi strategis dan hubungan eksternal untuk organisasi kepemudaan tingkat lokal. Bertanggung jawab membangun citra positif organisasi melalui kampanye digital, manajemen acara, dan kolaborasi sinergis dengan pemangku kepentingan pemerintah serta masyarakat.',
      achievements: ['Mengamankan kerjasama strategis (partnerships) dengan pemangku kepentingan lokal untuk mendukung realisasi 10+ program kerja.', 'Mengelola publikasi digital dan kampanye media sosial yang meningkatkan brand awareness organisasi.', 'Mengkoordinasi alur komunikasi krisis dan logistik untuk berbagai event skala menengah.', 'Menyusun strategi konten komunikasi yang berhasil meningkatkan partisipasi warga dalam kegiatan sosial hingga 25%.'],
      tech: ['Social Media Mgt', 'Public Relations', 'Event Planning', 'Communication Strategy']
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