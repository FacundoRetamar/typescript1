// crear un algoritmo que permita logear en una pagina web
import * as rls from "readline-sync"
let usuario: string = ""
let contrasena: string = ""
usuario = rls.question("ingrese su nombre de usuario:");
contrasena = rls.question("ingrese su contrasena:");
const usarioCorrecto: string = "Juan"
const contrasenaCorrecta: string = "claveJuan"
if ("usuario -- usarioCorrecto && contrasena -- contrasenaCorrecta"){
    console.log("usted se ha logueado correctamente")
} else {
    console.log("nombre de usuario o contraseña incorrecta")
}