let BD = JSON.parse(localStorage.getItem("tabla")) ?? JSON.parse(JSON.stringify(tabla))
function guardarLocalStorage(){
    localStorage.setItem("tabla", JSON.stringify(BD))
}

let total = 0
let obertes = 0
let proces = 0
let tancades = 0

console.log(BD)
for(let i = 0; i < BD.length; i++){
    total++
    if(BD[i]["estat"] === "Obert"){obertes++} 
    if(BD[i]["estat"] === "Procés"){proces++} 
    if(BD[i]["estat"] === "Tancat"){tancades++} 
}

export const dato = ({text, num}) =>{
    return `
    <div class="text-center border border-black box-border w-87 h-30 justify-center rounded-xl flex flex-col gap-3 shadow">
        <h2 class="text-3xl font-bold">${num}</h2>
        <p class="text-[13px]">${text}</p>
    </div>`
}



export const headerVista = () => {
    return `
        <header class="flex flex-col gap-5">
            <div class="box-border p-10 bg-blue-400 mt-5 mx-60 text-center rounded-xl text-white flex flex-col gap-2">
                <h1 class="text-4xl font-semibold">🔧 Gestor d´Incidències Informètiques</h1>
                <p>Sistema de gestió d´incidencies per al departament d´IT</p>
            </div>
            <div class="flex justify-between mx-60">
                ${dato({text: "Total Indicéncies", num: total})}
                ${dato({text: "Obert", num: obertes})}
                ${dato({text: "En Procés", num: proces})}
                ${dato({text: "Tancades", num: tancades})}
            </div>
        </header>
    `;
};