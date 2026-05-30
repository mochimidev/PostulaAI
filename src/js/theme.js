const storageKey = "cv-compass-theme";

export function initTheme(toggleButton, onChange) {
  const storedTheme = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);
  toggleButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    onChange?.(nextTheme);
  });
}

export function getChartTheme() {
  const styles = getComputedStyle(document.documentElement);
  const primary = styles.getPropertyValue("--primary").trim();
  const text = styles.getPropertyValue("--muted").trim();
  const border = styles.getPropertyValue("--border").trim();
  return {
    fill: colorWithAlpha(primary, 0.18),
    stroke: primary,
    text,
    grid: border
  };
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);
}

function colorWithAlpha(color, alpha) {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const bigint = parseInt(hex, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return color;
}
