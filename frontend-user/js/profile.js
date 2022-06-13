

//header
const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
}

axios({
    headers: headers,
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/profile'
}).then((Response) => {
    console.log(Response.data)

    //set name of user as title
    document.getElementById('home-title').innerHTML = Response.data.name
})


//get liked posts
let user_id = localStorage.getItem('user_id');
let data = new FormData();
data.append('user_id',user_id);

axios({
    method:'POST',
    url: 'http://127.0.0.1:8000/api/get_liked',
    data: data
}).then((Response) => {
    console.log(Response.data)
})