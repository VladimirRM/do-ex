const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
//  add event
btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});
// create delete element
function createDeleteElements(value) {
  console.log(value);
  const btn = document.createElement("button");
  const li = document.createElement("li");

  li.className = "li";
  li.textContent = value;

  btn.className = "btn";
  btn.textContent = "Add";

  li.appendChild(btn);

//   remove delete todo 

  btn.addEventListener("click", (e) => {
    result.removeChild(li);
  });

//   toggle active class 
  li.addEventListener("click", (e) => {
    li.classList.toggle('li-active')
  });

  result.appendChild(li);
}
