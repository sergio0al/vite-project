let html = ""

export const tablaVista = (BD) =>{
    html = `
    <section id="sectionFiltro" class="mx-60 border border-gray-300 rounded-lg p-4 mt-5">
        <form id="form" class="grid grid-cols-3 gap-4 items-end">
            <label for="selectEstat" class="flex flex-col gap-2 text-sm">Estat <select id="selectEstat" class="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                <option value="Obert Procés Tancat">Tots</option>
                <option value="Obert">Obert</option>
                <option value="Procés">En Procés</option>
                <option value="Tancat">Tancat</option>
            </select></label>
            <label for="selectPrioritat" class="flex flex-col gap-2 text-sm">Prioritat <select id="selectPrioritat" required class="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                <option value="Alta Mitjana Baixa">Tots</option>
                <option value="Alta">Alta</option>
                <option value="Mitjana">Mitjana</option>
                <option value="Baixa">Baixa</option>
            </select></label>
            <button id="netejar" class="w-full bg-gray-500 hover:bg-gray-600 text-white text-sm rounded-md px-3 py-2 cursor-pointer">Netejar Filtres</button>
        </form>
    </section>

    <section id="sectionTabla" class="mt-5 mx-60">
        <a href="/#nova" id="addBtn" class="block w-fit ml-auto px-4 py-2 text-[14px] bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white"><i class="fa-solid fa-plus"></i>➕ Nou Incidència</a>
        <div class="mt-4 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <table id="table" class="w-full text-sm text-left">
                <thead class="bg-gray-50 border-b border-gray-300">
                    <tr>
                        <th class="px-3 py-3 font-bold">#</th>
                        <th class="px-3 py-3 font-bold">Titol</th>
                        <th class="px-3 py-3 font-bold">Descripció</th>
                        <th class="px-3 py-3 font-bold">Estat</th>
                        <th class="px-3 py-3 font-bold">Prioritat</th>
                        <th class="px-3 py-3 font-bold">Assignat</th>
                        <th class="px-3 py-3 font-bold">Data</th>
                        <th class="px-3 py-3 font-bold">Accion</th>
                    </tr>
                </thead>
                <tbody id="tbody" class="divide-y divide-gray-200">`

    BD.map(linea => {
        html += `
        <tr class="linea" data-estat="${linea.estat}" data-prioritat="${linea.prioritat}">
            <td class="id px-3 py-3">${linea.id}</td>
            <td class="titol px-3 py-3">${linea.titol}</td>
            <td class="descripcion px-3 py-3">${linea.descripcio}</td>
            <td class="estat px-3 py-3"><span class="${linea.estat}">${linea.estat}</span></td>
            <td class="prioritat px-3 py-3"><span class="${linea.prioritat}">${linea.prioritat}</span></td>
            <td class="assignat px-3 py-3">${linea.assignat}</td>
            <td class="data px-3 py-3">${linea.data}</td>
            <td class="px-3 py-3 whitespace-nowrap">
                <button data-id="${linea.id}" class="editBtn bg-green-500/70 hover:bg-green-600 text-white text-xs rounded px-2 py-1.5 cursor-pointer">Editar</button>
                <button data-id="${linea.id}" class="deleteBtn bg-red-400/80 hover:bg-red-500 text-white text-xs rounded px-2 py-1.5 cursor-pointer">Eliminar</button>
            </td>
        </tr>`
    })
    
    html += `
                </tbody>
            </table>
        </div>
    </section>`

    return html
}



