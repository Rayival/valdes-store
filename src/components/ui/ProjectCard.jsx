import { ExternalLink, Layers, FolderGit2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectCard({ project }) {
  const { lang, t } = useLanguage();

  const categoryLabels = {
    website: t.portfolio.filters.website,
    application: t.portfolio.filters.application,
    uiux: t.portfolio.filters.uiux,
  };

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
      <div className="relative aspect-[16/10] bg-brand-softBg border-b border-brand-border overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white border border-brand-border text-brand-slate">
                {categoryLabels[project.category] || project.category}
              </span>
            </div>
            <div className="my-auto flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-brand-blue">
                  {project.projectType[lang]}
                </p>
                <p className="font-heading font-bold text-sm text-brand-navy line-clamp-1">
                  {project.title}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-2 rounded bg-blue-200/60" />
              <div className="h-2 rounded bg-slate-200/80" />
              <div className="h-2 rounded bg-slate-200/60" />
            </div>
          </div>
        )}

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-brand-navy border border-brand-border shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-brand-blue" />
            {project.projectType[lang]}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center justify-between gap-2 text-xs text-brand-slate mb-2.5">
          <span className="font-semibold text-brand-blue uppercase tracking-wide">
            {categoryLabels[project.category] || project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-softBg border border-brand-border text-slate-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            {project.status[lang]}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm text-brand-slate leading-relaxed flex-1">
          {project.description[lang]}
        </p>

        <div className="mt-5 pt-4 border-t border-brand-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-brand-softBg text-slate-700 border border-brand-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.portfolio.viewProject} — ${project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-blue-700 transition-colors shrink-0"
            >
              <span>{t.portfolio.viewProject}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}