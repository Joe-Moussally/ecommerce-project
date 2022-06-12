let product_id = localStorage.getItem('product_id');
let url = 'http://127.0.0.1:8000/api/products/'+product_id;

axios({
    method: 'POST',
    url: url
}).then((Response)=> {
    console.log(Response.data.product)
})