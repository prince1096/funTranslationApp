var serverURL = "https://api.funtranslations.com/translate/chef.json";

var button = document.querySelector(".button");
var inputArea = document.getElementById("input-text");
var outputArea = document.getElementById("output-text");

function errorHandler(error) {
  console.log("error occured", error);
}

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
  //   console.log("clicked");
  //   console.log(txtInput.value);
  //   outputDiv.innerText = "prince" + txtInput.value;

  var inputText = inputArea.value;

  // calling server for processing
  fetch(getTranslation(inputText))
    .then((response) => response.json())
    .then((json) => {
      var finalText = json.contents.translated;
      outputArea.innerText = finalText;
    })
    // console.log(json.contents.translated))
    .catch(errorHandler);
}

button.addEventListener("click", clickEventHandler);
