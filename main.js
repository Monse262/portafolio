// Área del circulo => PI por radioalcuadrado 

const PI = 3.1416;

let areaCirculo;

let radio= 4;

areaCirculo = PI * (radio * radio);
// document.write(areaCirculo);
radio = 10;

areaCirculo = PI * (radio * radio);
// Document es el documento HTML al que está ligado el archivo.
// el operador punto me permite acceder a propieddes o métodos (acciones) del elemento
// write es un método (funcion que le pertenece a alguien)
// document.write(areaCirculo);


let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});


// Modal
// const myModal = document.getElementById('modal-contactame')
// const myElement = document.getElementById('contactame')

// myModal.addEventListener('shown.bs.modal', () => {
//   myElement.focus()
// })



typewriter
  .pauseFor(1000)
  .typeString('Monserrat Trejo')
  .pauseFor(300)
  .deleteChars(30)
  .pauseFor(300)
  .start();