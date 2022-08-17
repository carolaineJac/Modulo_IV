//clase para realizar ejercicios echos en postman
const urlbase="https://reqres.in/api/";
async function leerUsuarioOri(){
    let respuesta = await fetch("https://reqres.in/api/users/2");
    console.log(respuesta);
    let datos = await respuesta.json();
    console.log(datos);
}
//leerUsuario();
async function leerUsuario(id){
    let urlfinal=urlbase+"users/"+id;
    let respuesta = await fetch(urlfinal);
    if(respuesta.ok){
        console.log(respuesta);
        let datos = await respuesta.json();
        console.log(datos);
    }else{
        console.log("Datos no encontrados");
    }


}
//leerUsuario(1);
//relizar una funcion que traiga un recuros unico segun su id
async function recursoUnico(id){
    let urlfinal=urlbase+"unknown/"+id;
    let respuesta = await fetch(urlfinal);
    if(respuesta.ok){
        console.log(respuesta);
        let datos = await respuesta.json();
        console.log(datos);
    }else{
        console.log("Datos no encontrados");
    }
}
console.log("-------------------------------")
//recursoUnico(2);

//-------------------------------------------------
let usuario1={
    name:"Guillermo Malaga",
    job:"profesor"
}
async function crearUsuario(usuario){
    let urlFinal=urlbase+"users/";//crear la ruta
    let respuesta=await fetch(urlFinal,{
        method:"POST",
        header:{"content-type":"application/json"},
        body:JSON.stringify(usuario)
    });
    let datos = await respuesta.json();
    console.log(datos);
}
crearUsuario(usuario1);

//1.- actualizar un usuario(put patch)
//2.- eliminar un usuario