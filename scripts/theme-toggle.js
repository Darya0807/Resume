const themeToggle = document.getElementById("themeToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const iconContainer = document.createElement("div");
iconContainer.className = "theme-icon-container";

themeToggle.innerHTML = "";
themeToggle.appendChild(iconContainer);

const themeIcons = {
  light: `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 17.0533C27.7903 19.3229 26.9385 21.4859 25.5443 23.2891C24.1502 25.0922 22.2713 26.4611 20.1276 27.2354C17.9839 28.0097 15.664 28.1575 13.4393 27.6615C11.2147 27.1654 9.17733 26.0461 7.56564 24.4344C5.95395 22.8227 4.83459 20.7853 4.33855 18.5607C3.84251 16.336 3.99029 14.0161 4.76462 11.8724C5.53894 9.72868 6.90778 7.84982 8.71096 6.45567C10.5141 5.06152 12.6771 4.20974 14.9467 4C13.6179 5.79769 12.9785 8.0126 13.1447 10.2419C13.311 12.4712 14.2718 14.5667 15.8525 16.1475C17.4333 17.7282 19.5288 18.689 21.7581 18.8553C23.9874 19.0215 26.2023 18.3821 28 17.0533Z" 
          stroke="#6750A4" 
          stroke-width="3" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          />
        </svg>
    `,
  dark: `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_49_49)">
          <path d="M15.9999 1.33334V4.00001M15.9999 28V30.6667M5.62659 5.62668L7.51992 7.52001M24.4799 24.48L26.3733 26.3733M1.33325 16H3.99992M27.9999 16H30.6666M5.62659 26.3733L7.51992 24.48M24.4799 7.52001L26.3733 5.62668M22.6666 16C22.6666 19.6819 19.6818 22.6667 15.9999 22.6667C12.318 22.6667 9.33325 19.6819 9.33325 16C9.33325 12.3181 12.318 9.33334 15.9999 9.33334C19.6818 9.33334 22.6666 12.3181 22.6666 16Z" 
          stroke="#D54A4A" 
          stroke-width="3" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          />
          </g>
          <defs>
          <clipPath id="clip0_49_49">
          <rect width="32" height="32" fill="white"/>
          </clipPath>
          </defs>
        </svg>
    `,
};

const currentTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");

if (currentTheme === "dark") {
  document.body.setAttribute("data-theme", "dark");
  iconContainer.innerHTML = themeIcons.dark;
} else {
  document.body.removeAttribute("data-theme");
  iconContainer.innerHTML = themeIcons.light;
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    iconContainer.innerHTML = themeIcons.light;
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    iconContainer.innerHTML = themeIcons.dark;
  }
});

prefersDarkScheme.addEventListener("change", (e) => {
  if (localStorage.getItem("theme") === null) {
    if (e.matches) {
      document.body.setAttribute("data-theme", "dark");
      iconContainer.innerHTML = themeIcons.dark;
    } else {
      document.body.removeAttribute("data-theme");
      iconContainer.innerHTML = themeIcons.light;
    }
  }
});
