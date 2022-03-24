const adviceID = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const error = document.querySelector(".error");
const button = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

let getAdvice = () => {
  function handleErrors(response) {
    if (!response.ok) {
      error.innerText = response.statusText;
    } else {
      // console.log("worked");
    }
    return response;
  }
  fetch(url)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      adviceID.innerText = "ADVICE #" + data.slip.id;
      advice.innerText = '"' + data.slip.advice + '"';

      // console.log(data);
    });
};

window.addEventListener("load", getAdvice);
button.addEventListener("click", getAdvice);
