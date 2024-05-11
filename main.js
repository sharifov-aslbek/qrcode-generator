const wrapper = document.querySelector(".wrapper")
const btnGenerate = document.querySelector(".form button")
const qrInput = document.querySelector(".form input")
const qrImg = document.querySelector(".qr-code img")
btnGenerate.addEventListener("click" , () => {
   let qrValue = qrInput.value
   console.log(qrValue);
   if(!qrValue) return;
   qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
   wrapper.classList.add("active")
})

let img = document.querySelector(".imgs img")
let text = document.querySelector(".imgs .text h1")
img.addEventListener("mouseenter" , () => {
   text.classList.add("active")
})
img.addEventListener("mouseleave" , () => {
   text.classList.remove("active")
})