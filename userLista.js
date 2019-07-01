
let usuarios  = [];

usuarios.push(new User("Juan","test@test.com", "1234","M") );
usuarios.push(new User("Ana","testA@test.com", "A1234","F") );

console.log(usuarios);

function registrarUsuario(){
    
}

function borrarUsuario(){


}

function editarUsuario(){

}

function filtrarUsuarios(){

}

function actualizarHTML(){
     //let user0html = userToHTML(usuarios[0]);
    //document.querySelector('ul').insertAdjacentHTML('beforeend', user0html);
    let lista = document.querySelector('ul');
    let html = usuarios.map(user => userToHTML(user)).join(' ');
    lista.innerHTML = html;

    /*usuarios.forEach(user => document.querySelector('ul')
                            .insertAdjacentHTML('beforeend',
                            userToHTML(user)));*/

}

function userToHTML(user){
    let html = /*html*/
    `<li class="list-group-item">
    <div class="row">
      <div class="col-2">
        <img src="https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg" width="80" alt="">
      </div>
      <div class="col-8">
          <p>id: ${user.id} <br>
          username: ${user.username} <br> 
          email: ${user.email} <br>
          ...
        </p>
      </div>
      <div class="col-2 "> 
        <div class="row mb-2">
            <div class="col-6 btn btn-primary">
              <i class="fas fa-pencil-alt    "></i>
            </div>
          </div>
        <div class="row">
          <div class="col-6 btn btn-danger">
            <i class="fas fa-trash    "></i>
          </div>
        </div>
      </div>
    </div>
  </li>`;

    return html;

}
