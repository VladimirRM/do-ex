const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");


// get input value

btn.addEventListener('click', e=>{
   if (input.value === '')return
   createDeleteElements(input.value)
   input.value = ''
})

