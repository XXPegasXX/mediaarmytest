const menuBtn = document.getElementById("menu_button");
const headerFull = document.getElementById("header_full_wrapper");
const headerBtn = document.getElementById("header_button");
const headerBtnSubstitute = document.getElementById("header_button_substitute");
const appointmentPopup = document.getElementById("appointmentPopup");
const appointmentPopupCloseBtn = document.getElementById("appointmentPopupCloseBtn");
const appointmentFormWrapper = document.getElementById("appointmentFormWrapper");
const appointmentFormName = document.getElementById("appointmentFormName");
const appointmentFormNameError = document.getElementById("appointmentFormNameError");

const appointmentFormPhone = document.getElementById("appointmentFormPhone");
const appointmentFormPhoneError = document.getElementById("appointmentFormPhoneError");

const appointmentFormVendor = document.getElementById("appointmentFormVendor");
const appointmentFormVendorError = document.getElementById("appointmentFormVendorError");

const appointmentFormDescription = document.getElementById("appointmentFormDescription");
const appointmentFormDescriptionError = document.getElementById("appointmentFormDescriptionError");

const appointmentFormSendBtn = document.getElementById("appointmentFormSendBtn");

const appointmentFormNameValidate = function () {
    if (appointmentFormName.value =="") {
        appointmentFormName.classList.add("is-invalid");
        return false;
    } else {
        appointmentFormName.classList.remove("is-invalid");
        return true;
    }
}
appointmentFormName.onchange = appointmentFormNameValidate;

const appointmentFormPhoneValidate = function () {
    if (appointmentFormPhone.value =="") {
        appointmentFormPhone.classList.add("is-invalid");
        return false;
    } else {
        appointmentFormPhone.classList.remove("is-invalid");
        return true;
    }
}

appointmentFormPhone.onchange = appointmentFormPhoneValidate;

const appointmentFormVendorValidate = function () {
    if (appointmentFormVendor.value =="") {
        appointmentFormVendor.classList.add("is-invalid");
        return false;
    } else {
        appointmentFormVendor.classList.remove("is-invalid");
        return true;
    }
}

appointmentFormVendor.onchange = appointmentFormVendorValidate;

const appointmentFormDescriptionValidate = function () {
    if (appointmentFormDescription.value =="") {
        appointmentFormDescription.classList.add("is-invalid");
        return false;
    } else {
        appointmentFormDescription.classList.remove("is-invalid");
        return true;
    }
}

appointmentFormDescription.onchange = appointmentFormDescriptionValidate;

appointmentFormSendBtn.onclick = function(){
    let nameIsValid = appointmentFormNameValidate();
    let phoneIsValid =  appointmentFormPhoneValidate();
    let vendorIsValid =  appointmentFormVendorValidate();
    let textIsValid = appointmentFormDescriptionValidate();
    if (nameIsValid &&
        phoneIsValid &&
        vendorIsValid &&
        textIsValid) {
        console.log("Send data")
        }
}

// someBtn.onclick = function() {
//     var nameIsValid = appointmentFormNameValidate();

//     if (nameIsValid &&
//         phoneIsValid &&
//         vendorIsValid &&
//         textIsValid) {
//             console.log("Send data")
//         }
// }








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


