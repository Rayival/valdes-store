export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } mb-12 md:mb-16`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightBlue border border-blue-200/80 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}