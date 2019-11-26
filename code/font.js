// app.js
function Loader() {
  let css = document.createElement("link")
  css.href = "./fonts.css"
  css.id = "framerCustomFont"
  document.head.appendChild(css)
}

if (document.getElementById("framerCustomFont") === null) {
  console.log("Loading CSS...")
  Loader()
  console.log("CSS Loaded!")
} else {
  console.log("CSS already loaded!")
  return
}
