import type { Lang } from "./i18n";

type NavKey =
  | "home"
  | "about"
  | "visionMission"
  | "services"
  | "milestones"
  | "partnersCompliance"
  | "contact";

export type SiteCopy = {
  companyName: string;
  tagline: string;
  heroHeadline: string;
  heroCtaAbout: string;
  heroCtaContact: string;

  nav: Record<NavKey, string>;

  home: {
    focusTitle: string;
    focusItems: string[];
    highlightsTitle: string;
    highlights: { title: string; description: string }[];
  };

  about: {
    title: string;
    description: string;
    visionTitle: string;
    missionTitle: string;
  };

  visionMission: {
    title: string;
    visionTitle: string;
    vision: string[];
    missionTitle: string;
    mission: string[];
  };

  services: {
    title: string;
    items: string[];
  };

  milestones: {
    title: string;
    items: { year: string; text: string }[];
  };

  partnersCompliance: {
    title: string;
    subtitle: string;
    items: { name: string; note: string }[];
  };

  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };

  footerStatement: string;
};

const ID: SiteCopy = {
  companyName: "PT Brilliand Makmur Perkasa (BMP)",
  tagline: "Pilar Ekonomi Bangsa",
  heroHeadline: "Kemitraan Strategis untuk Kemandirian Usaha",
  heroCtaAbout: "Tentang Kami",
  heroCtaContact: "Hubungi Kami",
  nav: {
    home: "Beranda",
    about: "Tentang",
    visionMission: "Visi & Misi",
    services: "Layanan",
    milestones: "Tonggak",
    partnersCompliance: "Mitra & Kepatuhan",
    contact: "Kontak",
  },
  home: {
    focusTitle: "Fokus Bisnis",
    focusItems: [
      "Pengembangan UMKM",
      "Pembangunan pabrik kemasan industri",
      "Rantai pasok makanan & minuman",
      "Kemitraan strategis",
    ],
    highlightsTitle: "Komitmen Kami",
    highlights: [
      {
        title: "Tata Kelola dan Kepatuhan",
        description:
          "Menjaga integritas dan kepatuhan untuk membangun kepercayaan pemerintah, B2B, mitra UMKM, dan investor.",
      },
      {
        title: "Eksekusi Terukur",
        description:
          "Pendampingan, pengelolaan, dan pencapaian target usaha UMKM berbasis rencana kerja yang jelas.",
      },
      {
        title: "Kemitraan Jangka Panjang",
        description:
          "Kolaborasi lintas sektor untuk memperkuat ekosistem produksi, distribusi, dan pemasaran.",
      },
    ],
  },
  about: {
    title: "Tentang Perusahaan",
    description:
      "PT Brilliand Makmur Perkasa bergerak dalam pengembangan produk dan pembangunan mitra UMKM profesional sejak tahun 2023, berfokus pada pembinaan, pengelolaan, dan pencapaian target usaha UMKM.",
    visionTitle: "Visi",
    missionTitle: "Misi",
  },
  visionMission: {
    title: "Visi & Misi",
    visionTitle: "Visi",
    vision: [
      "Menjadi platform terdepan dalam transformasi UMKM agar mampu bersaing di pasar global",
      "Mewujudkan ekosistem UMKM yang tangguh, inovatif, dan mandiri",
    ],
    missionTitle: "Misi",
    mission: [
      "Pemberdayaan dan pengembangan kapasitas UMKM",
      "Digitalisasi dan adopsi teknologi",
      "Akses permodalan dan pasar",
      "Pembangunan komunitas dan kemitraan strategis",
    ],
  },
  services: {
    title: "Layanan Kami",
    items: [
      "Pembangunan pabrik kemasan minyak goreng",
      "Pembangunan pabrik air minum dalam kemasan (AMDK)",
      "Pembangunan pabrik kemasan gula pasir",
      "Pembangunan pabrik kemasan beras",
      "Pembangunan pabrik kemasan tepung",
    ],
  },
  milestones: {
    title: "Tonggak Sejarah",
    items: [
      { year: "2023", text: "Awal pendirian dan fokus pembinaan UMKM" },
      {
        year: "2024",
        text: "Support & planning UMKM bersama Kementerian UMKM dan sektor pangan",
      },
      {
        year: "2025",
        text: "Pengembangan produksi, pabrik kemasan, dan pemasaran produk UMKM",
      },
    ],
  },
  partnersCompliance: {
    title: "Mitra & Kepatuhan",
    subtitle:
      "Kolaborasi dan komitmen kepatuhan untuk memastikan standar dan kepercayaan di setiap kemitraan.",
    items: [
      { name: "Kementerian UMKM", note: "Kemitraan program & pembinaan" },
      { name: "BULOG", note: "Dukungan rantai pasok pangan" },
      { name: "BPOM", note: "Kepatuhan regulasi" },
      { name: "Halal Indonesia", note: "Standar halal" },
      { name: "SNI", note: "Standarisasi produk" },
    ],
  },
  contact: {
    title: "Hubungi Kami",
    subtitle:
      "Untuk kemitraan, informasi program, atau peluang investasi, silakan hubungi tim kami.",
    emailLabel: "Email",
    phoneLabel: "Telepon/WhatsApp",
    socialLabel: "Media Sosial",
    formTitle: "Kirim Pesan",
    formName: "Nama",
    formEmail: "Email",
    formMessage: "Pesan",
    formSubmit: "Kirim",
    formSuccess:
      "Terima kasih. Pesan Anda sudah tercatat (form ini hanya simulasi frontend).",
  },
  footerStatement: "PT Brilliand Makmur Perkasa – Pilar Ekonomi Bangsa",
};

