let add_product = document.getElementById('add-product');
let search_product = document.getElementById('search-product');

//redirect to add product page
add_product.addEventListener('click', () => {
    window.location.replace('./add_product.html');
})

//adding logout functionality
document.getElementById('admin-logout').addEventListener('click', () => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    axios({
        headers: headers,
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/logout'
    }).then((Response) => {
        console.log(Response)
        localStorage.setItem('user_id',0);
        localStorage.setItem('token',null);
        window.location.replace('./login.html');
    })
    
})