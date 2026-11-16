import { Globe, Layout, Cpu, Sparkles, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { servicesData } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";

const iconMap = {
  Globe,
  Layout,
  Cpu,
  Sparkles,
};

export default function ServicesSection({ onSelectService }) {
  const { lang, t } = useLanguage();

  const handleDiscuss = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-24 bg-white border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const title = service.title[lang];
            const description = service.description[lang];
            const items = service.items[lang];

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-lightBlue border border-blue-200/70 text-brand-blue flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-brand-navy">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-brand-slate leading-relaxed">
                    {description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-brand-border pt-5">
                    {items.map((subItem) => (
                      <li
                        key={subItem}
                        className="flex items-center gap-2.5 text-sm text-slate-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-brand-lightBlue text-brand-blue flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => handleDiscuss(title)}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-softBg hover:bg-brand-blue text-brand-navy hover:text-white border border-brand-border hover:border-brand-blue text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <span>{t.services.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}