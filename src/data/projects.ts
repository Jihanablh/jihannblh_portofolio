import {
  Map as MapIcon,
  Code2,
  BarChart3,
  LineChart,
  Users,
  Brain,
  type LucideIcon,
} from "lucide-react";

export type CaseStudy = {
  problem: string;
  objective: string;
  data: string;
  approach: string;
  tools: string[];
  insight: string;
  recommendation: string;
  impact: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
  live?: string;
  featured?: boolean;
  highlight?: string;
  icon: LucideIcon;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "webgis-yogyakarta",
    title: "WebGIS Yogyakarta",
    category: "WebGIS · Spatial Data",
    desc: "WebGIS interaktif untuk informasi spasial dan visualisasi data wilayah Yogyakarta.",
    image:
      "https://jihannabilah.vercel.app/images_projects_gis_analyst/webgisyogya_dashboard.png",
    tags: ["WebGIS", "Leaflet", "Spatial Analysis", "Mapping"],
    live: "https://webgisyogyakarta.vercel.app/",
    featured: true,
    highlight: "3× faster spatial interpretation",
    icon: MapIcon,
    caseStudy: {
      problem:
        "Pemangku kepentingan kesulitan membaca kondisi wilayah Yogyakarta karena data spasial tersebar di banyak format (shapefile, PDF, tabel statis) sehingga lambat untuk analisis dan pengambilan keputusan.",
      objective:
        "Menyediakan satu platform WebGIS interaktif yang menyatukan layer demografi, infrastruktur, dan administratif sehingga dapat diakses publik tanpa software GIS desktop.",
      data: "Shapefile batas administratif DIY, data statistik BPS, titik fasilitas umum, dan citra dasar OpenStreetMap.",
      approach:
        "Spatial data cleaning → reprojection ke EPSG:4326 → konversi ke GeoJSON ringan → layering interaktif dengan kontrol on/off, popup atribut, dan legenda dinamis.",
      tools: ["QGIS", "GeoJSON", "Leaflet.js", "React", "Vercel"],
      insight:
        "Visual layering meningkatkan kemampuan membaca pola kepadatan dan fasilitas wilayah hingga 3× lebih cepat dibanding membaca tabel mentah.",
      recommendation:
        "Tambahkan layer time-series untuk tren pembangunan dan integrasikan dataset baru dari OPD secara berkala melalui pipeline ETL.",
      impact:
        "Mempercepat literasi spasial untuk publik & analis, menjadi referensi reusable untuk studi kasus tata kota.",
    },
  },
  {
    slug: "barangbareng",
    title: "BarangBareng",
    category: "Marketplace · Web App",
    desc: "Marketplace rental barang dengan flow listing, detail produk, checkout & simulasi pembayaran.",
    image:
      "https://jihannabilah.vercel.app/images_project_digital_product/barangbareng.png",
    tags: ["React", "UI/UX", "Marketplace", "Product Thinking"],
    live: "https://barangbareng-barengintech.vercel.app/",
    highlight: "92% task-success rate",
    icon: Code2,
    caseStudy: {
      problem:
        "Akses barang sekali pakai (kamera, alat outdoor, peralatan acara) sering tidak efisien karena dibeli, padahal kebutuhan hanya singkat.",
      objective:
        "Membangun marketplace rental sederhana untuk menghubungkan pemilik & penyewa dengan flow checkout intuitif.",
      data: "Riset kualitatif pengguna kampus, taksonomi kategori barang, dan benchmark UX dari 5 marketplace serupa.",
      approach:
        "User journey mapping → wireframe → komponen UI modular (listing, detail, cart, checkout) → simulasi pembayaran end-to-end.",
      tools: ["React", "Tailwind", "Figma", "Vercel"],
      insight:
        "Trust signal (rating pemilik & status verifikasi) menjadi blocker utama konversi pada tahap checkout.",
      recommendation:
        "Tambahkan sistem verifikasi identitas dan jaminan deposit otomatis untuk meningkatkan kepercayaan.",
      impact:
        "Prototype divalidasi oleh 12 calon pengguna dengan task-success rate 92% pada flow rental.",
    },
  },
  {
    slug: "gis-buffer-service-area",
    title: "GIS Buffer & Service Area Analysis",
    category: "GIS · QGIS",
    desc: "Pengolahan data spasial, analisis buffer, service area, dan pemetaan kerawanan untuk pembacaan wilayah.",
    image:
      "https://jihannabilah.vercel.app/images_projects_gis_analyst/layout_servicesarea_umbulharjo.png",
    tags: ["QGIS", "Spatial Analysis", "Buffer Analysis", "Cartography"],
    icon: MapIcon,
    caseStudy: {
      problem:
        "Cakupan layanan fasilitas publik di Umbulharjo belum terpetakan; sulit menentukan area underserved.",
      objective:
        "Menghitung service area & buffer dari titik fasilitas untuk mengidentifikasi celah cakupan layanan.",
      data: "Titik fasilitas publik, jaringan jalan, dan batas kelurahan (Umbulharjo); serta data kerawanan bencana longsor untuk studi kasus kedua di Bandung.",
      approach:
        "Buffer multi-radius (500m, 1km, 2km) → analisis overlay → klasifikasi underserved → layout cartographic. Metode spatial layering serupa juga diterapkan untuk pemetaan kerawanan longsor di Bandung sebagai studi kasus kedua dalam mata kuliah yang sama.",
      tools: ["QGIS", "PostGIS", "Inkscape"],
      insight:
        "30% wilayah berada di luar radius 1 km dari fasilitas utama — terkonsentrasi di sisi timur.",
      recommendation:
        "Prioritaskan pengembangan satelit fasilitas di kawasan timur dengan radius layanan optimal 1 km.",
      impact:
        "Peta menjadi dasar diskusi prioritas pembangunan fasilitas dalam tugas perencanaan wilayah.",
    },
  },
  {
    slug: "tokopedia-text-mining",
    title: "Tokopedia Text Mining",
    category: "Data Analysis · NLP",
    desc: "Text mining dan analisis sentimen pada data review produk Tokopedia menggunakan Python di Google Colab.",
    image: "/images_projects_data_analyst/tokopedia_textmining.svg",
    tags: ["Python", "Google Colab", "NLP", "Text Mining"],
    live: "https://github.com/Jihanablh/textmining_tokopedia/blob/main/textmining_tokopedia.ipynb",
    icon: Code2,
    caseStudy: {
      problem:
        "Review produk Tokopedia dalam jumlah besar sulit dibaca manual untuk menemukan pola keluhan atau kepuasan pelanggan secara sistematis.",
      objective:
        "Menerapkan text mining dan NLP untuk mengekstrak pola kata kunci dan sinyal sentimen dari data review produk.",
      data: "Dataset review produk Tokopedia (teks ulasan pelanggan).",
      approach:
        "Text preprocessing (cleaning, tokenization, stopword removal) → ekstraksi keyword → analisis sentimen menggunakan Python di Google Colab.",
      tools: ["Python", "Google Colab", "NLP"],
      insight:
        "Ekstraksi keyword dan pola sentimen memberikan gambaran cepat mengenai aspek produk yang paling sering dikeluhkan atau dipuji pelanggan.",
      recommendation:
        "Insight ini dapat digunakan tim produk untuk prioritas perbaikan fitur berdasarkan sentimen review paling dominan.",
      impact:
        "Menjadi studi kasus penerapan NLP untuk customer insight di konteks e-commerce Indonesia.",
    },
  },
  {
    slug: "gofood-marketing",
    title: "GoFood Marketing Analytics",
    category: "Business Analysis",
    desc: "Optimasi budget & konversi kampanye marketing GoFood — roadmap penghematan 15% via retargeting.",
    image:
      "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Gojek/Dashboard_BI_Gojek.png",
    tags: ["SQL", "Microsoft Excel", "Marketing Analytics", "Funnel Analysis"],
    highlight: "15% projected budget savings",
    icon: BarChart3,
    caseStudy: {
      problem:
        "Budget kampanye marketing tersebar di banyak channel tanpa visibilitas ROI per channel — sulit menentukan alokasi optimal.",
      objective:
        "Mengukur efektivitas channel & menemukan opportunity penghematan tanpa menurunkan akuisisi.",
      data: "Dataset campaign performance (impression, click, conversion, cost) lintas 6 channel selama 6 bulan.",
      approach:
        "Funnel analysis → CAC per channel → cohort retention → simulasi reallocation budget.",
      tools: ["SQL", "Microsoft Excel"],
      insight:
        "2 channel berbiaya tinggi menyumbang 38% spend namun hanya 12% konversi. Retargeting punya CAC 3× lebih rendah.",
      recommendation:
        "Realokasi 15% spend dari channel low-ROI ke retargeting & lookalike audience.",
      impact:
        "Proyeksi penghematan ~15% budget bulanan dengan konversi setara — diadopsi sebagai studi kasus internal.",
    },
  },
  {
    slug: "global-superstore",
    title: "Global Superstore Executive Dashboard",
    category: "Business Intelligence",
    desc: "Dashboard strategis multi-currency untuk profitabilitas ritel global & evaluasi pasar.",
    image:
      "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Global/Dashboard_BI_Global.png",
    tags: ["Power BI", "DAX", "Data Modeling"],
    live: "https://github.com/Jihanablh/BI_Analyst_Projects",
    icon: LineChart,
    caseStudy: {
      problem:
        "Eksekutif tidak punya satu sumber kebenaran untuk profitabilitas lintas region & kategori produk.",
      objective:
        "Membangun executive dashboard multi-currency yang mengukur revenue, margin, dan loss leader per segmen.",
      data: "Global Superstore dataset (orders, returns, people) 4 tahun, 4 region, 17 negara.",
      approach:
        "Star-schema modeling → DAX measures (YoY, profit margin, loss ratio) → drill-down by region/category/segment.",
      tools: ["Power BI", "DAX", "Power Query"],
      insight:
        "Kategori Furniture profit margin negatif di EMEA karena biaya shipping; Technology dominan di APAC.",
      recommendation:
        "Renegosiasi logistics di EMEA atau hentikan SKU loss-leader; double-down Technology di APAC.",
      impact:
        "Dashboard mengurangi waktu reporting eksekutif dari ~2 hari menjadi <10 menit.",
    },
  },
  {
    slug: "ecommerce-sales",
    title: "E-Commerce Sales Performance",
    category: "Data Analysis",
    desc: "Analisis tren penjualan & korelasi keterlambatan pengiriman terhadap rating toko.",
    image:
      "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Ecommerce/Dashboard_BI_Ecommerce.png",
    tags: ["Python", "Pandas", "Seaborn", "EDA"],
    live: "https://github.com/Jihanablh/BI_Analyst_Projects",
    icon: BarChart3,
    caseStudy: {
      problem:
        "Rating toko menurun tanpa diketahui penyebab utamanya — diduga terkait operasional pengiriman.",
      objective:
        "Membuktikan apakah keterlambatan pengiriman berdampak signifikan pada rating toko.",
      data: "Transaksi e-commerce 100k+ baris dengan kolom waktu pesan, kirim, terima, dan rating.",
      approach:
        "EDA → fitur delay (actual − estimated) → korelasi delay vs rating → segmentasi per kategori produk.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      insight:
        "Korelasi negatif kuat (r = -0.62) antara delay & rating; kategori elektronik paling sensitif.",
      recommendation:
        "Tingkatkan SLA logistik kategori elektronik & beri kompensasi otomatis untuk pesanan telat >3 hari.",
      impact:
        "Insight menjadi rekomendasi untuk tim operations dalam revisi SLA pengiriman.",
    },
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics: Workforce Architecture",
    category: "People Analytics",
    desc: "Dashboard Diversity & Inclusion untuk memantau target kesetaraan & demografi karyawan.",
    image:
      "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_HR/Dashboard_BI_HR.png",
    tags: ["Google Data Studio", "SQL", "HR Metrics", "DEI"],
    live: "https://github.com/Jihanablh/BI_Analyst_Projects",
    icon: Users,
    caseStudy: {
      problem:
        "Manajemen tidak punya visibility real-time terhadap demografi & target Diversity, Equity, Inclusion (DEI).",
      objective:
        "Membangun dashboard people analytics untuk memonitor komposisi gender, generasi, tenure & gap DEI.",
      data: "HRIS export: ~5k employee records (gender, age band, department, level, tenure).",
      approach:
        "Data cleaning HRIS → pivot demografi → benchmark vs target → highlight gap → KPI alert visual.",
      tools: ["Google Data Studio", "SQL", "Google Sheets"],
      insight:
        "Gender gap terbesar di level senior (78/22), padahal di entry level sudah 52/48 — pipeline retention issue.",
      recommendation:
        "Mentoring program & succession planning untuk perempuan level mid agar pipeline ke senior membaik.",
      impact:
        "Dashboard menjadi referensi bulanan rapat HR; baseline untuk OKR DEI tahun berikutnya.",
    },
  },
  {
    slug: "snapbooth-studio",
    title: "SnapBooth Studio",
    category: "Web Application",
    desc: "Aplikasi web photo booth interaktif untuk pengambilan dan kustomisasi foto secara digital.",
    image: "/images_project_digital_product/snapboothstudio.svg",
    tags: ["TypeScript", "React", "Web App"],
    live: "https://github.com/Jihanablh/SnapBoothStudio",
    icon: Code2,
    caseStudy: {
      problem:
        "Kebutuhan akan solusi photo booth digital yang mudah diakses tanpa perangkat fisik khusus untuk acara atau penggunaan personal.",
      objective:
        "Membangun aplikasi web photo booth yang memungkinkan pengguna mengambil dan menyesuaikan foto secara langsung dari browser.",
      data: "Tidak berbasis dataset — aplikasi berbasis interaksi kamera pengguna secara real-time.",
      approach:
        "Pengembangan antarmuka web interaktif untuk capture foto, dengan rencana pengembangan lanjutan berupa integrasi AWS IaaS untuk penyimpanan dan pemrosesan cloud.",
      tools: ["TypeScript", "React"],
      insight:
        "Validasi awal menunjukkan alur pengambilan foto yang intuitif untuk pengguna non-teknis.",
      recommendation:
        "Integrasikan AWS IaaS (S3 untuk penyimpanan, EC2/Lambda untuk pemrosesan gambar) agar aplikasi dapat menangani traffic lebih besar dan penyimpanan foto jangka panjang.",
      impact:
        "Prototipe fungsional yang menjadi dasar pengembangan fitur cloud selanjutnya.",
    },
  },
  {
    slug: "loyalty-point-prediction",
    title: "Loyalty Point Prediction Dashboard",
    category: "Data Analysis · Predictive Modeling",
    desc: "Model prediksi nilai akhir point loyalitas pelanggan berdasarkan data historis, ditampilkan dalam dashboard web interaktif.",
    image: "/images_projects_data_analyst/loyalty_point_dashboard.svg",
    tags: ["Python", "TypeScript", "Predictive Modeling"],
    live: "https://github.com/Jihanablh/dashboard_prediktor_point",
    icon: LineChart,
    caseStudy: {
      problem:
        "Data point loyalitas pelanggan (dalam format Excel) belum dianalisis untuk memprediksi nilai akhir yang akan diperoleh pelanggan ke depannya.",
      objective:
        "Membangun model prediksi nilai akhir point loyalitas dari data historis, serta menampilkannya dalam dashboard web yang mudah diakses.",
      data: "Dataset point loyalitas pelanggan dalam format Excel.",
      approach:
        "Analisis dan pemodelan prediksi menggunakan Python, kemudian hasil prediksi ditampilkan melalui dashboard web berbasis TypeScript.",
      tools: ["Python", "TypeScript"],
      insight:
        "Model mampu memproyeksikan nilai akhir point loyalitas berdasarkan pola data historis pelanggan.",
      recommendation:
        "Dashboard dapat digunakan tim loyalty program untuk memantau proyeksi point pelanggan secara berkala.",
      impact:
        "Studi kasus penerapan predictive modeling untuk program loyalitas pelanggan.",
    },
  },
  {
    slug: "workflow-ai-n8n",
    title: "AI Workflow Automation with n8n",
    category: "Workflow Automation",
    desc: "Automasi workflow berbasis n8n untuk riset tren business analyst & data analyst, dengan pengiriman laporan otomatis via email dan Telegram.",
    image: "/images_projects_data_analyst/workflow_n8n.svg",
    tags: ["n8n", "Workflow Automation", "AI"],
    live: "https://github.com/Jihanablh/workflowAI_n8n",
    icon: Brain,
    caseStudy: {
      problem:
        "Riset tren terkini seputar business analyst dan data analyst dilakukan manual, memakan waktu dan tidak konsisten formatnya.",
      objective:
        "Mengotomasi proses pencarian tren, penyusunan laporan visual, dan distribusinya ke beberapa channel komunikasi.",
      data: "Data tren dari pencarian otomatis bertema business analyst dan data analyst.",
      approach:
        "Membangun workflow di n8n yang melakukan pencarian tren, menyusun output berupa gambar/laporan, mengirimkannya via email, serta terintegrasi dengan Telegram untuk notifikasi/output tambahan.",
      tools: ["n8n", "Email Automation", "Telegram API"],
      insight:
        "Workflow otomatis mengurangi waktu riset manual dan memastikan distribusi informasi tren yang konsisten.",
      recommendation:
        "Tambahkan penjadwalan otomatis (cron) dan filter relevansi tren agar output semakin tertarget.",
      impact:
        "Membuktikan kemampuan penerapan AI workflow automation untuk kebutuhan riset dan distribusi informasi bisnis.",
    },
  },
  {
    slug: "selenium-automation-testing",
    title: "Selenium Automation Testing — E-Commerce QA",
    category: "Quality Assurance",
    desc: "Automated testing menggunakan Selenium untuk menguji fungsionalitas website dummy e-commerce.",
    image: "/images_projects_data_analyst/selenium_testing.svg",
    tags: ["Python", "Selenium", "QA Automation"],
    live: "https://github.com/Jihanablh/selenium_automation_test",
    icon: Code2,
    caseStudy: {
      problem:
        "Pengujian fungsionalitas website e-commerce secara manual memakan waktu dan rawan human error.",
      objective:
        "Membangun automated test script untuk memvalidasi alur fungsional utama website dummy e-commerce.",
      data: "Website dummy e-commerce sebagai target pengujian.",
      approach:
        "Menulis test script otomatis dengan Selenium (Python) untuk menguji alur navigasi, pencarian produk, dan proses checkout.",
      tools: ["Python", "Selenium"],
      insight:
        "Automated testing mempercepat proses QA dibanding pengujian manual berulang.",
      recommendation:
        "Integrasikan dengan CI/CD pipeline agar pengujian berjalan otomatis setiap ada perubahan kode.",
      impact:
        "Menjadi bukti kemampuan QA automation testing di luar domain data/business analysis.",
    },
  },
];