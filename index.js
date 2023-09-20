let textbox = document.querySelector(".textbox");
let cBtn = document.querySelector(".cBtn");
let fBtn = document.querySelector(".fBtn");
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.onclick = () => {
  let temp;
  
  if(cBtn.checked) {
    temp = textbox.value;
    temp = Number(temp);
    temp = paraC(temp);
    text.innerHTML = temp + "°C";
 } else if(fBtn.checked) {
    temp = textbox.value;
    temp = Number(temp);
    temp = paraF(temp);
    text.innerHTML = temp + "°F";
 } else {
    text.innerHTML = "Por favor escolha a conversão!"
 }
};

function paraC(temp) {
  return (temp - 32) * (5/9);
}
function paraF(temp) {
  return (temp * 9/5) + 32;
}
