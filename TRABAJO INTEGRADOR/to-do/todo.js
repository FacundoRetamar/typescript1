const inputBox = document.getElementById("input-box"); /*constante de lo q se agregue*/
const listCotainer = document.getElementById("list-container"); /*constante del boton*/

function addTask(){ /*Funcion que realiza la accion de agregar la tarea*/
    if(inputBox.value === ''){
           alert("Debes escribir algo!"); /*mensaje de alerta*/
}
 else{
    let li = document.createElement("li"); /*crea tarea en la lista, entonces..*/
    li.innerHTML = inputBox.value;
    listCotainer.appendChild(li);
    let span = document.createElement("span"); /* Elemento para quitar tarea*/
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }
 inputBox.value = ""; /*mensaje para agregar otra tarea*/
 saveData();
}

listCotainer.addEventListener("click", function(e){ /*funcion para marcar la tarea realizada*/
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ /* quitar tarea*/
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){ /* la utilizamos para guardar la informacion aunque cerremos la pagina(colocar en cada accion de nuestras funciones)*/
    localStorage.setItem("data", listCotainer.innerHTML);
}
function showTask(){ /*muestra lo anteriormente guardado*/
    listCotainer.innerHTML = localStorage.getItem("data");
}
showTask();