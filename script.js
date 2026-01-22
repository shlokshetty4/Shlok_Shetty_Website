// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu when clicking a link
links?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Copy contact template
const copyBtn = document.getElementById("copyTemplate");
const status = document.getElementById("copyStatus");
const textarea = document.querySelector(".template");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textarea.value);
    status.textContent = "Copied!";
    setTimeout(() => (status.textContent = ""), 1200);
  } catch {
    status.textContent = "Could not copy. Select text and copy manually.";
  }
});
