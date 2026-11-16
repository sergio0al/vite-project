export const incidencia = () =>{
    return `
     <section id="sectionAdd" class="w-200 m-auto mt-10">
        <form action="" id="formAdd" class="flex flex-col gap-5 box-border px-10">
            <label for="title" class="flex flex-col gap-2">Titol<input type="text" id="title" class="bg-gray-100 box-border p-3 rounded-xl text-black"></label>
            <label for="description" class="flex flex-col gap-2">Descripció <textarea name="" id="description"  class="bg-gray-100 box-border p-3 rounded-xl text-black"></textarea></label>
            <label for="selectStatus" class="flex flex-col gap-2" >Estat <select id="selectStatus" required class="bg-gray-100 box-border p-3 rounded-xl text-black">
                <option value="Obert">Obert</option>
                <option value="Procés">En Procés</option>
                <option value="Tancat">Tancat</option>
            </select></label>
            <label for="selectPriority" class="flex flex-col gap-2">Prioritat <select id="selectPriority" class="bg-gray-100 box-border p-3 rounded-xl text-black">
                <option value="Baixa">Baixa</option>
                <option value="Mitjana">Mitjana</option>
                <option value="Alta">Alta</option>
            </select></label>
            <label for="assing"  class="flex flex-col gap-2">Assignat a<input type="text" id="assing"  class="bg-gray-100 box-border p-3 rounded-xl text-black"></label>
            <a href="/" id="tancarBtn" class="bg-red-500 cursor-pointer h-10 rounded-xl text-black text-center items-center">Tancar</a>
            <button id="desaBtn" class="bg-green-500 cursor-pointer h-10 rounded-xl text-black">Desar</button>
        </form>
    </section>`
}