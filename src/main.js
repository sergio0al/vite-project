import './style.css'
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
    const rute = window.location.hash
    if (rute === "#nova"){
       pintarFormulario() 
    }else{
        pintarTabla()
    }
}

window.addEventListener("hashchange", router)
router()



function pintarFormulario(id){
    mainDom.innerHTML = incidencia()

    let editando = id ?? false

    const title = document.querySelector("#title")
    const description = document.querySelector("#description")
    const selectStatus = document.querySelector("#selectStatus")
    const selectPriority = document.querySelector("#selectPriority")
    const assing = document.querySelector("#assing")

    // NUEVO: rellenar campos al editar
    if(editando){
        const t = BD.find(t => t.id === editando)
        title.value = t.titol
        description.value = t.descripcio
        selectStatus.value = t.estat
        selectPriority.value = t.prioritat
        assing.value = t.assignat
    }

    document.querySelector("#desaBtn").addEventListener("click", (e) =>{
        e.preventDefault()
        if(editando){
            let tarea = BD.find(t => t.id === editando)
            tarea.titol = title.value
            tarea.descripcio = description.value
            tarea.estat = selectStatus.value
            tarea.prioritat = selectPriority.value
            tarea.assignat = assing.value
        }else{
            BD.push({id: Math.max(0, ...BD.map(t => t.id)) + 1, titol: title.value, descripcio: description.value, estat: selectStatus.value, prioritat: selectPriority.value, assignat: assing.value, data: "29-08-2007"})
        }
        guardarLocalStorage()
        window.location.hash = ""   // vuelve a la tabla
    })

    document.querySelector("#tancarBtn").addEventListener("click", (e) =>{
        e.preventDefault()
        window.location.hash = ""
    })
}



function pintarTabla(){
    mainDom.innerHTML = tablaVista(BD)
    const form = document.querySelector("#form")
    const selectEstat = document.querySelector("#selectEstat")
    const selectPrioritat = document.querySelector("#selectPrioritat")

    form.addEventListener("change", filtrar)
    function filtrar(){
        document.querySelectorAll(".linea").forEach(linea =>{
            if(selectEstat.value.includes(linea.dataset.estat) && selectPrioritat.value.includes(linea.dataset.prioritat)){
                linea.style.display = ""
            }else{
                linea.style.display = "none"
            }
        })
    }

    // NUEVO: Netejar filtres
    document.querySelector("#netejar").addEventListener("click", (e) =>{
        e.preventDefault()
        form.reset()
        filtrar()
    })

    // NUEVO: Editar / Eliminar
    document.querySelector("#tbody").addEventListener("click", (e) =>{
        const id = Number(e.target.dataset.id)
        if(e.target.classList.contains("editBtn")){
            window.location.hash = "#editar/" + id
        }
        if(e.target.classList.contains("deleteBtn")){
            BD = BD.filter(t => t.id !== id)
            guardarLocalStorage()
            pintarTabla()
        }
    })
}