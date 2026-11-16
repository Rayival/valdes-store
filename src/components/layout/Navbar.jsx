import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { siteConfig } from "../../data/siteConfig";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: t.nav.home, href: "#home" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "services", label: t.nav.services, href: "#services" },
    { id: "portfolio", label: t.nav.portfolio, href: "#portfolio" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionIds = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-brand-border shadow-sm"
          : "bg-white border-b border-brand-border/70"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4"
      >
        <a
          href="#home"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
        >
          <img
            src={siteConfig.logoPath}
            alt="Valdes Store Logo"
            className="h-10 w-10 md:h-11 md:w-11 rounded-lg object-contain border border-brand-border bg-white p-0.5"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg md:text-xl text-brand-navy tracking-tight leading-none">
              Valdes <span className="text-brand-blue">Store</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-slate mt-1">
              Digital Studio
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-blue bg-brand-lightBlue font-semibold"
                    : "text-slate-700 hover:text-brand-blue hover:bg-brand-softBg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex items-center rounded-lg border border-brand-border bg-brand-softBg p-1 text-xs font-semibold"
          >
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                lang === "id"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-brand-slate hover:text-brand-navy"
              }`}
            >
              ID
            </button>
            <span className="text-slate-300 px-0.5 select-none">|</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                lang === "en"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-brand-slate hover:text-brand-navy"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div
            role="group"
            aria-label="Mobile Language Switcher"
            className="inline-flex items-center rounded-lg border border-brand-border bg-brand-softBg p-0.5 text-xs font-semibold"
          >
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className={`px-2 py-1 rounded-md ${
                lang === "id"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-brand-slate"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-2 py-1 rounded-md ${
                lang === "en"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-brand-slate"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
            className="p-2 rounded-lg border border-brand-border text-brand-navy hover:bg-brand-softBg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-lightBlue text-brand-blue font-semibold"
                    : "text-slate-700 hover:bg-brand-softBg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}