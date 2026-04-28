(function () {
  const doc = document.documentElement;
  const mobilePanel = document.querySelector("[data-mobile-panel]");
  const mobileOpen = document.querySelector("[data-mobile-open]");
  const mobileClose = document.querySelector("[data-mobile-close]");
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setTheme(mode) {
    doc.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
    document.querySelectorAll("[data-theme-label]").forEach((node) => {
      node.textContent = mode === "dark" ? "Switch to light mode" : "Switch to dark mode";
    });
  }

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(doc.classList.contains("dark") ? "light" : "dark");
    });
  });

  function closeMobile() {
    mobilePanel?.classList.remove("open");
    mobileOpen?.setAttribute("aria-expanded", "false");
  }

  mobileOpen?.addEventListener("click", () => {
    mobilePanel?.classList.add("open");
    mobileOpen.setAttribute("aria-expanded", "true");
  });
  mobileClose?.addEventListener("click", closeMobile);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobile();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => closeMobile());
  });

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll("[data-spy-link]"));
  if (sections.length && navLinks.length) {
    const spy = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.35, 0.6] });
    sections.forEach((section) => spy.observe(section));
  }

  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach((node) => node.classList.add("visible"));
  } else if (reveals.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    reveals.forEach((node) => revealObserver.observe(node));
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.getAttribute("data-copy"));
      if (!target) return;
      await navigator.clipboard.writeText(target.textContent.trim());
      const original = button.textContent;
      button.textContent = "Copied";
      button.classList.add("copied");
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1300);
    });
  });
})();
