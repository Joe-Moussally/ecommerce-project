let loginButton = document.getElementById('login-nav');
let signUpButton = document.getElementById('signup-nav');

//adding event listeners to nav buttons
loginButton.addEventListener('click', () => {
    window.location.replace('./login.html')
})

signUpButton.addEventListener('click', () => {
    window.location.replace('./signup.html')
})