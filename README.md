# Valdes Store — Digital Studio Website

**Tagline:** Think • Build • Impact  
**Domain:** [https://valdesstore.com](https://valdesstore.com)

Website company profile resmi untuk **Valdes Store — Digital Studio**, dibangun menggunakan React.js (JavaScript murni) dan Tailwind CSS v3 dengan sistem dwibahasa (Indonesia & Inggris), desain korporat minimalis (*White + Blue*), serta alur konversi inquiry proyek terintegrasi.

---

## Teknologi Utama

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS v3.4+
- **Routing:** React Router DOM (`/`, `/id`, `/en`)
- **Ikon:** Lucide React
- **Tipografi:** Plus Jakarta Sans (Heading) & Inter (Body/UI)

---

## Fitur Utama

- **Dwibahasa (ID | EN):** Bahasa Indonesia sebagai default, switcher cepat di Navbar tanpa reload halaman, penyimpanan preferensi di `localStorage`, dan sinkronisasi rute `/id` serta `/en`.
- **9 Section Lengkap:** Navigation Bar, Hero Section (terintegrasi banner Valdes Store), About Us, Services, Featured Portfolio, Working Process, Why Choose Us, Contact / Project Inquiry, dan Footer.
- **Filter Portofolio:** Penyaringan kategori proyek (*Semua Proyek*, *Website*, *Aplikasi*, *Desain UI/UX*) dengan data terpisah dari komponen UI.
- **Form Inquiry & Integrasi WhatsApp:** Validasi input di sisi klien, pemilihan layanan otomatis dari kartu layanan, pratinjau pesan otomatis sebelum dikirim ke WhatsApp, serta opsi kirim via Email.
- **SEO & Aksesibilitas:** Dynamic page title & meta description per bahasa, `robots.txt`, `sitemap.xml` dengan `hreflang`, navigasi keyboard, dan dukungan `prefers-reduced-motion`.

---

## Struktur Proyek

```text
valdes-store/
├── public/
│   ├── images/
│   │   ├── logo-valdes.jpg         # Logo utama (Favicon, Navbar, Footer)
│   │   ├── banner-valdes.png       # Banner visual (Hero Section & OG Image)
│   │   └── projects/               # Thumbnail proyek portofolio
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── index.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── ProcessSection.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       ├── SectionHeader.jsx
│   │       └── ProjectCard.jsx
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── siteConfig.js
│   │   ├── translations.js
│   │   ├── services.js
│   │   └── projects.js
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── utils/
│   │   └── whatsappHelper.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md