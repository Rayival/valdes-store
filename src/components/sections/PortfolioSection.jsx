import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projectsData } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: t.portfolio.filters.all },
    { id: "website", label: t.portfolio.filters.website },
    { id: "application", label: t.portfolio.filters.application },
    { id: "uiux", label: t.portfolio.filters.uiux },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-24 bg-brand-softBg border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div
          role="tablist"
          aria-label="Portfolio Categories"
          className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                  isActive
                    ? "bg-brand-blue text-white shadow-sm"
                    : "bg-white text-slate-700 border border-brand-border hover:border-blue-300 hover:text-brand-blue"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-brand-border text-brand-slate text-sm">
            {t.portfolio.emptyState}
          </div>
        )}
      </div>
    </section>
  );
}