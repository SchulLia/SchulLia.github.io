document.documentElement.classList.add("js");

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector("#theme-color");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

const storedTheme = () => {
  try {
    return localStorage.getItem("schullia-theme");
  } catch (_error) {
    return null;
  }
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  const actionLabel = isDark
    ? "Helles Design aktivieren"
    : "Dunkles Design aktivieren";

  document.documentElement.dataset.theme = theme;
  if (themeColor) themeColor.content = isDark ? "#1c1c1c" : "#f7f7f5";

  if (themeToggle) {
    themeToggle.setAttribute("aria-label", actionLabel);
    themeToggle.setAttribute("title", actionLabel);
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
};

applyTheme(
  document.documentElement.dataset.theme ||
    storedTheme() ||
    (systemTheme.matches ? "light" : "dark"),
);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    try {
      localStorage.setItem("schullia-theme", nextTheme);
    } catch (_error) {
      // Der Schalter funktioniert auch, wenn der Browser Speicher blockiert.
    }

    applyTheme(nextTheme);
  });
}

systemTheme.addEventListener("change", (event) => {
  if (!storedTheme()) applyTheme(event.matches ? "light" : "dark");
});

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

const courseSwitcherButtons = [
  ...document.querySelectorAll('[data-course-url]'),
];
const coursePreview = document.querySelector('[data-course-preview]');
const coursePreviewCaption = document.querySelector(
  '[data-course-preview-caption]',
);

if (courseSwitcherButtons.length && coursePreview) {
  coursePreview.addEventListener('load', () => {
    coursePreview.removeAttribute('aria-busy');
  });

  courseSwitcherButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('is-active')) return;

      courseSwitcherButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      const courseUrl = button.dataset.courseUrl;
      const courseTitle = button.dataset.courseTitle;

      coursePreview.setAttribute('aria-busy', 'true');
      coursePreview.setAttribute('src', courseUrl);
      coursePreview.setAttribute(
        'title',
        'Interaktiver LiaScript-Beispielkurs: ' + courseTitle,
      );

      if (coursePreviewCaption) {
        coursePreviewCaption.textContent =
          courseTitle + ' wird hier direkt mit LiaScript geladen.';
      }
    });
  });
}

const shareGuideToggle = document.querySelector('[data-share-guide-toggle]');
const shareGuide = document.querySelector('[data-share-guide]');

if (shareGuideToggle && shareGuide) {
  shareGuideToggle.addEventListener('click', () => {
    const expanded = shareGuideToggle.getAttribute('aria-expanded') === 'true';
    const nextExpanded = !expanded;

    shareGuideToggle.setAttribute('aria-expanded', String(nextExpanded));
    shareGuideToggle.textContent = nextExpanded
      ? 'Anleitung schließen'
      : 'Anleitung ansehen';
    shareGuide.hidden = !nextExpanded;
  });
}

const templateLibrary = document.querySelector('[data-template-library]');

if (templateLibrary) {
  const itemList = templateLibrary.querySelector('.template-library__items');
  const collator = new Intl.Collator('de', {
    numeric: true,
    sensitivity: 'base',
  });
  const items = [...templateLibrary.querySelectorAll('[data-library-item]')]
    .sort((first, second) =>
      collator.compare(first.dataset.name, second.dataset.name),
    );
  items.forEach((item) => itemList.append(item));
  const search = templateLibrary.querySelector('[data-library-search]');
  const emptyState = templateLibrary.querySelector('[data-library-empty]');
  const templateLabel = templateLibrary.querySelector(
    '[data-library-template]',
  );
  const title = templateLibrary.querySelector('[data-library-title]');
  const description = templateLibrary.querySelector(
    '[data-library-description]',
  );
  const source = templateLibrary.querySelector('[data-library-source]');
  const preview = templateLibrary.querySelector('[data-library-preview]');
  const openPreview = templateLibrary.querySelector(
    '[data-library-open-preview]',
  );
  const code = templateLibrary.querySelector('[data-library-code]');
  const copyButton = templateLibrary.querySelector('[data-library-copy]');
  const tabs = [...templateLibrary.querySelectorAll('[data-library-tab]')];
  const panels = [...templateLibrary.querySelectorAll('[data-library-panel]')];
  let currentCode = '';
  let requestId = 0;

  const splitTopics = (item) =>
    item.dataset.topics.split(' · ').filter(Boolean);
  const isPageTopic = (topic) => /^Seite\s+\d+$/i.test(topic);
  const getTemplateName = (item) => {
    const explicitTemplates = splitTopics(item)
      .slice(1)
      .filter((topic) => !isPageTopic(topic));

    return (
      explicitTemplates.join(' · ') ||
      item.dataset.templateDefault ||
      'LiaScript'
    );
  };

  const selectTab = (name) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.libraryTab === name;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });

    panels.forEach((panel) => {
      const active = panel.dataset.libraryPanel === name;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => selectTab(tab.dataset.libraryTab));
  });

  const loadCode = async (url) => {
    const ownRequest = ++requestId;
    currentCode = '';
    code.textContent = 'Beispiel wird geladen …';
    copyButton.disabled = true;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(String(response.status));
      const value = await response.text();
      if (ownRequest !== requestId) return;
      currentCode = value;
      code.textContent = value;
      copyButton.disabled = false;
    } catch (_error) {
      if (ownRequest !== requestId) return;
      code.textContent =
        'Das Beispiel konnte nicht geladen werden. Bitte öffnen Sie die Vorschau erneut.';
    }
  };

  const selectItem = (item) => {
    items.forEach((candidate) => {
      const active = candidate === item;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });

    templateLabel.textContent = getTemplateName(item);
    title.textContent = item.dataset.name;
    description.textContent = item.dataset.description;
    source.href = item.dataset.sourceUrl;

    const liveUrl =
      'https://liascript.github.io/course/?' + item.dataset.publicUrl;
    if (preview.src !== liveUrl) preview.src = liveUrl;
    preview.title = 'Interaktive LiaScript-Vorschau: ' + item.dataset.name;
    openPreview.href = liveUrl;

    loadCode(item.dataset.exampleUrl);
  };

  items.forEach((item) => {
    const itemTemplate = item.querySelector('[data-library-item-template]');
    if (itemTemplate) itemTemplate.textContent = getTemplateName(item);
    item.addEventListener('click', () => selectItem(item));
  });

  if (search) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('de');
      let visibleCount = 0;

      items.forEach((item) => {
        const haystack = [
          item.dataset.name,
          item.dataset.templateDefault,
          getTemplateName(item),
          item.dataset.description,
          item.dataset.topics,
        ]
          .join(' ')
          .toLocaleLowerCase('de');
        const visible = !query || haystack.includes(query);
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      emptyState.hidden = visibleCount !== 0;
    });
  }

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      if (!currentCode) return;
      const originalLabel = copyButton.textContent;

      try {
        await navigator.clipboard.writeText(currentCode);
        copyButton.textContent = 'Kopiert';
      } catch (_error) {
        const textArea = document.createElement('textarea');
        textArea.value = currentCode;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        copyButton.textContent = 'Kopiert';
      }

      window.setTimeout(() => {
        copyButton.textContent = originalLabel;
      }, 1600);
    });
  }

  if (items[0]) selectItem(items[0]);
}
