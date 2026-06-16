import jogjaSiaga from '../assets/images/custom/jogja-siaga.svg';
import barangBareng from '../assets/images/custom/barangbareng.svg';
import portfolioThumb from '../assets/images/custom/portfolio.svg';
import dataAnalysisThumb from '../assets/images/custom/data-analysis.svg';
import gojekDashboard from '../assets/images/data/BI_Gojek/Dashboard_BI_Gojek.png';
import gojekData from '../assets/images/data/BI_Gojek/Data_BI_Gojek.png';
import globalDashboard from '../assets/images/data/BI_Global/Dashboard_BI_Global.png';
import ecommerceDashboard from '../assets/images/data/BI_Ecommerce/Dashboard_BI_Ecommerce.png';
import layoffsDashboard from '../assets/images/data/Py_Layoffs/Dashboard_Py_Layoffs.png';
import layoffsAnalysis from '../assets/images/data/Py_Layoffs/Py_Layoffs.png';
import aiJob from '../assets/images/data/Py_Job/Py_Job.png';
import businessDecision from '../assets/images/data/Py_Business/Py_Business.png';
import enterpriseBlueprint from '../assets/images/business/project_placeholders/enterpriseblueprint.png';
import enterpriseBlueprint2 from '../assets/images/business/project_placeholders/enterpriseblueprint2.png';
import threeLots from '../assets/images/business/project_placeholders/3lots.drawio.png';
import bankingApp from '../assets/images/business/project_placeholders/banking_app.png';
import eventHub from '../assets/images/business/project_placeholders/eventhubplatform.png';
import umlBankClass from '../assets/images/business/uml_bankallinone/bankallinone_classdiagram.png';
import umlBankSwimlane from '../assets/images/business/uml_bankallinone/bankallinone_swimlanediagram.png';
import webGofun from '../assets/images/business/web_gofun/webgofun.png';
import gofunLevel0 from '../assets/images/business/web_gofun/gofun_level 0.drawio.png';
import gofunLevel1 from '../assets/images/business/web_gofun/gofun_level1.drawio.png';
import gofunLevel2P1 from '../assets/images/business/web_gofun/gofun_level2_p1.drawio.png';
import gofunLevel2P2 from '../assets/images/business/web_gofun/gofun_level2_p2.drawio.png';
import gofunLevel2P9 from '../assets/images/business/web_gofun/gofun_level2_p9.drawio.png';

export const projectCategories = ['All', 'Data Analysis', 'Business Analysis', 'Dashboard', 'WebGIS', 'Business Process', 'Digital Product', 'Web Development'];

