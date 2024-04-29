const pw = document.getElementById("password");
const cpw = document.getElementById("conf-password");

const pwErr = document.querySelector("#password + span.error");
const cpwErr = document.querySelector("#conf-password + span.error");

function validatePw() {
    if (pw.value === cpw.value) {
        pw.setCustomValidity('');
        cpw.setCustomValidity('');
    } else {
        pw.setCustomValidity('Passwords do not match!');
        cpw.setCustomValidity('Passwords do not match!');
        pw.style.borderColor = 'red';
        cpw.style.borderColor = 'red';
    }
}

pw.addEventListener('input', validatePw);
cpw.addEventListener('input', validatePw);

const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});
