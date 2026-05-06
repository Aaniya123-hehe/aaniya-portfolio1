// ============================
//  Aaniya Khairdi — Portfolio
//  script.js
// ============================

const nav    = document.getElementById("nav");
const nl     = document.getElementById("nl");
const hbg    = document.getElementById("hbg");
const stBtn  = document.getElementById("stBtn");
const secs   = document.querySelectorAll("section[id]");
const nlinks = document.querySelectorAll(".n-link");

// ---------- Smooth-scroll nav ----------
nlinks.forEach(l => {
  l.addEventListener("click", () => {
    const t = l.dataset.t;
    document.getElementById(t).scrollIntoView({ behavior: "smooth" });
    hbg.classList.remove("op");
    nl.classList.remove("op");
  });
});

// ---------- Hamburger menu ----------
hbg.addEventListener("click", () => {
  hbg.classList.toggle("op");
  nl.classList.toggle("op");
});

// ---------- Scroll events ----------
window.addEventListener("scroll", () => {
  nav.classList.toggle("sc", scrollY > 30);
  stBtn.classList.toggle("vis", scrollY > 400);
  let cur = "";
  secs.forEach(s => { if (scrollY >= s.offsetTop - 110) cur = s.id; });
  nlinks.forEach(l => { l.classList.toggle("on", l.dataset.t === cur); });
});

// ---------- Back to top ----------
stBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Reveal on scroll ----------
const ro = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add("in"); ro.unobserve(x.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".rv").forEach(e => ro.observe(e));

// ---------- Skill bars ----------
const so = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) { x.target.style.width = x.target.dataset.p + "%"; so.unobserve(x.target); }
  });
}, { threshold: 0.3 });
document.querySelectorAll(".sk-fill").forEach(f => so.observe(f));

// ---------- Typed hero quote ----------
const hq  = document.getElementById("hq");
const txt = "Driven by curiosity, shaped by experience, and committed to excellence.";
let i = 0;
const type = () => { if (i < txt.length) { hq.textContent += txt[i++]; setTimeout(type, 30); } };
setTimeout(type, 900);

// ---------- Contact form ----------
function sendForm(e) {
  e.preventDefault();
  const btn = document.getElementById("fBtn");
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    document.getElementById("fOk").classList.add("vis");
    e.target.reset();
    setTimeout(() => document.getElementById("fOk").classList.remove("vis"), 5000);
  }, 1200);
}

// ---------- Floating particles ----------
const hero = document.querySelector(".hero");
for (let j = 0; j < 16; j++) {
  const d  = document.createElement("div");
  const sz = Math.random() * 4 + 2;
  Object.assign(d.style, {
    position:     "absolute",
    width:        sz + "px",
    height:       sz + "px",
    borderRadius: "50%",
    background:   "#c4896e",
    left:         (42 + Math.random() * 52) + "%",
    top:          (5  + Math.random() * 88) + "%",
    opacity:      (0.07 + Math.random() * 0.16),
    animation:    "fl " + (6 + Math.random() * 7) + "s " + (Math.random() * 5) + "s ease-in-out infinite",
    pointerEvents:"none",
    zIndex:       0
  });
  hero.appendChild(d);
}

// ---------- Entrance animation ----------
window.addEventListener("DOMContentLoaded", () => {
  const ht = document.querySelector(".hero-txt");
  ht.style.cssText = "opacity:0;transform:translateY(22px)";
  setTimeout(() => {
    ht.style.transition = "opacity .9s ease,transform .9s ease";
    ht.style.opacity    = "1";
    ht.style.transform  = "translateY(0)";
  }, 200);

  const sb = document.querySelector(".sb");
  sb.style.cssText = "opacity:0;transform:translateX(-18px)";
  setTimeout(() => {
    sb.style.transition = "opacity .8s ease,transform .8s ease";
    sb.style.opacity    = "1";
    sb.style.transform  = "translateX(0)";
  }, 100);
});

// ---------- Dark / Light mode toggle ----------
const themeBtn  = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeIcon.className = "fa-solid fa-moon";
}
themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ---------- Lightbox ----------
const lbOverlay = document.getElementById("lbOverlay");
const lbImg     = document.getElementById("lbImg");
const lbClose   = document.getElementById("lbClose");

function openLightbox(src, alt) {
  lbImg.src = src;
  lbImg.alt = alt || "";
  lbOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lbOverlay.classList.remove("open");
  document.body.style.overflow = "";
  lbImg.src = "";
}
lbClose.addEventListener("click", closeLightbox);
lbOverlay.addEventListener("click", e => { if (e.target === lbOverlay) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
document.querySelectorAll("img.lb-able").forEach(img => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

// ---------- 3D card tilt ----------
document.querySelectorAll(".card").forEach(c => {
  c.addEventListener("mousemove", e => {
    const r = c.getBoundingClientRect();
    const x = e.clientX - r.left - r.width  / 2;
    const y = e.clientY - r.top  - r.height / 2;
    c.style.transform = `perspective(600px) rotateX(${(-y / r.height * 5).toFixed(1)}deg) rotateY(${(x / r.width * 5).toFixed(1)}deg) translateY(-4px)`;
  });
  c.addEventListener("mouseleave", () => c.style.transform = "");
});
