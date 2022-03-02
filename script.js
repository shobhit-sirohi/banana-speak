console.log("🍌");

var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var url =
  "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return url + "?text=" + text;
}
function errorhandler(error) {
  console.log(error);
  alert("SERVER DOWN, TRY AGAIN LATER.");
}
function clickHandler() {
  var text = input.value;
  fetch(constructUrl(text))
    .then((response) => response.json())
    .then(
      (data) => (output.value = data.contents.translated)
    )
    .catch(errorhandler);
}
btnTranslate.addEventListener("click", clickHandler);
