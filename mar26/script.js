const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const particlesRoot = document.getElementById("particles");

function setOpen(isOpen) {
  envelope.classList.toggle("is-open", isOpen);
  letter.classList.toggle("is-visible", isOpen);
}

function getIsOpen() {
  return envelope.classList.contains("is-open");
}

function createParticles(count = 24) {
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const effectiveCount = reducedMotion ? Math.min(8, count) : count;

  for (let index = 0; index < effectiveCount; index++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const x = Math.random() * 100;
    const y = 100 + Math.random() * 40;
    const scale = 0.4 + Math.random() * 1.2;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * duration;

    particle.style.setProperty("--x", x.toFixed(2));
    particle.style.setProperty("--y", y.toFixed(2));
    particle.style.setProperty("--s", scale.toFixed(2));
    particle.style.setProperty("--d", `${duration.toFixed(2)}s`);
    particle.style.setProperty("--delay", delay.toFixed(2));

    particlesRoot.appendChild(particle);
  }
}

envelope.addEventListener("click", () => setOpen(!getIsOpen()));
letter.addEventListener("click", () => setOpen(false));

// Keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
  if (event.key === "Enter" && document.activeElement === envelope) setOpen(!getIsOpen());
});

createParticles(28);
