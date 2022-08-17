var palabra = "Hola que tal";
if(palabra[0]=="a" || palabra[0]=="A"){
    console.log("Ok");
}else{
    console.log("No");
}
//ES6
let palabraMay=palabra.toUpperCase();
console.log(palabraMay);

if(palabra.toUpperCase().startsWith("A")){
    console.log("Ok");
}else{
    console.log("No");
}

//convierte en mayusculas la palabra original
palabra = palabra.toUpperCase();
//this hace referencia a valores o funciones dentro del mismo objeto
function ejecutar(){
    console.log("fuera");
}

var objeto={
    ejecutar:function(){
        console.log("dentro");
    },
    comprobar:function(){
        this.ejecutar();
    }
}

objeto.comprobar();

//---------------------------------------funcioes flecha
//funcion tradicional
function escribir(texto){
    console.log(texto);
}
//funcion flecha
var f=texto=>console.log(texto);

f("hola");

function saludar(){
    console.log("hola como estas");
}
saludar();

f=()=> console.log("hola cxomo estas");

//ejemplo4

function mostrarPersona(nombre,apellido){
    console.log(nombre+":"+apellido);
}

let m=(n,a)=>console.log(n+":"+a);
m("alejandra","ruiz");

//construccion de una funcion flecha

//(par1,par2,....)=>{intrucion1,instrucion2}

//ejemplo 

var notas = [6.5,5.4,3.0,7.0,6.9];
//mostrar los elementos en pantalla

for (let index = 0; index < notas.length; index++) {
    console.log(notas[index]);
    
}
//la otra forma con la funcion map
console.log("---------------------------------------------");
notas.map(n=>console.log(n));
console.log("---------------------------------------------");
//supongams que quierop subirle dos decias a cada nota en el array
notas.map(n=>console.log(n+0.2));
console.log("----------------------------------");
//el operadofr de propagacion Spread
function concatenar(a,b,c){
    console.log(a+":"+b+":"+c);
}
var palabras=["hola","que","tal"];

concatenar(palabras[0],palabras[1],palabras[2]);

//version ES6
concatenar(...palabras);

//ejercicio: concatenar o unir los soguientes arreglos
var arregloA=["a","b","c"];
var arregloB=["d","e","f"];

for(i=0;i<arregloB.length;i++){
    arregloA.push(arregloB[i]);
}
console.log(arregloA);
console.log("----------------------------------");
///solucion avanzada
arregloB.map(e=>arregloA.push(e));
console.log(arregloA);
console.log("----------------------------------");
//solucion profecional
arregloA.push(...arregloB);
console.log(arregloA);
console.log("----------------------------------");
//---------------------------
//desetructuracion
const frutas=["pera","manzana","limon","naranja"];
let fruta1=frutas[0];
let fruta2=frutas[1];
let fruta3=frutas[2];
let fruta4=frutas[3];
//con la version ES6

let [fruta11,fruta22,fruta33,fruta44]=frutas;
console.log(fruta11);

