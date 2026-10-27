/* Digitales Menüboard: vier Seiten (Grill und Meer, Beilagen, Desserts, Tee) mit den fotografierten Gerichten.
   Links groß das jeweilige Gericht (sanfte Überblendung, keine Drehung), rechts die Liste. Läuft endlos von selbst. */
(() => {
  const D = window.DISHES, K = window.KARTE;
  const dish = (id) => window.DISH(id);
  const preis = (d) => d.price || "";
  const stage = document.querySelector(".stage");
  const embed = new URLSearchParams(location.search).has("embed");
  if (embed) document.body.classList.add("is-embed");

  function fit() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  }
  fit();
  window.addEventListener("resize", fit);
  if (!embed) document.addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  });

  const seite = (tr, de, ids) => ({ tr, de, items: ids.map(dish).filter(Boolean) });
  const pages = [
    seite("Izgara", "Grill und Meer", ["koefte", "garnelen", "fischplatte", "dorade", "wolfsbarsch", "lachsfilet", "meerbarben"]),
    seite("Garnitür", "Salat und Beilagen", ["beilagensalat", "gemuese", "rote-zwiebel-kartoffeln", "bratkartoffeln", "rosmarin-kartoffeln", "kindermenue"]),
    seite("Tatlı", "Desserts", ["kuerbis-dessert", "quitten-dessert", "trilece", "baklava"]),
    seite("Çay", "Tee", ["schwarztee", "kraeutertee", "fruechtetee", "kamillentee", "manuka", "pfefferminze"])
  ];
  const list = document.querySelector(".b-list");
  const pageBars = document.querySelector(".b-pages");
  const trEl = document.querySelector(".b-cat__tr"), deEl = document.querySelector(".b-cat__de");
  const plateEl = document.querySelector(".b-plate"), rot = document.querySelector(".b-plate__rot"), img = document.querySelector(".b-plate__img");
  const nameB = document.querySelector(".b-feature__name b"), nameI = document.querySelector(".b-feature__name i");
  pages.forEach(() => pageBars.insertAdjacentHTML("beforeend", "<span><i></i></span>"));
  const bars = Array.from(pageBars.querySelectorAll("i"));

  // Bilder vorladen
  const src = (it) => it.flat ? `assets/img/flat/${it.flat}-1600.webp` : `assets/img/side/${it.side}-1600.webp`;
  pages.forEach((p) => p.items.forEach((it) => { const im = new Image(); im.src = src(it); }));


  const PRO_TELLER = 5.2;
  let pageIdx = 0;

  function showPage(pi) {
    const p = pages[pi];
    const tl = gsap.timeline();
    const old = Array.from(list.children);
    if (old.length) tl.to(old, { opacity: 0, x: 30, duration: 0.45, stagger: 0.03, ease: "power2.in" });
    tl.to([trEl, deEl], { opacity: 0, y: -10, duration: 0.35 }, 0);
    tl.add(() => {
      list.innerHTML = "";
      list.classList.toggle("is-dense", p.items.length > 6);
      p.items.forEach((it) => {
        const li = document.createElement("li");
        li.className = "b-item";
        li.innerHTML = `<div class="b-item__name">${it.de}<span class="b-item__tr">${it.tr}</span></div><div class="b-item__price">${preis(it)}</div><div class="b-item__desc">${it.kurz}</div>`;
        list.appendChild(li);
      });
      trEl.textContent = p.tr;
      deEl.textContent = p.de;
    });
    tl.add(() => gsap.fromTo(list.children, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.06, ease: "power3.out" }));
    tl.to([trEl, deEl], { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "<");

    bars.forEach((b, k) => gsap.set(b, { scaleX: k < pi ? 1 : 0 }));
    const dauer = p.items.length * PRO_TELLER;
    gsap.fromTo(bars[pi], { scaleX: 0 }, { scaleX: 1, duration: dauer + 0.9, ease: "none" });

    p.items.forEach((it, k) => tl.add(() => feature(it, k), 0.9 + k * PRO_TELLER));
    tl.add(() => { pageIdx = (pi + 1) % pages.length; if (pageIdx === 0) bars.forEach((b) => gsap.set(b, { scaleX: 0 })); showPage(pageIdx); }, 0.9 + dauer);
  }

  function feature(it, k) {
    Array.from(list.children).forEach((li, j) => li.classList.toggle("is-on", j === k));
    gsap.timeline()
      .to([plateEl, ".b-feature__name"], { opacity: 0, y: 12, duration: 0.5, ease: "power2.in" })
      .add(() => { img.src = src(it); img.alt = it.de; nameB.textContent = it.de; nameI.textContent = it.tr; })
      .fromTo(plateEl, { opacity: 0, y: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" })
      .fromTo(".b-feature__name", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "<0.3");
  }

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => showPage(0));
})();
