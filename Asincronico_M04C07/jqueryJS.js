
$(document).ready(function(){
    //la funcion $ es similar a document.querrySelector
    $("h1").text("con jquery");
    let parrafo = $("p");
    console.log(parrafo);
    console.log(parrafo.text());
    parrafo.text("texto cambiuado");
    parrafo.text("texto cambiuado  2");
    $("#segundo p").text("texto segundo parrafo");
    $("#titulo2").css("color","red");

    $("#titulo2").click(function(){
        $("#titulo2").css("color","green");
    })

    //seleccionar l alista lu
    $("#lista").css("color","violet");
    //cambio el color de fondo solo a los hijos
    $("#lista").children().css("background-color","black");
    //cambiatr el color de fondo de todo lo que esta al interior del segundo parrafo
    $("#segundo").children().css("background-color","black");
    //cambiar el color delo elementos impares de la lista
    $("li").odd().css("background-color","blue");
    $("li:odd").css("background-color","yellow");
    //---------------------------------------------------------------
    //CRACION DE ELEMENTOS 
    //EJEMPLOS CLONAR EL PRIMER ELEMENTO DE LA LISTA
    let nuevoElemento = $("<p>nuevo elemento</p>");
    $("#segundo").append(nuevoElemento);
    //es equivalente a 
    $("<p>nuevo elemnto 2</p>").appendTo("#segundo");
    //desafio
    //crear un tercer div con titulo y parrafo
    //y agregarlodespus del segundo y antes de lalista
    $("<div id='tercero'><h1>Titulo 3</h1><p>tercer parrafo</p></div>").insertAfter("#segundo");
    //elimniar elementos
    //vaciar la lista
    //$("ul").empty(); //descomentar para ver el resultado


    //EVENTOS
    //METODO 1 PARA EL MOUSEENTER
    $("#segundo").mouseenter(function(){
        $("#segundo").css("background-color","red");
    })
    //metodo 2 con bind
    function cambiarFondoSalir(){
        $("#segundo").css("background-color","white");
        $("#segundo").css("color","blue");
    }
    

})