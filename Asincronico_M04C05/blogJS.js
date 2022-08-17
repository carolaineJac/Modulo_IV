//----variables
var contenedor = document.querySelector("#contenedor");
var urlBase = "https://jsonplaceholder.typicode.com/";
//funciones de API
async function cargarPosts(){
    let respuesta = await fetch(urlBase+"posts");
    if (respuesta.ok){
        let datso = await respuesta.json();
        return datso.name;
    }else{
        return null;
    }
}
//hilño de ejecucion primcipal

cargarPosts();