setInterval(function() {
  let clockdat = new Date();
  let clock = document.querySelector(".clock");
  clock.innerHTML = clockdat.toLocaleTimeString();
}, 1000);


let button = document.querySelector(".send-button");
let textArea = document.querySelector(".text");
button.addEventListener("click", () => {
  button.remove();
  textArea.value = "";
  textArea.disabled = true;
  textArea.placeholder = "Thanks for your activity. Your letter has been sent."
});
