var textArea = document.querySelector("textarea")
var btn = document.querySelector("button")
var ans = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/klingon.json"

function convertUrl(input){
    return serverUrl + "?" + "text=" + input
}

function translate(input){
    var input = textArea.value
    fetch(convertUrl(input))
    .then(response => response.json())
    .then(json => {
      var output = json.contents.translated
      ans.innerText =  output })}

btn.addEventListener("click",translate)
    
