const pw = document.getElementById("password");
const pwErr = document.querySelector("#password + span.error")

const cpw = document.getElementById("conf-password");
const cpwErr = document.querySelector("#conf-password + span.error");
const form  = document.querySelector("form");

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }

});

pw.addEventListeneter('input',validatePW);
cpw.addEventListeneter('input',validatePW);


function validatePW() {
    if (pw.value === cpw.value) {
        pw.setCustomValidity('');
        cpw.setCustomValidity('');
    } else {
        pw.setCustomValidity('Passwords do not match');
        cpw.setCustomValidity('Passwords do not match');
        pw.style.borderColor = 'red';
        cpw.style.borderColor = 'red';
    }

}
