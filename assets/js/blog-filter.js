(() => {
  const posts = [...document.querySelectorAll("[data-blog-post]")];
  if (!posts.length) return;

  const count = document.querySelector("[data-blog-count]");
  const empty = document.querySelector("[data-blog-empty]");
  const active = document.querySelector("[data-blog-active-filter]");
  let year = "all";
  let taxonomy = "";

  const applyFilters = () => {
    posts.sort((a, b) => Number(b.dataset.date) - Number(a.dataset.date));
    posts.forEach((post) => post.parentElement.appendChild(post));

    let visible = 0;
    posts.forEach((post) => {
      const matchesYear = year === "all" || post.dataset.year === year;
      const terms = `,${post.dataset.taxonomies || ""},`;
      const matchesTaxonomy = !taxonomy || terms.includes(`,${taxonomy},`);
      const show = matchesYear && matchesTaxonomy;
      post.hidden = !show;
      if (show) visible += 1;
    });
    if (count) count.textContent = visible;
    if (empty) empty.hidden = visible !== 0;
    if (active) active.textContent = year !== "all" ? `Szűrve: ${year}` : "";
  };

  document.querySelectorAll("[data-blog-year]").forEach((button) => button.addEventListener("click", () => {
    year = button.dataset.blogYear;
    document.querySelectorAll("[data-blog-year]").forEach((item) => item.classList.toggle("is-active", item === button));
    applyFilters();
  }));

  document.querySelectorAll("[data-blog-filter]").forEach((button) => button.addEventListener("click", () => {
    taxonomy = taxonomy === button.dataset.blogFilter ? "" : button.dataset.blogFilter;
    document.querySelectorAll("[data-blog-filter]").forEach((item) => item.classList.toggle("is-active", item.dataset.blogFilter === taxonomy));
    if (active) active.textContent = taxonomy ? `Szűrve: ${button.textContent.trim()}` : "";
    applyFilters();
  }));

  document.querySelector("[data-blog-reset]")?.addEventListener("click", () => {
    year = "all";
    taxonomy = "";
    document.querySelectorAll("[data-blog-year]").forEach((item) => item.classList.toggle("is-active", item.dataset.blogYear === "all"));
    document.querySelectorAll("[data-blog-filter]").forEach((item) => item.classList.remove("is-active"));
    applyFilters();
  });

  applyFilters();
})();
