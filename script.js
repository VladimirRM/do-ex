const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")

btn.addEventListener('click', (value)=>{
  console.log(input.value);
  if(input.value === '')return
  createDeleteElements (input.value)
  input.value = ''
})



function createDeleteElements (){
   const li

}