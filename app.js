(function () {
  const parties = window.PARTIES || [];
  const app = document.getElementById("app");
  const overlay = document.getElementById("overlay");
  const toastEl = document.getElementById("toast");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Ornaments ---------- */

  // A spiderweb anchored in the top-left corner; CSS flips it for the other corners.
  function webSVG(size = 240) {
    const R = size, spokes = [0, 14, 30, 45, 60, 76, 90].map((d) => (d * Math.PI) / 180);
    const pt = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
    let d = spokes.map((a) => `M0 0L${pt(R, a).join(" ")}`).join("");
    for (let k = 1; k <= 7; k++) {
      const r = R * Math.pow(k / 7.4, 1.15);
      for (let i = 0; i < spokes.length - 1; i++) {
        const [x1, y1] = pt(r, spokes[i]);
        const [x2, y2] = pt(r, spokes[i + 1]);
        const [cx, cy] = pt(r * 0.86, (spokes[i] + spokes[i + 1]) / 2);
        d += `M${x1.toFixed(1)} ${y1.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      }
    }
    return `<svg viewBox="0 0 ${R} ${R}" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round"><path d="${d}"/></svg>`;
  }

  const bat = (cls = "") =>
    `<svg class="bat ${cls}" viewBox="0 0 100 44" aria-hidden="true"><path fill="currentColor" d="M50 14l-2.6-5.5-.9 6C40 9 30 6 17 9c6 2.5 8.5 6.5 8 11-6-3-14-3-21 2 8 0 13 4 14.5 9 7-4.5 17-4 23.5 3 2-3.5 5-5.4 8-5.4s6 1.9 8 5.4c6.5-7 16.5-7.5 23.5-3C83 26 88 22 96 22c-7-5-15-5-21-2-.5-4.5 2-8.5 8-11-13-3-23 0-29.5 6.5l-.9-6L50 14z"/></svg>`;

  const spider = () =>
    `<div class="spider" aria-hidden="true"><span class="spider__thread"></span><svg viewBox="0 0 60 60"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"><path d="M24 28 12 18 6 24M24 32 8 30 3 38M25 36 12 44 10 54M27 38 20 50 22 58M36 28 48 18 54 24M36 32 52 30 57 38M35 36 48 44 50 54M33 38 40 50 38 58"/></g><ellipse cx="30" cy="35" rx="7" ry="9" fill="currentColor"/><circle cx="30" cy="24" r="5" fill="currentColor"/></svg></div>`;

  const divider = `<svg class="divider" viewBox="0 0 240 16" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1"><path d="M8 8H100M140 8H232"/><path d="M100 8c5-6 10-6 13-1s7 5 7 1-4-6-7-1 2 6 7 6 10-1 7-6-7-4-7 1 2 1 7 1 8-6 13 1"/></g><circle cx="120" cy="8" r="1.6" fill="currentColor"/></svg>`;

  /* ---------- Party ornaments (landing page) ---------- */

  const sparkle = (cls) =>
    `<svg class="sparkle ${cls}" viewBox="-6 -6 12 12" aria-hidden="true"><path fill="currentColor" d="M0-6 1.1-1.1 6 0 1.1 1.1 0 6-1.1 1.1-6 0-1.1-1.1z"/></svg>`;

  function discoBall() {
    const r = 48, c = 50, row = 7;
    let tiles = "";
    for (let y = -r, k = 0; y < r; y += row, k++) {
      const mid = y + row / 2;
      const half = Math.sqrt(Math.max(0, r * r - mid * mid));
      const n = Math.max(3, Math.round(half / 3.4));
      const w = (2 * half) / n;
      for (let i = 0; i < n; i++) {
        const shade = (i * 37 + k * 53) % 100;
        const light = 62 + shade * 0.34;
        const glint = (i * 7 + k * 3) % 11 === 0 ? ' class="glint" style="animation-delay:' + ((i + k) % 6) * 0.45 + 's"' : "";
        tiles += `<rect${glint} x="${(c - half + i * w + 0.35).toFixed(2)}" y="${(c + y + 0.35).toFixed(2)}" width="${(w - 0.7).toFixed(2)}" height="${row - 0.7}" fill="hsl(40 10% ${light.toFixed(0)}%)"/>`;
      }
    }
    return `
      <div class="disco" aria-hidden="true">
        <span class="disco__string"></span>
        <span class="disco__cap"></span>
        <svg class="disco__ball" viewBox="0 0 100 100">
          <defs>
            <clipPath id="disco-clip"><circle cx="50" cy="50" r="48"/></clipPath>
            <radialGradient id="disco-shade" cx="35%" cy="30%" r="75%">
              <stop offset="0" stop-color="#fff" stop-opacity=".55"/>
              <stop offset=".45" stop-color="#fff" stop-opacity="0"/>
              <stop offset="1" stop-color="#1c1915" stop-opacity=".6"/>
            </radialGradient>
          </defs>
          <g clip-path="url(#disco-clip)">
            <circle cx="50" cy="50" r="48" fill="#3a352f"/>
            ${tiles}
            <circle cx="50" cy="50" r="48" fill="url(#disco-shade)"/>
          </g>
        </svg>
        ${sparkle("sparkle--1")}${sparkle("sparkle--2")}${sparkle("sparkle--3")}${sparkle("sparkle--4")}${sparkle("sparkle--5")}
      </div>`;
  }

  let balloonId = 0;
  function balloon(color, cls) {
    const id = "bshade" + balloonId++;
    return `
      <svg class="balloon ${cls}" viewBox="0 0 60 160" aria-hidden="true">
        <defs>
          <radialGradient id="${id}" cx="35%" cy="28%" r="80%">
            <stop offset="0" stop-color="#fff" stop-opacity=".5"/>
            <stop offset=".4" stop-color="#fff" stop-opacity="0"/>
            <stop offset="1" stop-color="#000" stop-opacity=".28"/>
          </radialGradient>
        </defs>
        <path d="M30 79c-.6 4 1.6 8 0 12-1.8 5-6 8-4 14s6 9 4 15-6 9-4 15 5 9 4 24" fill="none" stroke="#161412" stroke-width=".8" opacity=".45"/>
        <path d="M27 74.5h6l-3 5.5z" fill="${color}"/>
        <path d="M30 4C14 4 4 18 4 35c0 20 15 35 26 40 11-5 26-20 26-40C56 18 46 4 30 4z" fill="${color}"/>
        <path d="M30 4C14 4 4 18 4 35c0 20 15 35 26 40 11-5 26-20 26-40C56 18 46 4 30 4z" fill="url(#${id})"/>
        <ellipse cx="19" cy="22" rx="4" ry="8" fill="#fff" opacity=".45" transform="rotate(-22 19 22)"/>
      </svg>`;
  }

  const streamers = `
    <svg class="streamers" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke">
        <path vector-effect="non-scaling-stroke" stroke="#c9a96a" stroke-width="5" d="M-10 8Q120 95 250 18T500 18T750 18T1010 8"/>
        <path vector-effect="non-scaling-stroke" stroke="#d6a9a2" stroke-width="4" d="M-10 30Q160 120 333 36T666 36T1010 30"/>
        <path vector-effect="non-scaling-stroke" stroke="#161412" stroke-width="1.2" opacity=".55" d="M-10 2Q90 60 200 8T400 8T600 8T800 8T1010 2"/>
      </g>
    </svg>
    <svg class="curl curl--l" viewBox="0 0 30 120" aria-hidden="true"><path d="M15 0c10 10-10 18 0 28s-10 18 0 28-10 18 0 28-10 18 0 28" fill="none" stroke="#c9a96a" stroke-width="3" stroke-linecap="round"/></svg>
    <svg class="curl curl--r" viewBox="0 0 30 120" aria-hidden="true"><path d="M15 0c10 10-10 18 0 28s-10 18 0 28-10 18 0 28-10 18 0 28" fill="none" stroke="#d6a9a2" stroke-width="3" stroke-linecap="round"/></svg>`;

  const confetti = Array.from({ length: 22 }, (_, i) => {
    const colors = ["#c9a96a", "#d6a9a2", "#a9b39b", "#161412"];
    const x = (i * 47) % 100, y = 8 + ((i * 29) % 70);
    const shape = i % 3 === 0 ? "border-radius:50%" : `transform:rotate(${(i * 41) % 180}deg)`;
    return `<i style="left:${x}%;top:${y}%;background:${colors[i % 4]};${shape}"></i>`;
  }).join("");

  /* ---------- Routing ---------- */
  // #/                        → bookshelf
  // #/p/<slug>                → open book
  // #/p/<slug>/costumes       → costume carousel
  // #/p/<slug>/decor          → decor
  // #/p/<slug>/menu           → menu
  // #/p/<slug>/menu/<dish>    → recipe card

  const route = () => {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    return parts[0] === "p" ? { slug: parts[1], section: parts[2], item: parts[3] } : {};
  };
  const go = (path) => (location.hash = "#/" + path);

  let shown; // slug of the book currently rendered, or null for the shelf

  function render() {
    const r = route();
    const party = parties.find((p) => p.slug === r.slug);
    document.body.dataset.view = party ? "book" : "shelf";
    if (!party) {
      closeOverlay();
      if (shown !== null) renderShelf();
      shown = null;
      document.title = "The Party Library";
      return;
    }
    if (shown !== party.slug) renderBook(party);
    shown = party.slug;
    document.title = `${party.title} · The Party Library`;

    if (r.section === "costumes") openOverlay(costumesView(party), "wide");
    else if (r.section === "decor") openOverlay(decorView(party), "wide");
    else if (r.section === "prep" && party.prep) openOverlay(prepView(party, r.item), "wide");
    else if (r.section === "menu" && r.item) {
      const dish = party.menu.dishes.find((d) => d.id === r.item);
      dish ? openOverlay(recipeView(party, dish), "card") : go(`p/${party.slug}/menu`);
    } else if (r.section === "menu") openOverlay(menuView(party), "menu");
    else closeOverlay();
  }

  /* ---------- Bookshelf ---------- */

  function renderShelf() {
    const books = parties
      .map(
        (p) => `
        <a class="spine" href="#/p/${esc(p.slug)}"
           style="--spine:${esc(p.spine.color)};--spine-ink:${esc(p.spine.ink)};--h:${p.spine.height || 100}%">
          <span class="spine__band"></span>
          <span class="spine__title">${esc(p.spine.label || p.title)}</span>
          <span class="spine__year">${esc((p.date || "").replace(/\D+/g, ""))}</span>
          <span class="spine__band"></span>
        </a>`
      )
      .join("");
    const heights = [86, 94, 80, 90, 84, 92];
    const blanks = Array.from({ length: Math.max(2, 6 - parties.length) }, (_, i) =>
      `<div class="spine spine--blank" style="--h:${heights[i % heights.length]}%" aria-hidden="true">
         <span class="spine__band"></span>${i === 0 ? '<span class="spine__title">Next Soirée…</span>' : ""}<span class="spine__band"></span>
       </div>`
    ).join("");

    app.innerHTML = `
      <div class="party-decor" aria-hidden="true">
        ${streamers}
        <div class="confetti">${confetti}</div>
      </div>
      <section class="shelf-view">
        ${discoBall()}
        <header class="masthead">
          <div class="balloons balloons--left">
            ${balloon("#f2668b", "b1")}${balloon("#f5b82e", "b2")}${balloon("#2fb5a8", "b3")}
          </div>
          <div class="balloons balloons--right">
            ${balloon("#8b6fe8", "b4")}${balloon("#ff8a5c", "b5")}
          </div>
          <p class="eyebrow">Est. 2026</p>
          <h1 class="masthead__title">The Party Library</h1>
          ${divider}
          <p class="lede">Pull a book from the shelf to see the costumes, the decor, the menu and every recipe.</p>
        </header>
        <div class="shelf">
          <div class="shelf__books">${books}${blanks}</div>
          <div class="shelf__plank"></div>
        </div>
      </section>`;

    app.querySelectorAll("a.spine").forEach((a) =>
      a.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        a.classList.add("is-pulling");
        setTimeout(() => (location.hash = a.getAttribute("href")), matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 550);
      })
    );
  }

  /* ---------- Open book ---------- */

  function renderBook(p) {
    const base = `#/p/${esc(p.slug)}`;
    const photo = p.photo && p.photo.src
      ? `<img src="${esc(p.photo.src)}" alt="${esc(p.photo.caption)}">`
      : `<div class="placeholder">${bat()}<span>Photo from the evening<br>coming soon</span></div>`;

    app.innerHTML = `
      <section class="book-view">
        <nav class="book-nav">
          <a class="text-link" href="#/">← Back to the shelf</a>
          <button class="text-link" type="button" data-share>Share this book</button>
        </nav>
        <article class="book">
          <section class="page page--left">
            <div class="page__web">${webSVG(150)}</div>
            <p class="eyebrow">${esc(p.date)}</p>
            <h1 class="display book-title">${esc(p.title)}</h1>
            <p class="tagline">${esc(p.tagline)}</p>
            ${divider}
            <div class="entry">
              <p class="label">Costume Theme</p>
              <a class="entry__link" href="${base}/costumes">${esc(p.costume.theme)}</a>
              <p class="hint">See the inspiration</p>
            </div>
            ${divider}
            <div class="entry">
              <p class="label">Decor</p>
              <a class="entry__link" href="${base}/decor">Setting the Scene</a>
              <p class="hint">Everything I used, with links</p>
            </div>
            ${p.prep ? `
            ${divider}
            <div class="entry">
              <p class="label">Timeline &amp; Prep</p>
              <a class="entry__link" href="${base}/prep">The Game Plan</a>
              <p class="hint">Day-of timeline &amp; grocery list</p>
            </div>` : ""}
            ${bat("bat--page")}
            <span class="folio">i</span>
          </section>
          <section class="page page--right">
            ${spider()}
            <figure class="photo">${photo}${p.photo && p.photo.caption ? `<figcaption>${esc(p.photo.caption)}</figcaption>` : ""}</figure>
            ${divider}
            <div class="entry">
              <p class="label">Dinner</p>
              <a class="entry__link" href="${base}/menu">The Menu</a>
              <p class="hint">Click any dish for its recipe</p>
            </div>
            <span class="folio">ii</span>
          </section>
        </article>
      </section>`;

    app.querySelector("[data-share]").addEventListener("click", share);
  }

  async function share() {
    const url = location.href.split("#")[0] + location.hash;
    if (navigator.share) {
      try { await navigator.share({ title: document.title, url }); return; }
      catch (e) { if (e.name === "AbortError") return; }
    }
    try { await navigator.clipboard.writeText(url); toast("Link copied"); }
    catch { toast("Copy the link from your address bar"); }
  }

  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 2200);
  }

  /* ---------- Overlay ---------- */

  let cleanup = null;

  function openOverlay(view, variant) {
    if (cleanup) { cleanup(); cleanup = null; }
    const wasHidden = overlay.hidden;
    overlay.innerHTML = `
      <div class="overlay__backdrop" data-close></div>
      <div class="overlay__panel overlay__panel--${variant}" role="dialog" aria-modal="true" aria-label="${esc(view.label)}">
        <button class="close" type="button" data-close aria-label="Close">×</button>
        ${view.html}
      </div>`;
    overlay.hidden = false;
    overlay.classList.toggle("is-entering", wasHidden);
    document.body.classList.add("no-scroll");
    cleanup = view.mount ? view.mount(overlay) : null;
    overlay.querySelector(".close").focus({ preventScroll: true });
  }

  function closeOverlay() {
    if (overlay.hidden) return;
    if (cleanup) { cleanup(); cleanup = null; }
    overlay.hidden = true;
    overlay.innerHTML = "";
    document.body.classList.remove("no-scroll");
  }

  overlay.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) go(`p/${shown}`);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || overlay.hidden) return;
    const r = route();
    go(r.section === "menu" && r.item ? `p/${shown}/menu` : `p/${shown}`);
  });

  /* ---------- Costume carousel ---------- */

  function costumesView(p) {
    const imgs = p.costume.images.length
      ? p.costume.images
      : [1, 2, 3].map((n) => ({ caption: `Inspiration no. ${n}` }));
    const slides = imgs
      .map(
        (img) => `
        <figure class="slide">
          ${img.src
            ? `<div class="slide__photos">${[].concat(img.src).map((s) => `<img src="${esc(s)}" alt="${esc(img.title || img.caption)}" loading="lazy">`).join("")}</div>`
            : `<div class="placeholder">${bat()}<span>Image coming soon</span></div>`}
          <figcaption>
            ${img.title ? `<span class="slide__title">${esc(img.title)}</span>` : ""}
            ${img.caption ? `<span class="slide__note">${esc(img.caption)}</span>` : ""}
          </figcaption>
        </figure>`
      )
      .join("");

    return {
      label: "Costume inspiration",
      html: `
        <header class="overlay-head">
          <p class="label">Costume Theme</p>
          <h2 class="display">${esc(p.costume.theme)}</h2>
          ${divider}
          <p class="lede">${esc(p.costume.description)}</p>
        </header>
        <div class="carousel">
          <button class="carousel__btn carousel__btn--prev" type="button" aria-label="Previous">‹</button>
          <div class="carousel__viewport"><div class="carousel__track">${slides}</div></div>
          <button class="carousel__btn carousel__btn--next" type="button" aria-label="Next">›</button>
        </div>
        <div class="carousel__dots">${imgs.map((_, i) => `<button type="button" aria-label="Go to image ${i + 1}"></button>`).join("")}</div>`,
      mount(root) {
        const track = root.querySelector(".carousel__track");
        const dots = [...root.querySelectorAll(".carousel__dots button")];
        let i = 0;
        const show = (n) => {
          i = (n + imgs.length) % imgs.length;
          track.style.transform = `translateX(${-i * 100}%)`;
          dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
        };
        root.querySelector(".carousel__btn--prev").onclick = () => show(i - 1);
        root.querySelector(".carousel__btn--next").onclick = () => show(i + 1);
        dots.forEach((d, k) => (d.onclick = () => show(k)));

        let startX = null;
        const vp = root.querySelector(".carousel__viewport");
        vp.addEventListener("pointerdown", (e) => (startX = e.clientX));
        vp.addEventListener("pointerup", (e) => {
          if (startX !== null && Math.abs(e.clientX - startX) > 40) show(i + (e.clientX < startX ? 1 : -1));
          startX = null;
        });
        const onKey = (e) => {
          if (e.key === "ArrowLeft") show(i - 1);
          if (e.key === "ArrowRight") show(i + 1);
        };
        document.addEventListener("keydown", onKey);
        show(0);
        return () => document.removeEventListener("keydown", onKey);
      }
    };
  }

  /* ---------- Decor ---------- */

  function decorView(p) {
    const item = (it) => `
        <article class="decor-item">
          ${it.image ? `<img src="${esc(it.image)}" alt="${esc(it.name)}" loading="lazy">` : ""}
          <h4>${esc(it.name)}</h4>
          ${it.note ? `<p>${esc(it.note)}</p>` : ""}
          ${it.link ? `<a class="text-link" href="${esc(it.link)}" target="_blank" rel="noopener">${it.store ? `Shop at ${esc(it.store)}` : "Find it here"} ↗</a>` : ""}
        </article>`;
    const sections = p.decor.sections
      .map(
        (s) => `
        <section class="decor-section">
          <h3 class="decor-section__title">${esc(s.title)}</h3>
          <div class="decor-grid">${s.items.map(item).join("")}</div>
        </section>`
      )
      .join("");
    return {
      label: "Decor",
      html: `
        <header class="overlay-head">
          <p class="label">Decor</p>
          <h2 class="display">Setting the Scene</h2>
          ${divider}
          <p class="lede">${esc(p.decor.intro)}</p>
        </header>
        ${sections}`
    };
  }

  /* ---------- Timeline & prep ---------- */

  function prepView(p, tab) {
    const base = `#/p/${esc(p.slug)}/prep`;
    const showGroceries = tab === "groceries";

    const timeline = p.prep.timeline
      .map(
        (phase) => `
        <section class="tl-phase">
          <h3 class="tl-phase__title">${esc(phase.title)}</h3>
          ${phase.subtitle ? `<p class="hint">${esc(phase.subtitle)}</p>` : ""}
          <ol class="tl">
            ${phase.steps.map((s) => `
              <li class="tl__step${s.key ? " tl__step--key" : ""}">
                <span class="tl__time">${esc(s.time)}</span>
                <span class="tl__what">${esc(s.what)}</span>
              </li>`).join("")}
          </ol>
          ${phase.note ? `<p class="notes"><em>Good to know:</em> ${esc(phase.note)}</p>` : ""}
        </section>`
      )
      .join("");

    const groceries = p.prep.groceries
      .map(
        (g, gi) => `
        <section class="grocery-group">
          <h3>${esc(g.section)}</h3>
          <ul>
            ${g.items.map((it, ii) => `<li><label><input type="checkbox" data-id="${gi}-${ii}"><span>${esc(it)}</span></label></li>`).join("")}
          </ul>
        </section>`
      )
      .join("");

    return {
      label: "Timeline & Prep",
      html: `
        <header class="overlay-head">
          <p class="label">Timeline &amp; Prep</p>
          <h2 class="display">The Game Plan</h2>
          ${divider}
          <p class="lede">${esc(p.prep.intro)}</p>
        </header>
        <nav class="tabs">
          <a class="tab${showGroceries ? "" : " is-active"}" href="${base}">Timeline</a>
          <a class="tab${showGroceries ? " is-active" : ""}" href="${base}/groceries">Grocery List</a>
        </nav>
        ${showGroceries
          ? `<p class="hint grocery-note">${esc(p.prep.groceryNote)}</p>
             <div class="grocery">${groceries}</div>
             <p class="grocery-actions"><button class="text-link" type="button" data-clear>Clear all checks</button></p>`
          : `<div class="timeline">${timeline}</div>`}`,
      mount: showGroceries
        ? (root) => {
            // Checks live only in this viewer's browser
            const key = `party-library:groceries:${p.slug}`;
            const boxes = [...root.querySelectorAll(".grocery input")];
            let saved = [];
            try { saved = JSON.parse(localStorage.getItem(key) || "[]"); } catch {}
            boxes.forEach((b) => (b.checked = saved.includes(b.dataset.id)));
            const save = () => {
              try { localStorage.setItem(key, JSON.stringify(boxes.filter((b) => b.checked).map((b) => b.dataset.id))); } catch {}
            };
            boxes.forEach((b) => b.addEventListener("change", save));
            root.querySelector("[data-clear]").onclick = () => {
              boxes.forEach((b) => (b.checked = false));
              save();
            };
          }
        : null
    };
  }

  /* ---------- Menu ---------- */

  function menuView(p) {
    const base = `#/p/${esc(p.slug)}/menu`;
    const hotspots = p.menu.dishes
      .map((d) => {
        const h = d.hotspot;
        return `<a class="hotspot" href="${base}/${esc(d.id)}" style="left:${h.left}%;top:${h.top}%;width:${h.width}%;height:${h.height}%" aria-label="Recipe for ${esc(d.name)}"></a>`;
      })
      .join("");
    const courses = [...new Set(p.menu.dishes.map((d) => d.course))];
    const list = courses
      .map(
        (c) => `
        <div class="dish-group">
          <p class="label">${esc(c)}</p>
          ${p.menu.dishes.filter((d) => d.course === c).map((d) => `<a class="text-link" href="${base}/${esc(d.id)}">${esc(d.name)}</a>`).join("")}
        </div>`
      )
      .join("");

    return {
      label: "Menu",
      html: `
        <header class="overlay-head overlay-head--tight">
          <p class="label">Dinner</p>
          <h2 class="display">The Menu</h2>
          <p class="hint">Click a dish to open its recipe card</p>
        </header>
        <div class="menu-figure">
          <img src="${esc(p.menu.image)}" alt="${esc(p.menu.alt)}">
          ${hotspots}
        </div>
        <div class="dish-list">${list}</div>`
    };
  }

  /* ---------- Recipe card ---------- */

  function recipeView(p, d) {
    const r = d.recipe;
    const dishes = p.menu.dishes;
    const idx = dishes.indexOf(d);
    const prev = dishes[idx - 1], next = dishes[idx + 1];
    const base = `#/p/${esc(p.slug)}/menu`;

    return {
      label: `Recipe: ${d.name}`,
      html: `
        <a class="text-link back-link" href="${base}">← Back to the menu</a>
        <article class="recipe-card">
          <div class="recipe-card__web">${webSVG(110)}</div>
          <p class="label">${esc(d.course)}</p>
          <h2 class="display">${esc(d.name)}</h2>
          ${d.subtitle ? `<p class="tagline">${esc(d.subtitle)}</p>` : ""}
          <dl class="meta">
            ${r.serves ? `<div><dt>Serves</dt><dd>${esc(r.serves)}</dd></div>` : ""}
            ${r.time ? `<div><dt>Time</dt><dd>${esc(r.time)}</dd></div>` : ""}
          </dl>
          ${divider}
          <div class="recipe-cols">
            <section>
              <h3>Ingredients</h3>
              <ul>${r.ingredients.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            </section>
            <section>
              <h3>Method</h3>
              <ol>${r.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
            </section>
          </div>
          ${r.notes ? `<p class="notes"><em>Host’s note:</em> ${esc(r.notes)}</p>` : ""}
        </article>
        <nav class="recipe-nav">
          ${prev ? `<a class="text-link" href="${base}/${esc(prev.id)}">← ${esc(prev.name)}</a>` : "<span></span>"}
          ${next ? `<a class="text-link" href="${base}/${esc(next.id)}">${esc(next.name)} →</a>` : "<span></span>"}
        </nav>`
    };
  }

  window.addEventListener("hashchange", render);
  render();
})();
