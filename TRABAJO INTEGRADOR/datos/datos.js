const formulario = document.querySelector("#formulario"); /*creamos la presentacion del formulario y lo vinculamos por id*/
formulario.addEventListener( "submit", validarFormulario ) 


function validarFormulario(e){ /* funcion del formulario para verlo por consola*/
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value
    const poder = document.querySelector("#poder").value
    const raza = document.querySelector("#raza").value
    console.log(`Bienvenido ${raza} llamado${nombre}, con tus ${edad} años de edad y tu ${poder}; nos ayudarias a derrotar a nuestros enemigos`);
    
}
