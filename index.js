const menuBtn = document.getElementById("menu_button");
const headerFull = document.getElementById("header_full_wrapper");
const headerBtn = document.getElementById("header_button");
const headerBtnSubstitute = document.getElementById("header_button_substitute");


menuBtn.onclick = ()=>{
    headerFull.classList.toggle("header_full_wrapper_inactive");
    menuBtn.classList.toggle("menu_button_cross");
    headerBtn.classList.toggle("header_button_big");
    headerBtnSubstitute.classList.toggle("header_button_substitute_active");
};