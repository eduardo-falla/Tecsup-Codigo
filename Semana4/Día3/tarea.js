/* objetos usados:
    document
metodos usados:
    querySelector("name_etiqueta")
    .value
    addEventListener("name_modo", funcionALlamar)
 */



const seleccionar = document.querySelector("select");
const parrafo = document.querySelector("textarea");

seleccionar.addEventListener("change", mostrar)

function mostrar() {
console.log("imprimir");
if (seleccionar.value=="1"){parrafo.textContent= "gaa1";}
else if(seleccionar.value=="2"){parrafo.textContent= "gaa2";}
else if(seleccionar.value=="3"){parrafo.textContent= "gaaa3";}
else{console.log("nada que mostrar");}    
}