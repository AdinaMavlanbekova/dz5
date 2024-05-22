
let count = 0;
const showNumber = document.querySelector("#showNumber");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
function toIncrease() {
    count++;
    changeNumber();
}
function toDecrease() {
    count--;
    changeNumber();
}
function toReset() {
    count = 0;
    changeNumber();
}
function changeNumber() {
    showNumber.innerText = count;
    let color = "";
    if(count>0){
        color = "green"
    }else if(count<0){
        color = "red"
    }else {
        color = "gray"
    }
    showNumber.style.color = color
}
increase.addEventListener("click", toIncrease)
decrease.addEventListener("click", toDecrease)
reset.onclick = toReset;