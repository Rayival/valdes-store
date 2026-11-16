import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import HomePage from "./pages/HomePage";

function RouteLanguageSync({ forcedLang }) {
  const { setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (forcedLang) {
      setLang(forcedLang);
    }
  }, [forcedLang, location.pathname, setLang]);

  return <HomePage />;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/id" element={<RouteLanguageSync forcedLang="id" />} />
          <Route path="/en" element={<RouteLanguageSync forcedLang="en" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}