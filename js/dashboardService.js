function users(){
    const REQRES_ENDPOINT ='https://reqres.in/api/login'
    fetch(REQRES_ENDPOINT,{

        method:'POST',
        headers: {
            'Content-type':'application/json',
            'x-api-key':'reqres-free-v1'
        },
        body: JSON.stringify({email,password})
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