import { brand, contactChannels } from "./contact.config.js";

const copy = {
  ar: {
    title: "تواصل معنا",
    subtitle: "اختر وسيلة التواصل المناسبة لك.",
    channelsTitle: "القنوات الرسمية",
    footerNote: "يسعدنا أن نبقى على تواصل معكم.",
    open: "OPEN",
    unavailable: "OPEN",
    tagline: brand.tagline.ar,
  },
  en: {
    title: "CONNECT WITH US",
    subtitle: "Choose your preferred way to connect with us.",
    channelsTitle: "OFFICIAL CHANNELS",
    footerNote: "We’d love to stay connected.",
    open: "OPEN",
    unavailable: "OPEN",
    tagline: brand.tagline.en,
  },
};

const icons = {
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.7A2.8 2.8 0 0 0 4.7 7.5v9a2.8 2.8 0 0 0 2.8 2.8h9a2.8 2.8 0 0 0 2.8-2.8v-9a2.8 2.8 0 0 0-2.8-2.8h-9Zm9.35 1.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.7A2.1 2.1 0 1 0 14.1 12 2.1 2.1 0 0 0 12 9.9Z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 3.2A8.74 8.74 0 0 0 3.3 11.93a8.6 8.6 0 0 0 1.25 4.5L3.2 20.8l4.52-1.3a8.8 8.8 0 0 0 4.32 1.1h.01a8.74 8.74 0 0 0 8.74-8.74 8.7 8.7 0 0 0-8.75-8.66Zm0 15.95h-.01a7.24 7.24 0 0 1-3.69-1.01l-.26-.16-2.68.77.76-2.61-.17-.27a7.2 7.2 0 0 1-1.11-3.84 7.25 7.25 0 0 1 7.24-7.24 7.2 7.2 0 0 1 5.12 2.12 7.2 7.2 0 0 1 2.12 5.12 7.25 7.25 0 0 1-7.32 7.12Zm3.97-5.42c-.22-.11-1.29-.64-1.49-.71s-.34-.11-.49.11-.56.71-.69.86-.25.16-.47.05a5.92 5.92 0 0 1-1.74-1.07 6.55 6.55 0 0 1-1.21-1.5c-.13-.22 0-.34.1-.45.1-.1.22-.25.33-.38s.15-.22.22-.37.03-.27-.02-.38-.49-1.18-.67-1.61c-.18-.43-.36-.37-.49-.38h-.42a.8.8 0 0 0-.58.27 2.43 2.43 0 0 0-.76 1.81 4.22 4.22 0 0 0 .89 2.24 9.63 9.63 0 0 0 3.69 3.27 4.2 4.2 0 0 0 2.41.64 2.07 2.07 0 0 0 1.36-.59 1.68 1.68 0 0 0 .37-1.18c-.05-.09-.2-.15-.42-.26Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.34 9.25H3.56V20.4h2.78V9.25ZM4.95 3.6a1.61 1.61 0 1 0 0 3.22 1.61 1.61 0 0 0 0-3.22ZM20.44 20.4h-2.77v-5.95c0-1.42-.03-3.24-1.97-3.24-1.98 0-2.28 1.54-2.28 3.13V20.4H10.65V9.25h2.66v1.52h.04c.37-.7 1.28-1.44 2.63-1.44 2.81 0 3.33 1.85 3.33 4.26V20.4Z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.2 3.6h2.1c.5 0 .94.34 1.06.82l.84 3.2a1.1 1.1 0 0 1-.31 1.08l-1.3 1.3a12.2 12.2 0 0 0 4.91 4.91l1.3-1.3a1.1 1.1 0 0 1 1.08-.31l3.2.84c.48.12.82.56.82 1.06v2.1a1.8 1.8 0 0 1-1.92 1.8A15.6 15.6 0 0 1 3.4 5.52 1.8 1.8 0 0 1 5.2 3.6H7.2Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Zm.3 1.5 7.2 4.8 7.2-4.8H4.8Zm14.7 1.74-7.05 4.7a.9.9 0 0 1-1 0L4.5 9.24V16.5h15V9.24Z"/></svg>`,
};

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let language = ["ar", "en"].includes(requestedLanguage)
  ? requestedLanguage
  : localStorage.getItem("sentrix-contact-lang") || "en";

function isReady(url) {
  return typeof url === "string" && url.trim().length > 0 && !url.includes("PLACEHOLDER");
}

function renderChannels() {
  const list = document.querySelector("#channel-list");
  list.replaceChildren();

  contactChannels.forEach((channel) => {
    const ready = isReady(channel.url);
    const card = document.createElement(ready ? "a" : "div");
    card.className = `channel-card channel-${channel.id}${ready ? "" : " is-disabled"}`;

    if (ready) {
      const href = channel.url.trim();
      card.href = href;
      // Instagram & LinkedIn open in a new tab; WhatsApp/tel stay in-context for app handoff
      if (channel.id === "instagram" || channel.id === "linkedin") {
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      }
    } else {
      card.setAttribute("aria-disabled", "true");
    }

    card.innerHTML = `
      <span class="channel-icon">${icons[channel.id] || ""}</span>
      <span class="channel-copy">
        <strong>${channel.platform[language]}</strong>
        <small>${channel.handle[language]}</small>
      </span>
      <span class="channel-open">${copy[language].open}</span>
    `;

    list.append(card);
  });
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("sentrix-contact-lang", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = `${copy[language].title} | SentriX AI`;

  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.textContent = copy[language][element.dataset.copy];
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderChannels();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);
