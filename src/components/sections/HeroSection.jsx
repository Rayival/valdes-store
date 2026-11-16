import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { siteConfig } from "../../data/siteConfig";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative bg-white pt-12 pb-20 md:pt-20 md:pb-28 border-b border-brand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightBlue border border-blue-200/80 text-brand-blue text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-brand-slate leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-navy border border-brand-border text-sm sm:text-base font-semibold hover:bg-brand-softBg hover:border-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
              >
                <Layers className="w-4 h-4 text-brand-blue" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-brand-slate">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Web Development
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Digital Solutions
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-brand-border bg-brand-softBg p-2.5 sm:p-3.5 shadow-md">
              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-t-xl border-b border-brand-border">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-brand-softBg border border-brand-border text-[11px] font-medium text-brand-slate">
                  valdesstore.com
                </div>
                <span className="w-8" />
              </div>

              <div className="relative bg-white rounded-b-xl overflow-hidden">
                <img
                  src={siteConfig.bannerPath}
                  alt="Valdes Store — Layanan Digital & Teknologi"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-2.5 px-3 py-2 rounded-xl bg-white border border-brand-border flex items-center justify-between text-xs text-brand-slate">
                <span className="font-medium text-brand-navy">
                  Valdes Store — Digital Studio
                </span>
                <span className="text-brand-blue font-semibold">
                  Think • Build • Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}