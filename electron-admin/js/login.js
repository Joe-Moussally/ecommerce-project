let loginButton = document.getElementById('login-btn');
let statusDiv = document.getElementById('status');


//adding login event listener
loginButton.addEventListener('click', () => {

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let data = new FormData();
    data.append('email',email.value)
    data.append('password',password.value)

    axios({
        method:'POST',
        url: 'http://127.0.0.1:8000/api/login',
        data: data
    }).then((Response) => {
        console.log(Response.data)
        let role = Response.data.role.role;
        if (role == 0) {
            statusDiv.innerHTML = 'Admins Only'
            statusDiv.style.visibility = 'visible'
            email.value = ''
            password.value = ''
        } else {
            localStorage.setItem('token',Response.data.access_token);
            localStorage.setItem('user_id',Response.data.id.id);
            window.location.replace('./home.html')
        }

    }).catch((err) => {
        statusDiv.innerHTML = 'wrong email/password'
        statusDiv.style.visibility = 'visible'
        password.value = ''
    })

})