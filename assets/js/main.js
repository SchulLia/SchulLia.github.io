document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

if (navToggle && navigation) {
  const closeNavigation = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(willOpen));
    navigation.classList.toggle("is-open", willOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navToggle.focus();
    }
  });

  window
    .matchMedia("(min-width: 821px)")
    .addEventListener("change", (event) => {
      if (event.matches) closeNavigation();
    });
}

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const templateCards = [...document.querySelectorAll("[data-category]")];
const templateCount = document.querySelector("[data-template-count]");

if (filterButtons.length && templateCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      templateCards.forEach((card) => {
        const visible = filter === "all" || card.dataset.category === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (templateCount) templateCount.textContent = String(visibleCount);
    });
  });
}

const patchnotesWindow = document.querySelector("[data-patchnotes-window]");
const patchnotesScroll = document.querySelector("[data-patchnotes-scroll]");

if (patchnotesWindow && patchnotesScroll) {
  const updatePatchnoteFade = () => {
    const scrollable =
      patchnotesScroll.scrollHeight > patchnotesScroll.clientHeight + 1;
    const atEnd =
      !scrollable ||
      patchnotesScroll.scrollTop + patchnotesScroll.clientHeight >=
        patchnotesScroll.scrollHeight - 2;

    patchnotesWindow.classList.toggle("is-scrollable", scrollable);
    patchnotesWindow.classList.toggle("is-at-end", atEnd);
  };

  patchnotesScroll.addEventListener("scroll", updatePatchnoteFade, {
    passive: true,
  });

  if ("ResizeObserver" in window) {
    new ResizeObserver(updatePatchnoteFade).observe(patchnotesScroll);
  }

  window.addEventListener("load", updatePatchnoteFade, { once: true });
  requestAnimationFrame(updatePatchnoteFade);
}
