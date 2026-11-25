export const detalls = (incidencia) => {
  return `
    <section class="mx-60 mt-5 border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
        <div class="flex justify-between items-center border-b pb-3 mb-4">
            <h1 class="text-2xl font-bold">#${incidencia.id} - ${incidencia.titol}</h1>
            <div class="flex gap-3">
            <a href="/#editar/${incidencia.id}" class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg">Editar</a>
            <a href="#" class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded-lg">Tornar</a>
            </div>
        </div>
        
        <div class="space-y-3 text-sm">
            <p>Descripció: ${incidencia.descripcio}</p>
            <p>Estat: ${incidencia.estat}</p>
            <p>Prioritat: ${incidencia.prioritat}</p>
            <p>Assignat a: ${incidencia.assignat}</p>
            <p>Data: ${incidencia.data}</p>
        </div>
    </section>
  `
}