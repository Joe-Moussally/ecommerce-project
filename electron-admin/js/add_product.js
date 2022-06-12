let submit = document.getElementById('submit');



// const uploadedFile = document.querySelector('#photo').files[0];
// toBase64(uploadedFile)

//function to turn image to base64
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});



submit.addEventListener('click', () => {

    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let category = document.getElementById('category');
    let quantity = document.getElementById('quantity');
    let uploadedFile = document.getElementById('img').files[0];
    toBase64(uploadedFile);

    //header
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }

    //formData
    let data = new FormData();
    data.append('name',name.value)
    data.append('price',price.value)
    data.append('quantity',quantity.value)
    data.append('category_id',category.value)
    data.append('picture',uploadedFile)

    axios({
        headers: headers,
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/add_product',
        data:data
    }).then((Response) => {
        console.log(Response.data)
    })

})