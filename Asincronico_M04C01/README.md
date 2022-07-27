Ejercicio M04 C01
Aplicaciones web - Ejercicio asincrónico 02
Hoy comenzará a realizar un proyecto que será trabajado durante varios días.
Deberá realizarlo de manera individual, ojo, esto no quiere decir que no pueda
trabajar en grupo para la resolución de dudas y consultas. A lo que nos referimos es
que su proyecto deberá estar realizado con código puramente suyo.
Con respecto al proyecto, utilizará todos los conceptos aprendidos hasta el
momento a través de una lista de tareas (To do List).
Primero realizará un HTML, luego dará estilos con su CSS y escribirá la lógica de la
mano de JavaScript. Comencemos…
Generar la estructura:
En esta sección armará la estructura de su lista de tareas. Para que se de una idea,
su proyecto debería verse así:
Paso a paso:
1. Cree un documento HTML con su estructura básica y vincula con una hoja de
estilos y un archivo JavaScript.
2. Dentro del <body> agregá los siguientes elementos:
● Un título con el texto: "COSAS PARA HACER".
● Un primer <div> con class="input-div" que contenga:
○ Un input de tipo "text" con class="input".
○ Un atributo placeholder con el valor "Tarea a agregar".
○ Un button con class="boton-agregar" y el ícono "➕".
● Un segundo <div> con class="container" que contenga:
○ Un <div> con class="item".
■ Un input de tipo "text" con class="item-input"y atributo
disabled.
○ Un button con class="boton-editar" y el ícono "🔒" (candado).
○ Un button con class="boton-remover" y el ícono "🗑" (bote de
basura).
Importante: Dentro de cada botón insertará un ícono. Hay distintas formas de
hacerlo. A continuación, le presentaremos una.
Íconos: Para incorporar íconos dentro de su proyecto usando Font-Awesome,
ingrese la siguiente etiqueta antes de cerrar el <body> de su sitio:
<script src="https://kit.fontawesome.com/ba0ece2d64.js"></script>
Por ejemplo, para asociar su button con class="boton-agregar" al ícono "➕",
agregue el siguiente tag:
<i class="fas fa-plus"></i>
Ahora, asocie el resto de los botones con sus íconos.
Por último, asigne un valor al input de tipo "text" con class="item-input"
(por ejemplo, "Regar las plantas"). Servirá de prueba para ver cómo queda su
lista de tareas.
Antes de pasar a la siguiente sección, le recomendamos dos cosas más:
● Asigne un valor al input de tipo "text" con class="item-input" (por
ejemplo, "Regar las plantas"). Servirá de prueba para ver cómo queda tu lista
de tareas.
● Luego de esto, comente todo el código que se encuentra dentro del <div>
con class="container". Para generar ese input y los dos botones, va a
interactuar con el DOM.
