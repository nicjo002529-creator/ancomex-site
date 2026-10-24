(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const fmt = new Intl.NumberFormat("fr-BE", { style: "currency", currency: "EUR" });
  const FREE_SHIP = 250;
  const ORDER_EMAIL = "info@ancomex.com";
  const products = window.PRODUCTS;
  const byId = Object.fromEntries(products.map(p => [p.id, p]));
  const catName = Object.fromEntries(window.CATEGORIES.map(c => [c.id, c.name]));

  const state = { cat: "all", q: "", sort: "pop", promoOnly: false };

  // ---------- Storage (best effort) ----------
  const store = {
    get() { try { return JSON.parse(localStorage.getItem("ancomex-cart")) || {}; } catch { return {}; } },
    set(v) { try { localStorage.setItem("ancomex-cart", JSON.stringify(v)); } catch { /* ignore */ } }
  };
  let cart = store.get();
  for (const id of Object.keys(cart)) if (!byId[id]) delete cart[id];

  // ---------- Rendering helpers ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = name => `<svg class="ic" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const discount = p => (p.old ? p.old - p.price : 0);

  function productCard(p) {
    const tags = [];
    if (p.old) tags.push(`<span class="tag">-${fmt.format(discount(p)).replace(/\s/g, " ")}</span>`);
    if (p.tag) tags.push(`<span class="tag tag--dark">${esc(p.tag)}</span>`);
    return `
      <article class="card product reveal">
        <div class="product__media">
          <img src="${p.img}" alt="${esc(p.name)}" loading="lazy" decoding="async" width="400" height="400">
          ${tags.length ? `<div class="product__tags">${tags.join("")}</div>` : ""}
        </div>
        <div class="product__body">
          <span class="product__brand">${esc(p.brand)}</span>
          <h3 class="product__name">${esc(p.name)}</h3>
          ${p.desc ? `<p class="product__desc">${esc(p.desc)}</p>` : ""}
          <span class="product__stock">${icon("check")}En stock</span>
          <div class="product__foot">
            <p class="price">${p.old ? `<s><span class="sr-only">Prix le plus bas des 30 derniers jours </span>${fmt.format(p.old)}</s>` : ""}${fmt.format(p.price)}</p>
            <button class="add" data-add="${p.id}" aria-label="Ajouter ${esc(p.name)} au panier">${icon("plus")}</button>
          </div>
        </div>
      </article>`;
  }

  // ---------- Categories ----------
  function renderCats() {
    $("#cats").innerHTML = window.CATEGORIES.map(c => {
      const n = products.filter(p => p.cat === c.id).length;
      return `<button class="cat reveal" data-cat="${c.id}">
        ${icon(c.icon)}
        <span><h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p><span class="cat__count">${n} produit${n > 1 ? "s" : ""}</span></span>
      </button>`;
    }).join("");
    $("#footCats").innerHTML = window.CATEGORIES.map(c => `<li><button data-cat="${c.id}">${esc(c.name)}</button></li>`).join("");
    const chips = [{ id: "all", name: "Tout" }, ...window.CATEGORIES, { id: "promo", name: "En promo" }];
    $("#chips").innerHTML = chips.map(c => `<button class="chip" data-chip="${c.id}" aria-pressed="false">${esc(c.name)}</button>`).join("");
  }

  function renderFeatured() {
    $("#featured").innerHTML = products.filter(p => p.featured).map(productCard).join("");
  }

  // ---------- Catalog ----------
  const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function renderGrid() {
    const q = norm(state.q.trim());
    let list = products.filter(p =>
      (state.cat === "all" || p.cat === state.cat) &&
      (!state.promoOnly || p.old) &&
      (!q || norm(`${p.name} ${p.brand} ${catName[p.cat]}`).includes(q))
    );
    if (state.sort === "asc") list = [...list].sort((a, b) => a.price - b.price);
    if (state.sort === "desc") list = [...list].sort((a, b) => b.price - a.price);
    if (state.sort === "promo") list = [...list].sort((a, b) => discount(b) - discount(a));

    $("#grid").innerHTML = list.map(productCard).join("");
    $("#empty").hidden = list.length > 0;
    $("#resultCount").textContent = `${list.length} produit${list.length > 1 ? "s" : ""}${state.cat !== "all" ? " · " + catName[state.cat] : ""}${state.promoOnly ? " · en promo" : ""}`;
    const active = state.promoOnly ? "promo" : state.cat;
    document.querySelectorAll("[data-chip]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.chip === active)));
    observeReveal();
  }

  function setCat(id, scroll = true) {
    if (id === "promo") { state.promoOnly = true; state.cat = "all"; }
    else { state.promoOnly = false; state.cat = id; }
    renderGrid();
    if (scroll) $("#catalogue").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  // ---------- Cart ----------
  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const total = () => Object.entries(cart).reduce((s, [id, q]) => s + byId[id].price * q, 0);

  function renderCart() {
    const n = count();
    const badge = $("#cartCount");
    badge.textContent = n;
    $("#cartBtn").setAttribute("aria-label", `Ouvrir le panier, ${n} article${n > 1 ? "s" : ""}`);
    const entries = Object.entries(cart);
    $("#cartItems").innerHTML = entries.length ? entries.map(([id, q]) => {
      const p = byId[id];
      return `<div class="line">
        <img src="${p.img}" alt="" loading="lazy">
        <div>
          <div class="line__name">${esc(p.name)}</div>
          <div class="line__price">${fmt.format(p.price * q)}</div>
          <div class="qty" role="group" aria-label="Quantité">
            <button data-dec="${id}" aria-label="Retirer un ${esc(p.name)}">${icon("minus")}</button>
            <span>${q}</span>
            <button data-inc="${id}" aria-label="Ajouter un ${esc(p.name)}">${icon("plus")}</button>
          </div>
        </div>
        <button class="line__remove" data-del="${id}" aria-label="Supprimer ${esc(p.name)} du panier">${icon("x")}</button>
      </div>`;
    }).join("") : `<div class="cart-empty">${icon("cart")}<p>Votre panier est vide.</p></div>`;

    const t = total();
    $("#cartTotal").textContent = fmt.format(t);
    const left = FREE_SHIP - t;
    $("#shipBar").innerHTML = (left > 0
      ? `Plus que <strong>${fmt.format(left)}</strong> pour la livraison gratuite.`
      : `<strong>Livraison gratuite</strong> incluse.`) +
      `<div class="ship__bar"><i style="width:${Math.min(100, (t / FREE_SHIP) * 100)}%"></i></div>`;
    $("#checkoutBtn").disabled = n === 0;
    store.set(cart);
  }

  function add(id, btn) {
    cart[id] = (cart[id] || 0) + 1;
    renderCart();
    const badge = $("#cartCount");
    badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
    toast(`${byId[id].name} ajouté au panier · ${count()} article${count() > 1 ? "s" : ""}`);
    if (btn) {
      btn.classList.add("done"); btn.innerHTML = icon("check");
      setTimeout(() => { btn.classList.remove("done"); btn.innerHTML = icon("plus"); }, 1200);
    }
  }

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // Drawer open/close with focus management
  const drawer = $("#cart"), scrim = $("#scrim");
  let lastFocus = null;
  function openCart() {
    lastFocus = document.activeElement;
    scrim.hidden = false; requestAnimationFrame(() => scrim.classList.add("show"));
    drawer.classList.add("open"); drawer.removeAttribute("inert"); drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#cartClose").focus();
  }
  function closeCart() {
    scrim.classList.remove("show"); setTimeout(() => (scrim.hidden = true), 250);
    drawer.classList.remove("open"); drawer.setAttribute("inert", ""); drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocus?.focus();
  }

  // ---------- Forms ----------
  function validate(form) {
    let ok = true, first = null;
    form.querySelectorAll("[required]").forEach(input => {
      const field = input.closest(".field");
      const err = field.querySelector(".err");
      const valid = input.type === "checkbox" ? input.checked : input.value.trim() &&(input.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value));
      field.classList.toggle("invalid", !valid);
      input.setAttribute("aria-invalid", String(!valid));
      if (err) { err.hidden = !!valid; if (!err.id) err.id = input.id + "-err"; input.setAttribute("aria-describedby", err.id); }
      if (!valid) { ok = false; first ??= input; }
    });
    first?.focus();
    return ok;
  }
  const mailto = (subject, body) => `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.currentTarget;
    if (!validate(f)) return;
    location.href = mailto(`Demande de contact — ${f.name.value}`, `${f.message.value}\n\n${f.name.value}\n${f.email.value}`);
    toast("Votre messagerie s'ouvre avec le message prêt.");
  });

  const dlg = $("#orderDialog");
  $("#checkoutBtn").addEventListener("click", () => {
    $("#orderSummary").innerHTML = Object.entries(cart).map(([id, q]) =>
      `<div><span>${q} × ${esc(byId[id].name)}</span><strong>${fmt.format(byId[id].price * q)}</strong></div>`).join("") +
      `<div><span>Livraison</span><strong>${total() >= FREE_SHIP ? "Gratuite" : "Selon le poids, confirmée avant paiement"}</strong></div>` +
      `<div><span><strong>Total TTC</strong></span><strong>${fmt.format(total())}</strong></div>`;
    closeCart();
    dlg.showModal();
    $("#o-name").focus();
  });
  $("#orderClose").addEventListener("click", () => dlg.close());
  $("#orderForm").addEventListener("submit", e => {
    e.preventDefault();
    if (!validate(e.currentTarget)) return;
    const lines = Object.entries(cart).map(([id, q]) => `- ${q} x ${byId[id].name} : ${fmt.format(byId[id].price * q)}`).join("\n");
    const body = `Bonjour,\n\nJe souhaite commander :\n${lines}\n\nTotal TTC : ${fmt.format(total())}\n\nNom : ${$("#o-name").value}\nE-mail : ${$("#o-email").value}\nTéléphone : ${$("#o-phone").value}\nAdresse de livraison :\n${$("#o-addr").value}\n\nJ'ai lu et accepté les conditions générales de vente.\n`;
    location.href = mailto(`Commande web — ${$("#o-name").value}`, body);
    dlg.close();
    toast("Votre messagerie s'ouvre avec la commande prête à envoyer.");
  });

  // ---------- Events ----------
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-add],[data-inc],[data-dec],[data-del],[data-cat],[data-chip],[data-filter-promo]");
    if (!t) return;
    const d = t.dataset;
    if (d.add) add(d.add, t);
    else if (d.inc) { cart[d.inc]++; renderCart(); }
    else if (d.dec) { if (--cart[d.dec] <= 0) delete cart[d.dec]; renderCart(); }
    else if (d.del) { delete cart[d.del]; renderCart(); $("#cartClose").focus(); }
    else if (d.cat) setCat(d.cat);
    else if (d.chip) setCat(d.chip, false);
    else if ("filterPromo" in d) { e.preventDefault(); setCat("promo"); }
  });
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  scrim.addEventListener("click", closeCart);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && drawer.classList.contains("open")) closeCart();
    if (e.key === "Tab" && drawer.classList.contains("open")) {
      const f = [...drawer.querySelectorAll("button:not([disabled]), a[href]")];
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
      else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
    }
  });
  let qTimer;
  $("#q").addEventListener("input", e => { clearTimeout(qTimer); qTimer = setTimeout(() => { state.q = e.target.value; renderGrid(); }, 150); });
  $("#sort").addEventListener("change", e => { state.sort = e.target.value; renderGrid(); });

  const nav = $("#nav"), toggle = $("#navToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });

  // Image fallback: keep layout if a remote image fails
  document.addEventListener("error", e => {
    if (e.target.tagName === "IMG" && !e.target.dataset.fallback) {
      e.target.dataset.fallback = "1";
      e.target.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#F1F5F9"/><text x="50" y="55" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748B">ANCOMEX</text></svg>');
    }
  }, true);

  // Reveal on scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -40px" }) : null;
  function observeReveal() {
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in"));
  }

  // ---------- Init ----------
  $("#year").textContent = new Date().getFullYear();
  renderCats();
  renderFeatured();
  renderGrid();
  renderCart();
})();
