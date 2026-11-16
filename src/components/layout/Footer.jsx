import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { siteConfig } from "../../data/siteConfig";
import { servicesData } from "../../data/services";
import { buildWhatsAppUrl } from "../../utils/whatsappHelper";

export default function Footer() {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const hasValidWa = !siteConfig.contact.whatsappNumber.includes("[");
  const hasValidEmail = !siteConfig.contact.email.includes("[");

  const defaultWaLink = buildWhatsAppUrl(
    lang === "id"
      ? "Halo Valdes Store, saya ingin berkonsultasi mengenai layanan digital."
      : "Hello Valdes Store, I would like to inquire about your digital services."
  );

  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={siteConfig.logoPath}
                alt="Valdes Store Logo"
                className="h-11 w-11 rounded-xl object-contain bg-white p-1"
              />
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight block leading-none">
                  Valdes <span className="text-blue-400">Store</span>
                </span>
                <span className="text-xs font-semibold text-brand-cyan tracking-wider uppercase mt-1 block">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.socials.map((social) => {
                const isConfigured = !social.url.includes("[");
                return (
                  <a
                    key={social.name}
                    href={isConfigured ? social.url : "#contact"}
                    target={isConfigured ? "_blank" : undefined}
                    rel={isConfigured ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {srv.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={defaultWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>
                    {hasValidWa
                      ? siteConfig.contact.whatsappNumber
                      : "WhatsApp (Official Contact)"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={
                    hasValidEmail
                      ? `mailto:${siteConfig.contact.email}`
                      : "#contact"
                  }
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>
                    {hasValidEmail
                      ? siteConfig.contact.email
                      : "contact@valdesstore.com"}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. {t.footer.rights}
          </p>
          <p className="font-medium text-slate-500">valdesstore.com</p>
        </div>
      </div>
    </footer>
  );
}