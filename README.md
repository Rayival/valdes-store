VALDES STORE — DIGITAL STUDIO WEBSITE
Tagline: Think • Build • Impact
Domain: https://valdesstore.com

====================================================================
1. DESKRIPSI PROYEK
====================================================================
Website profil perusahaan resmi untuk Valdes Store — Digital Studio yang dirancang sebagai platform akuisisi klien, menampilkan layanan digital, kapabilitas teknologi, portofolio proyek, alur kerja, serta sistem konsultasi langsung via WhatsApp dan Email dengan dukungan dwibahasa penuh (Bahasa Indonesia & Bahasa Inggris).

====================================================================
2. TECH STACK
====================================================================
- Framework: React.js (Vite, JavaScript murni tanpa TypeScript)
- Styling: Tailwind CSS v3.4+
- Routing: React Router DOM (/ , /id , /en)
- Ikon: Lucide React
- Tipografi: Plus Jakarta Sans (Heading) & Inter (Body/UI)

====================================================================
3. FITUR YANG TELAH DIIMPLEMENTASIKAN
====================================================================
1. Navigasi Sticky & Responsif (Menu Desktop, Hamburger Mobile, Active Section Indicator, CTA)
2. Sistem Bilingual Terpusat (ID default & EN, persistensi via localStorage, dukungan URL /id dan /en)
3. Hero Section dengan Visual Banner Valdes Store & CTA Konversi
4. About Us (Profil Studio, Visi, Misi, Filosofi Think • Build • Impact, & Kapabilitas Teknologi)
5. Services (4 Kategori Utama: Web Development, UI/UX Design, Digital Solutions, Digital Branding)
6. Featured Portfolio dengan Filter Kategori (All, Website, Application, UI/UX Design) & Label Tipe Proyek yang Transparan
7. Working Process (6 Tahapan Kerja: Discovery, Planning, Design, Development, Testing, Deployment)
8. Why Choose Us (6 Prinsip Kerja Autentik)
9. Contact & Project Inquiry (Validasi Form, Generator Pratinjau Pesan WhatsApp Otomatis, & Alternatif Email)
10. Footer Lengkap & Konfigurasi SEO Dasar (Meta Tags, Open Graph, robots.txt, sitemap.xml)

====================================================================
4. STRUKTUR PROYEK
====================================================================
valdes-store/
├── public/
│   ├── images/
│   │   ├── logo-valdes.jpg
│   │   ├── banner-valdes.png
│   │   └── projects/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/css/index.css
│   ├── components/
│   │   ├── layout/ (Navbar.jsx, Footer.jsx)
│   │   ├── sections/ (HeroSection.jsx, AboutSection.jsx, ServicesSection.jsx, PortfolioSection.jsx, ProcessSection.jsx, WhyChooseUs.jsx, ContactSection.jsx)
│   │   └── ui/ (SectionHeader.jsx, ProjectCard.jsx)
│   ├── context/LanguageContext.jsx
│   ├── data/ (siteConfig.js, translations.js, services.js, projects.js)
│   ├── pages/HomePage.jsx
│   ├── utils/whatsappHelper.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json

====================================================================
5. INSTALASI & PERINTAH PENGEMBANGAN
====================================================================
Instalasi Dependencies:
  npm install

Menjalankan Server Development Lokal:
  npm run dev

Build untuk Produksi:
  npm run build

Preview Hasil Build Produksi:
  npm run preview

====================================================================
6. KONFIGURASI PLACEHOLDER (WAJIB DIISI SEBELUM RILIS)
====================================================================
Buka file src/data/siteConfig.js dan ganti nilai placeholder berikut dengan data resmi Valdes Store:
- whatsappNumber: "[WHATSAPP_NUMBER_PLACEHOLDER]" -> contoh: "6281234567890"
- email: "[EMAIL_PLACEHOLDER]" -> contoh: "hello@valdesstore.com"
- socials URL:
  * Instagram: "[INSTAGRAM_URL_PLACEHOLDER]"
  * TikTok: "[TIKTOK_URL_PLACEHOLDER]"
  * GitHub: "[GITHUB_URL_PLACEHOLDER]"
  * LinkedIn: "[LINKEDIN_URL_PLACEHOLDER]"

====================================================================
7. PANDUAN DEPLOYMENT KE VERCEL
====================================================================
1. Push seluruh kode proyek ke repository GitHub.
2. Login ke dashboard Vercel (https://vercel.com) dan pilih "Add New Project".
3. Import repository valdes-store.
4. Pastikan pengaturan build terdeteksi otomatis:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
5. Tambahkan file vercel.json di root proyek agar routing /id dan /en tidak 404 saat di-refresh:
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
6. Klik Deploy.
7. Setelah deploy berhasil, masuk ke Settings > Domains di Vercel dan hubungkan custom domain valdesstore.com (tambahkan A Record / CNAME sesuai instruksi DNS Vercel) hingga sertifikat SSL HTTPS aktif.