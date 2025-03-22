document.addEventListener("DOMContentLoaded", function () {
    // Detecta si la URL contiene /pages/ y ajusta la ruta
    const basePath = window.location.pathname.includes("pages/") ? "../partials/" : "./partials/";

    loadComponent("header", basePath + "header.html");
    loadComponent("footer", basePath + "footer.html");
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            } else {
                console.error(`Elemento con ID ${id} no encontrado.`);
            }
        })
        .catch(error => console.error(error));
}
