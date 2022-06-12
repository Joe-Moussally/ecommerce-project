console.log("FROM INDEX");

//redirect to home if user already logged in
let user_id = localStorage.getItem('user_id');

if (user_id != 0) {
    window.location.replace('./home.html');
} else if (user_id != null) {
    window.location.replace('./home.html');
}else {
    window.location.replace('./login.html');
}