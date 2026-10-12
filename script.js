// Создаём падающие осенние листья.
const leafBox = document.getElementById("leaves");
const leafSymbols = ["🍂", "🍁", "✦"];
const colors = ["#b75d32", "#d49a35", "#8c6039", "#a33e2c"];

for (let i = 0; i < 18; i++) {
  const leaf = document.createElement("span");
  leaf.className = "leaf";
  leaf.textContent = leafSymbols[i % leafSymbols.length];

  leaf.style.setProperty("--left", `${Math.random() * 100}vw`);
  leaf.style.setProperty("--size", `${16 + Math.random() * 17}px`);
  leaf.style.setProperty("--duration", `${9 + Math.random() * 12}s`);
  leaf.style.setProperty("--delay", `${-Math.random() * 20}s`);
  leaf.style.setProperty("--drift", `${-70 + Math.random() * 140}px`);
  leaf.style.setProperty("--leaf-color", colors[i % colors.length]);

  leafBox.appendChild(leaf);
}

// Кнопка показывает дополнительное пожелание.
const button = document.getElementById("surprise");
const extra = document.getElementById("extra");

button.addEventListener("click", () => {
  const opened = extra.classList.toggle("show");
  button.setAttribute("aria-expanded", String(opened));
  button.textContent = opened
    ? "Спрятать пожелание"
    : "Открыть ещё одно пожелание ♡";
});
