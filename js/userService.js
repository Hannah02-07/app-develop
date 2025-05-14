function users(page){
    document.getElementById('cardHeader').innerHTML='<h5>Listado de usuarios</h5>'
    const REQRES_ENDPOINT ='https://reqres.in/api/users?page='+page
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
       <th scope="col">Accion</th>
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
              <td> <button type="button" class="btn btn-outline-info" onclick="getUser('${element.id}')">Ver</button> </td>
            
            
            </tr>
            
            `
            
        });
        listUsers=listUsers + `
            </tbody>
            </table>

            <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" onclick="users('1') >1</a></li>
    <li class="page-item"><a class="page-link" href="#" onclick="users('1') >2</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        
        `
        

        document.getElementById('info').innerHTML=listUsers

    }else{
        document.getElementById('info').innerHTML='no existen usuarios en la red'
    }
})

}