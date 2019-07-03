//Cosas realizadas en la consola para aprender el DOM

//DOM
document

/**
 * BUSCAR ELEMENTOS EN EL DOM
 */

//Buscar elemento por id
document.getElementById('listaUsuarios');

//Buscar elemento por etiqueta
document.getElementsByTagName('ul')
document.getElementsByTagName('p')

//Buscar elemento por clase
document.getElementsByClassName('btn')
//mostrar el primer elemento de clase boton
document.getElementsByClassName('btn')[0]

//Buscar usando css

//El primer li de la lista no ordenada
document.querySelector('ul > li')
//Todos los li de la lista no ordenada
document.querySelectorAll('ul > li')

//Todos los que tengan la clase btn
document.querySelectorAll('.btn')
//Buscar por id 
document.querySelector('#listaUsuarios')

/**
 * MODIFICAR EL DOM (CREAR Y MOSTRAR ELEMENTOS/NODOS)
 */

//Crear un párrafo
let miParrafo= document.createElement('p');
miParrafo.innerText =" Es un texto";
miParrafo.textContent = "Otra forma de hacer lo mismo que innerText";
miParrafo.innerHTML +=" <b>El texto tiene HTML<b>"

//insertar
document.body.append(miParrafo);

//Crear un div con color de fondo rojo
let dv = document.createElement('div')
dv.style.backgroundColor = "red";
dv.style.height = "100px"
document.body.append(dv);

//Clonar el div anterior y cambiar el fondo por azul
let dv2 = dv.cloneNode(true);
document.body.append(dv2);
dv2.style.backgroundColor="blue"

//Ocultar
dv2.hidden = true;

//Borrar del DOM
dv2.remove();





