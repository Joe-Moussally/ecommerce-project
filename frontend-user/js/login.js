let loginButton = document.getElementById('login-btn');
let signUpButton = document.getElementById('signup-btn');
let statusDiv = document.getElementById('status');


//adding login event listener
loginButton.addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password');

    let data = new FormData();
    data.append('email',email)
    data.append('password',password.value)

    axios({
        method:'POST',
        url: 'http://127.0.0.1:8000/api/login',
        data: data
    }).then((Response) => {
        console.log(Response.data)
        localStorage.setItem('token',Response.data.access_token);
        localStorage.setItem('user_id',Response.data.id.id);
        window.location.replace('./home.html')
    }).catch((err) => {
        statusDiv.innerHTML = 'wrong email/password'
        statusDiv.style.visibility = 'visible'
        password.value = ''
    })

})

//adding event listener to redirect to signup
signUpButton.addEventListener('click', () => {
    window.location.replace('./signup.html')
})