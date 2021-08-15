const loginBtn = document.getElementById('login-btn');
const inputEmail = document.getElementById('email-input');
const inputPass = document.getElementById('pass-input');
loginBtn.addEventListener('click', function () {
    if (inputEmail.value == 'sabbir@khan.com' && inputPass.value == 'khanki123') {
        window.location.href = 'another.html';
        inputEmail.value = '';
        inputPass.value = '';
    }
})