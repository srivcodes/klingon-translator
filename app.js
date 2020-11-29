var recommendbutton= document.querySelector("#btn-recommend");
var inputtext= document.querySelector("#input-txt");
var outputtext=document.querySelector("#output-txt");

var serverurl="https://api.spotify.com.";

function recommendurl(text){
    return serverurl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

// outputtext.innerText ="sriv";

//console.log(inputtext);

recommendbutton.addEventListener("click", eventHandler)

function eventHandler(){

    var txtip = inputtext.value;
    fetch(recommendurl(txtip))
    .then(response => response.json());
    console.log(response.json);
    // .then(json => {
    //     var recommendedsong = json.contents;
    //     outputDiv.innerText = recommendedsong;
    // })
    // .catch(errorHandler)
}
