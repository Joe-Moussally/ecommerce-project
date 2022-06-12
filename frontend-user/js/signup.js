//user inputs
let email = document.getElementById('email');
let username = document.getElementById('name');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let statusDiv = document.getElementById('status');

//redirect to login
document.getElementById('login-btn').addEventListener('click', () => {
    window.location.replace('http://ecommerce-project/frontend-user/html/login.html')
})

document.getElementById('signup-btn').addEventListener('click', () => {
    let p1 = password1.value;
    let p2 = password2.value;

    if (username.value != '' && email.value != '' && p1 == p2) {
        
        if (p1.length < 6) {
            statusDiv.innerHTML = 'Password not matching'
            statusDiv.style.visibility = 'visible'
            console.log(p1.length)
        } else {

            let data = new FormData();
            data.append('email',email.value)
            data.append('password',p1)
            data.append('password_confirmation',p2)
            data.append('name',username.value)

            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/register',
                data: data
            }).then((Response) => {
                window.location.replace('./login.html')
            })

        }

    } else {
        statusDiv.innerHTML = 'Please fill all the fields'
        statusDiv.style.visibility = 'visible'
    }
})