

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "es";
  document.documentElement.lang = savedLang;
  if (savedLang === "en") applyLanguage("en");
});

function toggleLanguage() {
  let lang = document.documentElement.lang === "es" ? "en" : "es";
  localStorage.setItem("language", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const btn = document.querySelector(".language-toggle");
  if (btn) btn.textContent = lang === "es" ? "English" : "Español";
  
  document.querySelectorAll("[data-es][data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}