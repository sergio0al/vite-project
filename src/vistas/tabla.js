let html = ""

export const tablaVista = (BD) =>{
    html = `
    <section id="sectionFiltro">
        <form id="form">
            <label for="selectEstat">Estat <select id="selectEstat">
                <option value="Obert Procés Tancat">Tots</option>
                <option value="Obert">Obert</option>
                <option value="Procés">En Procés</option>
                <option value="Tancat">Tancat</option>
            </select></label>
            <label for="selectPrioritat">Prioritat <select id="selectPrioritat" required>
                <option value="Alta Mitjana Baixa">Tots</option>
                <option value="Alta">Alta</option>
                <option value="Mitjana">Mitjana</option>
                <option value="Baixa">Baixa</option>
            </select></label>
            <button id="netejar">Netejar Filtres</button>
        </form>
    </section>

    <section id="sectionTabla">
        <a href="#/nova" id="addBtn"><i class="fa-solid fa-plus"></i> Nou Incidència</a>
        <table id="table" class="mt-10">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Titol</th>
                    <th>Descripció</th>
                    <th>Estat</th>
                    <th>Prioritat</th>
                    <th>Assignat</th>
                    <th>Data</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody id="tbody">`

    BD.forEach(linea => {
        html += `
        <tr class="linea" data-estat="${linea.estat}" data-prioritat="${linea.prioritat}">
            <td class="id">${linea.id}</td>
            <td class="titol">${linea.titol}</td>
            <td class="descripcion">${linea.descripcio}</td>
            <td class="estat"><span class="${linea.estat}">${linea.estat}</span></td>
            <td class="prioritat"><span class="${linea.prioritat}">${linea.prioritat}</span></td>
            <td class="assignat">${linea.assignat}</td>
            <td class="data">${linea.data}</td>
            <td><button data-id="${linea.id}" class="editBtn">Editar</button><button data-id="${linea.id}" class="deleteBtn">Eliminar</button></td>
        </tr>`  
    })
    
    html += `
        </tbody>
    </table>
    </section>`

    return html
}