export const projects = [
  {
    title: 'Jogja Siaga WebGIS',
    category: 'Data Visualization / WebGIS / Spatial Data Analysis',
    filterGroups: ['Data Analysis', 'Dashboard', 'WebGIS'],
    label: 'Featured WebGIS',
    summary:
      'WebGIS kebencanaan Daerah Istimewa Yogyakarta yang menampilkan peta risiko, data kejadian bencana, statistik, dan tata kelola berbasis data spasial.',
    description:
      'Jogja Siaga WebGIS dirancang sebagai pengalaman digital untuk membaca risiko dan informasi kebencanaan DIY secara lebih mudah. Fokusnya adalah menyatukan lapisan peta, data kejadian, statistik wilayah, dan konteks tata kelola agar pengguna dapat memahami situasi spasial dengan cepat.',
    tech: ['React', 'Tailwind CSS', 'GeoJSON', 'QGIS', 'Vercel'],
    highlights: ['Spatial data visualization', 'Disaster data analysis', 'Interactive map dashboard', 'Data-driven public information', 'Regional risk analysis'],
    problem: 'Disaster information needs to be easier to read through spatial context, not only text or tables.',
    objective: 'Visualize risk, events, and regional information in a public-facing WebGIS dashboard.',
    process: 'Organized spatial layers, mapped disaster indicators, and designed an interface that connects map data with dashboard-style information.',
    businessValue: 'Helps users and stakeholders understand regional risk patterns faster through data-driven public information.',
    images: [jogjaSiaga],
    live: '',
    github: '',
    caseStudy: '',
    featured: true,
  },
  {
    title: 'BarangBareng',
    category: 'Business Analysis / Business Process / Digital Product',
    filterGroups: ['Business Analysis', 'Business Process', 'Digital Product'],
    label: 'Product Concept',
    summary:
      'Konsep platform rental barang berbasis marketplace yang mempertemukan penyewa dan penyedia barang dengan alur checkout, DP, dan akun pengguna.',
    description:
      'BarangBareng mengeksplorasi pengalaman rental barang yang lebih praktis dan terpercaya. Perancangannya mencakup struktur halaman produk, flow checkout, sistem DP, dan kebutuhan akun pengguna agar transaksi rental terasa lebih jelas dari sisi penyewa maupun pemilik barang.',
    tech: ['Business Flow', 'Requirement Analysis', 'UI Flow', 'Product Analysis', 'Tailwind CSS'],
    highlights: ['Business process analysis', 'User flow analysis', 'Checkout flow', 'Marketplace rental concept', 'Requirement understanding', 'Digital product flow'],
    problem: 'Rental marketplace transactions need clear process ownership, deposit flow, and user trust.',
    objective: 'Map the rental journey from account creation, item discovery, checkout, DP, and transaction confirmation.',
    process: 'Defined user roles, analyzed checkout requirements, structured rental flow, and translated the process into a digital product concept.',
    businessValue: 'Clarifies rental operations and reduces ambiguity for both renters and item providers.',
    images: [barangBareng],
    live: '',
    github: '',
    caseStudy: '',
    featured: true,
  },
  {
    title: 'Data Analysis Project',
    category: 'Data Analyst Project / Business Insight',
    filterGroups: ['Data Analysis', 'Dashboard'],
    label: 'Analytics Showcase',
    summary:
      'Kumpulan project analisis data menggunakan Python, Pandas, visualisasi data, dashboard, dan insight untuk mendukung keputusan.',
    description:
      'Showcase analitik yang menggabungkan pembersihan data, eksplorasi, visualisasi, dan interpretasi insight bisnis. Project ini merangkum pendekatan Jihan dalam membaca data secara sistematis lalu mengubahnya menjadi rekomendasi yang dapat dipahami stakeholder.',
    tech: ['Python', 'Pandas', 'SQL', 'Excel', 'Tableau / Power BI'],
    highlights: ['Data cleaning', 'Exploratory data analysis', 'Data visualization', 'Business insight', 'Recommendation', 'Dashboard reporting'],
    problem: 'Raw data needs to be cleaned, explored, and communicated before it can support decisions.',
    objective: 'Transform datasets into analysis outputs, visuals, and recommendations for business questions.',
    process: 'Performed data cleaning, EDA, metric exploration, visualization, and insight communication.',
    businessValue: 'Turns scattered data into clearer business insight and reporting-ready narratives.',
    images: [dataAnalysisThumb, gojekDashboard, gojekData, layoffsDashboard],
    live: '',
    github: 'https://github.com/Jihanablh',
    caseStudy: '',
    featured: true,
  },
  {
    title: 'Personal Portfolio',
    category: 'Personal Branding / Web Development',
    filterGroups: ['Web Development', 'Digital Product'],
    label: 'Personal Branding',
    summary:
      'Website personal branding untuk menampilkan identitas, skill, project, pengalaman, sertifikat, dan kontak secara profesional.',
    description:
      'Portfolio personal yang dirancang untuk memperjelas positioning Jihan sebagai mahasiswa Sistem Informasi dengan fokus pada data, UI/UX, web development, dan digital product. Website dibuat modular agar mudah diperbarui seiring bertambahnya pengalaman dan karya.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    highlights: ['Career positioning', 'Portfolio system', 'Interactive interface', 'Data/business-oriented profile'],
    problem: 'A career portfolio needs to communicate positioning clearly, not only display visuals.',
    objective: 'Build a modular portfolio that presents projects, skills, certificates, and journey for DA/BA opportunities.',
    process: 'Structured the content architecture, built reusable sections, and optimized the interface for responsive storytelling.',
    businessValue: 'Strengthens professional credibility for internship and entry-level data/business analyst opportunities.',
    images: [portfolioThumb],
    live: 'https://jihannabilah.vercel.app/',
    github: 'https://github.com/Jihanablh',
    caseStudy: '',
    featured: true,
  },
  {
    title: 'GoFood Marketing Analytics & Strategy',
    category: 'Data Analyst Project',
    filterGroups: ['Data Analysis', 'Dashboard', 'Business Analysis'],
    label: 'Business Intelligence',
    summary: 'Analisis performa kampanye marketing GoFood untuk optimasi budget, funnel, dan konversi.',
    description:
      'Proyek analisis bisnis untuk mengevaluasi efektivitas strategi pemasaran GoFood. Analisis difokuskan pada customer acquisition, campaign performance, dan rekomendasi alokasi budget agar keputusan marketing lebih berbasis data.',
    tech: ['SQL', 'Tableau', 'Marketing Analytics', 'Excel'],
    highlights: ['marketing funnel', 'CAC/CLV thinking', 'dashboard insight', 'budget recommendation'],
    problem: 'Marketing performance is hard to evaluate when campaign and transaction metrics are separated.',
    objective: 'Analyze campaign effectiveness and translate the findings into budget recommendations.',
    process: 'Explored marketing metrics, compared performance indicators, and summarized insights through dashboard views.',
    businessValue: 'Supports marketing budget optimization and campaign decision-making.',
    images: [gojekDashboard, gojekData],
    github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project01_GoFood_Marketing_Analysis',
  },
  {
    title: 'Global Superstore Executive Dashboard',
    category: 'Data Analyst Project',
    filterGroups: ['Data Analysis', 'Dashboard'],
    label: 'Dashboard',
    summary: 'Dashboard eksekutif untuk membaca profitabilitas ritel global lintas negara, produk, dan segmen.',
    description:
      'Dashboard strategis yang membantu membaca performa penjualan, profit, dan wilayah yang membutuhkan evaluasi. Visual disusun untuk memudahkan drill-down dari level global ke area yang lebih spesifik.',
    tech: ['Power BI', 'Data Modeling', 'DAX', 'SQL'],
    highlights: ['executive dashboard', 'profit analysis', 'regional drill-down', 'decision support'],
    problem: 'Executives need a fast way to identify profitable and underperforming regions.',
    objective: 'Create an executive dashboard for sales, profit, segment, and regional performance monitoring.',
    process: 'Modeled data, designed KPI views, and built a dashboard for regional drill-down analysis.',
    businessValue: 'Improves decision support for market evaluation and profitability review.',
    images: [globalDashboard],
    github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project4_Global_Superstore_Analytics',
  },
  {
    title: 'E-Commerce Sales Performance Analysis',
    category: 'Data Analyst Project',
    filterGroups: ['Data Analysis', 'Dashboard'],
    label: 'Data Analysis',
    summary: 'Analisis tren penjualan e-commerce untuk membaca pola pembelian, retensi, dan performa kategori produk.',
    description:
      'Analisis transaksi e-commerce untuk memahami perilaku belanja, pola kategori, dan insight operasional. Project ini menekankan data cleaning, eksplorasi, dan visualisasi yang mudah dipahami.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    highlights: ['transaction analysis', 'customer behavior', 'category trend', 'operational insight'],
    problem: 'E-commerce transaction data contains patterns that are difficult to see without analysis.',
    objective: 'Identify sales trends, customer behavior, and category performance from transaction data.',
    process: 'Cleaned data, explored behavior patterns, and visualized category and sales trends.',
    businessValue: 'Provides operational insight for inventory, promotion, and customer experience decisions.',
    images: [ecommerceDashboard],
    github: 'https://github.com/Jihanablh/BI_Analyst_Projects/tree/main/Project5_Ecommerce_Sales_Analysis',
  },
  {
    title: 'Global Layoffs Analysis',
    category: 'Data Analyst Project',
    filterGroups: ['Data Analysis'],
    label: 'Python EDA',
    summary: 'Analisis tren PHK global menggunakan Python untuk melihat pola industri, waktu, dan karakter perusahaan.',
    description:
      'Final project IBM x Hacktiv8 yang menganalisis dataset layoff global. Prosesnya mencakup cleaning, exploratory data analysis, visualisasi, dan penarikan insight untuk membaca dinamika pasar kerja.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    highlights: ['data cleaning', 'time-series trend', 'industry pattern', 'strategic insight'],
    problem: 'Global layoff data needs context to reveal which industries and periods are most affected.',
    objective: 'Analyze layoff trends and sector patterns using Python-based EDA.',
    process: 'Handled missing values, standardized categories, and visualized time-based patterns.',
    businessValue: 'Helps interpret labor market signals and industry risk patterns.',
    images: [layoffsDashboard, layoffsAnalysis],
    github: 'https://github.com/Jihanablh/Bootcamp_IBM_X_Hacktiv8/tree/main/Project1_Layoffs_Analysis',
  },
  {
    title: 'AI Job Market Trends Analysis',
    category: 'Data Analyst Project',
    filterGroups: ['Data Analysis', 'Business Analysis'],
    label: 'Market Research',
    summary: 'Analisis tren lowongan AI dan Data untuk membaca kebutuhan skill, role, lokasi, dan standar kompensasi.',
    description:
      'Project riset pasar kerja yang mengekstraksi pola dari data lowongan. Fokusnya adalah skill yang banyak diminta, persebaran role, dan insight untuk mempersiapkan karier di bidang data dan AI.',
    tech: ['Python', 'Pandas', 'NLP', 'Data Visualization'],
    highlights: ['skill demand', 'market research', 'role mapping', 'career insight'],
    problem: 'AI job market requirements are scattered across many job descriptions.',
    objective: 'Identify role patterns, skill demand, and career insight from job market data.',
    process: 'Extracted keywords, normalized role categories, and visualized demand signals.',
    businessValue: 'Supports career planning and talent-market understanding with data-backed insight.',
    images: [aiJob],
    github: 'https://github.com/Jihanablh/Bootcamp_DibimbingID/tree/main/Project2_Ai_Job_Market_Analysis',
  },
  {
    title: 'Business Decision Research',
    category: 'Data Analyst Project',
    filterGroups: ['Data Analysis', 'Business Analysis'],
    label: 'Business Analytics',
    summary: 'Riset berbasis data untuk memvalidasi pertanyaan bisnis dan mendukung rekomendasi keputusan.',
    description:
      'Project DQLab yang menerapkan statistik dasar, cleaning, dan interpretasi data untuk menjawab kebutuhan keputusan bisnis. Output utamanya adalah insight yang dapat diterjemahkan ke rekomendasi praktis.',
    tech: ['R Language', 'Statistics', 'Data Cleaning'],
    highlights: ['hypothesis validation', 'business question', 'statistical thinking', 'recommendation'],
    problem: 'Business assumptions need data validation before they become decisions.',
    objective: 'Use analytical methods to answer specific business questions and support recommendations.',
    process: 'Cleaned data, tested assumptions, interpreted metrics, and summarized decision points.',
    businessValue: 'Turns business questions into evidence-based recommendations.',
    images: [businessDecision],
    github: 'https://github.com/Jihanablh/Bootcamp_DQLab/tree/main/project1__business_decision',
  },
  {
    title: 'Aplikasi Bank All-in-One',
    category: 'Business Analysis / Digital Product',
    filterGroups: ['Business Analysis', 'Digital Product'],
    label: 'Mobile App',
    summary: 'Desain UI/UX aplikasi perbankan all-in-one dengan user flow, wireframe, dan prototype interaktif.',
    description:
      'Rancangan aplikasi mobile banking yang berfokus pada kemudahan penggunaan, keamanan, dan pengalaman transaksi yang seamless. Flow dirancang untuk menggabungkan kebutuhan utama pengguna dalam satu produk digital.',
    tech: ['Requirement Analysis', 'UI Flow', 'Digital Product Analysis', 'Figma', 'Mobile App'],
    highlights: ['Mobile banking flow', 'Requirement understanding', 'User journey', 'Digital product analysis'],
    problem: 'Mobile banking users need clear flows for financial tasks inside one application.',
    objective: 'Map an all-in-one banking flow that balances usability, clarity, and product requirements.',
    process: 'Analyzed user tasks, structured account and transaction flows, and translated them into an interface prototype.',
    businessValue: 'Supports product clarity by connecting user needs with banking process requirements.',
    images: [bankingApp],
    live: 'https://www.figma.com/design/6Vw12eUHW8SkkMDmfOdtlI/Aplikasi-Bank-All-in-One',
  },
  {
    title: 'Event Hub Platform',
    category: 'Business Analysis / Digital Product',
    filterGroups: ['Business Analysis', 'Business Process', 'Digital Product'],
    label: 'Platform Design',
    summary: 'Desain platform manajemen event digital untuk pengelolaan, pendaftaran, dan pelaksanaan acara online.',
    description:
      'Konsep platform event digital yang membantu organizer mengelola acara dan peserta melakukan pendaftaran dengan lebih terstruktur. Fokus desain berada pada clarity, flow registrasi, dan pengelolaan event.',
    tech: ['Requirement Analysis', 'UI Flow', 'Platform Analysis', 'Event Management'],
    highlights: ['Event workflow', 'Registration flow', 'Platform requirement', 'Organizer journey'],
    problem: 'Event operations need a digital flow that supports organizer and participant needs.',
    objective: 'Design a platform flow for event registration, management, and execution support.',
    process: 'Mapped organizer tasks, registration requirements, and platform touchpoints.',
    businessValue: 'Improves process clarity for event management and participant onboarding.',
    images: [eventHub],
  },
  {
    title: 'Enterprise Blueprint',
    category: 'Business & System Analysis',
    filterGroups: ['Business Analysis', 'Business Process'],
    label: 'System Analysis',
    summary:
      'Enterprise blueprint diagram yang memetakan arsitektur bisnis, alur informasi, dan relasi komponen organisasi.',
    description:
      'Pembuatan enterprise blueprint yang membantu membaca struktur sistem dan proses bisnis secara menyeluruh. Diagram ini memetakan hubungan antar komponen, alur informasi, dan konteks organisasi agar analisis sistem lebih rapi.',
    tech: ['draw.io', 'Enterprise Architecture', 'Business Process Modeling', 'System Analysis'],
    highlights: ['enterprise mapping', 'process architecture', 'information flow', 'system context'],
    problem: 'Business architecture can be difficult to understand without a structured enterprise map.',
    objective: 'Create an enterprise blueprint that connects process, system, information flow, and organization context.',
    process: 'Mapped components, relationships, and process architecture into a visual blueprint.',
    businessValue: 'Supports system analysis by making business structure and dependencies easier to review.',
    images: [enterpriseBlueprint, enterpriseBlueprint2],
  },
  {
    title: '3 Lots Business Diagram',
    category: 'Business & System Analysis',
    filterGroups: ['Business Analysis', 'Business Process'],
    label: 'Business Analysis',
    summary: 'Diagram alur bisnis dengan pendekatan 3 lots menggunakan swimlane/pool diagram.',
    description:
      'Diagram alur bisnis untuk analisis sistem dengan pendekatan swimlane atau pool diagram. Project ini membantu memisahkan tanggung jawab proses antar aktor dan memperjelas urutan aktivitas bisnis.',
    tech: ['draw.io', 'Swimlane Diagram', 'Business Analysis'],
    highlights: ['swimlane process', 'role responsibility', 'business flow', 'documentation'],
    problem: 'Process responsibilities become unclear when activities are not separated by actor or lane.',
    objective: 'Model the 3 Lots business flow with swimlane-style process separation.',
    process: 'Identified actors, arranged process steps, and documented the flow using draw.io.',
    businessValue: 'Clarifies business responsibility and improves process documentation quality.',
    images: [threeLots],
    live: 'https://drive.google.com/file/d/1H6ns4wqD6cMomXW3Cl8gZJ7V2jUc1HTm/view?usp=sharing',
  },
  {
    title: 'UML Bank All-in-One',
    category: 'UML & Diagrams',
    filterGroups: ['Business Analysis', 'Business Process'],
    label: 'UML',
    summary: 'Diagram UML untuk sistem perbankan all-in-one, mencakup class diagram dan swimlane diagram.',
    description:
      'Pembuatan diagram UML lengkap untuk sistem perbankan all-in-one. Class diagram menggambarkan struktur sistem, sedangkan swimlane diagram menjelaskan alur proses bisnis perbankan.',
    tech: ['draw.io', 'UML', 'Class Diagram', 'Swimlane Diagram', 'Systems Analysis'],
    highlights: ['class structure', 'swimlane process', 'system relation', 'UML documentation'],
    problem: 'System requirements need both structural and process-level documentation.',
    objective: 'Model a bank all-in-one system using class and swimlane diagrams.',
    process: 'Defined system entities, relationships, and process flows in UML documentation.',
    businessValue: 'Creates clearer references for system design and process analysis.',
    images: [umlBankClass, umlBankSwimlane],
  },
  {
    title: 'Web GoFun',
    category: 'Business & System Analysis',
    filterGroups: ['Business Analysis', 'Business Process', 'Web Development'],
    label: 'DFD',
    summary: 'Perancangan sistem dan diagram level untuk platform web GoFun dari level 0 hingga level 2.',
    description:
      'Perancangan sistem dan diagram level untuk platform web GoFun menggunakan Data Flow Diagram. Diagram memetakan alur data dari konteks level 0 sampai proses yang lebih detail pada level 2.',
    tech: ['draw.io', 'DFD', 'System Design', 'Web Development'],
    highlights: ['DFD level 0-2', 'data flow', 'process decomposition', 'system documentation'],
    problem: 'Web platform data flow can become unclear without layered process decomposition.',
    objective: 'Document GoFun system data flow from context level to detailed process levels.',
    process: 'Created DFD level 0 through level 2 to show entities, data movement, and process relationships.',
    businessValue: 'Supports system understanding and requirement discussion before implementation.',
    images: [webGofun, gofunLevel0, gofunLevel1, gofunLevel2P1, gofunLevel2P2, gofunLevel2P9],
  },
];
