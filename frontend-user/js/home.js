//define if user is logged in or not
let user_id = localStorage.getItem('user_id');
let logged_in = true;
if (user_id == null || user_id == 0) {
    localStorage.setItem('token',null);
    logged_in = false;
}
//--------------------------------------

// const toBase64 = file => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
// });