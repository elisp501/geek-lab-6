
const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');
const cantidadDeDinero = document.getElementById('idCantidadDinero'); //Captura el valor vacío de la etiqueta input de la cantidad de dinero que la persona ingresa en la aplicación, pero no captura su valor, porque todavía no se ha llamado el evento, por lo que no tiene valor.
let valorCantidadDinero = 0; // Esta es una variable para asignarle el valor a la variable cantidadDeDinero. En el escuchador del evento se le va a asignar el .value

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

//Vector Moneda
var moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];
var cambio = ['Elige moneda de cambio', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];

//Vector Moneda destino
moneda.forEach((data, index) => {
     const item = document.createElement('option');
     item.setAttribute('value', index)
     item.textContent = data;
     fragmento.appendChild(item)
})

//Vector Cambio
cambio.forEach((data, index) => {
     const item = document.createElement('option');
     item.setAttribute('value', index)
     item.textContent = data;
     fragmento2.appendChild(item)
})

listaMoneda.appendChild(fragmento);
listaCambio.appendChild(fragmento2);
//Recorrer vector para insertar la informacion de la lista

formulario.addEventListener('submit', (e) => {
     e.preventDefault();
     valorCantidadDinero = cantidadDeDinero.value; //Comentario de Elisita

     // leer la moneda seleccionada
     const monedaSelect = document.getElementById('moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.getElementById('criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

     const divMensaje = document.createElement('div');
     divMensaje.classList.add('text-center', 'alert');

     // Validar que las dos monedas sean diferentes.
     if (monedaSeleccionada === criptoMonedaSeleccionada) {
          alert('Monedas iguales')
     } else {
          // comprobar que ambos campos tengan algo seleccionado
          if (monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
               divMensaje.classList.add('alert-danger');
               divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas.'));
               alerta.appendChild(divMensaje)
          } else {
               // Validación información del campo cantidad de dinero 
               if (isNaN(valorCantidadDinero)) {
                    divMensaje.classList.add('alert-danger');
                    divMensaje.appendChild(document.createTextNode('Ingresa sólo números.'));
                    alerta.appendChild(divMensaje);
               } else {
                    valorCantidadDinero = Number(valorCantidadDinero);
                    if (valorCantidadDinero <= 0) {
                         divMensaje.classList.add('alert-danger');
                         divMensaje.appendChild(document.createTextNode('El valor debe ser mayor que 0.'));
                         alerta.appendChild(divMensaje);
                    } else {
                         divMensaje.classList.add('alert-success');
                         divMensaje.appendChild(document.createTextNode('Listo'));
                         alerta.appendChild(divMensaje)
                    }
               }
          }
     }
     setTimeout(function () {
          document.querySelector('#principal .alert').remove();
          formulario.reset();
     }, 3000);




})


