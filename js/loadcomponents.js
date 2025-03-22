document.addEventListener("DOMContentLoaded", function() {
    const basePath = window.location.pathname.includes("/pages/") ? "../partials/" : "partials/";
    
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
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}
