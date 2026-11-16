import {
  Users,
  Sliders,
  Smartphone,
  MessageSquareText,
  Eye,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const icons = [
    Users,
    Sliders,
    Smartphone,
    MessageSquareText,
    Eye,
    TrendingUp,
  ];

  return (
    <section
      id="why-us"
      className="py-20 md:py-24 bg-brand-lightBlue/60 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.whyUs.eyebrow}
          title={t.whyUs.title}
          subtitle={t.whyUs.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((item, idx) => {
            const Icon = icons[idx] || Users;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}