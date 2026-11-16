import './style/input.css'
import { titulo } from './componentes/titulo'
import { home } from './vistas/home.js'
import { headerVista } from './vistas/header.js'
import { tablaVista } from './vistas/tabla.js'
import { incidencia } from './vistas/incidencia.js' 


const tabla = [
    {id: 1, titol: "Sergio title", descripcio: "", estat: "Obert", prioritat: "Alta", assignat: "sergop alonso", data: "29-08-2007"},
    {id: 2, titol: "dawdad", descripcio: "dawdawd", estat: "Tancat", prioritat: "Alta", assignat: "sergop alonso", data: "29-08-2007"},
]

let BD = JSON.parse(localStorage.getItem("tabla")) ?? JSON.parse(JSON.stringify(tabla))
function guardarLocalStorage(){
    localStorage.setItem("tabla", JSON.stringify(BD))
}
guardarLocalStorage()





const headerDom = document.querySelector("#headerDom")
const mainDom = document.querySelector("#mainDom")

headerDom.innerHTML = headerVista()
mainDom.innerHTML = tablaVista(BD)


window.addEventListener('hashchange', () =>{
    const ruta = window.location.hash;
    if(ruta === "#/nova"){
        mainDom.innerHTML = incidencia()
    }else{
        mainDom.innerHTML = tablaVista(BD)
    }
});