const EN: SiteCopy = {
  companyName: "PT Brilliand Makmur Perkasa (BMP)",
  tagline: "A Pillar of the Nation’s Economy",
  heroHeadline: "Strategic Partnerships for Business Self-Reliance",
  heroCtaAbout: "About Us",
  heroCtaContact: "Contact Us",
  nav: {
    home: "Home",
    about: "About",
    visionMission: "Vision",
    services: "Services",
    milestones: "Milestones",
    partnersCompliance: "Partners",
    contact: "Contact",
  },
  home: {
    focusTitle: "Business Focus",
    focusItems: [
      "UMKM (MSME) development",
      "Industrial packaging plant development",
      "Food & beverage supply chain",
      "Strategic partnerships",
    ],
    highlightsTitle: "Our Commitment",
    highlights: [
      {
        title: "Governance and Compliance",
        description:
          "Upholding integrity and compliance to build trust with government, B2B, UMKM partners, and investors.",
      },
      {
        title: "Measured Execution",
        description:
          "Structured mentoring, management, and achievement of MSME business targets with clear work plans.",
      },
      {
        title: "Long-Term Partnerships",
        description:
          "Cross-sector collaboration to strengthen production, distribution, and go-to-market ecosystems.",
      },
    ],
  },
  about: {
    title: "About the Company",
    description:
      "PT Brilliand Makmur Perkasa has been engaged in product development and building professional UMKM partners since 2023, focusing on coaching, management, and achieving UMKM business targets.",
    visionTitle: "Vision",
    missionTitle: "Mission",
  },
  visionMission: {
    title: "Vision & Mission",
    visionTitle: "Vision",
    vision: [
      "To become a leading platform for UMKM transformation to compete in global markets",
      "To realize a resilient, innovative, and independent UMKM ecosystem",
    ],
    missionTitle: "Mission",
    mission: [
      "Empowerment and capacity development for UMKM",
      "Digitalization and technology adoption",
      "Access to capital and markets",
      "Community development and strategic partnerships",
    ],
  },
  services: {
    title: "Our Services",
    items: [
      "Cooking oil packaging plant development",
      "Bottled water (AMDK) packaging plant development",
      "Granulated sugar packaging plant development",
      "Rice packaging plant development",
      "Flour packaging plant development",
    ],
  },
  milestones: {
    title: "Milestones",
    items: [
      {
        year: "2023",
        text: "Company established with focus on UMKM coaching and development",
      },
      {
        year: "2024",
        text: "UMKM support and planning with the Ministry of UMKM and the food sector",
      },
      {
        year: "2025",
        text: "Production development, packaging plants, and UMKM product marketing expansion",
      },
    ],
  },
  partnersCompliance: {
    title: "Partners & Compliance",
    subtitle:
      "Collaboration and compliance commitments to ensure standards and trust in every partnership.",
    items: [
      { name: "Ministry of UMKM", note: "Program partnership & coaching" },
      { name: "BULOG", note: "Food supply chain support" },
      { name: "BPOM", note: "Regulatory compliance" },
      { name: "Halal Indonesia", note: "Halal standards" },
      { name: "SNI", note: "Product standardization" },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "For partnerships, program information, or investment opportunities, please contact our team.",
    emailLabel: "Email",
    phoneLabel: "Phone/WhatsApp",
    socialLabel: "Social Media",
    formTitle: "Send a Message",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send",
    formSuccess:
      "Thank you. Your message has been recorded (this is a frontend-only form simulation).",
  },
  footerStatement: "PT Brilliand Makmur Perkasa – A Pillar of the Nation’s Economy",
};

export function getCopy(lang: Lang): SiteCopy {
  return lang === "en" ? EN : ID;
}
