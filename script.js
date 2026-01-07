const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const warningText = document.getElementById("hidden-text");
const input = document.getElementById("input-email");
const successModal = document.getElementById("success-modal");
const btnSub = document.getElementById("btn-subscribe");
const personalEmail = document.getElementById("personal-email");
const formContainer = document.getElementById("form-section");

function emailCheck() {
    inputEmail = input.value.trim();

    if (inputEmail.length === 0) {
        input.classList.remove("input-error");
        warningText.classList.remove("text-error-visible");
        return;
    }

    if (emailPattern.test(input.value)) {
        input.classList.remove("input-error");
        warningText.classList.remove("text-error-visible");
    } else {
        input.classList.add("input-error");
        warningText.classList.add("text-error-visible");
    }
}

function showSuccess() {
    var emailToSent = input.value;
    
    console.log(emailToSent);

    personalEmail.textContent = `${emailToSent}`;
    formContainer.classList.add("form-container-hidden");
    successModal.classList.add("success-modal-showing");

}


input.addEventListener("input", emailCheck);
btnSub.addEventListener("click", showSuccess);


