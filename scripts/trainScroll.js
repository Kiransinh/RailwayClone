let trainblue = document.getElementById("trainblue");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  trainblue.style.marginTop = value * 2.5 + "px";
});
