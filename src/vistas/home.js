import '../style.css' 


export const home = () => {
  return `
    <section class="max-w-2xl mx-auto px-6 py-16 text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Bienvenido</h2>
      <p class="text-lg text-gray-600 mb-8">
        Esta es la página de inicio de mi aplicación.
      </p>
      <button
        id="btn-empezar"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
      >
        Empezar
      </button>
    </section>
  `;
};