(function () {
  const config = window.CLICK_AVALIA_CONFIG || { whatsappNumber: "554333286272", brandName: "Click Avalia" };
  const number = String(config.whatsappNumber || "").replace(/\D/g, "");
  document.querySelectorAll(".js-whatsapp, a[href*='wa.me/']").forEach((link) => {
    const message = link.dataset.message || "Olá! Quero saber mais sobre a Click Avalia.";
    if (number) link.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    }));
  }
  document.querySelectorAll(".faq-list details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) document.querySelectorAll(".faq-list details").forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
