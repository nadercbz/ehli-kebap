/* Ehl-i Kebap Website. Technik wie bei Bam Bird: GSAP 3.13 mit ScrollTrigger, ScrollSmoother (Maus Geräte), SplitText.
   Funktionen: Hero Slider mit langsamem Zoom, Text Wort für Wort, Parallax, Zähler, ein einziger gepinnter
   360 Grad Moment (Spezialität), Speisekarte mit Kategorien, horizontale Empfehlungen. Sonst dreht sich nichts. */
(() => {
  const I = window.INFO, K = window.KARTE;
  const touch = matchMedia("(hover: none), (pointer: coarse)").matches;
  const small = matchMedia("(max-width: 799px)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const foto = (n) => `assets/img/foto/${n}-${small ? 1200 : 2400}.webp`;
  const flat = (n, s) => `assets/img/flat/${n}-${s || (small ? 900 : 1600)}.webp`;
  const ki = (n) => `assets/img/ki/${n}-${small ? 600 : 1000}.webp`;

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ---------- Inhalte einsetzen ---------- */
  const texte = Object.assign({ adresse: `${I.strasse}, ${I.ort}` }, I);
  $$("[data-text]").forEach((e) => (e.textContent = texte[e.dataset.text] || ""));
  $$("[data-info]").forEach((e) => (e.href = I[e.dataset.info]));
  $$("img[data-foto]").forEach((img) => {
    img.src = foto(img.dataset.foto);
    img.decoding = "async";
    if (!img.closest(".hero")) img.loading = "lazy";
  });
  $$("img[data-flat]").forEach((img) => { img.src = flat(img.dataset.flat, img.closest('.gal-teaser') ? 900 : undefined); img.decoding = "async"; if (img.closest(".gal-teaser")) img.loading = "lazy"; });

  // Speisekarte
  const tabs = $(".karte__tabs"), list = $(".karte__list");
  K.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.dataset.cat = c.id;
    b.textContent = c.name;
    tabs.appendChild(b);
  });
  function dishHtml(it) {
    const d = it.foto ? window.DISH(it.foto) : null;
    const thumb = d && d.flat ? `<img class="dish__thumb" src="${flat(d.flat, 900)}" alt="" loading="lazy">` : "";
    const preise = it.p.map(([z, p]) => `<span>${z ? `<small>${z}</small>` : ""}${p}</span>`).join("");
    return `<article class="dish${thumb ? " has-thumb" : ""}">${thumb}
      <div class="dish__top"><span class="dish__n">${it.n}</span>${it.tr ? `<span class="dish__tr">${it.tr}</span>` : ""}<span class="dish__dots"></span><span class="dish__p">${preise}</span></div>
      ${it.d ? `<p class="dish__d">${it.d}</p>` : ""}</article>`;
  }
  let aktiv = null;
  function zeigeKat(id, anim = true) {
    if (id === aktiv) return;
    aktiv = id;
    const c = K.find((x) => x.id === id);
    $$("button", tabs).forEach((b) => b.classList.toggle("is-on", b.dataset.cat === id));
    const btn = $(`button[data-cat="${id}"]`, tabs);
    if (btn) tabs.scrollTo({ left: btn.offsetLeft - tabs.clientWidth / 2 + btn.clientWidth / 2, behavior: anim ? "smooth" : "auto" });
    const render = () => {
      list.innerHTML = `<header class="karte__cat"><b>${c.name}</b><i>${c.tr}</i></header>` + c.items.map(dishHtml).join("");
      if (anim && !reduce) gsap.from(list.children, { y: 24, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.035, onComplete: () => ScrollTrigger.refresh() });
      else ScrollTrigger.refresh();
    };
    if (anim && list.children.length && !reduce) gsap.to(list.children, { opacity: 0, y: -10, duration: 0.25, stagger: 0.01, onComplete: render });
    else render();
  }
  tabs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) zeigeKat(b.dataset.cat); });
  zeigeKat("doener", false);

  // Empfehlungen
  const track = $(".specials__track");
  ["koefte", "garnelen", "fischplatte", "dorade", "wolfsbarsch-offen", "lachsfilet", "meerbarben", "beilagensalat", "kuerbis-dessert", "quitten-dessert", "trilece", "baklava"].forEach((id) => {
    const d = window.DISH(id);
    if (!d) return;
    const a = document.createElement("article");
    a.className = "card";
    a.innerHTML = `<div class="card__img"><img src="${ki(id)}" alt="${d.de}" loading="lazy" decoding="async"></div>
      <div class="card__meta"><span class="card__n">${d.de}</span>${d.price ? `<span class="card__p">${d.price}</span>` : ""}</div><p class="card__tr">${d.tr}</p>`;
    track.appendChild(a);
  });

  /* ---------- Navigation ---------- */
  let smoother = null;
  if (!touch && !reduce) smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.2, effects: false });
  const head = $(".head");
  ScrollTrigger.create({ start: 120, end: "max", onToggle: (st) => head.classList.toggle("is-solid", st.isActive) });
  function goto(hash) {
    const t = $(hash);
    if (!t) return;
    if (smoother) smoother.scrollTo(t, true, "top 70px");
    else window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 60, behavior: "smooth" });
  }
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const hash = a.getAttribute("href");
    if (hash.length < 2) return;
    e.preventDefault();
    closeDrawer();
    if (a.dataset.tab) zeigeKat(a.dataset.tab, false);
    goto(hash);
  }));
  const burger = $(".nav__burger"), drawer = $(".drawer");
  function closeDrawer() { drawer.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); drawer.setAttribute("aria-hidden", "true"); }
  burger.addEventListener("click", () => {
    const open = !drawer.classList.contains("is-open");
    drawer.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
  });
  ["#ueber-uns", "#karte", "#spezialitaet", "#empfehlungen", "#kontakt"].forEach((sel) => {
    const link = $(`.nav__side a[href="${sel}"]`);
    ScrollTrigger.create({ trigger: sel, start: "top 55%", end: "bottom 45%", onToggle: (st) => link && link.classList.toggle("is-active", st.isActive) });
  });

  /* ---------- Hero Slider ---------- */
  const slides = $$(".hero__slide"), dots = $$(".hero__dots button");
  let cur = 0, timer = null;
  function zoom(i) { if (!reduce) gsap.fromTo($("img", slides[i]), { scale: 1.12 }, { scale: 1, duration: 8, ease: "power1.out" }); }
  function go(i) {
    i = (i + slides.length) % slides.length;
    slides[cur].classList.remove("is-on"); dots[cur].classList.remove("is-on");
    cur = i;
    slides[cur].classList.add("is-on"); dots[cur].classList.add("is-on");
    zoom(cur);
    restart();
  }
  function restart() { clearInterval(timer); if (!reduce) timer = setInterval(() => go(cur + 1), 6500); }
  $(".hero__arrow--l").addEventListener("click", () => go(cur - 1));
  $(".hero__arrow--r").addEventListener("click", () => go(cur + 1));
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
  document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(timer) : restart()));

  /* ---------- Loader ---------- */
  const line = $(".loader__line i");
  const heroImg = $(".hero__slide img");
  const loadImg = (img) => new Promise((res) => (img.complete && img.naturalWidth ? res() : (img.onload = img.onerror = res)));
  let n = 0;
  const step = () => { n++; line.style.transform = `scaleX(${n / 2})`; };
  Promise.all([document.fonts.ready.then(step), loadImg(heroImg).then(step)]).then(start);
  setTimeout(start, 6000);
  let started = false;
  function start() {
    if (started) return;
    started = true;
    line.style.transform = "scaleX(1)";
    build();
    const title = SplitText.create(".hero__title", { type: "chars" });
    gsap.timeline({ delay: 0.3 })
      .to(".loader", { opacity: 0, duration: 0.8, ease: "power2.out", onComplete: () => $(".loader").remove() })
      .add(() => zoom(0), "<")
      .from(title.chars, { opacity: 0, y: 30, filter: "blur(10px)", duration: 1.4, ease: "power3.out", stagger: 0.06 }, "-=0.3")
      .from(".hero__kicker, .hero__script, .hero__lead, .hero__btns, .hero__vert, .hero__dots, .hero__arrow, .head", { opacity: 0, y: 16, duration: 1.1, ease: "power3.out", stagger: 0.08 }, "-=1.1")
      .add(restart);
  }

  /* ---------- Scroll Animationen ---------- */
  function build() {
    // Hero beim Verlassen (fromTo, damit das Intro nichts verfälscht)
    gsap.fromTo(".hero__content", { yPercent: 0, opacity: 1 }, { yPercent: -18, opacity: 0, ease: "none", immediateRender: false, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero__slides", { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    // Überschriften: Schreibschrift, dann Titel Buchstabe für Buchstabe
    $$(".heading").forEach((h) => {
      const h2 = $("h2", h), sc = $(".script", h);
      const split = SplitText.create(h2, { type: "words,chars", wordsClass: "wd" });
      const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: "top 85%" } });
      if (sc) tl.from(sc, { opacity: 0, y: 14, duration: 0.9, ease: "power3.out" });
      tl.from(split.chars, { opacity: 0, y: 18, duration: 0.9, ease: "power3.out", stagger: 0.03 }, "<0.15");
    });

    // allgemeines Einblenden
    $$("[data-reveal]:not(.heading)").forEach((e) => gsap.from(e, { opacity: 0, y: 50, duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: e, start: "top 88%" } }));

    // Text Wort für Wort
    const t = $("[data-words]");
    t.innerHTML = t.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(" ");
    gsap.to($$(".w", t), { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: t, start: "top 80%", end: "bottom 50%", scrub: 1 } });

    // Parallax
    $$("[data-parallax] img").forEach((img) => gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
    $$(".tile__img").forEach((e) => gsap.fromTo(e, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: e.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
    $$(".tiles").forEach((row) => gsap.from($$(".tile", row), { opacity: 0, y: 70, duration: 1.4, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: row, start: "top 88%" } }));

    // Zähler
    $$("[data-count]").forEach((b) => {
      const ziel = Number(b.dataset.count), o = { v: 0 };
      gsap.to(o, { v: ziel, duration: 2.2, ease: "power2.out", scrollTrigger: { trigger: b, start: "top 88%" }, onUpdate: () => (b.textContent = Math.round(o.v)) });
    });
    gsap.from(".stat", { opacity: 0, y: 40, duration: 1.2, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".stats", start: "top 88%" } });

    // Der eine 360 Grad Moment: gepinnt, der Teller dreht sich einmal ganz herum und kippt in die Draufsicht
    const deg = $(".spin__deg b"), rot = $(".spin__rot");
    gsap.set(".spin__plate", { rotationX: 52, scale: 0.86 });
    gsap.set(".spin__copy--l", { opacity: 0, y: 30 });
    gsap.set(".spin__copy--r li", { opacity: 0, x: 30 });
    const spin = gsap.timeline({
      scrollTrigger: { trigger: ".spin", start: "top top", end: "+=240%", scrub: 1, pin: true, anticipatePin: 1 },
      defaults: { ease: "none" }
    });
    spin.to(rot, { rotation: 360, duration: 10, onUpdate: () => (deg.textContent = Math.round(gsap.getProperty(rot, "rotation"))) }, 0)
      .to(".spin__plate", { rotationX: 0, scale: 1, duration: 5, ease: "power2.out" }, 0)
      .to(".spin__copy--l", { opacity: 1, y: 0, duration: 1.6, ease: "power2.out" }, 0.6)
      .to(".spin__copy--r li", { opacity: 1, x: 0, duration: 1.4, ease: "power2.out", stagger: 2 }, 2.2);

    // Empfehlungen horizontal
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
    gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: ".specials", start: "top top", end: () => "+=" + dist(), scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true } });

    // Galerie Teaser: Teller gleiten versetzt herein
    gsap.from(".gal-teaser__row img", { opacity: 0, y: 70, duration: 1.3, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".gal-teaser__row", start: "top 88%" } });

    // Instagram und Kategorien
    gsap.from(".insta__grid a", { opacity: 0, y: 40, duration: 1.1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".insta__grid", start: "top 88%" } });
    gsap.from(".karte__tabs", { opacity: 0, y: 20, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".karte__tabs", start: "top 90%" } });

    window.addEventListener("load", () => ScrollTrigger.refresh());
  }
})();
