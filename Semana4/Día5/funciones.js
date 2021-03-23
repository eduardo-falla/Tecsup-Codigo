
//var parrafo = document.getElementById("resultado")

function raices(a, b, c) {
    let r1;
    let r2;
    r1 = (-b + (((b ^ 2) - (4 * a * c)) ^ (1 / 2))) / (a * 2);
    r2 = (-b - (((b ^ 2) - (4 * a * c)) ^ (1 / 2))) / (a * 2);
    return r1, r2;
}
;
//parrafo.textContent = raices(2, 8, 3)
//console.log(raices(2, 8, 3))

z=raices(2,4,5);

/*
Resumen:
______________________________________________________________________
-Funciones anónimas ||||||||||||||||||||||||||||||||||||||||||||||||||
----------------------------------------------------------------------   
¿Cuando usar?
    Queremos pasar como parámetro una función muy sencilla y definirla a parte seria cuanto menos innecesario. Esto puede darse por ejemplo cuando pasamos una función de comparación a una de ordenación o cuando usamos librerías como jQuery (muchos de sus métodos aceptan paso de funciones).
    Intentamos evitar a toda costa el uso de variables globales. Aunque este caso puede evitarse organizando el código de muchas formas, englobar el “main” de nuestro programa en una función anónima nos evita dejar esas tres o cuatro variables que necesitamos para que todo empiece a andar flotando en la memoria encapsulándolas dentro de la función.

        function name_funtion(par1 par2){instrucciones} //funcion normal ;
        var funcionAnonima  = function (par1 par2){instrucciones}; // funcion anonima
LINKS:
https://www.youtube.com/watch?v=GstPXAffmmI



______________________________________________________________________
-Funciones flecha|||||||||||||||||||||||||||||||||||||||||||||||||||||
----------------------------------------------------------------------
    Las funciones flecha son siempre anónimas. Estamos utilizando una estructura declarativa donde asignamos la función a una variable. Eso nos permite su reutilación, pero por definición, estas funciones son anónimas.
    La sintaxis es mucho más limpia y simple. Superado el shock inicial de su estructura, rápidamente nos acostumbramos y la forma tradicional comienza a parecer verborreica.


    var mifuncionflecha = ( par1 par2) => par1+par2;
        Una instrucción no necesita return ni llaves

    var mifuncionflecha= par1 => "par1";
        Un solo parametro no necesita "()"

    var mifuncionflecha= (...args)=> args;
        Se puede usar ...args para entrada no definida de datos

    var mifuncionflecha=()=> "hello world";


LINKS:
http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/


_______________________________________________________________
Clousures |||||||||||||||||||||||||||||||||||||||||||||||||||||
---------------------------------------------------------------    
Funciones dentro de otras funciones

    function count(){
        var a;
        function add(){
            console.log("a") // la funcion hija puede tener acceso a la las variables dentro de la funcion padre.
        }
    }

    function fuerade(x) {
    function dentro(y) {
    return x + y;
    }
    return dentro;
    }
    resultado = fuerade(3)(5); // retorna 8

LINKS:
https://www.freecodecamp.org/espanol/news/que-es-un-closure-en-javascript/
https://www.youtube.com/watch?v=w_ulLyoRdRQ

____________________________________________________________________    
Funciones Anidadas |||||||||||||||||||||||||||||||||||||||||||||||||
--------------------------------------------------------------------

    La función interna se puede acceder sólo a partir de sentencias en la función externa.
    La función interna forma un cierre: la función interna puede utilizar los argumentos y las variables de la función externa, mientras que la función externa no puede utilizar los argumentos y las variables de la función interna.

    function addCuadrado(a,b) {
    function cuadrado(x) {
        return x * x;
    }
    return cuadrado(a) + cuadrado(b);
    }
    a = addCuadrado(2,3); // retorna 13
    b = addCuadrado(3,4); // retorna 25
    c = addCuadrado(4,5); // retorna 41

____________________________________________________________________
-Funciones  Callbacks ||||||||||||||||||||||||||||||||||||||||||||||
--------------------------------------------------------------------
    Un callback es una funcion que es utilizada en otra funcion como parametro.


    function mostrar1(){
        SetTimeOut(function(){console.log("hola1")},1000);}
    function mostrar2(){
        console.log("hola2")
    }
    mostrar1()
    mostrar2()
    Si se ejecuta el codigo previo primero mostrar hola2 y luego hola1.
    Para solucinar esto debemos convertir en callback la funcion "mostrar2", esto de la siguiente manera:

    function mostrar1(fn){
        SetTimeOut(function(){console.log("hola1");fn;},1000);}
    function mostrar2(){
        console.log("hola2");
    }
    mostrar1(mostrar2)

LINKS:
https://www.youtube.com/watch?v=DaXuPcdKqQ4&t=189s 

    

___________________________________________________________________
Recursividad ||||||||||||||||||||||||||||||||||||||||||||||||||||||
-------------------------------------------------------------------
Sirve para resolver ciertos problemas de manera elegante y eficiente.

El ejemplo típico sería el recorrer un árbol de elementos para hacer algo con todos ellos. Imagínate un sistema de archivos con carpetas y subcarpetas y archivos dentro de estas carpetas, o el árbol de elementos (DOM) de una página web donde unos elementos incluyen a su vez otros y no sabes cuántos hay en cada uno. En este tipo de situaciones la manera más eficiente de hacer una función que recorra todos los elementos es mediante recursión. Es decir, creas una función que recorra todos los elementos hijo del nodo que le pases y que se llame a sí misma para hacer lo mismo con los sub-nodos que haya. En el caso del sistema de archivos le pasarías una carpeta y se llamaría a sí misma por cada subcarpeta que hubiese, y así sucesivamente con todas las demás. Con una sola llamada inicial recorrerá automáticamente toda la estructura del sistema de archivos.

function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
}
____
 vs
----
function factorial(n){
  var res = 1;
  for(var i=n; i>=1; i--){
    res = res * i;
  }
  return res;
}

Links: https://www.campusmvp.es/recursos/post/Que-es-la-recursividad-o-recursion-Un-ejemplo-con-JavaScript.aspx


*/




/* console.log
getElementById
setInterval
SetTimeOut
textoContent
etc,etc, */