document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button");
  const popUp = document.querySelector(".pop-up");
  const closeButton = document.querySelector(".close-button");
  const overlay = document.createElement("div");

  overlay.className = "overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: none;
  `;
  document.body.appendChild(overlay);

  button.addEventListener("click", function () {
    overlay.style.display = "block";
    popUp.style.visibility = "visible";
    popUp.style.zIndex = "101";
    document.body.style.overflow = "hidden";
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
    popUp.style.visibility = "hidden";
    document.body.style.overflow = "";
  });
});
