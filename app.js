var btnTranslate = document.querySelector("#btnTranslate");
var textInput= document.querySelector("#text-input");
var output= document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(text)
{
    return serverURL+"?"+"text="+text;
}

function errorHandler(error)
{
    console.log("Error Occured", error)
    alert("Something went wrong. Try again after some time")
}

function clickEventHandler()
{
    var input = textInput.value;

    fetch(getTranslationURL(input))
    .then(response => response.json())
    .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
    })
}
btnTranslate.addEventListener("click", clickEventHandler)