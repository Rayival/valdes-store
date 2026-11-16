import { useState, useEffect } from "react";
import {
  MessageCircle,
  Mail,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { siteConfig } from "../../data/siteConfig";
import { servicesData } from "../../data/services";
import {
  buildInquiryMessage,
  buildWhatsAppUrl,
  buildMailtoUrl,
} from "../../utils/whatsappHelper";
import SectionHeader from "../ui/SectionHeader";

export default function ContactSection({ preselectedService }) {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [generatedPreview, setGeneratedPreview] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  }, [preselectedService]);

  const validate = () => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      nextErrors.name = t.contact.form.validation.nameRequired;
    }
    if (!formData.email.trim()) {
      nextErrors.email = t.contact.form.validation.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = t.contact.form.validation.emailInvalid;
    }
    if (!formData.service) {
      nextErrors.service = t.contact.form.validation.serviceRequired;
    }
    if (!formData.description.trim()) {
      nextErrors.description = t.contact.form.validation.descRequired;
    } else if (formData.description.trim().length < 15) {
      nextErrors.description = t.contact.form.validation.descMin;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePrepareWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildInquiryMessage(formData, lang);
    const waUrl = buildWhatsAppUrl(message);
    setGeneratedPreview({ message, waUrl });
  };

  const handleSendEmail = () => {
    if (!validate()) return;
    const mailtoUrl = buildMailtoUrl(formData, lang);
    window.location.href = mailtoUrl;
  };

  const hasValidWa = !siteConfig.contact.whatsappNumber.includes("[");
  const hasValidEmail = !siteConfig.contact.email.includes("[");

  const directWaUrl = buildWhatsAppUrl(
    lang === "id"
      ? "Halo Valdes Store, saya ingin mendiskusikan proyek digital."
      : "Hello Valdes Store, I would like to discuss a digital project."
  );

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-heading text-lg font-bold text-brand-navy">
              {t.contact.channelsTitle}
            </h3>

            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-brand-softBg border border-brand-border hover:border-blue-300 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border text-brand-blue flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-base text-brand-navy group-hover:text-brand-blue transition-colors">
                    {t.contact.whatsappLabel}
                  </span>
                  <ExternalLink className="w-4 h-4 text-brand-slate" />
                </div>
                <p className="text-xs sm:text-sm text-brand-slate mt-1">
                  {t.contact.whatsappNote}
                </p>
                <p className="text-xs font-semibold text-brand-blue mt-2">
                  {hasValidWa
                    ? siteConfig.contact.whatsappNumber
                    : "[WHATSAPP_NUMBER_PLACEHOLDER]"}
                </p>
              </div>
            </a>

            <a
              href={
                hasValidEmail
                  ? `mailto:${siteConfig.contact.email}`
                  : "#contact-form"
              }
              className="flex items-start gap-4 p-5 rounded-2xl bg-brand-softBg border border-brand-border hover:border-blue-300 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border text-brand-blue flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-base text-brand-navy group-hover:text-brand-blue transition-colors">
                    {t.contact.emailLabel}
                  </span>
                  <ExternalLink className="w-4 h-4 text-brand-slate" />
                </div>
                <p className="text-xs sm:text-sm text-brand-slate mt-1">
                  {t.contact.emailNote}
                </p>
                <p className="text-xs font-semibold text-brand-blue mt-2 break-all">
                  {hasValidEmail
                    ? siteConfig.contact.email
                    : "[EMAIL_PLACEHOLDER]"}
                </p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-7">
            <form
              id="contact-form"
              onSubmit={handlePrepareWhatsApp}
              noValidate
              className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-navy mb-1.5"
                  >
                    {t.contact.form.nameLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                      errors.name ? "border-red-400 bg-red-50/30" : "border-brand-border"
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="error-name"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-navy mb-1.5"
                  >
                    {t.contact.form.emailLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                      errors.email ? "border-red-400 bg-red-50/30" : "border-brand-border"
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="error-email"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-brand-navy mb-1.5"
                  >
                    {t.contact.form.orgLabel}
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder={t.contact.form.orgPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-brand-navy mb-1.5"
                  >
                    {t.contact.form.serviceLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "error-service" : undefined}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                      errors.service
                        ? "border-red-400 bg-red-50/30"
                        : "border-brand-border"
                    }`}
                  >
                    <option value="">{t.contact.form.servicePlaceholder}</option>
                    {servicesData.map((srv) => (
                      <option key={srv.id} value={srv.title[lang]}>
                        {srv.title[lang]}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p
                      id="error-service"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-brand-navy mb-1.5"
                >
                  {t.contact.form.descLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder={t.contact.form.descPlaceholder}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={
                    errors.description ? "error-description" : undefined
                  }
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.description
                      ? "border-red-400 bg-red-50/30"
                      : "border-brand-border"
                  }`}
                />
                {errors.description && (
                  <p
                    id="error-description"
                    className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.description}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.form.submitWhatsApp}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-softBg text-brand-navy border border-brand-border hover:border-slate-300 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <span>{t.contact.form.submitEmail}</span>
                </button>
              </div>

              <p className="text-xs text-brand-slate leading-relaxed">
                {t.contact.form.disclaimer}
              </p>

              {generatedPreview && (
                <div className="mt-4 p-4 rounded-xl bg-brand-lightBlue border border-blue-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t.contact.form.previewTitle}</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-xs text-brand-navy bg-white p-3.5 rounded-lg border border-blue-100 leading-relaxed">
                    {generatedPreview.message}
                  </pre>
                  <a
                    href={generatedPreview.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.form.confirmSendWa}</span>
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}