console.log("JS LOADED");

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const nav = document.querySelector(".nav-item");
const supercar = document.querySelector(".supercar");
const headline = document.querySelector(".headline");

const tl = gsap.timeline();

tl.fromTo(
  hero,
  { height: "0%" },
  { height: "60%", duration: 1, ease: "power2.out" }
)
.fromTo(
  hero,
  { width: "100%" },
  { width: "80%", duration: 1.2, ease: "power2.inOut" }
)
.fromTo(
  slider,
  { x: "-100%" },
  { x: "0%", duration: 1.2, ease: "power2.inOut" },
  "-=1.2"
)
.fromTo(
    ".nav-item",
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration:0.5, ease: "power2.out"}
)
.fromTo(
    supercar,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration:0.5, ease: "power2.out"},
    "-=0.5"
)
.fromTo(
  ".subheadline",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 },
  "-=0.4"
)
.fromTo(
  ".cta",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 },
  "-=0.3"
);

/* 2️⃣ Observer (WHEN) */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const animName = entry.target.dataset.anim;

    if (entry.isIntersecting) {
      // Element enters view
      if (animations[animName]) {
        animations[animName](entry.target);
      }
    } else {
      // Element leaves view: Reset to starting position
      // This allows it to animate "UP" again next time
      gsap.set(entry.target, { opacity: 0, y: 40 });
    }
  });
}, {
  threshold: 0.1 // Triggers earlier for better reliability
});

/* 3️⃣ Register elements (WHAT) */
// This looks for class="reveal" - make sure it's in your HTML!
document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});







console.log("custom anims loaded");

/* 1️⃣ Animation map (HOW) */
const animations = {
  fadeUp: el => gsap.fromTo(el,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: .5, ease: "power2.out" }
  ),

  slideLeft: el => gsap.fromTo(el,
    { opacity: 0, x: -60 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
  ),

  zoomIn: el => gsap.fromTo(el,
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
  ),
};


const cta = document.querySelector('.cta');

cta.addEventListener('mouseenter', () => {
    gsap.to(cta, { scale: 1.1, duration: 0.3 });
});

cta.addEventListener('mouseleave', () => {
    gsap.to(cta, { scale: 1, duration: 0.3 });
});








const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const pageId = item.dataset.page;

    // update nav active state
    navItems.forEach(n => n.classList.remove("active"));
    item.classList.add("active");

    // switch pages
    pages.forEach(page => page.classList.add("hidden"));
    document.getElementById(pageId)?.classList.remove("hidden");
  });
});
