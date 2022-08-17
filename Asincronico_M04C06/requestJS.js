//crear una url
var url1 = new URL("https://www.google.cl/search?q=animales");
console.log(url1);

var url2 = new URL("search","https://www.google.cl/");
url2.searchParams.append("q","animales");
console.log(url2);

//----------------------------
console.log("--------------------------------------------");

var url3 = new URL("search","https://www.google.cl/");
url3.searchParams.append("q","ñandú");
console.log(url3);

//construir la url para losprimeros 100 datos del lospokemones 
//de la pokea

var url4 = new URL("pokemon","https://pokeapi.co/api/v2/");
url4.searchParams.append("limit","100");
url4.searchParams.append("offset","0");
console.log(url4);
console.log("//-----------------------------------------------------------//")
//has 
console.log(url4.searchParams.get("limit"));
console.log(url4.searchParams.has("offset"));
console.log(url4.searchParams.has("name"));
//-----------------------------------------------------
//creamos el objeto request

var request = new XMLHttpRequest();
//agregamos un evento
request.addEventListener("load",function(){
    console.log("listo");
    console.log("status: "+request.status);
    console.log("statustext"+request.statusText);
    console.log("respuesta:  "+request.response);
});
//implementar un evento para cuando cambie el estado de la request
request.onreadystatechange=function(){
    if(request.readyState==3){
        console.log("loading");
    }else if(request.readyState==4){
        console.log("finalizado");
        console.log(request.response);
    }
}
//inicializamos
request.open("GET","https://pokeapi.co/api/v2/pokemon/25",true);
//ejecutar
request.send();

//creamos la rquest2
var request2 = new XMLHttpRequest();

request2.open("PUT","https://reqres.in/api/users/2",true);
//agregar header
request2.setRequestHeader("Content-type","application/json");
//agreagra evento para cuando la respuesa llegue

request2.addEventListener("load",function(){
    console.log(request2.status);
    console.log(request2.response);
});
//generar datos

var usuario = {
    id:2,
    name:"deniss",
    job:"profesor",
    email:"achinx@gmail.com"
}
//enviar
request2.send(JSON.stringify(usuario));

//insertar usuario en reqres

var request3 = new XMLHttpRequest();

request3.open("POST","https://reqres.in/api/users/2",true);
//agregar header
request3.setRequestHeader("Content-type","application/json");
//agreagra evento para cuando la respuesa llegue

request3.addEventListener("load",function(){
    console.log(request3.status);
    console.log(request3.response);
});
//generar datos

var usuario2 = {
    name:"guillermo malaga",
    job:"alumno",
    email:"guillermo@gmail.com"
}
//enviar
request3.send(JSON.stringify(usuario2));
//lo mismop pero con fetch

async function inserUsuario(){

}

//------------formularios
var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("enviando formulario");
    // obtener todos los datos del fomulario ed u sola vez
    let datos  = new FormData(formulario);
    let r = new XMLHttpRequest();
    r.open("POST","https://reqres.in/api/users/2",true);
    //agregar header
    r.setRequestHeader("Content-type","application/json");
    //agreagra evento para cuando la respuesa llegue

    r.addEventListener("load",function(){
        console.log(r.status);
        console.log(r.response);
    });
    r.send(JSON.stringify(datos));
})





