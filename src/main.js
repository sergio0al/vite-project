import './style.css'
import { titulo } from './componentes/titulo'
import { home } from './vistas/home.js'
import { headerVista } from './vistas/header.js'
import { tablaVista } from './vistas/tabla.js'
import { incidencia } from './vistas/incidencia.js' 
import { footerVistas } from './vistas/footer.js'


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
const footerDom = document.querySelector("#footerDom")

headerDom.innerHTML = headerVista()
footerDom.innerHTML = footerVistas()

function router(){
    if (window.location.hash === "#nova") pintarFormulario()
    else pintarTabla()
}

window.addEventListener("hashchange", router)
router() 





function pintarFormulario(){
    mainDom.innerHTML = incidencia()

    // Añadir 
    let editando = false

    const addBtn = document.querySelector("#addBtn")
    const sectionAdd = document.querySelector("#sectionAdd")
    const formAdd = document.querySelector("#formAdd")
    addBtn.addEventListener("click", () =>{
        sectionAdd.classList.toggle("hidden")
        title.value = ""
        description.value = ""
        selectStatus.value = ""
        selectPriority.value = ""
        assing.value = ""
        guardarLocalStorage()
    })



    const title = document.querySelector("#title")
    const description = document.querySelector("#description")
    const selectStatus = document.querySelector("#selectStatus")
    const selectPriority = document.querySelector("#selectPriority")
    const assing = document.querySelector("#assing")

    const desaBtn = document.querySelector("#desaBtn")
        desaBtn.addEventListener("click", (e) =>{
            e.preventDefault()
            if(editando){
                let tarea = BD.find(t => t.id === editando)
                tarea.titol = title.value
                tarea.descripcio = description.value
                tarea.estat = selectStatus.value
                tarea.prioritat = selectPriority.value
                tarea.assignat = assing.value
                editando = false
            }else{
                BD.push({id: BD.length+1, titol: title.value, descripcio: description.value, estat: selectStatus.value, prioritat: selectPriority.value, assignat: assing.value, data: "29-08-2007"},)
            }
            cargarTabla()
            sectionAdd.classList.toggle("hidden")
            guardarLocalStorage()
        })



            let tancarBtn = document.querySelector("#tancarBtn")
            tancarBtn.addEventListener("click", (e) =>{
                e.preventDefault()
                sectionAdd.classList.toggle("hidden")
            })
        }


        function pintarTabla(){
            mainDom.innerHTML = tablaVista(BD)
            const form = document.querySelector("#form")
        const selectEstat = document.querySelector("#selectEstat")
        const selectPrioritat = document.querySelector("#selectPrioritat")
        form.addEventListener("change", filtrar)
        function filtrar(){
            let lineas = document.querySelectorAll(".linea")
            lineas.forEach(linea =>{
                if(selectEstat.value.includes(linea.dataset.estat) && selectPrioritat.value.includes(linea.dataset.prioritat)){
                    linea.style.display = ""
                }else{
                    linea.style.display = "none"
                }
            })
        }

}



