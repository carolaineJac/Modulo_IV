 //creando la clase item
 class item{
     constructor(nuevaTarea){
         this.createDiv(nuevaTarea);
     }
     createDiv=function(tarea){
        //aqui va el codigo que agrag la nueva tarea 
        let btnEditar=document.createElement("button");
        btnEditar.className="boton-editar";
        btnEditar.innerHTML="<i class='fa fa-edit'></i>";
        btnEditar.addEventListener("click",function(){
            this.previousSibling.disabled=false;
        });
        console.log(btnEditar.innerHTML);
        let btnRemover = document.createElement("button");
        btnRemover.className="boton-remover";
        btnRemover.innerHTML="<i class='fa fa-trash'></i>";
        btnRemover.addEventListener("click",function(){
            this.parentNode.remove();
        });
        console.log(btnRemover.innerHTML);
        let nuevoDiv = document.createElement("div");
        nuevoDiv.className="item";
        console.log(nuevoDiv);
        let input=document.createElement("input");
        input.type = "text";
        input.value=tarea;
        input.className = "item-input";
        input.disabled=true;
        console.log(input);
        nuevoDiv.appendChild(input);
        nuevoDiv.appendChild(btnEditar);
        nuevoDiv.appendChild(btnRemover);
        containerDiv.appendChild(nuevoDiv);

    }
 }
var containerDiv=document.querySelector(".container");
 //var it = new item("cocinarlavar");
 var textoTarea = document.querySelector(".input");
 var btnAgregar = document.querySelector(".boton-agregar");
 btnAgregar.addEventListener("click",function(){
    console.log("click en botn agregar");
    if(textoTarea.value){
        new item(textoTarea.value);
        textoTarea.value="";
    }else{
        alert("Debe agrear tarea");
    }
 });
 