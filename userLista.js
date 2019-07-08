
let usuarios  = [];

usuarios.push(new User("Juan","test@test.com", "1234","M",["Futbol","natación"]) );
usuarios.push(new User("Ana","testA@test.com", "A1234","F") );
actualizarHTML(usuarios);

console.log(usuarios);

bBuscar.onclick = filtrarUsuarios; //sin paréntesis
bBuscar.addEventListener('click', () => console.log("buscando"));




function registrarUsuario(){
     console.log("guardando");
     let username = document.querySelector('#username').value;
     let email = document.querySelector('#email').value;
     let psw = document.querySelector('#psw').value;
     let hobbies = document.querySelector('#hobbies').value;
     
     let sx =document.querySelector('#sxf').checked ? 'F':'M'

    let nUser = new User(username,email,psw,sx,hobbies.split('\n'));
    usuarios.push(nUser);
    actualizarHTML(usuarios);
    console.log(nUser);
    console.log(JSON.stringify(nUser));
     $('#modelId').modal('hide');
}

function borrarUsuario(id){
   console.log("se borrará el usuario "+id);
   let pos = usuarios.findIndex(usr => usr.id == id);
   usuarios.splice(pos,1); //borrar un usuario, el de la posición pos
  actualizarHTML(usuarios);
}

function editarUsuario(id){
  let user = usuarios.find(usr => usr.id == id);
  if(user){
    document.querySelector('#username').value = user.username;
    document.querySelector('#email').value = user.email;
    //document.querySelector('#psw').hidden = true;
    document.querySelector('#psw').value = user.password;
    document.querySelector('#sxf').checked = user.sexo =='F';
    document.querySelector('#sxm').checked = user.sexo =='M';
    document.querySelector('#hobbies').value= user.hobbies.join('\n');
  }

}

function filtrarUsuarios(){
  console.log("usuarios filtrados");
  let campoBusqueda = document.getElementById('search');
  let valor = campoBusqueda.value;
  let filtro = usuarios.filter(usr => usr.username.toUpperCase().includes(valor.toUpperCase()));
  actualizarHTML(filtro);
}

function actualizarHTML(arreglo){
     //let user0html = userToHTML(usuarios[0]);
    //document.querySelector('ul').insertAdjacentHTML('beforeend', user0html);
    let lista = document.querySelector('ul');
    let html = arreglo.map(user => userToHTML(user)).join(' ');
    lista.innerHTML = html;

    /*arreglo.forEach(user => document.querySelector('ul')
                            .insertAdjacentHTML('beforeend',
                            userToHTML(user)));*/

}

function userToHTML(user){
    let html = /*html*/
    `<li class="list-group-item">
    <div class="row">
      <div class="col-2">
        <img src="${user.url}" width="80" alt="">
      </div>
      <div class="col-8">
          <p>id: ${user.id} <br>
          Username: ${user.username} <br> 
          Email: ${user.email} <br>
          Hobbies: ${user.hobbies} <br>
        </p>
      </div>
      <div class="col-2 "> 
        <div class="row mb-2">
            <div class="col-6 btn btn-primary" data-toggle="modal" data-target="#modelId" onclick="editarUsuario(${user.id})">
              <i class="fas fa-pencil-alt    "></i>
            </div>
          </div>
        <div class="row">
          <div class="col-6 btn btn-danger" onclick="borrarUsuario(${user.id})"> <!-- llamar función de borrar -->
            <i class="fas fa-trash    "></i>
          </div>
        </div>
      </div>
    </div>
  </li>`;

    return html;

}
