const menuBtn = document.getElementById("menu_button");
const headerFull = document.getElementById("header_full_wrapper");
const headerBtn = document.getElementById("header_button");
const headerBtnSubstitute = document.getElementById("header_button_substitute");
const appointmentPopup = document.getElementById("appointmentPopup");
const appointmentPopupCloseBtn = document.getElementById("appointmentPopupCloseBtn");
const appointmentFormWrapper = document.getElementById("appointmentFormWrapper");


menuBtn.onclick = ()=>{
    headerFull.classList.toggle("header_full_wrapper_inactive");
    menuBtn.classList.toggle("menu_button_cross");
    headerBtn.classList.toggle("header_button_big");
    headerBtnSubstitute.classList.toggle("header_button_substitute_active");
};

const togglePopup = function() {
    appointmentPopup.classList.toggle("popup_active");
    appointmentFormWrapper.classList.toggle("appointment_form_wrapper_active");
}

headerBtn.onclick = togglePopup;

appointmentPopupCloseBtn.onclick = togglePopup;


