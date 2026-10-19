/* =========================================
   ALIOUNE SEYE — PORTFOLIO
   Interactions et changement de langue
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("language-toggle");
  const translatableElements = document.querySelectorAll("[data-fr][data-en]");
  const yearElement = document.getElementById("current-year");

  // 1. ANNÉE AUTOMATIQUE
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. GESTION DES LANGUES
  let currentLanguage = "fr";

  function changeLanguage(language) {
    if (language !== "fr" && language !== "en") {
      return;
    }

    currentLanguage = language;

    translatableElements.forEach((element) => {
      const translation = element.getAttribute(`data-${language}`);

      if (translation !== null) {
        element.innerHTML = translation;
      }
    });

    document.documentElement.lang = language;

    if (languageToggle) {
      languageToggle.textContent = language === "fr" ? "EN" : "FR";

      const label =
        language === "fr" ? "Switch to English" : "Passer en français";

      languageToggle.setAttribute("aria-label", label);
      languageToggle.setAttribute("title", label);
    }

    // Titre de l'onglet
    document.title =
      language === "fr"
        ? "Alioune Seye | Communication et stratégie numérique"
        : "Alioune Seye | Communication and Digital Strategy";

    // Description de la page
    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute(
        "content",
        language === "fr"
          ? "Portfolio d'Alioune Seye, issu d'une formation en Sciences de l'information et de la communication, avec une spécialisation en communication numérique."
          : "Portfolio of Alioune Seye, with a background in Information and Communication Sciences and a specialization in digital communication."
      );
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      changeLanguage(currentLanguage === "fr" ? "en" : "fr");
    });
  }

  // 3. NAVIGATION
  const navigationLinks = document.querySelectorAll(
    '.main-nav a[href^="#"]'
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href");
      const targetSection = targetId
        ? document.querySelector(targetId)
        : null;

      if (targetSection) {
        targetSection.setAttribute("tabindex", "-1");
      }
    });
  });

  // 4. SÉCURITÉ DES LIENS EXTERNES
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 5. AFFICHAGE INITIAL EN FRANÇAIS
  changeLanguage("fr");
});