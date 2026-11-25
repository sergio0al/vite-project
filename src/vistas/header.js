export const dato = ({text, num}) => {
    return `
    <div class="text-center border border-black box-border w-87 h-30 justify-center rounded-xl flex flex-col gap-3 shadow">
        <h2 class="text-3xl font-bold">${num}</h2>
        <p class="text-[13px]">${text}</p>
    </div>`
}



export const headerVista = (BD) => {
    const total = BD.length
    const obertes = BD.filter(t => t.estat === "Obert").length
    const proces = BD.filter(t => t.estat === "Procés").length
    const tancades = BD.filter(t => t.estat === "Tancat").length

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
    `
}