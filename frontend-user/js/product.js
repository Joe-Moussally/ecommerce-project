let product_id = localStorage.getItem('product_id');
let url = 'http://127.0.0.1:8000/api/products/'+product_id;
let product_name = document.getElementById('product-name');
let page_body = document.getElementById('product-body-container');

axios({
    method: 'POST',
    url: url
}).then((Response)=> {

    product_name.innerHTML = Response.data.product.name
    
    let category;
    console.log(Response.data.product);
    if (Response.data.product.category_id == 2) {
        category = 'Tops'
    } else if (Response.data.product.category_id == 1) {
        category = 'Shoes'
    } else if (Response.data.product.category_id == 3) {
        category = 'Pants'
    }

    page_body.innerHTML = '<img src="'+Response.data.product.picture+'" id="product-img">'+
    '<div id="product-info">'+
    '<div><strong>Category:</strong>&nbsp&nbsp'+category+'</div>'+
    '<div id="product-price"><strong>Price:</strong>&nbsp&nbsp'+Response.data.product.price+'$</div>'+
    '<div><strong>Quantity:</strong>&nbsp&nbsp'+Response.data.product.quantity+' in stock</div>'+
    '<div id="add-like"><strong>Add to favorites&nbsp&nbsp</strong><i class="fa-regular fa-heart"></i></div>'+
    '</div>'
})