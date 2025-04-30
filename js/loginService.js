document.getElementById('loginForm').addEventListener('submit', function(e){

    e.preventDefault();
    const email = document.getElementById('email').value;
    const password =document.getElementById('password').value;
    let mensaje = ''
    let tipoAlerta=''
    
    if (email=== ''|| password===''){
        mensaje='por favor completa todos los campos'
        tipoAlerta='warning'

    } else if(email==='prueba@gmail.com'&& password==='123456'){
       mensaje='Inicio de sesion exitoso. '
       tipoAlerta='succes'

    }else{
        mensaje='correo o contraseña incorrectos. '
        tipoAlerta='danger'
    }

    
    
    

});

function login(email, password){
    let message=''
    let alertType= ''

    const REQRES_ENDPOINT ='https://reqres.in/api/login'
    fetch(REQRES_ENDPOINT,{

        method:'post',
        header: {
            'content-type':'application/json'
        },
        body: JSON.stringify({email,password})
    })

    .then((response) =>{
        alertType= 'success'
        message = 'inicio de seccion exitoso'
        console.log('respuesta del servicio', response)
    })

    .catch((error)=>{
        alertType='danger'
        message='correo o contraseña invalida'
        console.log('error en el servicio',error)

    })

}


function alertBuilder(alertType, message){

    let alerta = `
    <div class="alert alert-${tipoAlerta} alert-dismissible fade show" role="alert">
                          ${mensaje}
                           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>

   `
   document.getElementById('mensaje').innerHTML= alerta;

}