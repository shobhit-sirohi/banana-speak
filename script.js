console.log("🍌");
var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

function clickHandler() {
  output.innerText = "gg";
}

btnTranslate.addEventListener("click", clickHandler);
