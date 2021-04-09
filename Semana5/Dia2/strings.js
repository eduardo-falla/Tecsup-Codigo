/* Dada una entrada de texto, crear un objeto con propiedades de cada
tipo de carater de  la entrada */
let entrada ="3572844";             //Entrada de texto
//entrada= entrada.replace(/\s+/g, ''); //quito los espacios vacios
console.log(`Mi entrada : ${entrada}`)

miarray=entrada.split(""); //convierto mis string a un array de carateres 
console.log((`Mi array: ${miarray}`))

let filtrados =new Object; //creo mi objeto recipiente 
let propiedades=Object.keys(filtrados) //listo las propiedades de mi recipiente y las paso a otro array.
//console.log(propiedades)

miarray.forEach(function(corredor) {if(corredor in propiedades){console.log(`${corredor} ya esta en propiedades`)}else{
    console.log(`${corredor} no esta en propiedades,agregando...`);
    Object.defineProperty(filtrados,corredor,{value:"test", writable: true, enumerable: true, configurable:true}); 
    propiedades=Object.keys(filtrados);
}} )
//console.log(`los elementos son:${filtrados}`)
console.log(`Mis propiedades agregadas: ${propiedades}`) 














/* var myString = "Item1";

var jsObject = 
{
    Item1:
    {
        "apples": "red",
        "oranges": "orange",
    },
    Item2:
    {
        "bananas": "yellow",
        "pears": "green"
    }
};

var keys = Object.keys(jsObject);
console.log(keys) */
//Object.defineProperty(filtrados,"a",{value:"bca",writable: true, enumerable: true, configurable:true});
/* Object.defineProperty(filtrados, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
  }); */
//filtrados.a="jajaja"
//console.log(filtrados);

/* contador= function (mistring) => {
    
} */















