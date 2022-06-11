//user inputs
let email = document.getElementById('email');
let name = document.getElementById('name');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');

//redirect to login
document.getElementById('login-btn').addEventListener('click', () => {
    window.location.replace('http://ecommerce-project/frontend-user/html/login.html')
})