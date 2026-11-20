(() => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  const closeMenu = () => {
    header.classList.remove("is-menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.title = "Open navigation";
  };
  header.classList.add("has-menu");
  menuButton.hidden = false;
  menuButton.addEventListener("click", () => {
    const open = !header.classList.contains("is-menu-open");
    header.classList.toggle("is-menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuButton.title = open ? "Close navigation" : "Open navigation";
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-menu-open")) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  const navLinks = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-15% 0px -65% 0px" });
  observer.observe(document.querySelector(".hero"));
  navLinks.forEach((link) => observer.observe(document.querySelector(link.hash)));

  const filters = [...document.querySelectorAll("[data-filter]")];
  const papers = [...document.querySelectorAll(".publication")];
  const search = document.querySelector("#paper-search");
  const counter = document.querySelector("#paper-count");
  const emptyState = document.querySelector(".paper-empty");
  const showAll = document.querySelector("#show-all-papers");
  let filter = "selected";

  const indexed = papers.map((paper) => {
    const venue = paper.querySelector(".pub-meta span").textContent;
    const reviewed = /^(ICML|ICLR|ICCV|CVPR|NeurIPS|EMNLP|IJCAI|IJCNN|TPAMI)\b/.test(venue)
      && !/under review/i.test(venue);
    return { paper, reviewed, text: paper.textContent.toLowerCase() };
  });
  const updatePapers = () => {
    const words = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    indexed.forEach(({ paper, reviewed, text }) => {
      const inGroup = filter === "all"
        || (filter === "selected" && paper.hasAttribute("data-selected"))
        || (filter === "papers" && reviewed)
        || (filter === "reports" && !reviewed);
      const visible = inGroup && words.every((word) => text.includes(word));
      paper.hidden = !visible;
      if (visible) count += 1;
    });
    filters.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === filter)));
    counter.textContent = `${count} of ${papers.length} publications`;
    emptyState.hidden = count !== 0;
    showAll.hidden = filter === "all" && words.length === 0;
  };
  filters.forEach((button) => button.addEventListener("click", () => {
    filter = button.dataset.filter;
    updatePapers();
  }));
  search.addEventListener("input", () => {
    // Searching starts across the complete bibliography, including unselected work.
    if (search.value.trim()) filter = "all";
    updatePapers();
  });
  const resetPapers = () => {
    filter = "all";
    search.value = "";
    updatePapers();
  };
  document.querySelector("#reset-papers").addEventListener("click", resetPapers);
  showAll.addEventListener("click", () => {
    resetPapers();
    document.querySelector(".publication-tools").scrollIntoView({ block: "start" });
    filters.find((button) => button.dataset.filter === "all").focus({ preventScroll: true });
  });
  document.querySelector(".publication-tools").hidden = false;
  document.querySelector(".publication-status").hidden = false;
  updatePapers();

  const lightbox = document.querySelector("#paper-lightbox");
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");
  let lastPreview = null;

  document.querySelectorAll(".paper-preview:not(.is-missing)").forEach((preview) => {
    const picture = preview.querySelector("img");
    if (typeof lightbox.showModal !== "function") return;
    picture.loading = "lazy";
    picture.decoding = "async";
    preview.setAttribute("role", "button");
    preview.tabIndex = 0;
    preview.setAttribute("aria-label", `Enlarge ${picture.alt}`);
    preview.setAttribute("aria-haspopup", "dialog");
    const openPreview = () => {
      lastPreview = preview;
      lightboxImage.src = picture.src;
      lightboxImage.alt = picture.alt;
      document.querySelector("#preview-title").textContent = preview.closest(".publication").querySelector("h3").textContent;
      lightbox.showModal();
      document.body.classList.add("is-lightbox-open");
      closeButton.focus();
    };
    preview.addEventListener("click", openPreview);
    preview.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPreview();
      }
    });
  });
  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    const bounds = lightbox.getBoundingClientRect();
    if (event.target === lightbox && (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom)) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    document.body.classList.remove("is-lightbox-open");
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    lastPreview?.focus({ preventScroll: true });
  });
})();
