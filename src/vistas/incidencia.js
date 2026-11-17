export const incidencia = () => {
    return `
    <section id="sectionAdd" class="w-full max-w-2xl mx-auto mt-5 px-4">
        <form action="" id="formAdd" class="grid grid-cols-2 gap-3 box-border">
            <label for="title" class="flex flex-col gap-1 text-sm col-span-2">Titol<input type="text" id="title" class="w-full bg-gray-100 box-border px-3 py-2 rounded-xl text-black"></label>
            <label for="description" class="flex flex-col gap-1 text-sm col-span-2">Descripció <textarea name="" id="description" rows="3" class="w-full bg-gray-100 box-border px-3 py-2 rounded-xl text-black resize-none"></textarea></label>
            <label for="selectStatus" class="flex flex-col gap-1 text-sm">Estat <select id="selectStatus" required class="w-full bg-gray-100 box-border px-3 py-2 rounded-xl text-black">
                <option value="Obert">Obert</option>
                <option value="Procés">En Procés</option>
                <option value="Tancat">Tancat</option>
            </select></label>
            <label for="selectPriority" class="flex flex-col gap-1 text-sm">Prioritat <select id="selectPriority" class="w-full bg-gray-100 box-border px-3 py-2 rounded-xl text-black">
                <option value="Baixa">Baixa</option>
                <option value="Mitjana">Mitjana</option>
                <option value="Alta">Alta</option>
            </select></label>
            <label for="assing" class="flex flex-col gap-1 text-sm col-span-2">Assignat a<input type="text" id="assing" class="w-full bg-gray-100 box-border px-3 py-2 rounded-xl text-black"></label>
            <a href="/" id="tancarBtn" class="bg-red-500 cursor-pointer h-10 rounded-xl text-black flex items-center justify-center">Tancar</a>
            <button id="desaBtn" class="bg-green-500 cursor-pointer h-10 rounded-xl text-black">Desar</button>
        </form>
    </section>`
}