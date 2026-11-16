import { Compass, Target, Lightbulb, Hammer, Rocket, Code2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { techCapabilities } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";

export default function AboutSection() {
  const { t } = useLanguage();

  const philosophyIcons = [Lightbulb, Hammer, Rocket];

  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-brand-softBg border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.intro}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-brand-navy mb-2">
                {t.about.visionLabel}
              </h3>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                {t.about.vision}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm flex-1">
              <div className="w-11 h-11 rounded-xl bg-brand-lightBlue text-brand-blue flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-brand-navy mb-3">
                {t.about.missionLabel}
              </h3>
              <ul className="space-y-2.5">
                {t.about.missions.map((mission, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-brand-slate leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-navy mb-5">
                {t.about.philosophyLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.about.philosophy.map((item, idx) => {
                  const Icon = philosophyIcons[idx] || Lightbulb;
                  return (
                    <div
                      key={item.key}
                      className="p-4 rounded-xl bg-brand-softBg border border-brand-border"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white border border-brand-border text-brand-blue flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-base text-brand-navy">
                        {item.key}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-brand-slate leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm flex-1">
              <div className="flex items-center gap-2.5 mb-5">
                <Code2 className="w-5 h-5 text-brand-blue" />
                <h3 className="font-heading text-lg font-bold text-brand-navy">
                  {t.about.techStackLabel}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-slate mb-2">
                    {t.about.techCategories.frontend}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {techCapabilities.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-brand-lightBlue text-brand-blue border border-blue-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-slate mb-2">
                      {t.about.techCategories.backend}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {techCapabilities.backend.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-brand-softBg text-slate-700 border border-brand-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-slate mb-2">
                      {t.about.techCategories.design} &{" "}
                      {t.about.techCategories.other}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[...techCapabilities.design, ...techCapabilities.other].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-brand-softBg text-slate-700 border border-brand-border"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}