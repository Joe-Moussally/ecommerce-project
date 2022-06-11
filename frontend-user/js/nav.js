let loginButton = document.getElementById('login-nav');
let signUpButton = document.getElementById('signup-nav');

//check if user is logged in
user_id = localStorage.getItem('user_id');
console.log(user_id);
if (user_id == null || user_id == 0) {
    document.getElementById('profile-nav').style.display = 'none';
    document.getElementById('login-nav').style.display = 'block';
    document.getElementById('signup-nav').style.display = 'block';
    document.getElementById('seperator').style.display = 'block';
} else {
    document.getElementById('profile-nav').style.display = 'block';
    document.getElementById('login-nav').style.display = 'none';
    document.getElementById('signup-nav').style.display = 'none';
    document.getElementById('seperator').style.display = 'none';
}

//adding event listeners to nav buttons
loginButton.addEventListener('click', () => {
    window.location.replace('./login.html')
})

signUpButton.addEventListener('click', () => {
    window.location.replace('./signup.html')
})