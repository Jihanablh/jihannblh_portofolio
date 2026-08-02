import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  GraduationCap,
  Briefcase,
  Users,
  Building2,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  Database,
  BarChart3,
  Map as MapIcon,
  Brain,
  Code2,
  Eye,
  Moon,
  Heart,
  Menu,
  X,
  TrendingUp,
  Download,
  Award,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import Hero3D from "@/components/Hero3D";
import { Reveal } from "@/components/Reveal";
import { ProjectModal } from "@/components/ProjectModal";
import { Lightbox } from "@/components/Lightbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jihan Nabilah Rahman — Data Analyst & Business Analyst" },
      {
        name: "description",
        content:
          "Portfolio interaktif: Data Analytics, BI Dashboards, GIS, dan People Analytics — Mahasiswa Sistem Informasi Universitas Bakrie.",
      },
      {
        property: "og:title",
        content: "Jihan Nabilah Rahman — Data & Business Analyst",
      },
      {
        property: "og:description",
        content:
          "Portfolio 3D interaktif dengan dashboard BI, WebGIS, dan studi kasus analitik.",
      },
    ],
  }),
  component: Index,
});

const contactLinks = {
  email: "mailto:jihannabilah624@gmail.com",
  linkedin: "https://www.linkedin.com/in/jihan-nabilah-057318357",
  github: "https://github.com/Jihanablh",
} as const;

const stats = [
  { value: "15+", label: "Projects Completed", color: "text-cyan" },
  { value: "30+", label: "Certifications", color: "text-magenta" },
  { value: "3.72", label: "GPA / IPK", color: "text-violet" },
  { value: "4+", label: "Organizations", color: "text-lime" },
];

const experiences: ExperienceItem[] = [
  {
    role: "Junior Data Analyst",
    org: "PT Vinix Seven Aurum - MSIB Mandiri Batch 4",
    location: "Yogyakarta, Indonesia (Remote)",
    period: "Feb 2026 - Jun 2026",
    status: "Completed",
    icon: Database,
    accent: "from-cyan-400/30 to-blue-500/10",
    impact: [
      "Conducted end-to-end data collection, cleaning, and validation across multi-source datasets, resolving missing values and anomalies to ensure analysis-ready data integrity.",
      "Performed exploratory data analysis, regression, and clustering in Python and Excel to uncover career-readiness patterns among Indonesian university students.",
      "Designed and executed a national survey and sentiment-analysis workflow, transforming unstructured responses into structured and actionable insights.",
      "Built interactive dashboards in Power BI and Google Data Studio to support stakeholder reporting and decision-making.",
      'Presented the final analysis to industry mentors and earned a 95/100 evaluation score for the "Impact Project" capstone.',
    ],
    tags: ["Excel", "Python", "Power BI", "Google Data Studio", "EDA"],
    documents: [
      {
        label: "View Internship Certificate",
        title: "Data Analyst Internship - PT Vinix Seven Aurum",
        file: "/certificates/Jihan Nabilah Rahman_Sertifikat Utama_Vinix7.pdf",
        type: "PDF",
      },
      {
        label: "View Impact Project Certificate",
        title: "Impact Project - Data Analyst",
        file: "/certificates/Jihan Nabilah Rahman_Sertifikat Proyek_vinix7.pdf",
        type: "PDF",
      },
    ],
  },
  {
    role: "Operating System Teaching Assistant",
    org: "Universitas Bakrie",
    period: "Sep 2025 - Jan 2026",
    status: "Completed",
    icon: Code2,
    accent: "from-fuchsia-400/30 to-purple-500/10",
    impact: [
      "Coordinated and facilitated weekly practicum sessions for more than 60 students, covering Memory Management, Process Scheduling, and File Systems.",
      "Installed and troubleshot Linux (Debian) and Windows environments on virtual machines, maintaining full practicum continuity throughout the semester.",
      "Developed interactive learning modules and practical exam scenarios that strengthened students' hands-on understanding of system-level concepts.",
      "Evaluated assignments and final projects, providing structured technical feedback that accelerated student progress.",
    ],
    tags: [
      "Linux",
      "Bash",
      "VMware",
      "Operating Systems",
      "Technical Mentoring",
    ],
    documents: [
      {
        label: "View Teaching Assistant Certificate",
        title: "Operating System Teaching Assistant",
        file: "/certificates/Sertifikat Asisten Praktikum System Operation SIF Ganjil 20252026.pdf",
        type: "PDF",
      },
    ],
  },
  {
    role: "Teaching Assistant - Information Systems Analysis and Design",
    org: "Universitas Bakrie",
    period: "Mar 2026 - Jul 2026",
    icon: GraduationCap,
    accent: "from-pink-400/30 to-fuchsia-500/10",
    impact: [
      "Supported a class of more than 55 students in learning UML, ERD, flowcharting, and UI/UX prototyping with Figma.",
      "Guided student teams through end-to-end systems analysis and design projects, providing consultation and structured feedback on requirements and prototypes.",
      "Prepared practicum modules and grading rubrics in collaboration with course lecturers to maintain clear and consistent evaluation standards.",
    ],
    tags: ["UML", "ERD", "Figma", "System Analysis", "Prototyping"],
  },
  {
    role: "Human Resource & Nomination Committee Staff",
    org: "IEEE Student Branch Universitas Bakrie",
    period: "Mar 2025 - Jun 2026",
    status: "Completed",
    icon: Users,
    accent: "from-violet-400/30 to-indigo-500/10",
    impact: [
      "Managed the end-to-end recruitment process, from sourcing and screening to onboarding, for more than 50 applicants per period while maintaining alignment with organisational values and goals.",
      "Designed and delivered upskilling initiatives for over 30 members, including needs assessment and performance evaluation, contributing to stronger member retention.",
      "Built a structured HR administration system to track member KPIs across six divisions, improving reporting efficiency and internal coordination.",
    ],
    tags: [
      "Talent Acquisition",
      "People Analytics",
      "HR Operations",
      "Retention Strategy",
      "Leadership",
    ],
    documents: [
      {
        label: "View Appreciation Certificate",
        title: "IEEE HRN Committee Appreciation Certificate",
        file: "/certificates/HRN IEEE Jihan Nabilah Rahman.png",
        type: "Image",
      },
    ],
  },
  {
    role: "Public Relations Officer",
    org: "Karang Taruna Cikoko",
    period: "Jan 2025 - Present",
    icon: Building2,
    accent: "from-emerald-400/30 to-teal-500/10",
    impact: [
      "Planned and executed digital communication strategies and consistent visual branding across the organisation's public channels.",
      "Managed external relations and led partnership negotiations with sponsors to support organisational programmes.",
      "Handled communication issues and coordinated event publicity from planning through execution.",
    ],
    tags: [
      "Public Relations",
      "Branding",
      "Stakeholder Management",
      "Event Marketing",
      "Crisis Communication",
    ],
  },
];

