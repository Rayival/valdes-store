import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("valdes_lang");
    if (saved === "id" || saved === "en") return saved;

    const path = window.location.pathname;
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/id")) return "id";

    const browserLang = navigator.language?.toLowerCase() || "";
    if (browserLang.startsWith("en") && !browserLang.startsWith("id")) {
      return "id";
    }
    return "id";
  });

  useEffect(() => {
    localStorage.setItem("valdes_lang", lang);
    document.documentElement.lang = lang;

    const currentSeo = translations[lang].seo;
    document.title = currentSeo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", currentSeo.description);
    }
  }, [lang]);

  const toggleLanguage = (targetLang) => {
    if (targetLang === "id" || targetLang === "en") {
      setLang(targetLang);
    }
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}