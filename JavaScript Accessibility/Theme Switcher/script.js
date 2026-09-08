const themes = [
  {
    name: "dark",
    message: "The night is yours — Dark theme is on!",
  },
  {
    name: "light",
    message: "Hello sunshine — Light theme is on!",
  },
];

const darkTheme = document.getElementById("theme-dark");
const lightTheme = document.getElementById("theme-light");
const themeDropdown = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector('[aria-live="polite"]');
const themeSwitcherBtn = document.getElementById("theme-switcher-button");

themeSwitcherBtn.addEventListener("click", () => {
  themeDropdown.hidden = !themeDropdown.hidden;
  themeSwitcherBtn.setAttribute(
    "aria-expanded",
    themeDropdown.hidden ? "false" : "true",
  );
});

darkTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-dark");

  liveRegion.textContent = themes[0].message;

  themeDropdown.hidden = true;
  themeSwitcherBtn.setAttribute("aria-expanded", "false");
});
lightTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");
  liveRegion.textContent = themes[1].message;

  themeDropdown.hidden = true;
  themeSwitcherBtn.setAttribute("aria-expanded", "false");
});
