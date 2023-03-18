import secuenciafizzBuzz from "./secuenciaFizzBuzz";

const first = document.querySelector("#primer-numero");

const form = document.querySelector("#FizzBuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  

  div.innerHTML = "<p>" + secuenciafizzBuzz(firstNumber) + "</p>";
});
