
var parrafo = document.getElementById("prr")
let arreglo=["a","e","i","o","u"];
let text="";
let gaa=0;
/* -------
FORMA 1
---------- */
function imprime(){
        
        if(gaa<arreglo.length-1){gaa=gaa+1}
        else if(gaa==arreglo.length-1){
            gaa=0;
            parrafo.textContent=""
        }               
        parrafo.textContent += arreglo[gaa]
    }
    var siid=setInterval(imprime,1000);
/* -------
FORMA 2
---------- */

/* for (let index = 0; index < arreglo.length; index++) {
    setTimeout(function () { console.log(arreglo[index]) }, 2000 * index);
}
 */

/* -------
OTROS
---------- */

/* for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 || i % 7 == 0 || i % 5 == 0) {
        console.log(i);
    }
}



let s = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        s = s + i;
        console.log(i);
        console.log(s);
    }
} */


