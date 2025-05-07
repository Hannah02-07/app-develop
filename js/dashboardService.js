function users(){
    const REQRES_ENDPOINT ='https://reqres.in/api/users/page=1'
    fetch(REQRES_ENDPOINT,{

        method:'GET',
        headers: {
            'Content-type':'application/json',
            'x-api-key':'reqres-free-v1'
        },
       
    })

    .then((response)=>{

          return response.json()

    })

document.getElementById('info').innerHTML='<h1>lista de usuarios </h1>'


}

function products(){
    document.getElementById('info').innerHTML= '<h1>lista de productos</h1>'

}

function logout (){
    localStorage.removeItem('token')
    location.href='../index.html'
}