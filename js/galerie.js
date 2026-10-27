/* Galerie: alle Freisteller (Draufsicht und Seitenansicht) in zwei Fassungen: Color Graded und Original.
   Filter, Ansicht, Bearbeitung, Hintergrund, Lightbox mit Vergleichsregler. Reines JS ohne GSAP.
   Bilder und Namen aus data.js (DISHES, GALERIE). Die Tee Draufsichten sind KI und haben nur die eine Fassung. */
(() => {
  const I = window.INFO, G = window.GALERIE, DISH = window.DISH;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const small = matchMedia("(max-width: 799px)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hatOrig = (it) => !it.ki;                           // KI Bilder haben kein unbearbeitetes Original
  const src = (it, look, gross) => {
    const n = it.art === "flat" ? it.d.flat : it.d.side;
    const pfad = look === "orig" && hatOrig(it) ? "orig/" : "";
    return `assets/img/${pfad}${it.art}/${n}-${gross ? 1600 : small ? 900 : 1600}.webp`;
  };

  const DL = window.DOWNLOADS || { aktiv: false, basis: "", zip: {} };
  const dlAktiv = DL.aktiv || new URLSearchParams(location.search).has("dl");
  const slugVon = (it) => (it.art === "flat" ? it.d.flat : it.d.side);
  const dlName = (it, look) => `ehli-kebap_${slugVon(it)}_${it.art}_${it.ki ? "ki" : look === "orig" || look === "original" ? "original" : "colorgraded"}.png`;
  const dlUrl = (it, look) => DL.basis + dlName(it, look);
  const ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg>';
  $$("[data-text]").forEach((e) => (e.textContent = I[e.dataset.text] || ""));
  $$("[data-info]").forEach((e) => (e.href = I[e.dataset.info]));

  const burger = $(".nav__burger"), drawer = $(".drawer");
  burger.addEventListener("click", () => {
    const open = !drawer.classList.contains("is-open");
    drawer.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
  });

  /* Zustand, auch per Adresse (galerie.html#tee, ?ansicht=side, ?look=orig) */
  const state = { kat: "alle", view: "alle", bg: "dunkel", look: "grade" };
  try {
    const p = new URLSearchParams(location.search);
    if (["flat", "side", "alle"].includes(p.get("ansicht"))) state.view = p.get("ansicht");
    if (["grade", "orig"].includes(p.get("look"))) state.look = p.get("look");
    const h = location.hash.replace("#", "");
    if (h && G.gruppen.some((g) => g.id === h)) state.kat = h;
    const bg = localStorage.getItem("ehli-galerie-bg");
    if (["dunkel", "hell", "raster"].includes(bg)) state.bg = bg;
  } catch (e) { /* ohne Speicher weiter */ }

  const filter = $(".gal-filter");
  G.gruppen.forEach((g) => {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.kat = g.id;
    b.textContent = g.name;
    filter.appendChild(b);
  });

  const grid = $(".gal-grid");
  const items = [];
  G.gruppen.forEach((g) => g.ids.forEach((id) => {
    const d = DISH(id);
    if (!d) return;
    if (d.flat) items.push({ id, art: "flat", kat: g.id, d, ki: G.kiFlat.includes(id) });
    if (d.side) items.push({ id, art: "side", kat: g.id, d, ki: false });
  }));

  function card(it) {
    const art = it.art === "flat" ? "von oben" : "von der Seite";
    const el = document.createElement("article");
    el.className = "gal-card";
    el.dataset.view = it.art;
    el.dataset.kat = it.kat;
    el.innerHTML = `<button type="button" class="gal-card__open" aria-label="${it.d.de}, ${art}, vergrößern">
      <span class="gal-card__media"><img src="${src(it, state.look)}" alt="${it.d.de}, ${art}" loading="lazy" decoding="async"></span>
      ${it.ki ? '<span class="gal-card__tag">KI</span>' : ""}<span class="gal-card__view">${it.art === "flat" ? "Oben" : "Seite"}</span>
      <span class="gal-card__cap"><b>${it.d.de}</b><i>${it.d.tr}</i></span></button>
      ${dlAktiv ? `<a class="gal-card__dl" href="${dlUrl(it, state.look)}" download="${dlName(it, state.look)}" aria-label="${it.d.de}, ${art}: PNG in voller Auflösung herunterladen" title="PNG herunterladen, volle Auflösung">${ICON}</a>` : ""}`;
    return el;
  }

  let sichtbar = [];
  let io = null;
  function render() {
    sichtbar = items.filter((it) => (state.kat === "alle" || it.kat === state.kat) && (state.view === "alle" || it.art === state.view));
    grid.innerHTML = "";
    let lastKat = null;
    sichtbar.forEach((it, idx) => {
      if (state.kat === "alle" && it.kat !== lastKat) {
        lastKat = it.kat;
        const g = G.gruppen.find((x) => x.id === it.kat);
        const n = sichtbar.filter((x) => x.kat === it.kat).length;
        const sep = document.createElement("div");
        sep.className = "gal-sep";
        sep.innerHTML = `<b>${g.name}</b><i></i><span>${n} ${n === 1 ? "Bild" : "Bilder"}</span>`;
        grid.appendChild(sep);
      }
      const c = card(it);
      c.dataset.i = idx;
      grid.appendChild(c);
    });
    $(".gal-count b").textContent = sichtbar.length;
    if (typeof aktualisiereKatLink === "function") aktualisiereKatLink();
    if (io) io.disconnect();
    if (reduce || !("IntersectionObserver" in window)) $$(".gal-card").forEach((c) => c.classList.add("is-in"));
    else {
      io = new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add("is-in"), (Number(e.target.dataset.i) % 4) * 70); io.unobserve(e.target); }
      }), { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
      $$(".gal-card").forEach((c) => io.observe(c));
    }
  }
  // nur die Bilder tauschen (kein neuer Aufbau, die Seite springt nicht)
  function tauscheLook() {
    $$(".gal-card").forEach((c) => {
      const it = sichtbar[Number(c.dataset.i)];
      const img = $("img", c);
      const neu = src(it, state.look);
      if (!img.src.endsWith(neu)) img.src = neu;
      const dl = $(".gal-card__dl", c);
      if (dl) { dl.href = dlUrl(it, state.look); dl.setAttribute("download", dlName(it, state.look)); }
    });
  }
  function syncUi() {
    $$(".gal-filter button").forEach((b) => b.classList.toggle("is-on", b.dataset.kat === state.kat));
    $$(".gal-tools [data-view]").forEach((b) => b.classList.toggle("is-on", b.dataset.view === state.view));
    $$(".gal-tools [data-look]").forEach((b) => b.classList.toggle("is-on", b.dataset.look === state.look));
    $$(".gal-tools [data-bg]").forEach((b) => b.classList.toggle("is-on", b.dataset.bg === state.bg));
    document.body.dataset.bg = state.bg;
    lb.dataset.bg = state.bg;
  }

  filter.addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; state.kat = b.dataset.kat; syncUi(); render(); });
  $$(".gal-tools [data-view]").forEach((b) => b.addEventListener("click", () => { state.view = b.dataset.view; syncUi(); render(); }));
  $$(".gal-tools [data-look]").forEach((b) => b.addEventListener("click", () => { state.look = b.dataset.look; syncUi(); tauscheLook(); }));
  $$(".gal-tools [data-bg]").forEach((b) => b.addEventListener("click", () => {
    state.bg = b.dataset.bg;
    try { localStorage.setItem("ehli-galerie-bg", state.bg); } catch (e) { /* egal */ }
    syncUi();
  }));

  /* ---------- Lightbox mit Vergleich ---------- */
  const lb = $(".lb"), stage = $(".lb__stage"), box = $(".lb__box");
  const imgA = $(".lb__a"), imgB = $(".lb__b"), wipe = $(".lb__wipe");
  const cap = { n: $(".lb__cap b"), t: $(".lb__cap i"), c: $(".lb__count"), s: $(".lb__switch") };
  let cur = -1, last = null, mode = "grade", natur = { w: 1, h: 1 };

  // Rahmen genau auf die Größe des angezeigten Bildes setzen, damit Regler und Beschriftung am Bild sitzen
  function passe() {
    const aw = stage.clientWidth - parseFloat(getComputedStyle(stage).paddingLeft) - parseFloat(getComputedStyle(stage).paddingRight);
    const ah = stage.clientHeight - parseFloat(getComputedStyle(stage).paddingTop) - parseFloat(getComputedStyle(stage).paddingBottom);
    const k = Math.min(aw / natur.w, ah / natur.h);
    box.style.width = Math.round(natur.w * k) + "px";
    box.style.height = Math.round(natur.h * k) + "px";
  }
  window.addEventListener("resize", () => lb.classList.contains("is-open") && passe());

  function laden(url) {
    return new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = url; });
  }
  function setzeModus(m, it) {
    mode = m;
    if (m === "cmp" && !hatOrig(it)) mode = "grade";
    box.dataset.mode = mode;
    $$(".lb__look [data-look]").forEach((b) => {
      b.classList.toggle("is-on", (b.dataset.look === "cmp" ? "cmp" : b.dataset.look) === mode);
      b.hidden = !hatOrig(it);
    });
    $(".lb__look").hidden = !hatOrig(it);
  }
  const dls = $(".lb__dls");
  function fuelleDownloads(it) {
    if (!dlAktiv) { dls.hidden = true; return; }
    dls.hidden = false;
    const px = it.ki ? "4096" : "4800";
    const link = (look, text) => `<a href="${dlUrl(it, look)}" download="${dlName(it, look)}">${ICON}${text}</a>`;
    dls.innerHTML = `<span class="lb__dlt">Download · PNG mit Transparenz · ${px} px</span>` +
      (hatOrig(it) ? link("grade", "Color Graded") + link("orig", "Original") : link("grade", "Herunterladen (KI)"));
  }
  function zeige(i) {
    if (!sichtbar.length) return;
    cur = (i + sichtbar.length) % sichtbar.length;
    const it = sichtbar[cur];
    box.classList.remove("is-ready");
    const urlG = src(it, "grade", true), urlO = src(it, "orig", true);
    setzeModus(mode === "cmp" || mode === "orig" || mode === "grade" ? mode : "grade", it);
    Promise.all([laden(urlG), hatOrig(it) ? laden(urlO) : null]).then(([g]) => {
      if (sichtbar[cur] !== it || !g) return;
      natur = { w: g.naturalWidth, h: g.naturalHeight };
      const art = it.art === "flat" ? "von oben" : "von der Seite";
      imgA.src = urlG; imgB.src = hatOrig(it) ? urlO : urlG;
      imgA.alt = `${it.d.de}, ${art}`;
      box.style.setProperty("--pos", "50%");
      wipe.setAttribute("aria-valuenow", "50");
      anzeigeModus(it);
      passe();
      requestAnimationFrame(() => box.classList.add("is-ready"));
    });
    fuelleDownloads(it);
    cap.n.textContent = it.d.de + (it.ki ? "  ·  KI" : "");
    cap.t.textContent = it.d.tr;
    cap.c.textContent = `${cur + 1} / ${sichtbar.length}`;
    const andere = it.art === "flat" ? (it.d.side ? "side" : null) : (it.d.flat ? "flat" : null);
    cap.s.hidden = !andere;
    cap.s.textContent = andere === "side" ? "Von der Seite ansehen" : "Von oben ansehen";
    cap.s.onclick = () => {
      let k = sichtbar.findIndex((x) => x.id === it.id && x.art === andere);
      if (k < 0) { state.view = "alle"; syncUi(); render(); k = sichtbar.findIndex((x) => x.id === it.id && x.art === andere); }
      zeige(k);
    };
    [cur - 1, cur + 1].forEach((n) => { const nb = sichtbar[(n + sichtbar.length) % sichtbar.length]; if (nb) laden(src(nb, mode === "orig" ? "orig" : "grade", true)); });
  }
  // zeigt je nach Modus das passende Bild (grade oder orig) bzw. beide (cmp)
  function anzeigeModus(it) {
    // Basisbild (A) ist im Modus "orig" das Original, sonst Color Graded. In "cmp" liegt das Original links als Deckschicht (B).
    imgA.src = src(it, mode === "orig" ? "orig" : "grade", true);
    imgB.src = src(it, "orig", true);
  }
  function wechsleModus(m) {
    const it = sichtbar[cur];
    if (!it) return;
    setzeModus(m, it);
    anzeigeModus(it);
  }
  $$(".lb__look [data-look]").forEach((b) => b.addEventListener("click", () => wechsleModus(b.dataset.look)));

  function oeffne(i) {
    last = document.activeElement;
    mode = state.look === "orig" ? "orig" : "grade";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-open");
    zeige(i);
    $(".lb__close").focus({ preventScroll: true });
  }
  function schliesse() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-open");
    box.classList.remove("is-ready");
    if (last) last.focus({ preventScroll: true });
  }
  grid.addEventListener("click", (e) => { if (e.target.closest(".gal-card__dl")) return; const c = e.target.closest(".gal-card"); if (c) oeffne(Number(c.dataset.i)); });
  $(".lb__close").addEventListener("click", schliesse);
  $(".lb__nav--l").addEventListener("click", () => zeige(cur - 1));
  $(".lb__nav--r").addEventListener("click", () => zeige(cur + 1));
  stage.addEventListener("click", (e) => { if (e.target === stage) schliesse(); });

  // Regler ziehen
  let zieht = false;
  function setzePos(clientX) {
    const r = box.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    box.style.setProperty("--pos", p + "%");
    wipe.setAttribute("aria-valuenow", String(Math.round(p)));
  }
  box.addEventListener("pointerdown", (e) => {
    if (mode !== "cmp") return;
    zieht = true;
    box.setPointerCapture(e.pointerId);
    setzePos(e.clientX);
  });
  box.addEventListener("pointermove", (e) => { if (zieht) setzePos(e.clientX); });
  const losgelassen = () => { zieht = false; };
  box.addEventListener("pointerup", losgelassen);
  box.addEventListener("pointercancel", losgelassen);

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") schliesse();
    else if (e.target === wipe && mode === "cmp" && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const aktuell = parseFloat(getComputedStyle(box).getPropertyValue("--pos")) || 50;
      const neu = Math.max(0, Math.min(100, aktuell + (e.key === "ArrowLeft" ? -4 : 4)));
      box.style.setProperty("--pos", neu + "%");
      wipe.setAttribute("aria-valuenow", String(Math.round(neu)));
      e.preventDefault();
    }
    else if (e.key === "ArrowLeft") zeige(cur - 1);
    else if (e.key === "ArrowRight") zeige(cur + 1);
  });
  // Wischen zum Blättern (nicht im Vergleichsmodus, dort gehört die Geste dem Regler)
  let x0 = null, y0 = 0;
  stage.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (x0 == null || mode === "cmp") { x0 = null; return; }
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) zeige(cur + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });

  /* ---------- Download Bereich: alles auf einmal, nach Kategorie, einzeln ---------- */
  let manifest = null;
  const fmt = (b) => (b >= 1e9 ? (b / 1e9).toFixed(1).replace(".", ",") + " GB" : Math.round(b / 1e6) + " MB");
  const zipUrl = (n) => DL.basis + n;
  const zipLink = (n, text, extra = "") => {
    const z = manifest.zips[n];
    return z ? `<a href="${zipUrl(n)}" download="${n}">${ICON}${text}<small>${extra}${fmt(z.bytes)}</small></a>` : "";
  };
  const panel = $(".dl-panel"), openBtn = $(".dl-open"), dlTop = $(".dl-top");
  function baueDownloadBereich() {
    const M = manifest;
    const gross = (n, titel, sub) => (M.zips[n] ? `<a href="${zipUrl(n)}" download="${n}"><b>${ICON}${titel}</b><i>${sub}</i><em>ZIP · ${fmt(M.zips[n].bytes)} · ${M.zips[n].dateien.length} Dateien</em></a>` : "");
    const kat = M.gruppen.map((g) => {
      const anz = items.filter((it) => it.kat === g.id).length;
      return `<li><span>${g.name}<i>${anz} Bilder</i></span>${zipLink(`ehli-kebap_${g.id}_colorgraded.zip`, "Color Graded")}${zipLink(`ehli-kebap_${g.id}_original.zip`, "Original")}</li>`;
    }).join("");
    panel.innerHTML = `<div class="dl-panel__head"><div><b>Download in voller Auflösung</b><span>PNG mit Transparenz, 4800 × 4800 Pixel. Die ZIP Dateien sind unkomprimiert und lassen sich direkt entpacken.</span></div>
        <button type="button" class="dl-panel__close" aria-label="Schließen">×</button></div>
      <div class="dl-block"><h3>Alles auf einmal</h3><div class="dl-big">
        ${gross("ehli-kebap_alle_komplett.zip", "Alle Bilder", "Color Graded und Original")}
        ${gross("ehli-kebap_alle_colorgraded.zip", "Nur Color Graded", "Produktfoto Look")}
        ${gross("ehli-kebap_alle_original.zip", "Nur Original", "Nur freigestellt")}</div></div>
      <div class="dl-block"><h3>Nach Kategorie</h3><ul class="dl-kat">${kat}</ul></div>
      <p class="dl-hint">Einzelne Bilder: Pfeil unten rechts an jeder Karte oder in der Großansicht. Die Draufsichten der Tees sind KI erzeugt (4096 Pixel) und nur als Color Graded Fassung enthalten.</p>`;
    $(".dl-panel__close", panel).addEventListener("click", () => schalte(false));
    dlTop.hidden = false;
    $$("[data-open-dl]").forEach((a) => (a.hidden = false));
    aktualisiereKatLink();
  }
  function schalte(auf) {
    if (auf === undefined) auf = panel.hidden;
    panel.hidden = !auf;
    openBtn.setAttribute("aria-expanded", String(auf));
    $("span", openBtn).textContent = auf ? "Download schließen" : "Alle herunterladen";
    if (auf) panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  }
  openBtn.addEventListener("click", () => schalte());
  $$("[data-open-dl]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    drawer.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    schalte(true);
  }));
  // Kategorie gewaehlt: direkt darunter die ZIP Links dieser Kategorie
  function aktualisiereKatLink() {
    const el = $(".gal-katdl");
    if (!manifest || state.kat === "alle") { el.hidden = true; return; }
    const g = G.gruppen.find((x) => x.id === state.kat);
    el.hidden = false;
    el.innerHTML = `<span>${g.name} komplett:</span>${zipLink(`ehli-kebap_${g.id}_colorgraded.zip`, "Color Graded ZIP")}${zipLink(`ehli-kebap_${g.id}_original.zip`, "Original ZIP")}`;
  }
  if (dlAktiv) {
    fetch("downloads_manifest.json", { cache: "no-cache" }).then((r) => r.json()).then((m) => { manifest = m; baueDownloadBereich(); }).catch(() => { /* ohne Manifest bleiben nur die Einzel Downloads */ });
  }

  window.addEventListener("hashchange", () => {
    const h = location.hash.replace("#", "");
    const neu = G.gruppen.some((g) => g.id === h) ? h : "alle";
    if (neu !== state.kat) { state.kat = neu; syncUi(); render(); }
  });

  syncUi();
  render();
})();
