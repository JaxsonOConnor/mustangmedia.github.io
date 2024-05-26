document.querySelectorAll("[hover-text]").forEach((element) => {
  element.addEventListener("mouseover", () => {
    let child = document.createElement("p");
    child.classList.add("hover-text-content");
    child.innerText = element.getAttribute("hover-text");
    element.appendChild(child);
  })
  element.addEventListener("mouseout", () => {
    element.removeChild(document.querySelector(".hover-text-content"));
  })
})

var mode = localStorage.getItem("mode");

const styles = ["--bg", "--text", "--light-text", "--light-border"];

const themes = {
  "dark": [
    "#171717",
    "#EDEDED",
    "#ABABAB",
    "#343434"
  ],
  "light": [
    "#FFFFFF",
    "#171717",
    "#838383",
    "#DDDDDD"
  ]
}

const root = document.querySelector(":root");

function setTheme(themeName) {
  for (let i=0; i<styles.length; i++) {
    root.style.setProperty(styles[i], themes[themeName][i]);
  }
}

setTheme(mode);

document.querySelector("#mode-toggle").addEventListener("click", () => {
  console.log(localStorage.getItem("mode"));

  mode = mode == "dark" ? "light" : "dark";
  setTheme(mode);

  localStorage.setItem("mode", mode);

  document.querySelector("#logo-container > img").setAttribute("src", mode == "light" ? "./Images/MUSTANG_MEDIA.png" : "./Images/MUSTANG_MEDIA_REV.png");
})

