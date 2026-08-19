import { contactChannels } from "./contact.config.js";

const copy = {
  ar: {
    eyebrow: "سلامة مدعومة بالذكاء الاصطناعي",
    title: "تواصل معنا",
    description: "لنصنع بيئات عمل أكثر أمانًا. تواصل مع فريق SentriX AI لمناقشة احتياجات السلامة والمراقبة الذكية في منشأتك.",
    trust: "تُعامل استفساراتك وبيانات منشأتك بسرية تامة.",
    channelsTitle: "قنوات التواصل الرسمية",
    verified: "قنوات موثقة",
    noChannels: "سيتم نشر قنوات التواصل الرسمية هنا فور اعتمادها.",
    formTitle: "ابدأ المحادثة",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك الكامل",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "name@company.com",
    companyLabel: "المنشأة",
    companyPlaceholder: "اسم الشركة أو المنشأة",
    messageLabel: "كيف يمكننا مساعدتك؟",
    messagePlaceholder: "أخبرنا باختصار عن احتياجك...",
    submit: "إرسال الاستفسار",
    footer: "AI-Powered Workplace Safety",
    openChannel: "فتح",
  },
  en: {
    eyebrow: "AI-powered workplace safety",
    title: "Contact Us",
    description: "Let’s build safer workplaces. Connect with the SentriX AI team to discuss intelligent safety and monitoring for your facility.",
    trust: "Your inquiry and facility information are handled confidentially.",
    channelsTitle: "Official Channels",
    verified: "Verified channels",
    noChannels: "Official contact channels will appear here once verified.",
    formTitle: "Start a conversation",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Work email",
    emailPlaceholder: "name@company.com",
    companyLabel: "Organization",
    companyPlaceholder: "Company or facility name",
    messageLabel: "How can we help?",
    messagePlaceholder: "Tell us briefly about your needs...",
    submit: "Send inquiry",
    footer: "AI-Powered Workplace Safety",
    openChannel: "Open",
  },
};

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let language = ["ar", "en"].includes(requestedLanguage)
  ? requestedLanguage
  : localStorage.getItem("sentrix-language") || "ar";

function renderChannels() {
  const list = document.querySelector("#channel-list");
  const available = contactChannels.filter((channel) => channel.url.trim());
  list.replaceChildren();
  document.querySelector("#channel-empty").hidden = available.length > 0;

  available.forEach((channel) => {
    const item = document.createElement("a");
    item.className = "channel-card";
    item.href = channel.url;
    item.target = channel.url.startsWith("http") ? "_blank" : "_self";
    item.rel = "noreferrer";
    item.innerHTML = `<span class="channel-icon">${channel.icon}</span><span class="channel-copy"><strong>${channel.label[language]}</strong><small>${channel.value}</small></span><span class="channel-arrow" aria-label="${copy[language].openChannel}">↗</span>`;
    list.append(item);
  });
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("sentrix-language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = `${copy[language].title} | SentriX AI`;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.textContent = copy[language][element.dataset.copy];
  });
  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    element.placeholder = copy[language][element.dataset.placeholder];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
  renderChannels();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);
