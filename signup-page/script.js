const pw = document.getElementById("password");
const cpw = document.getElementById("conf-password");

const pwErr = document.querySelector("#password + span.error");
const cpwErr = document.querySelector("#conf-password + span.error");

function validatePw() {
    if (pw.value === cpw.value) {
        pw.setCustomValidity('');
        cpw.setCustomValidity('');
        pw.style.borderColor = '';
        cpw.style.borderColor = '';
    } else if (!pw.checkValidity() || !cpw.checkValidity()) {     
        pw.setCustomValidity('Password should contain atleast 8 characters, one lower case letter, one upper case letter and one number');
        cpw.setCustomValidity('Password should contain atleast 8 characters, one lower case letter, one upper case letter and one number');
        pw.style.borderColor = 'red';
        cpw.style.borderColor = 'red';
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
