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

//populating home section
let ul = document.getElementById('cards-container');

axios({
    method:'POST',
    url: 'http://127.0.0.1:8000/api/products'
}).then((Response) => {
    console.log(Response.data.products);
    Response.data.products.forEach((product) => {
        ul.innerHTML += '<li id="'+product.id+'">'+
        '<img src="'+product.picture+'">'+
        '<div class="card-body">'+
        '<h2 class="card-title">'+product.name+'</h2>'+
        '<div class="card-footer">'+
        '<span>'+product.price+'$</span>'+
        '<button class="like"><i class="fa-regular fa-heart"></i></button>'+
        '</div>'
    })
})