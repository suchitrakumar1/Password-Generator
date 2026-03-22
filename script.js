let inputSlider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    slidervalue.textContent = inputSlider.value;
})
genBtn.addEventListener("click", () => {
    passbox.value = generatepass(inputSlider.value);
})
const generatepass = (val) => {
    let pass = "";
    let pool = "";

    if (lowercase.checked) {
        pool += "abcdefghijklmnopqrstuvwxyz"
    }
    if (uppercase.checked) {
        pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers.checked) {
        pool += "123456789";
    }
    if (symbols.checked) {
        pool += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    if (pool == "") {
        alert("atleast click a box");
        return "";
    }
    for (let i = 0; i < val; i++) {
        pass += pool[Math.floor(Math.random() * pool.length)].toString();
    }
    return pass;

}