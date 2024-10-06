document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -50;
        const y =
          targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        // Закриття мобільного меню, якщо воно відкрите
        const mobileMenu = document.querySelector(".js-menu-container");
        if (mobileMenu && mobileMenu.classList.contains("is-open")) {
          mobileMenu.classList.remove("is-open");
          const openMenuBtn = document.querySelector(".js-open-menu");
          if (openMenuBtn) {
            openMenuBtn.setAttribute("aria-expanded", false);
          }
          bodyScrollLock.enableBodyScroll(document.body);
        }
      }
    });
  });
});
