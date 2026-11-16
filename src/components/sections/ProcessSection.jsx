import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="py-20 md:py-24 bg-white border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.process.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-brand-border hover:border-blue-300 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-brand-lightBlue text-brand-blue font-heading font-extrabold text-sm">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-brand-border ml-4" />
              </div>

              <h3 className="font-heading text-lg font-bold text-brand-navy">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}