const certifications: CertificateItem[] = [
  {
    title: "Data Analyst Internship - MSIB Mandiri Batch 4",
    issuer: "PT Vinix Seven Aurum",
    period: "23 February - 23 June 2026",
    credential: "No. 007/Batch-IV-MSIB/VINIX7/Div-Data Analyst",
    category: "Applied Analytics",
    level: "Featured",
    summary: "Completed a four-month independent internship in the Data Analyst Division with a very good performance assessment.",
    highlights: [
      "Worked across data collection, cleaning, wrangling, exploratory analysis, statistics, dashboards, and stakeholder reporting.",
      "Applied Excel, SQL, Python, and dashboarding workflows to support data-driven business decisions."
    ],
    skills: ["Data Cleaning", "EDA", "Excel", "SQL", "Dashboarding"],
    file: "/certificates/Jihan Nabilah Rahman_Sertifikat Utama_Vinix7.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-vinix-data-analyst-internship.png",
    accent: "from-blue-400/30 via-cyan-500/15 to-violet-500/10",
  },
  {
    title: "Impact Project - Data Analyst",
    issuer: "PT Vinix Seven Aurum",
    period: "2026",
    credential: "Final score: 95/100",
    category: "Applied Analytics",
    level: "Featured",
    summary: "Analysed the career readiness of Indonesian university students through survey execution, sentiment analysis, and dashboard visualisation.",
    highlights: [
      "Turned survey and open-text responses into structured findings for career-readiness analysis.",
      "Presented the results through a dashboard-based report and earned a final score of 95/100."
    ],
    skills: ["Survey Analysis", "Sentiment Analysis", "Data Visualisation", "Reporting"],
    file: "/certificates/Jihan Nabilah Rahman_Sertifikat Proyek_vinix7.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-vinix-impact-project.png",
    accent: "from-cyan-400/30 via-blue-500/15 to-indigo-500/10",
  },
  {
    title: "Data Analyst Program Participation - MSIB Mandiri Batch 4",
    issuer: "PT Vinix Seven Aurum",
    period: "23 February - 23 June 2026",
    credential: "Participation Certificate",
    category: "Applied Analytics",
    level: "Featured",
    summary: "Recognition for completing the MSIB Mandiri programme and contributing consistently to the Data Analyst Division.",
    highlights: [
      "Completed the full programme period and carried out assigned analytical responsibilities.",
      "Provides additional formal evidence of professional participation and commitment."
    ],
    skills: ["Data Analysis", "Professional Practice", "MSIB", "Team Collaboration"],
    file: "/certificates/Jihan Nabilah Nabilah_Sertifikat KEIKUTSERTAAN_Vinix7.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-vinix-participation.png",
    accent: "from-blue-400/30 via-cyan-500/15 to-indigo-500/10",
  },
  {
    title: "Quantium Data Analytics Job Simulation",
    issuer: "Forage x Quantium",
    period: "March 2026",
    credential: "Certificate of Completion",
    category: "Applied Analytics",
    level: "Featured",
    summary: "Completed practical tasks in data preparation, customer analytics, experimentation, uplift testing, and commercial application.",
    highlights: [
      "Prepared transaction data and analysed customer behaviour to identify commercially relevant insights.",
      "Selected benchmark stores, evaluated trial performance, and translated findings into recommendations for a Category Manager."
    ],
    skills: ["Customer Analytics", "Uplift Testing", "Commercial Insights", "Reporting"],
    file: "/certificates/Sertifikat_Data Analytics_Quantium_FORAGE.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-quantium-data-analytics.png",
    accent: "from-rose-400/30 via-fuchsia-500/15 to-violet-500/10",
  },
  {
    title: "Data - AI Agent for Data Analysis",
    issuer: "IBM SkillsBuild x Hacktiv8",
    period: "21-24 April 2026",
    credential: "9 hours · Score 98/100",
    category: "Applied Analytics",
    level: "Featured",
    summary: "Completed an IBM SkillsBuild university programme focused on AI-assisted data-analysis workflows.",
    highlights: [
      "Completed the programme requirements and delivered the final project as part of the university track.",
      "Earned a score of 98 in the accompanying transcript assessment."
    ],
    skills: ["AI-Assisted Analysis", "Data Analysis", "Analytical Workflow", "Final Project"],
    file: "/certificates/Sertifikat IBM_Data AI Agent for Data Analysis.pdf",
    fileLabel: "PDF",
    supportingFile: "/certificates/Nilai Transkrip IBM_Data AI Agent for Data Analysis.pdf",
    supportingFileLabel: "View Transcript",
    thumbnail: "/certificates/preview-ibm-ai-agent-data-analysis.png",
    accent: "from-sky-400/30 via-blue-500/15 to-indigo-500/10",
  },
  {
    title: "Data Analyst Bootcamp - Excel, SQL, Python & Power BI",
    issuer: "KarirNex",
    period: "8, 14 & 15 March 2026",
    credential: "Expert · No. 0837/B-4/KBT.DA.4/KRX/III/2026",
    category: "Analytics & BI",
    level: "Featured",
    summary: "Completed a data analyst bootcamp covering Excel, SQL, Python, and Power BI with an Expert-level result.",
    highlights: [
      "Strengthened end-to-end analytical skills from spreadsheets and SQL querying to Python processing.",
      "Practised presenting analytical results through business-intelligence dashboards in Power BI."
    ],
    skills: ["Excel", "SQL", "Python", "Power BI", "Business Intelligence"],
    file: "/certificates/Jihan Nabilah Rahman - Sertifikat Data Analyst Batch 4 (1).pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-karirnex-data-analyst-bootcamp.png",
    accent: "from-orange-400/30 via-amber-500/15 to-rose-500/10",
  },
  {
    title: "Data Analyst Project: Business Decision Research",
    issuer: "DQLab",
    period: "13 February 2025",
    credential: "Project Certificate",
    category: "Business & Systems",
    level: "Professional",
    summary: "Completed a project-oriented data analyst course focused on turning analysis into business decision support.",
    highlights: [
      "Connected analytical findings with real business decision contexts.",
      "Demonstrated project-based problem solving and communication of insights."
    ],
    skills: ["Business Analysis", "Decision Research", "Data Analysis", "Insight Communication"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Data Analyst Project Business Decision Research_Dqlab.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dqlab-business-decision-research.png",
    accent: "from-fuchsia-400/25 via-purple-500/15 to-indigo-500/10",
  },
  {
    title: "Study Case Bootcamp Data Analyst with SQL & Python",
    issuer: "DQLab",
    period: "8 June 2025",
    credential: "Bootcamp Certificate",
    category: "Analytics & BI",
    level: "Professional",
    summary: "Completed a data-analyst case-study bootcamp using SQL and Python for practical data processing and analysis.",
    highlights: [
      "Applied SQL querying and Python analysis in a structured case-study format.",
      "Strengthened the bridge between data extraction, transformation, and analytical interpretation."
    ],
    skills: ["SQL", "Python", "Case Study", "Data Analysis"],
    file: "/certificates/certificate-DQLABMB6SPOPIBWD.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dqlab-data-analyst-sql-python.png",
    accent: "from-emerald-400/25 via-cyan-500/15 to-blue-500/10",
  },
  {
    title: "Customer Segmentation with Python - Part 1",
    issuer: "DQLab",
    period: "12 March 2025",
    credential: "Course Certificate",
    category: "Analytics & BI",
    level: "Professional",
    summary: "Completed the first part of a marketing-analytics course on customer segmentation using Python.",
    highlights: [
      "Used Python in a marketing-analytics context to study customer grouping.",
      "Built foundational segmentation knowledge for customer and commercial analysis."
    ],
    skills: ["Customer Segmentation", "Python", "Marketing Analytics", "Customer Analytics"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Customer Segmentation with Python - Part 1_Dqlab.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dqlab-customer-segmentation-part-1.png",
    accent: "from-pink-400/25 via-rose-500/15 to-orange-500/10",
  },
  {
    title: "Customer Segmentation with Python - Part 2",
    issuer: "DQLab",
    period: "8 June 2025",
    credential: "Course Certificate",
    category: "Analytics & BI",
    level: "Professional",
    summary: "Completed the continuation of DQLab's customer-segmentation course using Python for marketing analytics.",
    highlights: [
      "Extended customer-segmentation practice beyond the introductory course.",
      "Reinforced customer profiling and analytical thinking for business use cases."
    ],
    skills: ["Customer Segmentation", "Python", "Customer Profiling", "Marketing Analytics"],
    file: "/certificates/certificate-DQLABDSCS1OGQADB.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dqlab-customer-segmentation-part-2.png",
    accent: "from-rose-400/25 via-fuchsia-500/15 to-purple-500/10",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    period: "1 July 2025",
    credential: "GRX5JN35YX0M",
    category: "Analytics & BI",
    level: "Professional",
    summary: "Completed an industry-aligned data-visualisation course covering chart selection and communication best practices.",
    highlights: [
      "Studied effective visualisation principles, media selection, and practical chart creation.",
      "Practised translating data into clear and decision-friendly visuals."
    ],
    skills: ["Data Visualisation", "Google Sheets", "Chart Design", "Data Storytelling"],
    file: "/certificates/Sertifikat_Belajar Dasar Visualisasi Data_Dicoding.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dicoding-data-visualisation.png",
    accent: "from-teal-400/25 via-cyan-500/15 to-blue-500/10",
  },
  {
    title: "Intro to Data Analytics",
    issuer: "RevoU",
    period: "31 January 2025",
    credential: "DAMC-20012025-01-1-00134",
    category: "Analytics & BI",
    level: "Professional",
    summary: "Completed RevoU's certified mini course introducing the data-analytics workflow and analyst mindset.",
    highlights: [
      "Built a structured overview of the data-analysis process and its business applications.",
      "Completed the course with verified identity and participation."
    ],
    skills: ["Data Analytics", "Analytical Thinking", "Business Insight", "Data Workflow"],
    file: "/certificates/Jihan Nabilah Rahman_Revou_Data Analisis.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-revou-intro-data-analytics.png",
    accent: "from-orange-400/25 via-red-500/15 to-pink-500/10",
  },
  {
    title: "Getting Started with Data",
    issuer: "IBM SkillsBuild",
    period: "24 April 2026",
    credential: "Learning Plan Completed",
    category: "Analytics & BI",
    level: "Professional",
    summary: "Completed IBM SkillsBuild's Getting Started with Data learning plan and earned the associated credential.",
    highlights: [
      "Developed data literacy and a stronger understanding of data-driven work.",
      "Completed the learning plan recorded in IBM's Your Learning Builder system."
    ],
    skills: ["Data Literacy", "Data Fundamentals", "Analytical Thinking"],
    file: "/certificates/Sertifikat_Getting Started with Data_IBM.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-ibm-getting-started-with-data.png",
    accent: "from-slate-300/20 via-blue-400/15 to-cyan-500/10",
  },
  {
    title: "Big Data Integration and Processing",
    issuer: "UC San Diego via Coursera",
    period: "6 April 2025",
    credential: "Course Certificate",
    category: "Data Science & ML",
    level: "Professional",
    summary: "Completed a course on big-data integration and processing through Coursera.",
    highlights: [
      "Developed foundational understanding of integrating data from multiple sources.",
      "Strengthened knowledge of workflows used in larger-scale data environments."
    ],
    skills: ["Big Data", "Data Integration", "Data Processing", "Data Pipelines"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Big Data Integration and Processing_Coursera.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-coursera-big-data-integration.png",
    accent: "from-blue-400/25 via-indigo-500/15 to-violet-500/10",
  },
  {
    title: "Classifying Data Using IBM Granite",
    issuer: "IBM SkillsBuild",
    period: "10 June 2025",
    credential: "Module Completion",
    category: "Data Science & ML",
    level: "Professional",
    summary: "Completed an IBM SkillsBuild module on classifying data using IBM Granite.",
    highlights: [
      "Explored a practical data-classification use case with IBM Granite.",
      "Strengthened understanding of AI-assisted categorisation inside a data workflow."
    ],
    skills: ["Data Classification", "IBM Granite", "AI for Data", "Categorisation"],
    file: "/certificates/Completion Certificate _ SkillsBuild.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-ibm-granite-data-classification.png",
    accent: "from-amber-300/25 via-yellow-500/10 to-slate-500/10",
  },
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    period: "7 November 2024",
    credential: "N9ZOYN7KRPG5",
    category: "Data Science & ML",
    level: "Specialized",
    summary: "Completed a foundational data-science class covering data concepts and data-driven decision making.",
    highlights: [
      "Studied core data-science concepts, data types, and the role of data in decision-making.",
      "Completed an industry-referenced competency course with certificate validity through 2027."
    ],
    skills: ["Data Science", "Data Fundamentals", "Decision Making", "Data Concepts"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Data Scientist.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dicoding-basic-data-science.png",
    accent: "from-sky-400/25 via-cyan-500/15 to-teal-500/10",
  },
  {
    title: "Get Started with Machine Learning in Azure",
    issuer: "Microsoft Learn",
    period: "15 June 2025",
    credential: "Achievement",
    category: "Data Science & ML",
    level: "Specialized",
    summary: "Completed a Microsoft Learn achievement introducing machine-learning workflows in Azure.",
    highlights: [
      "Explored cloud-based machine-learning concepts in the Azure ecosystem.",
      "Added platform familiarity relevant to data-intelligence and model-development workflows."
    ],
    skills: ["Azure", "Machine Learning", "Cloud Analytics", "Microsoft Learn"],
    file: "/certificates/Achievements - jihannabilahrahman-9879 _ Microsoft Learn.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-microsoft-machine-learning-azure.png",
    accent: "from-blue-500/25 via-sky-500/15 to-cyan-500/10",
  },
  {
    title: "Preparation Course for Azure AI Fundamentals",
    issuer: "Microsoft AI Skills",
    period: "2 June 2025",
    credential: "AI-900 Preparation Course",
    category: "Data Science & ML",
    level: "Specialized",
    summary: "Completed a preparation course for Microsoft Azure AI Fundamentals to strengthen cloud-based AI and data-intelligence foundations.",
    highlights: [
      "Covered core AI concepts and Azure services relevant to modern analytics workflows.",
      "Built preparation for the AI-900 fundamentals pathway."
    ],
    skills: ["Azure AI", "AI Fundamentals", "Cloud Concepts", "Data Intelligence"],
    file: "/certificates/1861463 - Jihan Nabilah Rahman - Certificate of Completion.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-azure-ai-fundamentals.png",
    accent: "from-sky-400/25 via-blue-500/15 to-indigo-500/10",
  },
  {
    title: "Machine Learning - Fundamental of Python Machine Learning",
    issuer: "Udemy",
    period: "24 January 2025",
    credential: "3.5 total hours",
    category: "Data Science & ML",
    level: "Specialized",
    summary: "Completed a focused course on the fundamentals of machine learning with Python.",
    highlights: [
      "Strengthened Python-based machine-learning foundations.",
      "Completed 3.5 hours of guided course material."
    ],
    skills: ["Python", "Machine Learning", "Model Fundamentals", "Udemy"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Machine Learning - Fundamental of Python Machine Learning_Udemy.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-udemy-python-machine-learning.png",
    accent: "from-violet-400/25 via-purple-500/15 to-fuchsia-500/10",
  },
  {
    title: "Study Case Bootcamp Machine Learning & AI for Beginner",
    issuer: "DQLab",
    period: "8 June 2025",
    credential: "Bootcamp Certificate",
    category: "Data Science & ML",
    level: "Specialized",
    summary: "Completed a beginner machine-learning and AI bootcamp case study through DQLab.",
    highlights: [
      "Applied introductory ML and AI concepts in a case-study learning format.",
      "Expanded modelling knowledge alongside the core data-analyst skill set."
    ],
    skills: ["Machine Learning", "Artificial Intelligence", "Case Study", "DQLab"],
    file: "/certificates/certificate-DQLABMB6MAIBNELWF.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dqlab-machine-learning-ai.png",
    accent: "from-indigo-400/25 via-violet-500/15 to-purple-500/10",
  },
  {
    title: "Flexible Kickstart Data Science Journey",
    issuer: "Rakamin Academy",
    period: "November 2025",
    credential: "Participation Certificate",
    category: "Data Science & ML",
    level: "Foundation",
    summary: "Participated in Rakamin Academy's Flexible Kickstart Data Science Journey.",
    highlights: [
      "Completed a structured introductory learning period in data science.",
      "Added foundational exposure to the data-science career pathway."
    ],
    skills: ["Data Science", "Career Exploration", "Data Fundamentals"],
    file: "/certificates/certificate-293709DATA_SCIENCE1112025.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-rakamin-data-science-journey.png",
    accent: "from-emerald-400/25 via-green-500/15 to-lime-500/10",
  },
  {
    title: "DSF 37 - Data Science",
    issuer: "Dibimbing",
    period: "Data Science Festival 37",
    credential: "Certificate of Participation",
    category: "Data Science & ML",
    level: "Foundation",
    summary: "Participated in Dibimbing's DSF 37 Data Science programme.",
    highlights: [
      "Joined a focused data-science learning event.",
      "Reinforced exposure to current data-science topics and career development."
    ],
    skills: ["Data Science", "Industry Learning", "Career Development"],
    file: "/certificates/SERTIFIKAT JIHAN NABILAH RAHMAN_DATA SCIENCE_DIBIMBING.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dibimbing-data-science-festival.png",
    accent: "from-sky-400/25 via-blue-500/15 to-cyan-500/10",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    period: "17 November 2024",
    credential: "1OP84VJRVZQK",
    category: "Analytics & BI",
    level: "Foundation",
    summary: "Completed Dicoding's beginner Python programming class using VS Code, Jupyter Notebook, and Google Colab.",
    highlights: [
      "Built programming foundations needed for data preparation and analysis.",
      "Practised Python syntax and development environments commonly used in analytics."
    ],
    skills: ["Python", "Jupyter Notebook", "Google Colab", "Programming Fundamentals"],
    file: "/certificates/SERTIFIKAT JIHAN NABILAH RAHMAN_PEMROGRAMAN DENGAN PYTHON_DICODING.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-dicoding-python-programming.png",
    accent: "from-cyan-400/25 via-sky-500/15 to-blue-500/10",
  },
  {
    title: "Samsung Innovation Campus Batch 7 - Stage 1 Coding",
    issuer: "Samsung Innovation Campus",
    period: "15 August - 13 September 2025",
    credential: "Python Programming",
    category: "Analytics & BI",
    level: "Foundation",
    summary: "Completed Stage 1 Coding in Samsung Innovation Campus Batch 7 with a focus on Python programming.",
    highlights: [
      "Completed a structured coding stage covering Python programming.",
      "Strengthened the technical foundation that supports automation and data-analysis work."
    ],
    skills: ["Python", "Coding", "Programming Fundamentals", "Technical Foundation"],
    file: "/certificates/Sertifikat SIC Jihan Nabilah Rahman.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-samsung-innovation-campus-python.png",
    accent: "from-blue-400/25 via-indigo-500/15 to-slate-500/10",
  },
  {
    title: "Operating System Teaching Assistant",
    issuer: "Universitas Bakrie",
    period: "Academic Year 2025/2026",
    credential: "No. 014/FTIK-UB/SER/I/2026",
    category: "Business & Systems",
    level: "Specialized",
    summary: "Recognition for serving as an Operating System practicum assistant during the 2025/2026 academic period.",
    highlights: [
      "Supported practical learning in operating-system concepts and technical problem solving.",
      "Demonstrates systems knowledge, documentation, communication, and structured technical mentoring."
    ],
    skills: ["Operating Systems", "System Fundamentals", "Technical Mentoring", "Problem Solving"],
    file: "/certificates/Sertifikat Asisten Praktikum System Operation SIF Ganjil 20252026.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-operating-system-assistant.png",
    accent: "from-orange-400/25 via-amber-500/15 to-rose-500/10",
  },
  {
    title: "Computer Networks and Network Security",
    issuer: "IBM via Coursera",
    period: "12 April 2025",
    credential: "Course Certificate",
    category: "Business & Systems",
    level: "Specialized",
    summary: "Completed a Coursera course covering computer networks and network security concepts that support systems-oriented analytical work.",
    highlights: [
      "Strengthened understanding of network architecture, communication concepts, and security basics.",
      "Supports system-analysis capability through broader technical infrastructure knowledge."
    ],
    skills: ["Computer Networks", "Network Security", "System Fundamentals", "Technical Analysis"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Computer Networks and Network Security_Coursera.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-coursera-network-security.png",
    accent: "from-cyan-400/25 via-blue-500/15 to-indigo-500/10",
  },
  {
    title: "Cybersecurity Compliance Framework, Standards & Regulations",
    issuer: "IBM via Coursera",
    period: "30 April 2025",
    credential: "Course Certificate",
    category: "Business & Systems",
    level: "Specialized",
    summary: "Completed an IBM course on cybersecurity compliance frameworks, standards, and regulations relevant to systems governance and requirements analysis.",
    highlights: [
      "Developed awareness of security governance, compliance frameworks, and regulatory considerations.",
      "Supports system-analysis work by strengthening risk, control, and non-functional requirements knowledge."
    ],
    skills: ["Cybersecurity Compliance", "Governance", "System Requirements", "Risk Controls"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_Cybersecurity Compliance Framework, Standards & Regulations_Coursera.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-coursera-cybersecurity-compliance.png",
    accent: "from-indigo-400/25 via-blue-500/15 to-cyan-500/10",
  },
  {
    title: "Design Thinking",
    issuer: "Universitas Bakrie",
    period: "12 March 2025",
    credential: "Soft Skills Training",
    category: "Business & Systems",
    level: "Foundation",
    summary: "Completed Design Thinking training that supports user-centred business and system analysis.",
    highlights: [
      "Practised a structured approach to understanding needs and framing problems.",
      "Added a user-centred method relevant to business requirements and solution design."
    ],
    skills: ["Design Thinking", "Problem Framing", "User Needs", "Solution Design"],
    file: "/certificates/Sertifikat_Jihan Nabilah Rahman_Design Thinking_UBakrie.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-ubakrie-design-thinking.png",
    accent: "from-amber-400/25 via-orange-500/15 to-yellow-500/10",
  },
  {
    title: "Figma Tools",
    issuer: "MySkill",
    period: "9 November 2024",
    credential: "Course Completion · 1 hour",
    category: "Business & Systems",
    level: "Foundation",
    summary: "Completed a Figma tools course relevant to interface prototyping and system-design communication.",
    highlights: [
      "Built familiarity with Figma for translating requirements into visual interface concepts.",
      "Supports system-analysis deliverables such as wireframes, prototypes, and stakeholder walkthroughs."
    ],
    skills: ["Figma", "UI Prototyping", "Wireframing", "System Design"],
    file: "/certificates/Sertifikat Jihan Nabilah Rahman_FIGMA TOOLS_MySkill.pdf",
    fileLabel: "PDF",
    thumbnail: "/certificates/preview-myskill-figma-tools.png",
    accent: "from-emerald-400/25 via-teal-500/15 to-cyan-500/10",
  },
];
const gallery = [
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/webgisyogya_dashboard.png",
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/webgisyogya_peta.png",
  "https://jihannabilah.vercel.app/images_project_digital_product/barangbareng.png",
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/layout_servicesarea_umbulharjo.png",
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/layout_kerawananlongsor_bandung.png",
  "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Gojek/Dashboard_BI_Gojek.png",
  "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Gojek/Data_BI_Gojek.png",
  "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Global/Dashboard_BI_Global.png",
  "/images_projects_data_analyst/Tokopedia_Text_Mining/Tokopedia_Text_Mining 1.png",
  "/images_projects_data_analyst/Tokopedia_Text_Mining/Tokopedia_Text_Mining 2.png",
  "/images_projects_data_analyst/Tokopedia_Text_Mining/Tokopedia_Text_Mining 3.png",
  "/images_projects_data_analyst/Tokopedia_Text_Mining/Tokopedia_Text_Mining 4.png",
  "/images_projects_data_analyst/Tokopedia_Text_Mining/Confusion Matrix Tokopedia_Text_Mining.png",
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    items: [
      "Power BI",
      "Microsoft Excel",
      "Google Data Studio",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    title: "Methods",
    icon: Brain,
    items: [
      "Data Cleaning",
      "Statistical Analysis",
      "EDA",
      "K-Means Clustering",
      "Regression Analysis",
      "Random Forest",
      "A/B Testing",
    ],
  },
  {
    title: "Spatial & Systems",
    icon: MapIcon,
    items: ["QGIS", "WebGIS", "Spatial Analysis", "System Analysis"],
  },
];

const marqueeRow1 = [
  "Python",
  "SQL",
  "Power BI",
  "Microsoft Excel",
  "Google Data Studio",
  "EDA",
  "Regression Analysis",
  "Data Cleaning",
  "Random Forest",
];

const marqueeRow2 = [
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "QGIS",
  "WebGIS",
  "Spatial Analysis",
  "K-Means Clustering",
  "A/B Testing",
  "System Analysis",
];

const sectionIds = [
  "home",
  "about",
  "experience",
  "certificates",
  "projects",
  "case-studies",
  "gallery",
  "skills",
  "contact",
];

type PortfolioDocument = {
  label: string;
  title: string;
  file: string;
  type: "PDF" | "Image";
};

type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  status?: "Completed";
  icon: LucideIcon;
  accent: string;
  impact: string[];
  tags: string[];
  documents?: PortfolioDocument[];
};

type CertCategory =
  | "Applied Analytics"
  | "Analytics & BI"
  | "Data Science & ML"
  | "Business & Systems";

type CertificateLevel =
  | "Featured"
  | "Professional"
  | "Specialized"
  | "Foundation";

type CertificateItem = {
  title: string;
  issuer: string;
  period: string;
  credential: string;
  category: CertCategory;
  level: CertificateLevel;
  summary: string;
  highlights: string[];
  skills: string[];
  file: string;
  fileLabel: "PDF" | "Image";
  supportingFile?: string;
  supportingFileLabel?: string;
  thumbnail: string;
  accent: string;
};

function useScrollSpy() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

type ThemeMode = "dark" | "pink";

function useTheme(): [ThemeMode, (m: ThemeMode) => void] {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  useEffect(() => {
    const saved =
      (localStorage.getItem("hero-theme") as ThemeMode | null) ?? "dark";
    setThemeState(saved);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-pink", theme === "pink");
  }, [theme]);
  const setTheme = (m: ThemeMode) => {
    setThemeState(m);
    localStorage.setItem("hero-theme", m);
  };
  return [theme, setTheme];
}

function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: ThemeMode;
  setTheme: (m: ThemeMode) => void;
}) {
  const isPink = theme === "pink";
  return (
    <button
      onClick={() => setTheme(isPink ? "dark" : "pink")}
      aria-label={`Switch to ${isPink ? "dark" : "pink"} mode`}
      className="relative inline-flex h-8 items-center gap-1.5 rounded-full glass px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
      title={isPink ? "Switch to dark mode" : "Switch to pink mode"}
    >
      {isPink ? (
        <Heart className="h-3.5 w-3.5 text-magenta" />
      ) : (
        <Moon className="h-3.5 w-3.5 text-cyan" />
      )}
      <span className="hidden sm:inline">{isPink ? "Pink" : "Dark"}</span>
    </button>
  );
}

function Nav({
  theme,
  setTheme,
}: {
  theme: ThemeMode;
  setTheme: (m: ThemeMode) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Credentials" },
    { id: "projects", label: "Projects" },
    { id: "case-studies", label: "Case Studies" },
    { id: "gallery", label: "Gallery" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "glass"}`}
        >
          <a
            href="#home"
            className="flex items-center gap-2 font-display font-semibold"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gradient-aurora)] text-[color:var(--primary-foreground)]">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>
              Jihan<span className="text-aurora">.</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {l.label}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <a
              href="#contact"
              className="hidden rounded-full bg-[var(--gradient-aurora)] px-4 py-1.5 text-sm font-medium text-white shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-[1.03] sm:inline-flex [.theme-pink_&]:text-neutral-950"
            >
              Hire me
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 rounded-2xl glass-strong p-4 shadow-[var(--shadow-elevated)] md:hidden"
        >
          <div className="grid gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === l.id
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[var(--gradient-aurora)] px-4 py-3 text-center text-sm font-semibold text-white [.theme-pink_&]:text-neutral-950"
            >
              Hire me
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero({ theme }: { theme: ThemeMode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0"
      >
        <Hero3D theme={theme} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Data Analyst · Business Analyst · People Analytics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-7xl md:text-8xl"
        >
          <span className="block">Jihan Nabilah</span>
          <span className="block text-aurora">Rahman</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Mahasiswa Sistem Informasi yang mengubah data kompleks jadi keputusan
          bisnis cerdas — lewat
          <span className="text-foreground"> Data Analytics</span>,
          <span className="text-foreground"> Business Intelligence</span>, dan
          <span className="text-foreground"> UI/UX Thinking</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow-cyan)] [.theme-pink_&]:text-neutral-950 transition-transform hover:scale-105"
          >
            View Projects{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            About Me
          </a>
          <a
            href="/CV_Jihan_Nabilah_Rahman.pdf"
            target="_blank"
            rel="noreferrer"
            download="CV_Jihan_Nabilah_Rahman.pdf"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            <FileText className="h-4 w-4" /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4 text-muted-foreground"
        >
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <span className="h-px w-8 bg-border" />
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <span className="h-px w-8 bg-border" />
          <a
            href={contactLinks.email}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl glass-strong p-5 text-left transition-all hover:-translate-y-1 hover:bg-white/[0.09]"
            >
              <div className={`font-display text-3xl font-bold ${s.color}`}>
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--gradient-aurora)] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-cyan" /> {eyebrow}
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h2>
        {desc && <p className="mt-4 max-w-2xl text-muted-foreground">{desc}</p>}
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About Me"
          title="Hi, I'm Jihan — Aspiring Data & Business Analyst"
        />
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="rounded-3xl glass-strong p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Jakarta, Indonesia
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/90">
                Saya mahasiswa semester 6{" "}
                <span className="text-aurora font-semibold">
                  Sistem Informasi
                </span>{" "}
                di Universitas Bakrie, dengan minat kuat pada analisis data dan
                menerjemahkan insight menjadi strategi bisnis yang berdampak.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Saya telah menyelesaikan program{" "}
                <span className="text-foreground">Junior Data Analyst</span> di
                PT Vinix Seven Aurum melalui MSIB Mandiri Batch 4, dengan fokus
                pada data collection, cleaning, validation, EDA, regression,
                clustering, sentiment analysis, serta pengembangan dashboard
                interaktif. Saya juga memiliki pengalaman mengajar sebagai{" "}
                <span className="text-foreground">Teaching Assistant</span> dan
                pengalaman organisasi melalui IEEE Student Branch Universitas
                Bakrie serta Karang Taruna Cikoko.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Data Analysis",
                  "Business Intelligence",
                  "People Analytics",
                  "UI/UX Thinking",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:col-span-2">
            <Reveal delay={0.1}>
              <div className="rounded-3xl glass p-6">
                <GraduationCap className="h-6 w-6 text-cyan" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Education
                </div>
                <div className="mt-1 font-display text-xl font-semibold">
                  Universitas Bakrie
                </div>
                <div className="text-sm text-muted-foreground">
                  S1 — Sistem Informasi
                </div>
                <div className="mt-3 text-sm text-foreground/80">
                  Focus: Data Analysis & Business Intelligence
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs text-cyan">
                  High Distinction · GPA 3.72
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl glass p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-magenta/20 blur-3xl" />
                <Briefcase className="h-6 w-6 text-magenta" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Available · Open for
                </div>
                <div className="mt-1 font-display text-xl font-semibold">
                  Data Analyst & Business Analyst Roles
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-magenta"
                >
                  Let's collaborate <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const encodeAssetPath = (file: string) => encodeURI(file);

function DocumentViewer({
  document,
  onClose,
}: {
  document: PortfolioDocument | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={Boolean(document)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="h-[90vh] max-w-6xl overflow-hidden border-[var(--border-glass-strong)] bg-[var(--surface-modal)] p-0 backdrop-blur-2xl [&>button]:hidden"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        {document && (
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border/60 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Document Preview
                </div>
                <h3 className="mt-1 truncate font-display text-lg font-semibold sm:text-xl">
                  {document.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass transition-transform hover:scale-105 hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="min-h-0 flex-1 bg-black/20 p-3 sm:p-5">
              {document.type === "Image" ? (
                <img
                  src={encodeAssetPath(document.file)}
                  alt={document.title}
                  className="h-full w-full rounded-2xl object-contain"
                />
              ) : (
                <iframe
                  title={document.title}
                  src={`${encodeAssetPath(document.file)}#toolbar=0&navpanes=0&view=FitH`}
                  className="h-full w-full rounded-2xl border-0 bg-white"
                />
              )}
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-border/60 px-5 py-3 sm:px-6">
              <a
                href={encodeAssetPath(document.file)}
                download
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105 [.theme-pink_&]:text-neutral-950"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function CertificateThumbnail({ certificate }: { certificate: CertificateItem }) {
  if (certificate.fileLabel === "Image") {
    return (
      <img
        src={encodeAssetPath(certificate.file)}
        alt={`Preview of ${certificate.title} certificate`}
        loading="lazy"
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className={`relative h-full overflow-hidden bg-gradient-to-br ${certificate.accent}`}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <object
        data={`${encodeAssetPath(certificate.file)}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        type="application/pdf"
        aria-label={`Preview of ${certificate.title} certificate`}
        className="relative h-full w-full bg-white pointer-events-none"
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl glass-strong">
              <Award className="h-7 w-7 text-magenta" />
            </div>
            <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
              Certificate
            </div>
          </div>
        </div>
      </object>
    </div>
  );
}

function Experience() {
  const [selectedDocument, setSelectedDocument] = useState<PortfolioDocument | null>(null);

  return (
    <>
      <section id="experience" className="relative px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Experience & Leadership"
            title="Building impact through data & people"
            desc="From data analytics internships to academic teaching and HR analytics leadership — a track record of turning structured thinking into measurable results."
          />

          <div className="relative">
            <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-cyan/50 via-magenta/35 to-transparent md:block" />

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <Reveal key={experience.role} delay={index * 0.05}>
                  <div className="group relative md:pl-20">
                    <div className="absolute left-5 top-9 z-10 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-2xl border border-cyan/30 bg-background/90 shadow-[0_0_24px_-8px_oklch(0.85_0.16_200/0.65)] backdrop-blur-xl md:flex">
                      <experience.icon className="h-5 w-5 text-cyan" />
                    </div>
                    <div className="absolute left-5 top-[3.55rem] hidden h-px w-11 bg-gradient-to-r from-cyan/40 to-transparent md:block" />

                    <div className="relative overflow-hidden rounded-3xl glass-strong p-8 transition-all hover:-translate-y-1 hover:border-white/20">
                      <div
                        className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${experience.accent} blur-3xl opacity-60`}
                      />

                      <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                        <div className="min-w-0">
                          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            {experience.period}
                          </div>
                          <h3 className="mt-2 font-display text-2xl font-semibold">
                            {experience.role}
                          </h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <span>{experience.org}</span>
                            {experience.location && (
                              <>
                                <span aria-hidden="true">•</span>
                                <span>{experience.location}</span>
                              </>
                            )}
                            {experience.status && (
                              <span className="rounded-full bg-lime/10 px-2.5 py-0.5 text-xs font-medium text-lime">
                                {experience.status}
                              </span>
                            )}
                          </div>
                        </div>
                        <experience.icon className="h-6 w-6 shrink-0 text-foreground/40 md:hidden" />
                      </div>

                      <ul className="relative mt-6 space-y-2">
                        {experience.impact.map((line) => (
                          <li key={line} className="flex gap-3 text-sm text-foreground/80">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                            {line}
                          </li>
                        ))}
                      </ul>

                      <div className="relative mt-5 flex flex-wrap gap-1.5">
                        {experience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {experience.documents && experience.documents.length > 0 && (
                        <div className="relative mt-5 flex flex-wrap gap-2">
                          {experience.documents.map((document) => (
                            <button
                              key={document.file}
                              type="button"
                              onClick={() => setSelectedDocument(document)}
                              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
                            >
                              <Eye className="h-3.5 w-3.5" />
                              {document.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DocumentViewer document={selectedDocument} onClose={() => setSelectedDocument(null)} />
    </>
  );
}

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<PortfolioDocument | null>(null);
  const initialCount = 6;
  const visibleCertificates = showAll ? certifications : certifications.slice(0, initialCount);
  const hasMore = certifications.length > initialCount;

  return (
    <>
      <section id="certificates" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Certifications & Credentials"
            title="Verified learning, simulations & academic contributions"
            desc="Credentials aligned with data analysis, business intelligence, business analysis, and systems analysis. Select View Certificate to preview each document without leaving the portfolio."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCertificates.map((certificate, index) => (
              <Reveal
                key={`${certificate.title}-${certificate.issuer}`}
                delay={Math.min(index * 0.05, 0.25)}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl glass-strong transition-all hover:-translate-y-1 hover:border-cyan/30">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-white/[0.03]">
                    <CertificateThumbnail certificate={certificate} />
                    <div className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-xs font-medium">
                      <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-lime" />
                      <span className="truncate">{certificate.issuer}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                      <span>{certificate.period}</span>
                      <span className="rounded-full bg-lime/10 px-2.5 py-1 normal-case tracking-normal text-lime">
                        {certificate.credential}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                      {certificate.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {certificate.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {certificate.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedDocument({
                            label: "View Certificate",
                            title: certificate.title,
                            file: certificate.file,
                            type: certificate.fileLabel,
                          })
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105 [.theme-pink_&]:text-neutral-950"
                      >
                        <Eye className="h-3.5 w-3.5" /> View Certificate
                      </button>

                      <a
                        href={encodeAssetPath(certificate.file)}
                        download
                        className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
                      >
                        <Download className="h-3.5 w-3.5" /> Download
                      </a>

                      {certificate.supportingFile && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedDocument({
                              label: certificate.supportingFileLabel ?? "Supporting File",
                              title: `${certificate.title} - ${certificate.supportingFileLabel ?? "Supporting File"}`,
                              file: certificate.supportingFile!,
                              type: "PDF",
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          {certificate.supportingFileLabel ?? "Supporting File"}
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <Reveal>
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {showAll ? "Show Less" : `See All Certificates (${certifications.length})`}
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <DocumentViewer document={selectedDocument} onClose={() => setSelectedDocument(null)} />
    </>
  );
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const highlight = p.highlight;

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl glass-strong transition-all hover:-translate-y-2 hover:border-cyan/30 hover:shadow-[0_0_40px_-8px_oklch(0.85_0.16_200/0.35)]">
      <button onClick={onOpen} className="block w-full text-left">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs">
            <p.icon className="h-3 w-3 text-cyan" /> {p.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-aurora">
            {p.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {p.desc}
          </p>
          {highlight && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
              <TrendingUp className="h-3.5 w-3.5" />
              {highlight}
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="flex flex-wrap items-center gap-2 px-6 pb-6">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:bg-white/10"
        >
          <Eye className="h-3 w-3" /> Case Study
        </button>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-aurora)] px-3 py-1.5 text-xs font-semibold text-white shadow-[var(--shadow-glow-cyan)] [.theme-pink_&]:text-neutral-950 transition-transform hover:scale-105"
          >
            {p.linkLabel ?? "Live Demo"} <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;

  const featured = projects.find((p) => p.featured) ?? projects[0];

  if (!featured) return null;

  const featuredHighlight = featured.highlight;
  const rest = projects.filter((p) => p.slug !== featured.slug);
  const visible = showAll ? rest : rest.slice(0, INITIAL_COUNT);
  const hasMore = rest.length > INITIAL_COUNT;

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Best project & analytical showcase"
          desc="Highlight project terbaik dan selected work lintas data analysis, business intelligence, GIS, dan digital product."
        />

        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl glass-strong transition-all hover:border-cyan/30 hover:shadow-[0_0_50px_-10px_oklch(0.85_0.16_200/0.4)]">
            <div className="grid md:grid-cols-2">
              <button
                type="button"
                onClick={() => onOpen(featured)}
                className="relative block aspect-[16/11] overflow-hidden text-left md:aspect-auto"
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/0 to-background/0" />
              </button>
              <div className="relative p-8 md:p-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                  <Sparkles className="h-3 w-3" /> Best Project · Featured Case
                  Study
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  {featured.title}
                </h3>
                <div className="mt-1 text-sm text-muted-foreground">
                  {featured.category}
                </div>
                <p className="mt-4 text-foreground/80">{featured.desc}</p>
                {featuredHighlight && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1.5 text-sm font-semibold text-lime">
                    <TrendingUp className="h-4 w-4" />
                    {featuredHighlight}
                  </div>
                )}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    {
                      k: "01",
                      t: "Spatial Data",
                      d: "Peta, statistik, dan ringkasan wilayah.",
                    },
                    {
                      k: "02",
                      t: "Business Insight",
                      d: "Pembacaan kondisi wilayah lebih cepat.",
                    },
                    {
                      k: "03",
                      t: "Decision Support",
                      d: "Informasi terstruktur & interaktif.",
                    },
                  ].map((c) => (
                    <div key={c.k} className="rounded-xl bg-white/5 p-3">
                      <div className="font-mono text-xs text-cyan">{c.k}</div>
                      <div className="mt-1 text-sm font-semibold">{c.t}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {c.d}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => onOpen(featured)}
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    <Eye className="h-4 w-4" /> Open Case Study
                  </button>
                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow-cyan)] [.theme-pink_&]:text-neutral-950 transition-transform hover:scale-105"
                    >
                      {featured.linkLabel ?? "Live Demo"}{" "}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div
          id="project-grid"
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard p={p} onOpen={() => onOpen(p)} />
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              aria-expanded={showAll}
              aria-controls="project-grid"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              {showAll ? "Show Less" : `See All Projects (${rest.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudies({ onOpen }: { onOpen: (p: Project) => void }) {
  const top = useMemo(() => {
    const priorities = [
      "webgis-yogyakarta",
      "barangbareng",
      "gofood-marketing",
      "global-superstore",
      "ecommerce-sales",
      "hr-analytics",
    ];

    const selected = priorities
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter((project): project is Project => Boolean(project));

    if (selected.length === priorities.length) return selected;

    const selectedSlugs = new Set(selected.map((project) => project.slug));
    const fallback = projects.filter(
      (project) => !selectedSlugs.has(project.slug),
    );

    return [...selected, ...fallback].slice(0, 6);
  }, []);

  return (
    <section id="case-studies" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Case Studies"
          title="Data-driven & business-oriented deep dives"
          desc="Setiap studi kasus disusun dengan kerangka Business Problem → Objective → Data → Approach → Insight → Recommendation → Impact."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {top.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => onOpen(p)}
                className="group block h-full w-full rounded-3xl glass-strong p-6 text-left transition-all hover:-translate-y-1 hover:border-magenta/30 hover:shadow-[0_0_40px_-8px_oklch(0.72_0.26_330/0.35)]"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <p.icon className="h-3.5 w-3.5 text-magenta" /> {p.category}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold transition-colors group-hover:text-aurora">
                  {p.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-magenta/80">
                      Problem
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-foreground/80">
                      {p.caseStudy.problem}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan/80">
                      Insight
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-foreground/80">
                      {p.caseStudy.insight}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-lime/80">
                      Impact
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-foreground/80">
                      {p.caseStudy.impact}
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-foreground/80 transition-colors group-hover:text-cyan">
                  Read full case study <ArrowUpRight className="h-3 w-3" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <section id="gallery" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Visual Archive"
          title="Dashboards & systems gallery"
          desc="Galeri ringkas dari dashboard, layout spasial, dan visual BI."
        />
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.05}>
              <button
                onClick={() => onOpen(src)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl glass transition-all hover:border-cyan/30 hover:shadow-[0_0_30px_-8px_oklch(0.85_0.16_200/0.35)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt="Gallery item"
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max gap-10 whitespace-nowrap font-display text-2xl font-semibold text-foreground/30 sm:text-3xl"
        style={{
          animation: `marquee ${reverse ? "50s" : "40s"} linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {[...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            {s}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Stack, tools & analytical methods"
          desc="Pandangan menyeluruh dari bahasa teknis, platform analitik, hingga metode kerja berorientasi bisnis."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl glass-strong p-6 transition-all hover:-translate-y-1 hover:border-cyan/30">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-aurora)] text-[color:var(--primary-foreground)]">
                  <g.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">
                  {g.title}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-20 space-y-4 border-y border-border/60 py-8">
        <MarqueeRow items={marqueeRow1} />
        <MarqueeRow items={marqueeRow2} reverse />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-10 sm:p-16">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-magenta/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-lime" /> Let's connect
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">
                Got a data problem? <br />
                <span className="text-aurora">Let's solve it together.</span>
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Saya terbuka untuk peluang sebagai Data Analyst, Business
                Analyst, atau People Analytics. Ayo ngobrol soal projek, magang,
                atau kolaborasi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/CV_Jihan_Nabilah_Rahman.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download="CV_Jihan_Nabilah_Rahman.pdf"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105 [.theme-pink_&]:text-neutral-950"
                >
                  <FileText className="h-4 w-4" /> Download CV
                </a>
                <a
                  href={contactLinks.email}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow-magenta)] [.theme-pink_&]:text-neutral-950 transition-transform hover:scale-105"
                >
                  <Mail className="h-4 w-4" /> Send an email{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} Jihan Nabilah Rahman — Built with
            curiosity & data.
          </div>
          <div className="font-mono">v3.0 · Crafted in Jakarta</div>
        </footer>
      </div>
    </section>
  );
}

function Index() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [theme, setTheme] = useTheme();

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Experience />
      <Certifications />
      <Projects onOpen={setOpenProject} />
      <CaseStudies onOpen={setOpenProject} />
      <Gallery onOpen={setLightboxSrc} />
      <Skills />
      <Contact />

      <ProjectModal
        project={openProject}
        open={!!openProject}
        onClose={() => setOpenProject(null)}
      />
      <Lightbox
        src={lightboxSrc}
        open={!!lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </main>
  );
}
