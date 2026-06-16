import jogjaSiaga from '../assets/images/custom/jogja-siaga.svg';
import barangBareng from '../assets/images/custom/barangbareng.svg';
import dataAnalysisThumb from '../assets/images/custom/data-analysis.svg';
import gojekDashboard from '../assets/images/data/BI_Gojek/Dashboard_BI_Gojek.png';

export const caseStudies = [
  {
    title: 'Disaster Data Analysis for Jogja Siaga',
    category: 'Data Visualization / WebGIS',
    image: jogjaSiaga,
    problem: 'Informasi kebencanaan sering tersebar dan sulit dibaca cepat oleh pengguna non-teknis.',
    objective: 'Menyajikan data risiko, kejadian, statistik, dan konteks wilayah dalam visual WebGIS yang mudah dipahami.',
    data: ['GeoJSON wilayah', 'data kejadian bencana', 'layer risiko', 'statistik wilayah'],
    process: ['Merapikan layer spasial', 'mengelompokkan data risiko', 'mendesain peta interaktif', 'menyusun indikator dashboard'],
    tools: ['React', 'QGIS', 'GeoJSON', 'Tailwind CSS'],
    insight: 'Visual peta membantu pengguna membaca lokasi berisiko dan pola kejadian dengan lebih cepat dibanding tabel mentah.',
    recommendation: 'Tambahkan filter waktu, kategori bencana, dan ringkasan KPI agar analisis wilayah semakin actionable.',
    result: 'Prototype WebGIS yang menggabungkan peta, dashboard, dan informasi tata kelola berbasis data spasial.',
  },
  {
    title: 'Rental Marketplace Business Flow for BarangBareng',
    category: 'Business Analysis / Digital Product Analysis',
    image: barangBareng,
    problem: 'Proses rental barang membutuhkan trust, kejelasan alur DP, dan peran pengguna yang berbeda.',
    objective: 'Merancang flow marketplace rental yang menjelaskan proses penyewa, pemilik barang, checkout, dan pembayaran.',
    data: ['user role', 'checkout requirement', 'DP flow', 'account flow'],
    process: ['Menyusun user journey', 'memetakan business process', 'mendesain checkout flow', 'mengidentifikasi touchpoint risiko'],
    tools: ['Business Flow', 'Requirement Analysis', 'UI Flow Understanding', 'Documentation'],
    insight: 'Alur rental membutuhkan transparansi status, perjanjian, dan konfirmasi pembayaran agar risiko transaksi turun.',
    recommendation: 'Gunakan status tracking, deposit rule, dan verifikasi akun sebagai fitur inti sebelum scale-up.',
    result: 'Konsep platform rental dengan flow bisnis yang lebih jelas untuk penyewa dan penyedia barang.',
  },
  {
    title: 'Customer Segmentation / Business Insight Project',
    category: 'Data Analyst Project',
    image: dataAnalysisThumb,
    problem: 'Pelanggan memiliki perilaku yang berbeda, tetapi strategi komunikasi sering masih dibuat sama rata.',
    objective: 'Mengelompokkan pelanggan berdasarkan pola data agar rekomendasi marketing lebih personal dan relevan.',
    data: ['customer profile', 'transaction pattern', 'purchase behavior', 'segment indicator'],
    process: ['Data cleaning', 'EDA', 'feature selection', 'segment interpretation'],
    tools: ['Python', 'Pandas', 'Excel', 'Visualization'],
    insight: 'Segmentasi membantu membedakan pelanggan loyal, pelanggan baru, dan pelanggan berisiko churn.',
    recommendation: 'Siapkan campaign berbeda untuk retensi, onboarding, dan reactivation berdasarkan segmentasi.',
    result: 'Business insight yang lebih mudah diterjemahkan menjadi strategi marketing berbasis data.',
  },
  {
    title: 'Dashboard Analysis Project',
    category: 'Dashboard & Data Storytelling',
    image: gojekDashboard,
    problem: 'Metric marketing dan penjualan sulit dipantau jika data tidak divisualisasikan dalam satu dashboard.',
    objective: 'Membangun dashboard yang membantu membaca performa, tren, dan area yang membutuhkan keputusan cepat.',
    data: ['sales data', 'campaign data', 'customer metric', 'performance KPI'],
    process: ['Define KPI', 'clean data', 'build dashboard', 'interpret insight'],
    tools: ['SQL', 'Tableau', 'Power BI', 'Excel'],
    insight: 'Dashboard mempercepat pemahaman performa karena KPI, tren, dan segmentasi ditampilkan dalam satu ruang visual.',
    recommendation: 'Gunakan dashboard sebagai ritual evaluasi berkala dan hubungkan dengan rekomendasi aksi.',
    result: 'Dashboard analitik yang mendukung business review dan storytelling untuk stakeholder.',
  },
];
