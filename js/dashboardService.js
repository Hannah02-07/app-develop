function users(){
document.getElementById('info').innerHTML='<h1>lista de usuarios </h1>'

}

function products(){
    document.getElementById('info').innerHTML= '<h1>lista de productos</h1>'

}

function logout (){
    localStorage.removeItem('token')
    location.href='../index.html'
}