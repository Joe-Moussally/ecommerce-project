let loginButton = document.getElementById('login-nav');
let signUpButton = document.getElementById('signup-nav');

//check if user is logged in
user_id = localStorage.getItem('user_id');
console.log(user_id);
if (user_id == null || user_id == 0) {
    document.getElementById('profile-nav').style.display = 'none';
    document.getElementById('login-nav').style.display = 'block';
    document.getElementById('signup-nav').style.display = 'block';
    document.getElementById('logout-nav').style.display = 'none';
    document.getElementById('seperator').style.display = 'block';
} else {
    document.getElementById('profile-nav').style.display = 'block';
    document.getElementById('logout-nav').style.display = 'block';
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

//adding logout functionality
document.getElementById('logout-nav').addEventListener('click', () => {

    //header
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    axios({
        headers: headers,
        method:'POST',
        url: 'http://127.0.0.1:8000/api/logout'
    }).then((Response) => {
        localStorage.setItem('user_id',0)
        window.location.replace('./home.html')
    })
})

//add return to home to logo click
document.getElementById('brand').addEventListener('click', () => {
    window.location.replace('./home.html')
    console.log("CLLICKED")
})

//adding event listeners to latest button
document.getElementById('all').addEventListener('click', () => {
    window.location.replace('./home.html')
})