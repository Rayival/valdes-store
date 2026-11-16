import { siteConfig } from "../data/siteConfig";

export function buildInquiryMessage({ name, email, organization, service, description }, lang = "id") {
  const orgText = organization?.trim() ? organization.trim() : "-";

  if (lang === "en") {
    return [
      "Hello Valdes Store,",
      "",
      "I would like to discuss a digital project inquiry:",
      `• Name: ${name.trim()}`,
      `• Email: ${email.trim()}`,
      `• Business / Organization: ${orgText}`,
      `• Service Needed: ${service}`,
      `• Project Description:`,
      `${description.trim()}`,
      "",
      "Looking forward to discussing this further.",
    ].join("\n");
  }

  return [
    "Halo Valdes Store,",
    "",
    "Saya ingin berkonsultasi mengenai kebutuhan proyek digital:",
    `• Nama: ${name.trim()}`,
    `• Email: ${email.trim()}`,
    `• Bisnis / Organisasi: ${orgText}`,
    `• Layanan Dibutuhkan: ${service}`,
    `• Deskripsi Proyek:`,
    `${description.trim()}`,
    "",
    "Terima kasih, saya menunggu tanggapannya.",
  ].join("\n");
}

export function buildWhatsAppUrl(message) {
  const rawNumber = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  if (!rawNumber) {
    return `https://wa.me/?text=${encodedMessage}`;
  }
  return `https://wa.me/${rawNumber}?text=${encodedMessage}`;
}

export function buildMailtoUrl({ name, email, organization, service, description }, lang = "id") {
  const recipient = siteConfig.contact.email.includes("[")
    ? ""
    : siteConfig.contact.email;
  const subject =
    lang === "en"
      ? `Project Inquiry — ${service} (${name.trim()})`
      : `Konsultasi Proyek — ${service} (${name.trim()})`;
  const body = buildInquiryMessage({ name, email, organization, service, description }, lang);
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}