function users(){
    document.getElementById('cardHeader').innerHTML='<h5>Listado de usuarios</h5>'
    const REQRES_ENDPOINT ='https://reqres.in/api/users?page=1'
    fetch(REQRES_ENDPOINT,{

        method:'GET',
        headers: {
            'Content-type':'application/json',
            'x-api-key':'reqres-free-v1'
        },
       
    })

    .then((response)=>{

          return response.json().then(
            data=> {
                return{
                    status:response.status,
                    info: data
                }
            }
          )

    })

.then((result)=>{
    console.log('resultado',result)
    if(result.status===200){
        let listUsers=`
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Avatar</th>
    </tr>
  </thead>
  <tbody>
        `;

        result.info.data.forEach(element =>{
            listUsers = listUsers + `
            <tr>
              <td>${element.id}</td>
              <td>${element.first_name}</td>
              <td>${element.last_name}</td>
              <td><img src="${element.avatar}" class="img-thumbnail"alt="avatar del usuario"></td>
            
            
            </tr>
            
            `
            
        });
        listUsers=listUsers + `
            </tbody>
            </table>
        
        `

        document.getElementById('info').innerHTML=listUsers

    }else{
        document.getElementById('info').innerHTML='no existen usuarios en la red'
    }
})

}

function products(){
    document.getElementById('cardHeader').innerHTML='<h5>Listado de productos</h5>'
    const REQRES_ENDPOINT ='https://reqres.in/api/products/1'
    fetch(REQRES_ENDPOINT,{

        method:'GET',
        headers: {
            'Content-type':'application/json',
            'x-api-key':'reqres-free-v1'
        },
       
    })

    .then((response)=>{

          return response.json().then(
            data=> {
                return{
                    status:response.status,
                    info: data
                }
            }
          )

    })

.then((result)=>{
    console.log('resultado',result)
    if(result.status===200){
        let listProducts=`
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">año</th>
      <th scope="col">valor</th>
    </tr>
  </thead>
  <tbody>
        `
         console.log('productos',result.info.data)
        result.info.data.forEach(element =>{
            listProducts = listProducts + `
            <tr>
              <td>${element.id}</td>
              <td>${element.name}</td>
              <td>${element.year}</td>
              <td>${element.pantone_value}</td>
            
            
            </tr>
            
            `
            
        });
        listProducts=listProducts + `
            </tbody>
            </table>
        
        `

        document.getElementById('info').innerHTML=listProducts

    }else{
        document.getElementById('info').innerHTML='no existen productos en la red'
    }
})

    

}

function logout (){
    localStorage.removeItem('token')
    location.href='../index.html'
}