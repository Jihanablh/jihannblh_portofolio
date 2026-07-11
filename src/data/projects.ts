import {
  Map as MapIcon,
  Code2,
  BarChart3,
  LineChart,
  Users,
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
    desc: "Pengolahan data spasial, analisis buffer, dan service area untuk pembacaan cakupan wilayah.",
    image:
      "https://jihannabilah.vercel.app/images_projects_gis_analyst/layout_servicesarea_umbulharjo.png",
    tags: ["QGIS", "Spatial Analysis", "Buffer Analysis", "Cartography"],
    icon: MapIcon,
    caseStudy: {
      problem:
        "Cakupan layanan fasilitas publik di Umbulharjo belum terpetakan; sulit menentukan area underserved.",
      objective:
        "Menghitung service area & buffer dari titik fasilitas untuk mengidentifikasi celah cakupan layanan.",
      data: "Titik fasilitas publik, jaringan jalan, dan batas kelurahan.",
      approach:
        "Buffer multi-radius (500m, 1km, 2km) → analisis overlay → klasifikasi underserved → layout cartographic.",
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
    slug: "gofood-marketing",
    title: "GoFood Marketing Analytics",
    category: "Business Analysis",
    desc: "Optimasi budget & konversi kampanye marketing GoFood — roadmap penghematan 15% via retargeting.",
    image:
      "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Gojek/Dashboard_BI_Gojek.png",
    tags: [
      "SQL",
      "Microsoft Excel",
      "Marketing Analytics",
      "Funnel Analysis",
    ],
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
];