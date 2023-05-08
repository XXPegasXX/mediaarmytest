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


appointmentFormNameValidate = function () {
    if (appointmentFormName.value =="") {
        appointmentFormNameError.classList.add("validation_error_label_active");
        return false;
    } else {
        appointmentFormNameError.classList.remove("validation_error_label_active");
        return true;
    }
}
appointmentFormName.onchange = appointmentFormNameValidate;

appointmentFormPhone.onchange = function () {
    if (appointmentFormPhone.value =="") {
        appointmentFormPhoneError.classList.add("validation_error_label_active");
    } else {
        appointmentFormPhoneError.classList.remove("validation_error_label_active");
    }
}

appointmentFormVendor.onchange = function () {
    if (appointmentFormVendor.value =="") {
        appointmentFormVendorError.classList.add("validation_error_label_active");
    } else {
        appointmentFormVendorError.classList.remove("validation_error_label_active");
    }
}

appointmentFormDescription.onchange = function () {
    if (appointmentFormDescription.value =="") {
        appointmentFormDescriptionError.classList.add("validation_error_label_active");
    } else {
        appointmentFormDescriptionError.classList.remove("validation_error_label_active");
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


